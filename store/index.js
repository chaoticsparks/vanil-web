import Vue from 'vue';
import {
    INCREASE_CART_PRODUCT_QTY,
    UPDATE_PRODUCT_QTY,
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_FROM_CART
} from '~/constants/store';

export const state = () => ({
    products: [
        {
            id: 'P1',
            imgFile: 'product1.png',
            title: 'Рождественская бриошь (калач) с клюквой и вишней',
            description: `Традиционное легкое ванильное сдобное тесто на сливочном масле, кули из свежей клюквы и вишни, с добавлением апельсиновой цедры.`,
            price: '100',
            weight: '700',
            options: {
                name: 'Начинка:',
                values: [
                    'Клюква и вишня',
                    'Мак и апельсиновые цукаты',
                    'Соленая карамель с фундуков и шоколадом'
                ],
                errorText: 'Пожалуйста, выберите начинку!'
            }
        }
    ],
    cart: {}
});

export const mutations = {
    [INCREASE_CART_PRODUCT_QTY](state, cartProductId) {
        state.cart[cartProductId].quantity++;
    },
    [UPDATE_PRODUCT_QTY](state, payload) {
        const { cartProductId, newQty } = payload;
        state.cart[cartProductId].quantity = newQty;
    },
    [REMOVE_PRODUCT_FROM_CART](state, cartProductId) {
        Vue.delete(state.cart, cartProductId);
    },
    [ADD_PRODUCT_TO_CART](state, payload) {
        const { productToAddId, cartProductId, selectedOption } = payload;
        const {
            id,
            imgFile,
            title,
            price,
            options: { values }
        } = state.products.find(product => product.id === productToAddId);
        Vue.set(state.cart, cartProductId, {
            productId: id,
            imgFile,
            title,
            price,
            selectedOption: {
                name: selectedOption.name,
                option: values[selectedOption.option.slice(1)]
            },
            quantity: 1
        });
    }
};

export const actions = {
    addToCart({ commit, state }, productToAdd) {
        const { id, selectedOption } = productToAdd;
        const cartProductId = `${id}${selectedOption.option || ''}`;

        if (state.cart[cartProductId]) {
            commit(INCREASE_CART_PRODUCT_QTY, cartProductId);
        } else {
            commit(ADD_PRODUCT_TO_CART, {
                productToAddId: productToAdd.id,
                selectedOption,
                cartProductId
            });
        }
    }
};

export const getters = {
    getCartCounter(state) {
        return Object.values(state.cart).reduce((quantity, product) => {
            return quantity + product.quantity;
        }, 0);
    },
    getCartTotal(state) {
        return Object.values(state.cart).reduce((total, product) => {
            return total + product.quantity * product.price;
        }, 0);
    }
};
