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
            title: 'Великодня паска',
            description: `Здобне вологе тісто на італійському борошні Manitoba з новозеландським маслом, вимішане на жовтках, з апельсиновою цедрою, в'яленою журавлиною, курагою та мигдалем.`,
            price: '560',
            weight: '≈800 грамм',
            iikoCode: '06776',
            iikoId: '788f9a72-32d3-4549-a255-9b94f164fdb5'
        },
        {
            id: 'P12',
            imgFile: 'choko-kulich.jpg',
            title: 'Паска «Снікерс»',
            description: `Вологе здобне тісто, на італійському борошні, жовтках і вершковому маслі.
            <br><br>Рідкий центр із шоколаду, солоної карамелі та солоного арахісу!`,
            price: '560',
            weight: '≈900 грамм',
            iikoCode: '06777',
            iikoId: '946fa5d7-4494-4539-99be-52325a602ea8'
        },
        {
            id: 'P2',
            imgFile: 'panettone.jpg',
            title: 'Святковий Пасхальний Панеттон',
            description: `Вироб який ми пестим наче дитину, відзначений за аутентичність у 2021 Ambassadeurs du Pain!
            <br><br>Італійська здоба тривалої ферментації на заквасці, замішана на італійському борошні Manitoba, з в'яленою вишнею, журавлиною, фісташками, апельсиновими цукатами та французьким малиновим шоколадом Varlhona.`,
            price: '930',
            weight: '≈1 килограмм',
            iikoCode: '06778',
            iikoId: '6a2d762f-f4d0-44e2-b4b6-7ac62486cf31'
        },
        /*
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
        */
        {
            id: 'P4',
            imgFile: 'orange_kulich.jpg',
            title: 'Сирна паска в апельсиновому шоколаді',
            description: `Запечений сир з трьома видами родзинок, журавлиною та курагою, здобрений великою кількістю лимонної цедри та апельсиновими цукатами.`,
            price: '490',
            weight: '≈650 грамм',
            iikoCode: '06779',
            iikoId: '66679766-b7be-46f0-a613-3c64bde89063'
        },
        {
            id: 'P5',
            imgFile: 'carskaya.jpg',
            title: 'Шоколадна заварна сирна паска Без ЦУКРУ',
            description: `Найніжніша сирна заварна пасха з бельгійським шоколадом sugar free, з в'яленою вишнею та брауні.`,
            price: '690',
            weight: '≈850 грамм',
            iikoCode: '06780',
            iikoId: '89f28720-7d2d-44a9-9d25-7cd1449af806'
        },
        {
            id: 'P6',
            imgFile: 'yayca.jpg',
            title: 'Набір шоколадних великодніх яєць',
            description: `Яйця з бельгійського білого шоколаду з курагою, хрусткими кульками та фісташками.`,
            price: '450',
            weight: '4шт ≈300 грамм',
            iikoCode: '06781',
            iikoId: '826c72fe-cd28-4bb2-9026-7e73e6eb2e0a'
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
