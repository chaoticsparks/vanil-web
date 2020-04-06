<template>
    <div>
        <Product
            v-for="(product, index) in products"
            :key="index"
            :product="product"
            @addToCart="onAddToCart"
        />
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import Product from '../../components/Product';

export default {
    components: { Product },
    computed: {
        products() {
            // To show products only from "Пасха" group
            return this.$store.state.products
                .filter(
                    product =>
                        product.parentGroup ===
                        '902d53e6-57ec-445a-a2d6-9132265d6d00'
                )
                .sort((a, b) => a.order - b.order);
        }
    },
    methods: {
        ...mapActions({
            onAddToCart: 'addToCart'
        })
    }
};
</script>

<style lang="scss" scoped></style>
