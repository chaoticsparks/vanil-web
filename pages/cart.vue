<template>
    <div>
        <section class="cart-section">
            <h2 class="h2-like">
                Корзина
            </h2>
            <ul class="cart-list">
                <li class="cart-item">
                    <div class="cart-item__image-container">
                        <img
                            src="~assets/image/product1.png"
                            alt="product-mini"
                            class="product-icon"
                        />
                    </div>
                    <div class="cart-item__title-container">
                        <h5 class="h5-like">Рождественский калач</h5>
                        <span class="cart-item__flavour">Мак и орех</span>
                    </div>
                    <div class="cart-item__quantity-container">
                        <QuantityCounter />
                    </div>
                    <div class="cart-item__price-container">
                        <span class="cart-item__price-text">130 грн</span>
                    </div>
                    <div class="cart-item__remove-container">
                        <button class="cart-item__remove-btn">
                            <img
                                src="~assets/image/close-btn.svg"
                                alt="close-btn"
                            />
                        </button>
                    </div>
                </li>
                <li class="cart-item">
                    <div class="cart-item__image-container">
                        <img
                            src="~assets/image/product1.png"
                            alt="product-mini"
                            class="product-icon"
                        />
                    </div>
                    <div class="cart-item__title-container">
                        <h5 class="h5-like">
                            Штоллен с изюмом, орехами и цукатами, посыпанный
                            сахарной пудрой
                        </h5>
                    </div>
                    <div class="cart-item__quantity-container">
                        <QuantityCounter />
                    </div>
                    <div class="cart-item__price-container">
                        <span class="cart-item__price-text">150 грн</span>
                    </div>
                    <div class="cart-item__remove-container">
                        <button class="cart-item__remove-btn">
                            <img
                                src="~assets/image/close-btn.svg"
                                alt="close-btn"
                            />
                        </button>
                    </div>
                </li>
            </ul>
            <footer class="cart-summary">
                Сумма заказа: <span class="cart-summary__price">545 грн</span>
            </footer>
        </section>
        <section class="cart-order">
            <h2 class="h2-like">
                Оформление заказа
            </h2>
            <form class="cart-form">
                <input type="text" placeholder="Имя" class="cart-form__name" />
                <input
                    type="text"
                    placeholder="Номер телефона"
                    class="cart-form__phone"
                />
                <textarea
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
                        type="radio"
                        value="Самовывоз"
                        name="delivery"
                        class="radio-container__input"
                    />
                    <span class="radio-container__text">Самовывоз</span>
                    <span class="radio-container__custom-radio"></span>
                </label>
                <label class="radio-container">
                    <input
                        type="radio"
                        value="Сервис Bond"
                        name="delivery"
                        class="radio-container__input"
                    />
                    <span class="radio-container__text">Сервис Bond</span>
                    <span class="radio-container__custom-radio"></span>
                </label>
                <input
                    type="text"
                    placeholder="Адрес"
                    class="cart-form__address"
                />
                <div class="cart-form__payment-text"><span>Оплата</span></div>
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
                </label>
                <button class="btn btn-order">Оформить заказ</button>
            </form>
        </section>
    </div>
</template>

<script>
import QuantityCounter from '../components/QuantityCounter';

export default {
    components: {
        QuantityCounter
    },
    layout: 'simple'
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
.product-icon {
    width: 45px;
    height: 35px;
    object-fit: fill;
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
    .btn-order {
        margin-top: 32px;
        width: 256px;
        height: 35px;
        font: 12px;
    }
}
.radio-container {
    margin-top: 24px;
    width: 100%;
}
</style>
