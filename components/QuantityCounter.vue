<template>
    <div class="quantity-counter">
        <div class="quantity-counter__section quantity-counter__section--minus">
            <button class="quantity-counter__button" @click="onMinus">-</button>
        </div>
        <div
            class="quantity-counter__section quantity-counter__section--quantity"
        >
            <span class="quantity-counter__quantity-text">{{ value }}</span>
        </div>
        <div class="quantity-counter__section quantity-counter__section--plus">
            <button class="quantity-counter__button" @click="onPlus">+</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            default: 1,
            type: Number
        }
    },
    methods: {
        onMinus() {
            if (this.value > 1) {
                this.$emit('input', this.value - 1);
            }
        },
        onPlus() {
            this.$emit('input', this.value + 1);
        }
    }
};
</script>

<style lang="scss" scoped>
.quantity-counter {
    color: $text-color-brown;
    font-family: LawyerGothic, sans-serif;
    /*font-weight: bold;*/
    font-size: 14px;
    width: 94px;
    height: 34px;
    display: flex;
    justify-content: space-around;
    @include max-breakpoint(mobile-medium) {
        width: 68px;
        height: 26px;
        font-size: 9px;
    }

    &__section {
        height: 100%;
        box-sizing: border-box;
        border: 1px solid $text-color-brown-transparent;
        overflow: hidden;

        &--minus {
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
            border-right: none;
            @include max-breakpoint(mobile-medium) {
                border-top-left-radius: 9px;
                border-bottom-left-radius: 9px;
            }
        }

        &--plus {
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
            border-left: none;
            @include max-breakpoint(mobile-medium) {
                border-top-right-radius: 9px;
                border-bottom-right-radius: 9px;
            }
        }

        &--quantity {
            border-right: none;
            border-left: none;
            display: flex;
            align-items: center;
            flex-grow: 1;
            justify-content: center;
        }
    }

    &__button {
        @include button-reset;
        height: 100%;
        width: 30px;

        &:hover {
            background-color: $text-color-brown-transparent;
        }
    }
}
</style>
