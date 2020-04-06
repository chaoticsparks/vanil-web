<template>
    <div class="product">
        <div class="product__photo">
            <img class="product__img" :src="imagePath" alt="product" />
        </div>
        <div class="product__info">
            <h2 class="h2-like h2-like--underlined">
                {{ product.name }}
            </h2>
            <span class="product__weight">{{ product.weight }}</span>
            <p v-html="product.description"></p>
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
                {{ errorText }}
            </p>
            <section class="product__buy">
                <span class="product__price">{{ productPrice }}</span>
                <button class="btn" :disabled="isError" @click="addToCart">
                    В корзину
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
        productPrice() {
            if (Array.isArray(this.product.price)) {
                if (!this.selectedOption) {
                    return '';
                }
                const index = this.selectedOption.slice(1);
                return this.product.price[index] + ' грн.';
            }
            return this.product.price + ' грн.';
        },
        errorText() {
            return this.product.options ? this.product.options.errorText : '';
        },
        imagePath() {
            return require(`~/assets/image/products/${this.product.code}.jpg`);
        }
    },
    methods: {
        onRadioInput(event) {
            this.isError = false;
            this.selectedOption = event.target.value;
        },
        addToCart() {
            if (this.product.options) {
                this.isError = !this.selectedOption;
            }

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
    margin-bottom: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include max-breakpoint(tablet-portrait) {
        margin-bottom: 80px;
    }
    @include max-breakpoint(mobile-medium) {
        flex-wrap: wrap;
        justify-content: center;
    }

    &__img {
        max-width: 100%;
        height: auto;
        border-radius: 32px;

        @include max-breakpoint(mobile-medium) {
            border-radius: 0;
        }
    }
    &__photo {
        width: 50%;
        padding-right: 24px;
        box-sizing: border-box;
        @include max-breakpoint(tablet-portrait) {
            padding-right: 16px;
        }
        @include max-breakpoint(mobile-medium) {
            width: calc(100% + 32px);
            padding-right: 0;
            margin-left: -16px;
            margin-right: -16px;
        }
    }
    &__info {
        font-weight: 500;
        width: 50%;
        box-sizing: border-box;
        font-size: 14px;
        padding-left: 24px;
        @include max-breakpoint(tablet-portrait) {
            padding-left: 16px;
            font-size: 12px;
        }
        @include max-breakpoint(mobile-medium) {
            width: 100%;
            padding-left: 0;
            padding-top: 16px;
        }
    }
    &__weight {
        margin-top: 24px;
        font-weight: 100;
        color: $text-color-dark-brown;
        display: inline-block;
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

    &:nth-of-type(even) {
        flex-direction: row-reverse;

        .product__photo {
            padding-right: 0;
            padding-left: 24px;
            text-align: right;
        }
        .product__info {
            padding-left: 0;
            padding-right: 24px;
        }

        @include max-breakpoint(tablet-portrait) {
            .product__photo {
                padding-left: 16px;
            }
            .product__info {
                padding-right: 16px;
            }
        }

        @include max-breakpoint(mobile-medium) {
            .product__photo {
                padding-left: 0;
            }
            .product__info {
                padding-right: 0;
            }
        }
    }
}
.h2-like {
    font-family: LawyerGothic, sans-serif;
    font-weight: bold;
    font-size: 24px;
    margin-top: 0;
    &--underlined {
        padding-bottom: 7px;
        border-bottom: 1px solid $text-color-brown-transparent;
    }
    @include max-breakpoint(tablet-portrait) {
        font-size: 16px;
    }
    @include max-breakpoint(medium-phone) {
        font-size: 14px;
    }
}
.btn {
    width: 168px;
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
        width: 124px;
        height: 27px;
        font-size: 12px;
    }
    &:hover {
        background-color: $btn-color-hover;
    }
    &:disabled {
        background-color: $text-color-brown-transparent;
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
