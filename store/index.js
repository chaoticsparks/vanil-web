import Vue from 'vue';
import {
    INCREASE_CART_PRODUCT_QTY,
    UPDATE_PRODUCT_QTY,
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_FROM_CART,
    UPDATE_ORDER_FORM_FIELD,
    SET_ORDER_FORM_FIELD_ERROR,
    CLEAN_STORE,
    SET_LEAD_SOURCE
} from '~/constants/store';

export const state = () => ({
    products: [
        {
            id: 'P1',
            imgFile: 'kalach69.jpg',
            title: 'Рождественская бриошь (калач) с клюквой и вишней',
            description: `Традиционное легкое ванильное сдобное тесто на сливочном масле, кули из свежей клюквы и вишни, с добавлением апельсиновой цедры.`,
            price: '280',
            weight: '700 грамм',
            iikoCode: '05066',
            iikoId: 'a243baa4-889f-4726-b7be-4f4c2dbf2710'
        },
        {
            id: 'P2',
            imgFile: 'kalach46.jpg',
            title:
                'Рождественская бриошь(калач) с маком и апельсиновыми цукатами',
            description: `Традиционное лёгкое ванильное сдобное тесто на сливочном масле, мак, цукаты вымоченные в ликере Куантро, апельсиновое кули.`,
            price: '280',
            weight: '700 грамм',
            iikoCode: '05077',
            iikoId: 'babf2c10-63cc-435e-951c-55ce3ac69a29'
        },
        {
            id: 'P3',
            imgFile: 'kalach98.jpg',
            title:
                'Рождественская бриошь(калач) с соленой карамелью, фундуком и шоколадом.',
            description: `Традиционное лёгкое ванильное сдобное тесто на сливочном масле, соленая карамель собственного приготовления, дробленый фундук, шоколадная крошка.`,
            price: '280',
            weight: '700 грамм',
            iikoCode: '05088',
            iikoId: '244c7959-41ea-4dba-9f82-6483f8c8bb2b'
        },
        {
            id: 'P4',
            imgFile: 'keks23.jpg',
            title: 'Английский рождественский кекс',
            description: `Кексовое тесто приготовленное на сливочном масле, вымоченные в темном роме изюм коринка, вяленная вишня, светлый изюм, вяленная клюква, коричневый изюм, грецкий орех, корица, имбирь, мускатный орех.<br><br> 
После выпечки пропитывается большим количеством рома и выстаивается около трех недель.`,
            price: ['250', '350'],
            weight: '470 грамм, 730 грамм',
            options: {
                name: 'Вес:',
                values: ['470 грамм, 250 грн.', '730 грамм, 350грн.'],
                errorText: 'Пожалуйста, укажите вес!'
            },
            iikoCode: ['04061', '04062'],
            iikoId: [
                'e3aec5e9-956f-48e9-a110-23a900c4c6a1',
                '3abcb159-a0c5-452e-853b-b1b011666fc7'
            ]
        },
        {
            id: 'P5',
            imgFile: 'shtolen143.jpg',
            title: 'Штоллен',
            description: `Традиционное тяжелое сдобное тесто на большом количестве сливочного масла, вымоченные в роме изюм коринка, курага, изюм светлый, изюм коричневый, миндаль, апельсиновая цедра.<br><br>
После выпечки пропитывается сливочным маслом, посыпается сахарно пудрой и выстаивается около трёх недель.`,
            price: '420',
            weight: '750 грамм',
            iikoCode: '04063',
            iikoId: 'a2ed874c-a541-4d98-bdb6-464e4f2e111c'
        }
    ],
    cart: {},
    orderForm: {
        name: '',
        phone: '',
        comment: '',
        date: '',
        // delivery: '',
        address: ''
    },
    orderFormErrors: {
        name: false,
        phone: false,
        phoneTooShort: false,
        date: false,
        // delivery: false,
        address: false
    },
    leadSource: ''
});

export const mutations = {
    [SET_LEAD_SOURCE](state, source) {
        state.leadSource = source;
    },
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
            options,
            iikoCode,
            iikoId
        } = state.products.find(product => product.id === productToAddId);
        Vue.set(state.cart, cartProductId, {
            productId: id,
            imgFile,
            title,
            price: selectedOption
                ? price[selectedOption.option.slice(1)]
                : price,
            selectedOption: options
                ? {
                      name: selectedOption.name,
                      option: options.values[selectedOption.option.slice(1)]
                  }
                : null,
            code: Array.isArray(iikoCode)
                ? iikoCode[selectedOption.option.slice(1)]
                : iikoCode,
            iikoId: Array.isArray(iikoCode)
                ? iikoId[selectedOption.option.slice(1)]
                : iikoId,
            quantity: 1
        });
    },
    [CLEAN_STORE](state) {
        state.cart = {};
        state.orderForm = {
            name: '',
            phone: '',
            comment: '',
            date: '',
            // delivery: '',
            address: ''
        };
        state.orderFormErrors = {
            name: false,
            phone: false,
            phoneTooShort: false,
            date: false,
            // delivery: false,
            address: false
        };
    }
};

export const actions = {
    addToCart({ commit, state }, productToAdd) {
        const { id, selectedOption } = productToAdd;
        const cartProductId = `${id}${
            selectedOption ? selectedOption.option || '' : ''
        }`;

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
        if (this.state.orderForm.phone.length < 19) {
            emptyFields.push('phone');
        }
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
