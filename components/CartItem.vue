<template>
    <li class="cart-item">
        <div class="cart-item__image-container">
            <img
                :src="getImagePath(cartItem.imgFile)"
                alt="product-mini"
                class="product-icon"
            />
        </div>
        <div class="cart-item__details-container">
            <div class="cart-item__title-container">
                <h5 class="h5-like">{{ cartItem.title }}</h5>
                <span
                    v-if="cartItem.selectedOption"
                    class="cart-item__flavour"
                    >{{
                        cartItem.selectedOption.name +
                            ' ' +
                            cartItem.selectedOption.option
                    }}</span
                >
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
                    <img
                        class="close-btn-img"
                        src="~assets/image/close-btn.svg"
                        alt="close-btn"
                    />
                </button>
            </div>
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

<style lang="scss" scoped></style>
