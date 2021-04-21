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
            imgFile: 'kulich.jpg',
            title: 'Пасхальный кулич',
            description: `Сдобное тесто на итальянской муке Manitoba с новозеландским маслом, желтки, апельсиновая цедра, вяленая клюква, курага и миндаль.`,
            price: '450',
            weight: '≈800 грамм',
            iikoCode: '05362',
            iikoId: '79246d37-fc91-4914-a45c-c6340d31c92d'
        },
        {
            id: 'P2',
            imgFile: 'panettone.jpg',
            title: 'Праздничный пасхальный панеттоне',
            description: `Итальянская сдоба длительной ферментации на закваске, замешанная на итальянской муке Manitoba, с вяленой вишней, клюквой, фисташками, апельсиновыми цукатами и французским малиновым шоколадом Varlhona.`,
            price: '650',
            weight: '≈1 килограмм',
            iikoCode: '05900',
            iikoId: '6ef2f8c6-6b8b-44f1-8962-34a6e9fe47da'
        },
        {
            id: 'P3',
            imgFile: 'krafin.jpg',
            title: 'Пасхальный краффин',
            description: `Умело закрученный и сложенный в форму кулич из сдобного теста, с апельсиновыми цукатами, бельгийским темным шоколадом, тростниковым сахаром и миндалем.`,
            price: '330',
            weight: '≈900 грамм',
            iikoCode: '05360',
            iikoId: '91e54006-c63f-4d17-9161-a67613efb846'
        },
        {
            id: 'P4',
            imgFile: 'orange_kulich.jpg',
            title: 'Творожный кулич в апельсиновом шоколаде',
            description: `Запечённый творог с тремя видами изюма, клюквой и курагой, сдобренный обилием лимонной цедры и апельсиновыми цукатами. `,
            price: '380',
            weight: '≈650 грамм',
            iikoCode: '05361',
            iikoId: '39b71522-c58d-4747-9635-1672deedb6c0'
        },
        {
            id: 'P5',
            imgFile: 'carskaya.jpg',
            title: 'Шоколадная творожная пасха «Царская» Без САХАРА',
            description: `Нежнейшая творожная заварная пасха с бельгийским шоколадом sugar free, с вяленой вишней и брауни.`,
            price: '550',
            weight: '≈850 грамм',
            iikoCode: '06128',
            iikoId: 'e5606cc2-d1bd-4281-a842-4ff97801f7bd'
        },
        {
            id: 'P6',
            imgFile: 'yayca.jpg',
            title: 'Набор шоколадных пасхальных яиц',
            description: `Яйца из бельгийского белого шоколада с курагой, хрустящими шариками и фисташками.`,
            price: '380',
            weight: '4шт ≈300 грамм',
            iikoCode: '05363',
            iikoId: 'b2bef021-6c35-43b1-9f81-ec18a59b7f96'
        }
        /*
        {
            id: 'P9',
            imgFile: 'karamel.jpg',
            title: 'Cоленая карамель',
            description: ``,
            price: ['80', '150'],
            weight: '120 грамм, 235 грамм',
            options: {
                name: 'Вес:',
                values: ['120 грамм, 80 грн.', '235 грамм, 150грн.'],
                errorText: 'Пожалуйста, укажите вес!'
            },
            iikoCode: ['05924', '05923'],
            iikoId: [
                '94bcbfbb-9784-41a7-87f1-873867029b10',
                'aeeb38ea-bbb0-4e9b-b6a2-06ce389c5fcb'
            ]
        },
        {
            id: 'P11',
            imgFile: 'choco.jpg',
            title: 'Шоколадка из премиального бельгийского шоколада',
            description: `- белый бельгийский шоколад с дробленым фундуком<br>- молочный бельгийский шоколад с дробленым миндалем<br>- карамельный бельгийский шоколад с дробленым кешью`,
            price: ['65', '75'],
            weight: '55 грамм',
            options: {
                name: 'Вкус:',
                values: ['Белая, 65 грн.', 'Молочная, 75 грн.'],
                errorText: 'Пожалуйста, выберите вкус!'
            },
            iikoCode: ['05911', '05925'],
            iikoId: [
                '16b89112-d179-4ef7-871f-667ea0f90590',
                'e5960d26-dfc4-49d8-be4a-91c54a10ec06'
            ]
        },
      */
    ],
    cart: {},
    orderForm: {
        name: '',
        phone: '',
        comment: '',
        date: '',
        delivery: '',
        address: ''
    },
    orderFormErrors: {
        name: false,
        phone: false,
        phoneTooShort: false,
        date: false,
        delivery: false,
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
            delivery: '',
            address: ''
        };
        state.orderFormErrors = {
            name: false,
            phone: false,
            phoneTooShort: false,
            date: false,
            delivery: false,
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
