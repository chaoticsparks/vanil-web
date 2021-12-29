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
            id: 'P8',
            imgFile: 'chrismas-box.jpg',
            title: 'Christmas box',
            description: `Большой подарочный бокс, включает в себя:<br><br>
•панеттоне на закваске<br>
•штоллен на закваске с марципаном<br>
•рождественский английский кекс<br>
•соленая карамель<br>
•соевая свеча в подарочной упаковке<br>
•набор рождественских открыток<br>
•набор стикеров`,
            price: '2700',
            weight: '',
            iikoCode: '05917',
            iikoId: '17070a3d-6660-4ac6-af56-465af5bdd2f2'
        },
        {
            id: 'P1',
            imgFile: 'panettone.jpg',
            title: 'Настоящий итальянский панеттоне от Vanil',
            description: `
Пряный, сладкий и тёплый аромат натуральной ванили в сочетании с бобами тонка и мякотью клементина;<br>
Около 3-х дней непрерывного процесса ферментации теста на закваске Lievito Madre;<br><br>
✔️Высокобелковая итальянская мука;<br>
✔️Новозеландское сливочное масло;<br>
✔️Фисташка высшего качества;<br>
✔️Вяленая вишня и клюква, замоченные в испанском хересе;<br>
✔️Valrhona - французский шоколад со вкусом малины Framboise.<br><br>
Всё это и наша любовь к своему ремеслу сделали наш panettone уникальным и достойным наивысших похвал!`,
            price: '900',
            weight: '≈1 кг',
            iikoCode: '05900',
            iikoId: '6ef2f8c6-6b8b-44f1-8962-34a6e9fe47da'
        },
        {
            id: 'P2',
            imgFile: 'shtolen143.jpg',
            title: 'Штоллен на натуральной закваске Lievito Madre с марципаном',
            description: `В составе только премиальные ингредиенты:<br>
✔️Высокобелковая итальянская мука  Manitoba;<br>
✔️ Итальянская марципановая паста;<br>
✔️Итальянские апельсиновые цукаты;<br>
✔️Новозеландское сливочное масло;<br>
✔️Сухофрукты замоченные в роме;<br><br>
Традиционное тяжелое сдобное тесто на большом количестве сливочного масла, вымоченные в роме изюм коринка, курага, изюм светлый, изюм коричневый, миндаль, апельсиновая цедра.
После выпечки пропитывается сливочным маслом и выдерживается около трёх недель. `,
            price: '650',
            weight: '≈900 грамм',
            iikoCode: '06384',
            iikoId: '1b90865b-6292-4062-b836-3abd04cbd832'
        },

        {
            id: 'P3',
            imgFile: 'keks23.jpg',
            title: 'Английский рождественский кекс',
            description: `Его аромат-это ощущение благополучия и удовлетворённости, а вкус даёт чувство уюта и комфортного общения.<br><br>
✔️три вида изюма;<br>
✔️вяленная клюква;<br>
✔️вяленная вишня;<br>
✔️грецкий орех;<br>
✔️имбирь, корица и мускатный орех;<br><br>
  Для его приготовления нужно не менее 6 недель. За время созревания они становятся лучше, нежнее, вкуснее. Их текстура превращается в нечто маслянистое, а откусывая маленький кусочек, ощущается легкое игривое пощипывание на языке. `,
            price: '490',
            weight: '≈470 грамм',
            iikoCode: '04061',
            iikoId: 'e3aec5e9-956f-48e9-a110-23a900c4c6a1'
        },
        {
            id: 'P4',
            imgFile: 'kalach69.jpg',
            title: 'Рождественская бриошь (калач) с клюквой и вишней',
            description: `Традиционное легкое ванильное сдобное тесто на сливочном масле, кули из свежей клюквы и вишни, с добавлением апельсиновой цедры.`,
            price: '430',
            weight: '≈700 грамм',
            iikoCode: '05066',
            iikoId: 'a243baa4-889f-4726-b7be-4f4c2dbf2710'
        },
        {
            id: 'P5',
            imgFile: 'kalach46.jpg',
            title:
                'Рождественская бриошь(калач) с маком и апельсиновыми цукатами',
            description: `Традиционное лёгкое ванильное сдобное тесто на сливочном масле, мак, цукаты вымоченные в ликере Куантро, апельсиновое кули.`,
            price: '430',
            weight: '≈700 грамм',
            iikoCode: '05077',
            iikoId: 'babf2c10-63cc-435e-951c-55ce3ac69a29'
        },
        {
            id: 'P6',
            imgFile: 'kalach98.jpg',
            title:
                'Рождественская бриошь(калач) с соленой карамелью, фундуком и шоколадом.',
            description: `Традиционное лёгкое ванильное сдобное тесто на сливочном масле, соленая карамель собственного приготовления, дробленый фундук, шоколадная крошка.`,
            price: '470',
            weight: '≈700 грамм',
            iikoCode: '05088',
            iikoId: '244c7959-41ea-4dba-9f82-6483f8c8bb2b'
        },
        {
            id: 'P7',
            imgFile: 'svechi.jpg',
            title: 'Свечи из коллекции NATURE',
            description: `Аромат Рождества в стеклянной колбе!<br>
Время горения 40 часов.<br>
Деревянный фетиль.<br>
100% натуральный Соевый воск производства США.<br>
Арома масла,производство Франции.<br>
Сертификат безопасности, сертификат Skin safety, декларация vegan friendly.<br><br>
ароматы:<br>
•winter pine<br>
•citrus<br>
•vanila<br>
`,
            price: '550',
            weight: '',
            iikoCode: '06403',
            iikoId: '9cf5827c-2111-4aba-a422-384b6e83c621'
        },
        {
            id: 'P9',
            imgFile: 'otrkitki.jpg',
            title: 'Рождественские открытки с авторскими иллюстрациями',
            description: `набор 6шт`,
            price: '120',
            weight: '',
            iikoCode: '06419',
            iikoId: '4c6d1e12-b0fb-42ed-ac2c-78fcc882e6f0'
        },
        {
            id: 'P10',
            imgFile: 'stickers.jpg',
            title: 'Набор стикеров с авторскими иллюстрациями',
            description: ``,
            price: '85',
            weight: '',
            iikoCode: '06402',
            iikoId: 'b1476cf3-cd44-43d0-a2a4-4671482d5cb2'
        }
        /*
       {
           id: 'P8',
           imgFile: 'trufel-box.jpg',
           title: 'Шкатулка с трюфелями (12шт)',
           description: `Трюфели ручной работы из премиального бельгийского шоколада пяти разных вкусов:<br>- лимонный<br>- дор-блю с грецким орехом и карамельным шоколадом<br>- клубничный<br>- имбирный пряник <br>- с солёной карамелью`,
           price: '280',
           weight: '',
           iikoCode: '05922',
           iikoId: 'f519dda8-9b23-44ac-b03e-50ef60041857'
       },
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
       {
           id: 'P12',
           imgFile: 'pryanya.jpg',
           title: 'Пряня',
           description: `Печенье из песочного орехового теста с миндальной мукой, покрытое темным бельгийским шоколадом и посыпанное дробленым миндалем и миндальными лепестками`,
           price: '≈35',
           weight: '',
           iikoCode: '05113',
           iikoId: '0289ab44-9efd-4546-8dc2-f935b8da41a2'
       },
     {
         id: 'P13',
         imgFile: 'pryanya.jpg',
         title: 'Пряня',
         description: `Печенье из песочного орехового теста с миндальной мукой, покрытое белым бельгийским шоколадом и посыпанное фисташками и сублимированной малиной`,
         price: '35',
         weight: '',
         iikoCode: '05115',
         iikoId: 'c9e18ab2-fe77-4926-a801-3825b63ac216'
     }
     ,
       {
           id: 'P14',
           imgFile: 'otkritka.jpg',
           title: 'Открытка Рождественский Щелкунчик',
           description: ``,
           price: '25',
           weight: '',
           iikoCode: '05905',
           iikoId: 'f42b40e0-edcd-46cd-b8c9-caff11ba0fdd'
       }
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
