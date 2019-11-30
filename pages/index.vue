<template>
    <div>
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
        <p class="delivery-text">
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
                        ><img
                            src="~assets/image/map-point.svg"
                            class="location__icon"
                            alt="location"
                        />
                    </div>
                </td>
            </tr>
            <tr>
                <td>ул. Троицкая, 16</td>
                <td>
                    <div class="location">
                        <a href="" class="location__link">Показать на карте</a
                        ><img
                            src="~assets/image/map-point.svg"
                            class="location__icon"
                            alt="location"
                        />
                    </div>
                </td>
            </tr>
            <tr>
                <td>ул. Генерала Петрова, 31/1</td>
                <td>
                    <div class="location">
                        <a href="" class="location__link">Показать на карте</a
                        ><img
                            src="~assets/image/map-point.svg"
                            class="location__icon"
                            alt="location"
                        />
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>

<style lang="scss" scoped>
.product {
    margin-top: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:nth-of-type(even) {
        flex-direction: row-reverse;
    }
    @include max-breakpoint(tablet-landscape) {
        margin-right: 20px;
        margin-left: 20px;
    }
    @include max-breakpoint(tablet-portrait) {
        margin-top: 80px;
    }
    @include max-breakpoint(mobile-medium) {
        flex-wrap: wrap;
        justify-content: center;
    }
    &__img {
        max-width: 100%;
        height: auto;
    }
    &__photo {
        @include max-breakpoint(mobile-medium) {
            width: 70%;
        }
    }
    &__info {
        font-weight: 500;
        width: 445px;
        font-size: 14px;
        @include max-breakpoint(tablet-portrait) {
            width: 670px;
            font-size: 10px;
        }
        @include max-breakpoint(mobile-medium) {
            width: 100%;
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
.h2-like {
    font-family: LawyerGothic, sans-serif;
    font-weight: bold;
    font-size: 24px;
    &--underlined {
        padding-bottom: 7px;
        border-bottom: 1px solid $text-color-brown-transparent;
    }
    @include max-breakpoint(tablet-portrait) {
        font-size: 16px;
    }
}
.btn {
    width: 160px;
    height: 40px;
    border-radius: 8px;
    background-color: $text-color-brown;
    font-family: LawyerGothic, sans-serif;
    font-size: 18px;
    font-weight: bold;
    color: $text-color-light;
    border-style: none;
    cursor: pointer;
    @include max-breakpoint(tablet-portrait) {
        width: 105px;
        height: 27px;
        font-size: 12px;
    }
}
.h1-like {
    display: inline-block;
    margin-top: 100px;
    font-family: LawyerGothic, sans-serif;
    font-weight: bold;
    font-size: 48px;
    color: $text-color-brown;
}
.delivery-text {
    margin-top: 48px;
    font-weight: 500;
    color: $text-color-dark-brown;
    margin-bottom: 0;
}
.bold-text {
    display: inline-block;
    margin-top: 24px;
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    color: $text-color-dark-brown;
}
td {
    height: 35px;
    vertical-align: bottom;
    font-family: Montserrat, sans-serif;
    font-size: 14px;
    font-weight: normal;
    color: $text-color-dark-brown;
    &:nth-of-type(2) {
        padding-left: 24px;
        font-family: NotoSans, sans-serif;
        font-weight: normal;
    }
}
.location {
    display: flex;
    align-items: center;
    &__link {
        color: $text-color-location;
        border-bottom: 1px dashed $text-color-location;
    }
    &__icon {
        margin-left: 3px;
    }
}
</style>
