<template>
    <div>
        <section class="cart-section">
            <h2 class="h2-like cart-h2">
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
                    cols="30"
                    rows="10"
                    placeholder="Комментарий"
                ></textarea>
                <span>Доставка</span>
                <!-- TODO: @chaoticsparks Implement radio inputs -->
                <input type="text" placeholder="Адрес" />
                <span>Оплата</span>
                <!-- TODO: @chaoticsparks Implement radio inputs -->
                <button class="btn">Оформить заказ</button>
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
.cart-h2 {
    margin-top: 64px;
}
</style>
