<template>
    <div>
        <section class="order-section">
            <h2 class="h2-like">
                Спасибо, ваш заказ
                <!--<span class="order-number">№3548</span>-->
                в обработке
            </h2>
            <p class="text-order-manager">
                Наш менеджер свяжется с вами в ближайшее время!
            </p>
            <!--<p class="text-order-number">
                Сообщите номер вашего заказа при получении товара в кафе!
            </p>-->
            <h2 class="h2-like details-text">
                Детали вашего заказа
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
                        <span class="quantity-order">1 шт</span>
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
                Сумма заказа:
                <span class="cart-summary__price">{{ getCartTotal }} грн</span>
            </footer>
        </section>
        <section class="order-summary">
            <!-- <h2 class="h2-like">
                Номер заказа <span class="order-number">3548</span>
            </h2>-->
            <div class="order-summary__options">
                <!--<div class="option-result">
                    <span class="option">Оплата:</span>
                    <span class="payment-option chosen">При получении</span>
                </div>-->
                <div class="option-result">
                    <span class="option">Способ доставки:</span>
                    <span class="delivery-option chosen">{{
                        deliveryMethod
                    }}</span>
                </div>
                <div class="option-result">
                    <span class="option">Адрес:</span>
                    <span class="delivery-option chosen">{{
                        deliveryAddress
                    }}</span>
                </div>
            </div>
            <button class="btn btn-order" @click="onContinueShopping">
                Продолжить покупки
            </button>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { ViberClient } from 'messaging-api-viber';
import { CLEAN_STORE } from '../constants/store';

export default {
    layout: 'simple',
    computed: {
        cartItems() {
            return this.$store.state.cart;
        },
        deliveryMethod() {
            return this.$store.state.orderForm.delivery;
        },
        deliveryAddress() {
            return this.$store.state.orderForm.address;
        },
        ...mapGetters(['getCartTotal'])
    },
    async fetch({ redirect, store }) {
        if (!Object.values(store.state.cart).length) {
            redirect('/');
        } else {
            const cartItemsString = Object.values(store.state.cart).map(
                item => {
                    const { quantity, selectedOption, title } = item;
                    return `${title}${
                        selectedOption ? ' (' + selectedOption.option + ')' : ''
                    }\nКол-во: ${quantity}\n\n`;
                }
            );

            const {
                name,
                phone,
                comment,
                delivery,
                address
            } = store.state.orderForm;

            const messageString = `Заказ:\n${cartItemsString.join(
                ''
            )}\nИтого: ${
                store.getters.getCartTotal
            } грн.\n\nИмя: ${name}\nНомер тел.: ${phone}\nДоставка: ${delivery}\nАдрес: ${address}\n${
                comment ? 'Комментарий: ' + comment : ''
            }`;

            const client = ViberClient.connect({
                accessToken:
                    '4ab3498feb67d4ea-13b937d35cdef139-8f4d592ff4262b1e',
                origin: '/api/'
            });

            let info;
            try {
                info = await client.getAccountInfo();
            } catch (e) {
                console.log(e);
            }

            const members = info.members.map(member => member.id);

            await client.broadcastText(members, messageString);
        }
    },
    destroyed() {
        this.$store.commit(CLEAN_STORE);
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
