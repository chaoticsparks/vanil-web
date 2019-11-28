<template>
    <div class="bg-products">
        <div class="product">
            <div class="product__photo">
                <img
                    class="product__img"
                    src="~assets/image/product1.png"
                    alt="product"
                />
            </div>
            <div class="product__info">
                <h2 class="h2-like h2-like--underlined">
                    Йогурт с фруктами и ягодами c запеченной гранолой
                </h2>
                <span class="product__weight">150 г.</span>
                <p>
                    бисквит, творожный крем , топпинг малиново-черничный, ганаш,
                    голубика и малина, зефир маршмеллоу, малиновый джем и
                    фисташки
                </p>
                <section class="product__buy">
                    <span class="product__price">135 грн.</span>
                    <button class="btn">Купить</button>
                </section>
            </div>
        </div>
        <div class="product product_reversed">
            <div class="product__photo">
                <img
                    class="product__img"
                    src="~assets/image/product1.png"
                    alt="product"
                />
            </div>
            <div class="product__info">
                <h2 class="h2-like h2-like--underlined">
                    Йогурт с фруктами и ягодами c запеченной гранолой
                </h2>
                <span class="product__weight">150 г.</span>
                <p>
                    бисквит, творожный крем , топпинг малиново-черничный, ганаш,
                    голубика и малина, зефир маршмеллоу, малиновый джем и
                    фисташки
                </p>
                <section class="product__buy">
                    <span class="product__price">135 грн.</span>
                    <button class="btn">Купить</button>
                </section>
            </div>
        </div>
        <div class="product">
            <div class="product__photo">
                <img
                    class="product__img"
                    src="~assets/image/product1.png"
                    alt="product"
                />
            </div>
            <div class="product__info">
                <h2 class="h2-like h2-like--underlined">
                    Йогурт с фруктами и ягодами c запеченной гранолой
                </h2>
                <span class="product__weight">150 г.</span>
                <p>
                    бисквит, творожный крем , топпинг малиново-черничный, ганаш,
                    голубика и малина, зефир маршмеллоу, малиновый джем и
                    фисташки
                </p>
                <section class="product__buy">
                    <span class="product__price">135 грн.</span>
                    <button class="btn">Купить</button>
                </section>
            </div>
        </div>
        <span class="h1-like">Доставка</span>
        <p>
            Доставка по Одессе производится через сервис Bond, а также возможен
            самовывоз из кафе.
        </p>
        <span class="bold-text">Адреса отделений:</span>
        <table class="locations">
            <tr>
                <td>ул. Приморский бульвар, 10</td>
                <td>
                    <div class="location">
                        <a href="" class="location__link">Показать на карте</a
                        ><img src="" class="location__icon" alt="" />
                    </div>
                </td>
            </tr>
            <tr>
                <td>ул. Троицкая, 16</td>
                <td>
                    <div class="location">
                        <a href="" class="location__link">Показать на карте</a
                        ><img src="" class="location__icon" alt="" />
                    </div>
                </td>
            </tr>
            <tr>
                <td>ул. Генерала Петрова, 31/1</td>
                <td>
                    <div class="location">
                        <a href="" class="location__link">Показать на карте</a
                        ><img src="" class="location__icon" alt="" />
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>

<style lang="scss" scoped>
.bg-products {
    background-color: $text-color-light;
}
.product {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    @include max-breakpoint(tablet-portrait) {
        flex: 0 0 100%;
        flex-wrap: wrap;
        justify-content: center;
    }
    @include max-breakpoint(tablet-landscape) {
        margin-right: 20px;
        margin-left: 20px;
    }
    &__img {
        max-width: 100%;
        height: auto;
        @include max-breakpoint(tablet-portrait) {
            flex: 0 0 100%;
        }
    }
    &__info {
        font-weight: 500;
        width: 445px;
        font-size: 14px;
        @include max-breakpoint(tablet-portrait) {
            font-size: 10px;
        }
    }
    &__weight {
        margin-top: 24px;
        font-weight: 100;
        color: $text-color-dark-brown;
    }
    &__price {
        font-size: 30px;
        font-weight: bold;
        @include max-breakpoint(tablet-portrait) {
            font-size: 20px;
        }
    }
    &__buy {
        margin-top: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
.product_reversed {
    flex-direction: row-reverse;
}
.h2-like {
    margin-top: 61px;
    margin-bottom: 24px;
    font-family: LawyerGothic;
    font-weight: bold;
    font-size: 24px;
    padding-bottom: 7px;
    border-bottom: 1px solid $text-color-brown-transparent;
    @include max-breakpoint(tablet-portrait) {
        margin-top: 20px;
        font-size: 16px;
    }
}
.btn {
    width: 160px;
    height: 40px;
    border-radius: 8px;
    background-color: $text-color-brown;
    font-family: LawyerGothic;
    font-size: 18px;
    font-weight: bold;
    color: $text-color-light;
    border-style: none;
    @include max-breakpoint(tablet-portrait) {
        width: 105px;
        height: 27px;
        font-size: 12px;
    }
}
.h1-like {
    margin-top: 124px;
    font-family: LawyerGothic;
    font-weight: bold;
    font-size: 48px;
    color: $text-color-brown;
}
</style>
