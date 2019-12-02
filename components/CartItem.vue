<template>
    <li class="cart-item">
        <div class="cart-item__image-container">
            <img
                :src="getImagePath(cartItem.imgFile)"
                alt="product-mini"
                class="product-icon"
            />
        </div>
        <div class="cart-item__title-container">
            <h5 class="h5-like">{{ cartItem.title }}</h5>
            <span v-if="cartItem.selectedOption" class="cart-item__flavour">{{
                cartItem.selectedOption.name +
                    ' ' +
                    cartItem.selectedOption.option
            }}</span>
        </div>
        <div class="cart-item__quantity-container">
            <QuantityCounter
                :value="cartItem.quantity"
                @input="onChangeQuantity"
            />
        </div>
        <div class="cart-item__price-container">
            <span class="cart-item__price-text"
                >{{ cartItem.price * cartItem.quantity }} грн</span
            >
        </div>
        <div class="cart-item__remove-container">
            <button
                class="cart-item__remove-btn"
                @click="onClickRemoveItemFromCart"
            >
                <img src="~assets/image/close-btn.svg" alt="close-btn" />
            </button>
        </div>
    </li>
</template>

<script>
import QuantityCounter from './QuantityCounter';

export default {
    components: {
        QuantityCounter
    },
    props: {
        cartItem: {
            required: true,
            type: Object
        },
        cartItemId: {
            required: true,
            type: String
        }
    },
    methods: {
        getImagePath(imgName) {
            return require(`~/assets/image/${imgName}`);
        },
        onChangeQuantity(newQty) {
            this.$emit('changeQuantity', {
                cartProductId: this.cartItemId,
                newQty
            });
        },
        onClickRemoveItemFromCart() {
            this.$emit('removeItemFromCart', this.cartItemId);
        }
    }
};
</script>

<style lang="scss" scoped>
.product-icon {
    width: 45px;
    height: 100%;
    @include max-breakpoint(mobile-medium) {
        width: 75px;
    }
}
.cart-item {
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include max-breakpoint(mobile-medium) {
        justify-content: start;
        flex-wrap: wrap;
        margin-top: 19px;
    }
    &__image-container {
        display: flex;
        align-items: center;
        @include max-breakpoint(tablet-portrait) {
            margin-right: 10px;
        }
        @include max-breakpoint(mobile-medium) {
            margin-right: 0;
        }
    }
    &__title-container {
        width: 361px;
        @include max-breakpoint(tablet-portrait) {
            margin-right: 10px;
        }
        @include max-breakpoint(mobile-medium) {
            margin-right: 0;
            margin-left: 9px;
            width: calc(100% - 84px);
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
            margin-left: 21px;
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
            order: 3;
            margin-top: 0;
            margin-right: 0;
        }
    }
    &__remove-btn {
        @include button-reset;
    }
}
</style>
