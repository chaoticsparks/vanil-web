<template>
    <div>
        <div class="h1-like">Беплатная доставка по Одессе!</div>
        <nuxt-child />
        <!--  <span class="h1-like">Доставка</span>
        <p class="delivery-text">
            Доставка по Одессе производится через сервис Bond, а также возможен
            самовывоз из кафе.
        </p> -->
        <span class="h2-like">Адреса кафе</span>
        <table class="locations">
            <tbody>
                <tr>
                    <td>ул. Приморский бульвар, 10</td>
                    <td>
                        <div class="location">
                            <a
                                href="https://goo.gl/maps/wTDFFF43NSndXDaY9"
                                class="location__link"
                                target="_blank"
                                >Показать на карте</a
                            ><img
                                src="~assets/image/map-point.svg"
                                class="location__icon"
                                alt="location"
                            />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>ул. Осипова, 10</td>
                    <td>
                        <div class="location">
                            <a
                                href="https://goo.gl/maps/NV28NoVEzXtRyuYf6"
                                class="location__link"
                                target="_blank"
                                >Показать на карте</a
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
                            <a
                                href="https://goo.gl/maps/bdHkkadWu2nXaGo28"
                                class="location__link"
                                target="_blank"
                                >Показать на карте</a
                            ><img
                                src="~assets/image/map-point.svg"
                                class="location__icon"
                                alt="location"
                            />
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { SET_LEAD_SOURCE } from '../constants/store';
const getProducts = () =>
    import('~/assets/data/products.json').then(m => m.default || m);
export default {
    async fetch({ store, route, $axios }) {
        if (route.query && route.query.source) {
            store.commit(SET_LEAD_SOURCE, route.query.source);
        }
        const products = await getProducts();
        store.dispatch('saveProductsToStore', products.products);
    },
    head() {
        return {
            title: 'Кафе Vanil - предзаказ'
        };
    }
};
</script>

<style lang="scss" scoped>
.h1-like {
    text-align: center;
    display: block;
    margin-top: 100px;
    margin-bottom: 100px;
    font-family: LawyerGothic, sans-serif;
    font-weight: bold;
    font-size: 48px;
    color: $text-color-brown;
    @include max-breakpoint(tablet-portrait) {
        font-size: 32px;
    }
}
.h2-like {
    @include max-breakpoint(tablet-portrait) {
        font-size: 16px;
    }
    @include max-breakpoint(medium-phone) {
        font-size: 14px;
    }
}
.delivery-text {
    margin-top: 48px;
    font-weight: 500;
    color: $text-color-dark-brown;
    margin-bottom: 0;
    font-size: 14px;
    @include max-breakpoint(tablet-portrait) {
        margin-top: 32px;
    }
    /*@include max-breakpoint(mobile-medium) {
        font-size: 10px;
    }*/
}
.bold-text {
    display: inline-block;
    margin-top: 24px;
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    color: $text-color-dark-brown;
    margin-right: 20px;
    @include max-breakpoint(mobile-medium) {
        font-size: 14px;
    }
}
td {
    height: 35px;
    vertical-align: bottom;
    font-family: Montserrat, sans-serif;
    font-size: 14px;
    font-weight: normal;
    color: $text-color-dark-brown;
    @include max-breakpoint(mobile-medium) {
        font-size: 10px;
        height: 23px;
    }
    &:nth-of-type(2) {
        padding-left: 24px;
        font-family: NotoSans, sans-serif;
        font-weight: normal;
        @include max-breakpoint(mobile-medium) {
            padding-left: 10px;
        }
    }
}
.locations {
    margin-top: 16px;
}
.location {
    display: flex;
    align-items: center;
    &__link {
        color: $text-color-location;
        border-bottom: 1px dashed $text-color-location;
        &:hover {
            border-bottom: none;
            text-decoration: none;
        }
    }
    &__icon {
        margin-left: 3px;
    }
}
</style>
