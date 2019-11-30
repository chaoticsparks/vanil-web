<template>
    <div>
        <section class="cart-section">
            <h2 class="h2-like">
                Корзина
            </h2>
            <ul class="cart-list">
                <li class="cart-item">
                    <div class="cart-item__image-container">
                        <img src="" alt="" />
                    </div>
                    <div class="cart-item__title-container">
                        <h5>Рождественский калач</h5>
                        <span class="cart-item__flavour">Мак и орех</span>
                    </div>
                    <div class="cart-item__quantity-container">
                        <!-- TODO: @chaoticsparks Implement quantity counter component -->
                    </div>
                    <div class="cart-item__price-container">
                        <span class="cart-item__price-text"></span>
                    </div>
                    <div class="cart-item__remove-container">
                        <button class="cart-item__remove-btn">
                            <img src="" alt="" />
                        </button>
                    </div>
                </li>
                <li class="cart-item">
                    <div class="cart-item__image-container">
                        <img src="" alt="" />
                    </div>
                    <div class="cart-item__title-container">
                        <h5>
                            Штоллен с изюмом, орехами и цукатами, посыпанный
                            сахарной пудрой
                        </h5>
                    </div>
                    <div class="cart-item__quantity-container">
                        <!-- TODO: @chaoticsparks Implement quantity counter component -->
                    </div>
                    <div class="cart-item__price-container">
                        <span class="cart-item__price-text"></span>
                    </div>
                    <div class="cart-item__remove-container">
                        <button class="cart-item__remove-btn">
                            <img src="" alt="" />
                        </button>
                    </div>
                </li>
            </ul>
            <footer class="cart-summary">
                Сумма заказа:<span class="cart-summary__price">545 грн</span>
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
                <!-- TODO: @chaoticsparks Implement radio inputs -->
                <input
                    type="text"
                    placeholder="Адрес"
                    class="cart-form__address"
                />
                <div class="cart-form__payment-text"><span>Оплата</span></div>
                <!-- TODO: @chaoticsparks Implement radio inputs -->
                <button class="btn btn-order">Оформить заказ</button>
            </form>
        </section>
    </div>
</template>

<script>
export default {
    layout: 'simple'
};
</script>

<style lang="scss" scoped>
.cart-section {
    margin-top: 64px;
}
.cart-order {
    margin-top: 64px;
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
    }
    &__comment {
        margin-top: 24px;
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
</style>
