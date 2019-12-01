import Vue from 'vue';
import {
    INCREASE_CART_PRODUCT_QTY,
    UPDATE_PRODUCT_QTY,
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_FROM_CART,
    UPDATE_ORDER_FORM_FIELD,
    SET_ORDER_FORM_FIELD_ERROR
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
    cart: {},
    orderForm: {
        name: '',
        phone: '',
        comment: '',
        delivery: '',
        address: ''
    },
    orderFormErrors: {
        name: false,
        phone: false,
        phoneTooShort: false,
        delivery: false,
        address: false
    }
});

export const mutations = {
    [SET_ORDER_FORM_FIELD_ERROR](state, emptyFields) {
        Object.keys(state.orderFormErrors).forEach(key => {
            state.orderFormErrors[key] = false;
        });
        emptyFields.forEach(key => {
            state.orderFormErrors[key] = true;
        });
        if (state.orderForm.phone.length < 19) {
            state.orderFormErrors.phoneTooShort = true;
        }
    },
    [UPDATE_ORDER_FORM_FIELD](state, payload) {
        const { name, value } = payload;
        if (name === 'delivery') {
            state.orderForm.address = '';
        }
        state.orderForm[name] = value;
    },
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
    },
    submitForm({ commit, state }) {
        const orderFormFields = Object.keys(state.orderForm);
        const emptyFields = orderFormFields.filter(
            field => !state.orderForm[field]
        );
        if (emptyFields.length > 1) {
            commit(SET_ORDER_FORM_FIELD_ERROR, emptyFields);
        } else {
            // eslint-disable-next-line no-undef
            $nuxt.$router.push('order');
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
