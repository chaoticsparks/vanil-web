<template>
    <div>
        <section class="cart-section">
            <h2 class="h2-like">
                Корзина
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
                Сумма заказа:
                <span class="cart-summary__price">{{ getCartTotal }} грн</span>
            </footer>
        </section>
        <section class="cart-order">
            <h2 class="h2-like">
                Оформление заказа
            </h2>
            <form class="cart-form">
                <input
                    v-model="name"
                    type="text"
                    placeholder="Имя *"
                    class="cart-form__name"
                    :class="{ 'cart-form-error': formErrors.name && !name }"
                />
                <input
                    v-model="phone"
                    v-mask="'+38 (###) ###-##-##'"
                    type="text"
                    placeholder="Номер телефона *"
                    class="cart-form__phone"
                    :class="{
                        'cart-form-error':
                            (formErrors.phone && !phone) ||
                            (formErrors.phoneTooShort && phone.length < 19)
                    }"
                />
                <textarea
                    v-model="comment"
                    class="cart-form__comment"
                    cols="30"
                    rows="10"
                    placeholder="Комментарий"
                ></textarea>
                <div class="cart-form__delivery-text">
                    <span>Доставка</span>
                </div>
                <label class="radio-container">
                    <input
                        v-model="delivery"
                        type="radio"
                        value="Самовывоз"
                        name="delivery"
                        class="radio-container__input"
                    />
                    <span class="radio-container__text">Самовывоз</span>
                    <span class="radio-container__custom-radio"></span>
                </label>
                <div
                    v-if="delivery === 'Самовывоз'"
                    class="cart-form__self-delivery"
                >
                    <label class="radio-container">
                        <input
                            v-model="address"
                            type="radio"
                            value="ул. Приморский бульвар, 10"
                            name="address_vanil"
                            class="radio-container__input"
                        />
                        <span class="radio-container__text"
                            >ул. Приморский бульвар, 10</span
                        >
                        <span class="radio-container__custom-radio"></span>
                    </label>
                    <label class="radio-container">
                        <input
                            v-model="address"
                            type="radio"
                            value="ул. Троицкая, 16 "
                            name="address_vanil"
                            class="radio-container__input"
                        />
                        <span class="radio-container__text"
                            >ул. Троицкая, 16
                        </span>
                        <span class="radio-container__custom-radio"></span>
                    </label>
                    <label class="radio-container">
                        <input
                            v-model="address"
                            type="radio"
                            value="ул. Генерала Петрова, 31/1"
                            name="address_vanil"
                            class="radio-container__input"
                        />
                        <span class="radio-container__text"
                            >ул. Генерала Петрова, 31/1</span
                        >
                        <span class="radio-container__custom-radio"></span>
                    </label>
                </div>
                <label class="radio-container">
                    <input
                        v-model="delivery"
                        type="radio"
                        value="Сервис Bond"
                        name="delivery"
                        class="radio-container__input"
                    />
                    <span class="radio-container__text">Сервис Bond</span>
                    <span class="radio-container__custom-radio"></span>
                </label>
                <input
                    v-if="delivery === 'Сервис Bond'"
                    v-model="address"
                    type="text"
                    placeholder="Адрес"
                    class="cart-form__address"
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
                <button class="btn btn-order" @click.prevent="submitForm">
                    Оформить заказ
                </button>
            </form>
        </section>
    </div>
</template>

<script>
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
    layout: 'simple',
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
            } else if (this.formErrors.address) {
                errorText.push('Пожалуйста, укажите детали доставки!');
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
    methods: {
        onChangeQuantity(payload) {
            this.updateQuantity(payload);
        },
        submitForm() {
            this.$store.dispatch('submitForm');
        },
        ...mapMutations({
            updateQuantity: UPDATE_PRODUCT_QTY,
            onRemoveItemFromCart: REMOVE_PRODUCT_FROM_CART,
            updateOrderFormField: UPDATE_ORDER_FORM_FIELD
        })
    }
};
</script>

<style lang="scss" scoped>
.cart-item {
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include max-breakpoint(mobile-medium) {
        flex-wrap: wrap;
        justify-content: space-around;
    }
    &__image-container {
        display: flex;
        align-items: center;
        @include max-breakpoint(tablet-portrait) {
            margin-right: 10px;
        }
    }
    &__title-container {
        width: 361px;
        @include max-breakpoint(tablet-portrait) {
            margin-right: 10px;
        }
        @include max-breakpoint(mobile-medium) {
            width: 50%;
        }
    }
    &__flavour {
        font-family: Montserrat, sans-serif;
        font-size: 12px;
        font-weight: 600;
        color: $text-color-location;
    }
    &__quantity-container {
        @include max-breakpoint(tablet-portrait) {
            margin-right: 10px;
        }
        @include max-breakpoint(mobile-medium) {
            order: 10;
            margin-top: 10px;
        }
    }
    &__price-container {
        font-family: Montserrat, sans-serif;
        font-size: 14px;
        font-weight: bold;
        font-style: italic;
        flex-shrink: 0;
        @include max-breakpoint(tablet-portrait) {
            margin-right: 10px;
        }
        @include max-breakpoint(mobile-medium) {
            order: 11;
            margin-top: 10px;
        }
    }
    &__remove-btn {
        @include button-reset;
    }
}
.cart-summary {
    font-family: LawyerGothic, sans-serif;
    font-size: 18px;
    font-weight: bold;
    text-align: right;
    margin-top: 32px;
    padding-bottom: 32px;
    border-bottom: 1px solid $text-color-location;
    @include max-breakpoint(mobile-medium) {
        font-size: 16px;
        text-align: center;
    }
}

.cart-section {
    margin-top: 64px;
}
.cart-order {
    margin-top: 64px;
}
.cart-list {
    margin-top: 33px;
    @include ul-reset;
}
.cart-form {
    margin-top: 32px;
    display: flex;
    flex-wrap: wrap;
    &__name {
        width: 60%;
        box-sizing: border-box;
        border-radius: 8px;
        border: solid 1px $text-color-location;
        font-size: 14px;
        font-weight: 100;
        height: 45px;
        padding-left: 24px;
        @include max-breakpoint(mobile-medium) {
            width: 100%;
        }
    }
    &__phone {
        width: 35%;
        margin-left: 5%;
        box-sizing: border-box;
        border-radius: 8px;
        border: solid 1px $text-color-location;
        font-size: 14px;
        font-weight: 100;
        height: 45px;
        padding-left: 24px;
        @include max-breakpoint(mobile-medium) {
            width: 100%;
            margin-left: 0;
            margin-top: 24px;
        }
    }
    &__comment {
        margin-top: 24px;
        padding-top: 16px;
        width: 100%;
        box-sizing: border-box;
        border-radius: 8px;
        border: solid 1px $text-color-location;
        font-size: 14px;
        font-weight: 100;
        height: 90px;
        padding-left: 24px;
    }
    &__self-delivery {
        margin-left: 32px;
    }
    &__delivery-text {
        width: 100%;
        margin-top: 32px;
        font-weight: 500;
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
    .btn-order {
        margin-top: 32px;
        width: 256px;
        height: 35px;
        font: 12px;
    }
}
.cart-form-error {
    border: 1px solid red;
}
.radio-container {
    margin-top: 24px;
    width: 100%;
}
</style>
