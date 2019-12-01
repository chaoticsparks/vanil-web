<template>
    <div>
        <section class="order-section">
            <h2 class="h2-like">
                Спасибо, ваш заказ
                <span class="order-number">№3548</span> в обработке
            </h2>
            <p class="text-order-manager">
                Наш менеджер свяжется с вами в ближайшее время!
            </p>
            <p class="text-order-number">
                Сообщите номер вашего заказа при получении товара в кафе!
            </p>
            <h2 class="h2-like details-text">
                Детали вашего заказа
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
                    <div class="cart-item__price-container">
                        <span class="cart-item__price-text">130 грн</span>
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
                    <div class="cart-item__price-container">
                        <span class="cart-item__price-text">150 грн</span>
                    </div>
                </li>
            </ul>
            <footer class="cart-summary">
                Сумма заказа: <span class="cart-summary__price">545 грн</span>
            </footer>
        </section>
        <section class="order-summary">
            <h2 class="h2-like">
                Номер заказа <span class="order-number">3548</span>
            </h2>
            <div class="order-summary__options">
                <div class="option-result">
                    <span class="option">Оплата:</span>
                    <span class="payment-option chosen">При получении</span>
                </div>
                <div class="option-result">
                    <span class="option">Доставка:</span>
                    <span class="delivery-option chosen"
                        >Самовывоз, ул. Приморский бульвар, 10</span
                    >
                </div>
            </div>
            <button class="btn btn-order">Продолжить покупки</button>
        </section>
    </div>
</template>

<script>
export default {
    layout: 'simple'
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
.cart-item {
    margin-top: 32px;
    display: flex;
    align-items: center;
    @include max-breakpoint(mobile-medium) {
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
        margin-left: 37px;
        width: 50%;
        @include max-breakpoint(tablet-portrait) {
            margin-right: 10px;
        }
        @include max-breakpoint(mobile-medium) {
            margin-left: 10px;
            width: 50%;
        }
    }
    &__flavour {
        font-family: Montserrat, sans-serif;
        font-size: 12px;
        font-weight: 600;
        color: $text-color-location;
    }
    &__price-container {
        font-family: Montserrat, sans-serif;
        font-size: 14px;
        font-weight: bold;
        font-style: italic;
        flex-shrink: 0;
        margin-left: auto;
        @include max-breakpoint(tablet-portrait) {
            margin-right: 10px;
        }
        @include max-breakpoint(mobile-medium) {
            order: 11;
            margin-top: 10px;
        }
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
.cart-list {
    margin-top: 33px;
    @include ul-reset;
}
.order-summary {
    margin-top: 48px;
    .btn-order {
        margin-top: 32px;
        width: 256px;
        height: 35px;
        font: 12px;
    }
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
        width: 120px;
        flex-shrink: 0;
    }
}
.chosen {
    display: inline-block;
    max-width: 253px;
}
.option-result {
    margin-top: 16px;
    width: 100%;
    display: flex;
}
</style>
