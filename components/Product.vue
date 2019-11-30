<template>
    <div class="product">
        <div class="product__photo">
            <img class="product__img" :src="imagePath" alt="product" />
        </div>
        <div class="product__info">
            <h2 class="h2-like h2-like--underlined">
                {{ product.title }}
            </h2>
            <span class="product__weight">{{ product.weight }}</span>
            <p>
                {{ product.description }}
            </p>
            <template v-if="product.options">
                <span>{{ product.options.name }}</span>
                <label
                    v-for="(option, index) in product.options.values"
                    :key="index"
                    class="radio-container product-option"
                >
                    <input
                        :value="`O${index}`"
                        type="radio"
                        name="delivery"
                        class="radio-container__input"
                        @input="onRadioInput"
                    />
                    <span class="radio-container__text">{{ option }}</span>
                    <span class="radio-container__custom-radio"></span>
                </label>
            </template>
            <p
                :class="{
                    'product-option-error': true,
                    'product-option-error--visible': isError
                }"
            >
                {{ product.options.errorText }}
            </p>
            <section class="product__buy">
                <span class="product__price">{{ product.price }} грн.</span>
                <button class="btn" :disabled="isError" @click="addToCart">
                    Купить
                </button>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            required: true,
            type: Object
        }
    },
    data: () => ({
        selectedOption: null,
        isError: false
    }),
    computed: {
        imagePath() {
            return require(`~/assets/image/${this.product.imgFile}`);
        }
    },
    methods: {
        onRadioInput(event) {
            this.isError = false;
            this.selectedOption = event.target.value;
        },
        addToCart() {
            this.isError = !this.selectedOption;
            if (!this.isError) {
                this.$emit('addToCart', {
                    id: this.product.id,
                    selectedOption: this.product.options
                        ? {
                              name: this.product.options.name,
                              option: this.selectedOption
                          }
                        : null
                });
            }
        }
    }
};
</script>

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
        margin-top: 8px;
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

.product-option {
    margin-top: 16px;
    &:first-of-type {
        margin-top: 8px;
    }
}

.product-option-error {
    color: red;
    height: 16px;
    opacity: 0;

    &--visible {
        opacity: 1;
    }
}
</style>
