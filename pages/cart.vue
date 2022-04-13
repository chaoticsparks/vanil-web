<template>
    <div>
        <section class="cart-section">
            <h2 class="h2-like">
                Кошик
            </h2>
            <ul class="cart-list">
                <CartItem
                    v-for="(cartItem, cartItemId) in cartItems"
                    :key="cartItemId"
                    :cart-item="cartItem"
                    :cart-item-id="cartItemId"
                    @changeQuantity="onChangeQuantity"
                    @removeItemFromCart="onRemoveItemFromCart"
                />
            </ul>
            <footer class="cart-summary">
                <div class="cart-summary__total">
                    Сума замовлення:
                    <span class="cart-summary__price"
                        >{{ getCartTotal }} грн</span
                    >
                </div>
                <div class="cart-summary__no-discount">
                    Усі види знижок на святкову продукцію не дійсні
                </div>
            </footer>
        </section>
        <section class="cart-order">
            <h2 class="h2-like">
                Оформлення замовлення
            </h2>
            <form class="cart-form">
                <input
                    v-model="name"
                    type="text"
                    placeholder="Ім'я *"
                    class="cart-form__name form-default"
                    :class="{ 'cart-form-error': formErrors.name && !name }"
                />
                <input
                    v-model="phone"
                    v-mask="'+38 (###) ###-##-##'"
                    type="text"
                    placeholder="Номер телефону *"
                    class="cart-form__phone form-default"
                    :class="{
                        'cart-form-error':
                            (formErrors.phone && !phone) ||
                            (formErrors.phoneTooShort && phone.length < 19)
                    }"
                />
                <client-only>
                    <datepicker
                        v-model="date"
                        :input-class="
                            `${formErrors.date &&
                                !date &&
                                'cart-form-error'} cart-form__date form-default`
                        "
                        :language="ru"
                        :placeholder="'Дата отримання *'"
                        :disabled-dates="disabledDates"
                    />
                </client-only>
                <textarea
                    v-model="comment"
                    class="cart-form__comment form-default"
                    cols="30"
                    rows="10"
                    placeholder="Коментар"
                ></textarea>
                <div class="cart-form__delivery-text">
                    <span>Звідки Ви бажаєте забрати замовлення?</span>
                </div>
                <label class="radio-container">
                    <input
                        v-model="delivery"
                        type="radio"
                        value="Самовывоз"
                        name="delivery"
                        class="radio-container__input"
                    />
                    <span class="radio-container__text">Самовивіз</span>
                    <span class="radio-container__custom-radio"></span>
                </label>
                <div
                    v-if="delivery === 'Самовывоз'"
                    class="cart-form__self-delivery"
                >
                    <!--
                    <label class="radio-container">
                        <input
                            v-model="address"
                            type="radio"
                            value="primorskiy"
                            name="address_vanil"
                            class="radio-container__input"
                        />
                        <span class="radio-container__text"
                            >ул. Приморский бульвар, 10</span
                        >
                        <span class="radio-container__custom-radio"></span>
                    </label>-->
                    <label class="radio-container">
                        <input
                            v-model="address"
                            type="radio"
                            value="osipova"
                            name="address_vanil"
                            class="radio-container__input"
                        />
                        <span class="radio-container__text"
                            >вул. Осипова, 10</span
                        >
                        <span class="radio-container__custom-radio"></span>
                    </label>
                    <label class="radio-container">
                        <input
                            v-model="address"
                            type="radio"
                            value="genPetrova"
                            name="address_vanil"
                            class="radio-container__input"
                        />
                        <span class="radio-container__text"
                            >вул. Генерала Петрова, 31/1</span
                        >
                        <span class="radio-container__custom-radio"></span>
                    </label>
                    <label class="radio-container">
                        <input
                            v-model="address"
                            type="radio"
                            value="korolova"
                            name="address_vanil"
                            class="radio-container__input"
                        />
                        <span class="radio-container__text"
                            >вул. Корольова 18</span
                        >
                        <span class="radio-container__custom-radio"></span>
                    </label>
                </div>
                <label class="radio-container">
                    <input
                        v-model="delivery"
                        type="radio"
                        value="Новая Почта"
                        name="delivery"
                        class="radio-container__input"
                    />
                    <span class="radio-container__text"
                        >Новою Поштою по Україні</span
                    >
                    <span class="radio-container__custom-radio"></span>
                </label>
                <input
                    v-if="delivery === 'Новая Почта'"
                    v-model="address"
                    type="text"
                    placeholder="Відділення НП та місто"
                    class="cart-form__address form-default"
                    :class="{
                        'cart-form-error': formErrors.address && !address
                    }"
                />
                <!--<div class="cart-form__payment-text"><span>Оплата</span></div>
                <label class="radio-container">
                    <input
                        type="radio"
                        value="Онлайн оплата (Интеркасса)"
                        name="delivery"
                        class="radio-container__input"
                    />
                    <span class="radio-container__text"
                        >Онлайн оплата (Интеркасса)</span
                    >
                    <span class="radio-container__custom-radio"></span>
                </label>
                <label class="radio-container">
                    <input
                        type="radio"
                        value="Оплата при получении"
                        name="delivery"
                        class="radio-container__input"
                    />
                    <span class="radio-container__text"
                        >Оплата при получении</span
                    >
                    <span class="radio-container__custom-radio"></span>
                </label>-->
                <p
                    v-if="errorText"
                    class="cart-form__errors"
                    v-html="errorText"
                ></p>
                <div class="actions">
                    <button
                        class="btn btn-order continue-shopping"
                        @click.prevent="onContinueShopping"
                    >
                        Продовжити покупки
                    </button>
                    <button class="btn btn-order" @click.prevent="submitForm">
                        Оформити замовлення
                    </button>
                </div>
            </form>
        </section>
    </div>
</template>

<script>
import { ru } from 'vuejs-datepicker/dist/locale';
import { mapGetters, mapMutations } from 'vuex';
import { mask } from 'vue-the-mask';
import CartItem from '../components/CartItem';
import {
    UPDATE_PRODUCT_QTY,
    REMOVE_PRODUCT_FROM_CART,
    UPDATE_ORDER_FORM_FIELD
} from '../constants/store';

export default {
    directives: { mask },
    components: {
        CartItem
    },
    head() {
        return {
            title: 'Кафе Vanil - кошик'
        };
    },
    layout: 'simple',
    data() {
        return {
            ru,
            disabledDates: {
                to: new Date(new Date().setDate(new Date().getDate() - 1))
            }
        };
    },
    computed: {
        cartItems() {
            return this.$store.state.cart;
        },
        formErrors() {
            return this.$store.state.orderFormErrors;
        },
        errorText() {
            const errorText = [];
            if (this.formErrors.name) {
                errorText.push('Пожалуйста, укажите Ваше имя!');
            }
            if (this.formErrors.phone) {
                errorText.push('Пожалуйста, укажите Ваш номер телефона!');
            } else if (this.formErrors.phoneTooShort) {
                errorText.push('Пожалуйста, укажите номер телефона полностью!');
            }
            if (this.formErrors.delivery) {
                errorText.push('Пожалуйста, выберите способ доставки!');
            } else if (this.formErrors.date) {
                errorText.push('Пожалуйста, укажите дату получения заказа!');
            }
            if (!this.formErrors.delivery && this.formErrors.address) {
                errorText.push('Пожалуйста, укажите адрес доставки!');
            }
            return errorText.join('<br>');
        },
        name: {
            get() {
                return this.$store.state.orderForm.name;
            },
            set(value) {
                this.updateOrderFormField({
                    name: 'name',
                    value
                });
            }
        },
        phone: {
            get() {
                return this.$store.state.orderForm.phone;
            },
            set(value) {
                this.updateOrderFormField({
                    name: 'phone',
                    value
                });
            }
        },
        date: {
            get() {
                return this.$store.state.orderForm.date;
            },
            set(value) {
                this.updateOrderFormField({
                    name: 'date',
                    value
                });
            }
        },
        comment: {
            get() {
                return this.$store.state.orderForm.comment;
            },
            set(value) {
                this.updateOrderFormField({
                    name: 'comment',
                    value
                });
            }
        },
        delivery: {
            get() {
                return this.$store.state.orderForm.delivery;
            },
            set(value) {
                this.updateOrderFormField({
                    name: 'delivery',
                    value
                });
            }
        },
        address: {
            get() {
                return this.$store.state.orderForm.address;
            },
            set(value) {
                this.updateOrderFormField({
                    name: 'address',
                    value
                });
            }
        },
        ...mapGetters(['getCartTotal'])
    },
    fetch({ redirect, store }) {
        if (!Object.values(store.state.cart).length) {
            redirect('/');
        }
    },
    methods: {
        onChangeQuantity(payload) {
            this.updateQuantity(payload);
        },
        submitForm() {
            this.$store.dispatch('submitForm');
        },
        onRemoveItemFromCart(cartProductId) {
            if (Object.values(this.cartItems).length === 1) {
                this.$router.push('/');
            }
            this.$store.commit(REMOVE_PRODUCT_FROM_CART, cartProductId);
        },
        onContinueShopping() {
            this.$router.push('/');
        },
        ...mapMutations({
            updateQuantity: UPDATE_PRODUCT_QTY,
            updateOrderFormField: UPDATE_ORDER_FORM_FIELD
        })
    }
};
</script>

<style lang="scss" scoped>
.cart-section {
    margin-top: 64px;
    @include max-breakpoint(mobile-medium) {
        margin-top: 19px;
    }
}
.cart-order {
    margin-top: 64px;
    @include max-breakpoint(mobile-medium) {
        margin-top: 28px;
    }
}
.cart-form {
    margin-top: 32px;
    display: flex;
    flex-wrap: wrap;
    @include max-breakpoint(mobile-medium) {
        margin-top: 19px;
    }
    &__name {
        width: 60%;
        @include max-breakpoint(mobile-medium) {
            width: 100%;
        }
    }
    &__phone {
        width: 35%;
        margin-left: 5%;
        @include max-breakpoint(mobile-medium) {
            width: 100%;
            margin-left: 0;
            margin-top: 19px;
        }
    }
    ::v-deep &__date {
        margin-top: 24px;
        @include max-breakpoint(mobile-medium) {
            margin-top: 19px;
        }
    }
    &__comment {
        margin-top: 24px;
        padding-top: 16px;
        width: 100%;
        height: 90px;
        @include max-breakpoint(mobile-medium) {
            margin-top: 19px;
        }
    }
    &__self-delivery {
        margin-left: 32px;
    }
    &__delivery-text {
        width: 100%;
        margin-top: 32px;
        font-weight: 500;
        @include max-breakpoint(mobile-medium) {
            margin-top: 19px;
        }
    }
    &__address {
        margin-top: 24px;
        width: 100%;
        box-sizing: border-box;
        border-radius: 8px;
        border: solid 1px $text-color-location;
        font-size: 14px;
        font-weight: 100;
        height: 45px;
        padding-left: 24px;
    }
    &__payment-text {
        width: 100%;
        margin-top: 32px;
        font-weight: 500;
    }
    &__errors {
        margin-top: 32px;
        margin-bottom: 0;
        line-height: 1.5;
        width: 100%;
        color: red;
    }
}

.cart-summary__no-discount {
    font-size: 14px;
    font-family: Montserrat, sans-serif;
    font-weight: normal;
    font-style: italic;
    margin-top: 14px;
}

.actions {
    display: flex;
    flex-wrap: wrap;

    .btn-order {
        margin-left: 0;
        margin-right: 0;
    }

    .continue-shopping {
        margin-right: 16px;
    }
}
</style>
