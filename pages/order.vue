<template>
    <div>
        <section class="order-section">
            <h2 class="h2-like">
                Дякуємо, ваше замовлення
                <span v-if="orderNumber" class="order-number"
                    >№{{ orderNumber }}</span
                >
                в обробці
            </h2>
            <p class="text-order-manager">
                Наш менеджер зв'яжеться з вами найближчим часом!
            </p>
            <p
                v-if="orderNumber && deliveryMethod === 'Самовывоз'"
                class="text-order-number"
            >
                Повідомте номер вашого замовлення під час отримання товару в
                кафе!
            </p>
            <h2 class="h2-like details-text">
                Деталі вашого замовлення
            </h2>
            <ul class="cart-list">
                <li
                    v-for="(cartItem, cartItemId) in cartItems"
                    :key="cartItemId"
                    class="cart-item"
                >
                    <div class="cart-item__image-container">
                        <img
                            :src="getImagePath(cartItem.imgFile)"
                            alt="product-mini"
                            class="product-icon"
                        />
                    </div>
                    <div class="cart-item__details-container">
                        <div class="cart-item__title-container">
                            <h5 class="h5-like">{{ cartItem.title }}</h5>
                            <span
                                v-if="cartItem.selectedOption"
                                class="cart-item__flavour"
                                >{{
                                    cartItem.selectedOption.name +
                                        ' ' +
                                        cartItem.selectedOption.option
                                }}</span
                            >
                        </div>
                        <span class="quantity-order"
                            >{{ cartItem.quantity }} шт.
                        </span>
                        <div class="cart-item__price-container">
                            <span class="cart-item__price-text"
                                >{{
                                    cartItem.price * cartItem.quantity
                                }}
                                грн</span
                            >
                        </div>
                    </div>
                </li>
            </ul>
            <footer class="cart-summary">
                Сумма замовлення:
                <span class="cart-summary__price">{{ getCartTotal }} грн</span>
            </footer>
        </section>
        <section class="order-summary">
            <h2 v-if="orderNumber" class="h2-like">
                Номер замовлення
                <span class="order-number">№{{ orderNumber }}</span>
            </h2>
            <div class="order-summary__options">
                <!--<div class="option-result">
                    <span class="option">Оплата:</span>
                    <span class="payment-option chosen">При получении</span>
                </div>-->
                <!--<div class="option-result">
                    <span class="option">Способ доставки:</span>
                    <span class="delivery-option chosen">{{
                        deliveryMethod
                    }}</span>
                </div>-->
                <div class="option-result">
                    <span class="option">{{ deliveryText }}</span>
                    <span class="delivery-option chosen">{{
                        deliveryAddress
                    }}</span>
                </div>
            </div>
            <button class="btn btn-order" @click="onContinueShopping">
                Продовжити покупки
            </button>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from 'moment';
import { ViberClient } from 'messaging-api-viber';
import axios from 'axios';
import { CLEAN_STORE } from '../constants/store';
import { deliveryTerminals } from '../constants/iiko/deliveryTerminals';

export default {
    loading: false,
    layout: 'simple',
    head() {
        return {
            title: 'Кафе Vanil - замовлення оформлено'
        };
    },
    computed: {
        cartItems() {
            return this.$store.state.cart;
        },
        deliveryMethod() {
            return this.$store.state.orderForm.delivery;
        },
        deliveryText() {
            return this.deliveryMethod === 'Самовывоз'
                ? 'Адреса:'
                : 'Відділення НП і місто:';
        },
        deliveryAddress() {
            let deliveryAddress = '';
            if (this.$store.state.orderForm.delivery === 'Самовывоз') {
                deliveryAddress =
                    deliveryTerminals[this.$store.state.orderForm.address]
                        .title;
            } else {
                deliveryAddress = this.$store.state.orderForm.address;
            }
            return deliveryAddress;
        },
        ...mapGetters(['getCartTotal'])
    },
    async asyncData({ redirect, store }) {
        if (!Object.values(store.state.cart).length) {
            redirect('/');
        } else {
            const instance = axios.create({
                baseURL: '/iiko/'
            });
            const {
                data: { token: accessToken }
            } = await instance.post('/access_token', {
                apiLogin: 'f7cb05e0-29e'
            });

            const items = Object.values(store.state.cart).map(item => ({
                productId: item.iikoId,
                amount: item.quantity,
                type: 'Product'
            }));

            const userComment = store.state.orderForm.comment
                ? `Комментарий заказчика: ${store.state.orderForm.comment}`
                : '';
            const sourceComment = store.state.leadSource
                ? `Источник лида: ${store.state.leadSource}\n`
                : '';
            let deliveryAddress = '';
            if (store.state.orderForm.delivery === 'Самовывоз') {
                deliveryAddress =
                    deliveryTerminals[store.state.orderForm.address].title;
            } else {
                deliveryAddress = store.state.orderForm.address;
            }
            const comment = `Адрес доставки: ${deliveryAddress}\n${sourceComment}${userComment}`;

            let deliveryHistory;
            try {
                deliveryHistory = await instance.post(
                    `/loyalty/iiko/customer/info`,
                    {
                        phone: store.state.orderForm.phone,
                        type: 'phone',
                        organizationId: 'd58a4c3e-e21f-460b-a070-8b296fe644a1'
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`
                        }
                    }
                );
            } catch (e) {
                deliveryHistory = null;
            }

            let customer;
            if (deliveryHistory) {
                const fetchedCustomer = deliveryHistory.data;
                customer = {
                    id: fetchedCustomer.id,
                    name: fetchedCustomer.name,
                    type: 'regular'
                };
            } else {
                customer = {
                    name: store.state.orderForm.name,
                    type: 'one-time'
                };
            }

            // console.log(customer);

            let deliveryTerminalId = '';
            if (store.state.orderForm.delivery === 'Самовывоз') {
                deliveryTerminalId =
                    deliveryTerminals[store.state.orderForm.address].iikoId;
            } else {
                deliveryTerminalId = deliveryTerminals.osipova.iikoId;
            }

            const orderRequest = {
                organizationId: 'd58a4c3e-e21f-460b-a070-8b296fe644a1',
                terminalGroupId: deliveryTerminalId,
                createOrderSettings: {
                    transportToFrontTimeout: 10
                },
                order: {
                    orderTypeId: '5b1508f9-fe5b-d6af-cb8d-043af587d5c2',
                    completeBefore:
                        moment(store.state.orderForm.date).format(
                            'YYYY-MM-DD'
                        ) + ' 12:00:00.000',
                    phone: store.state.orderForm.phone,
                    comment,
                    customer,
                    items
                }
            };

            // console.log(orderRequest);
            let result;
            let failedAddToIiko;
            try {
                result = await instance.post(
                    `/deliveries/create`,
                    orderRequest,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`
                        }
                    }
                );
            } catch (e) {
                failedAddToIiko = {
                    message:
                        e?.response?.data?.message ||
                        e?.response?.statusText ||
                        e.message,
                    httpStatusCode:
                        e.response?.data?.httpStatusCode || e?.response?.status
                };
                result = null;
            }

            let failedAddText = '';
            if (failedAddToIiko) {
                failedAddText = `\n\nКод ошибки: ${failedAddToIiko.httpStatusCode}\nТекст ошибки: ${failedAddToIiko.message}`;
            }

            const cartItemsString = Object.values(store.state.cart).map(
                item => {
                    const { quantity, selectedOption, title } = item;
                    return `${title}${
                        selectedOption ? ' (' + selectedOption.option + ')' : ''
                    }\nКол-во: ${quantity}\n\n`;
                }
            );

            const deliveryTextString =
                store.state.orderForm.delivery === 'Самовывоз'
                    ? `Адрес Кафе (самовывоз): ${deliveryAddress}`
                    : `Отделение НП, город: ${deliveryAddress}`;

            {
                const { name, phone, date, comment } = store.state.orderForm;

                const messageString = `Заказ:\n${cartItemsString.join(
                    ''
                )}\nИтого: ${
                    store.getters.getCartTotal
                } грн.\n\nНомер заказа: ${
                    result
                        ? result.data.number
                        : 'Заказ не дошел в iiko, необходимо обработать вручную'
                }\nИмя: ${name}\nНомер тел.: ${phone}\nДата: ${moment(
                    date
                ).format(
                    'DD.MM.YYYY'
                )}\n${deliveryTextString}\n${sourceComment}${
                    comment ? 'Комментарий: ' + comment : ''
                }${failedAddText}`;

                const client = ViberClient.connect({
                    accessToken:
                        '4ab3498feb67d4ea-13b937d35cdef139-8f4d592ff4262b1e',
                    origin: '/api/'
                });

                let info;
                try {
                    info = await client.getAccountInfo();
                } catch (e) {}

                const members = info.members.map(member => member.id);

                await client.broadcastText(members, messageString);
            }

            return { orderNumber: result ? result.data.number : null };
        }
    },
    mounted() {
        this.$nuxt.$loading.finish();
    },
    beforeRouteLeave(to, from, next) {
        this.$store.commit(CLEAN_STORE);
        next();
    },
    methods: {
        getImagePath(imgName) {
            return require(`~/assets/image/products/${imgName}`);
        },
        onContinueShopping() {
            this.$router.push('/');
        }
    }
};
</script>

<style lang="scss" scoped>
.text-order-manager {
    color: $text-color-brown;
    font-weight: 600;
    margin-top: 24px;
    font-size: 14px;
}
.text-order-number {
    margin-top: 24px;
    font-size: 18px;
    font-weight: bold;
    @include max-breakpoint(tablet-portrait) {
        font-size: 14px;
    }
}
.details-text {
    margin-top: 48px;
}

.order-summary {
    margin-top: 48px;
    &__options {
        margin-top: 32px;
        flex-direction: column;
        font-family: Montserrat, sans-serif;
        font-size: 14px;
        font-weight: 600;
    }
}
.option {
    width: 190px;
    display: block;
    @include max-breakpoint(mobile-medium) {
        width: 50%;
        flex-shrink: 0;
    }
}
.chosen {
    display: inline-block;
    max-width: 253px;
    @include max-breakpoint(mobile-medium) {
        width: 50%;
    }
}
.option-result {
    margin-top: 16px;
    width: 100%;
    display: flex;
}
.quantity-order {
    display: block;
    flex-shrink: 0;
    font-weight: 600;
    @include max-breakpoint(mobile-medium) {
        order: 3;
        margin-left: 10px;
        font-size: 12px;
    }
}
</style>
