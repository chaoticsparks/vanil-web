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
            id: 'P0',
            imgFile: 'panettone.jpg',
            title: 'Італійський панеттон від Vanil',
            description: `
Panettone, створений у філософії haute couture. Натуральна ваніль, боби тонка та клементин. Тривала ферментація на живій Lievito Madre (близько 3 діб) формує легку текстуру й глибокий аромат. У складі - лише преміальні інгредієнти: італійське борошно, новозеландське масло, фісташка, в’ялена вишня та журавлина в іспанському хересі, шоколад Valrhona Framboise.`,
            price: ['950', '1500'],
            weight: '≈450 грамм, ≈750 грамм',
            iikoCode: ['08047', '05900'],
            iikoId: [
                'f8752792-4c1f-446c-a02e-e7298cf81d01',
                '6ef2f8c6-6b8b-44f1-8962-34a6e9fe47da'
            ],
            options: {
                name: 'Вес:',
                values: ['450 грамм, 950 грн.', '750 грамм, 1500грн.'],
                errorText: 'Пожалуйста, укажите вес!'
            }
        },
        /*
      {
          id: 'P1',
          imgFile: 'dubaipanettone.jpg',
          title: 'Дубайський панетон',
          description: `
Цього року ми створили унікальний десерт, який поєднує традиційну італійську рецептуру та нові гастрономічні акценти:<br><br>
✔️Класичне панетонне тісто на заквасці Lievito Madre;<br>
✔️Начинка з фісташкового крему, пасти тахінья та хрусткого тіста катаїфі;<br>
✔️Молочний шоколад у покритті;<br>
✔️Декор із подрібненої фісташки та тіста катаїфі.<br><br>
Цей панетон — справжній шедевр для тих, хто цінує смак та майстерність у кожній деталі.`,
          price: '1600',
          weight: '≈1 кг',
          iikoCode: '07672',
          iikoId: 'f8716069-a2bf-442d-a20f-7e13ba649c16'
      },

      {
          id: 'P1',
          imgFile: 'panettone2.jpg',
          title:
              'La Dolce Trinità: Справжній Італійський Панеттон з Трьома Видами Бельгійського Шоколаду та Бурбонською Ваніллю',
          description: `
Неперевершений десерт з трьома видами бельгійського шоколаду. Збагачений пастою з клементина, ароматом натуральної ванілі, та бобами-тонка.;<br><br>
Близько 3 днів безперервного процесу ферментації тiста на заквасці Lievito Madre;<br><br>
✔️Високобілкове італійське борошно;<br>
✔️Натуральне фермерське вершкове масло;<br>
✔️Бельгійський шоколад темний;<br>
✔️Молочний;<br>
✔️Карамельний.<br><br>
Все це і наша любов до свого ремесла зробили наш панеттон унікальним і гідним найвищих похвал!`,
          price: '1100',
          weight: '≈900 грамм',
          iikoCode: '07195',
          iikoId: 'b33cdd86-819d-47f1-a3a1-8084386de236'
      },
*/
        {
            id: 'P2',
            imgFile: 'shtolen143.jpg',
            title: 'Штолен на натуральній заквасці Lievito Madre',
            description: `Традиційний різдвяний штолен із важкого здобного тіста на високобілковому борошні Manitoba з італійськими апельсиновими цукатами, добірними сухофруктами, мигдалем і фермерським вершковим маслом. Просочується маслом і витримується 3 тижні для глибокого, збалансованого смаку.`,
            price: ['950', '750', '150'],
            weight: '≈750 грамм, ≈550 грамм, ≈100 грамм',
            iikoCode: ['06384', '08029', '08030'],
            options: {
                name: 'Вес:',
                values: [
                    '750 грамм, 950 грн.',
                    '550 грамм, 750грн.',
                    '100 грамм, 150 грн.'
                ],
                errorText: 'Пожалуйста, укажите вес!'
            },
            iikoId: [
                '1b90865b-6292-4062-b836-3abd04cbd832',
                'cd5ce962-517c-4606-a422-3db74ef9ae35',
                '772e866a-c19a-4e1b-9201-90e48b373dd8'
            ]
        },
        {
            id: 'P3',
            imgFile: 'keks23.jpg',
            title: 'Англійський різдвяний кекс',
            description: `Класичний різдвяний кекс на вершковому маслі з трьома видами родзинок, в’яленою журавлиною, вишнею, волоським горіхом та прянощами - імбиром, корицею і мускатним горіхом. Просочується темним ромом, завдяки чому має насичену, маслянисту текстуру та теплий різдвяний аромат.`,
            price: '450',
            weight: '≈470 грамм',
            iikoCode: '04061',
            iikoId: 'e3aec5e9-956f-48e9-a110-23a900c4c6a1'
        },
        {
            id: 'P4',
            imgFile: 'kalach69.jpg',
            title: 'Бріош журавлина & апельсин',
            description: `Ванільна бріош із журавлинним компоте, апельсиновими цукатами та в’яленою журавлиною.`,
            price: '690',
            weight: '≈800 грамм',
            iikoCode: '08045',
            iikoId: '08f36551-9dcb-4713-88e4-19763c504a3a'
        },
        {
            id: 'P5',
            imgFile: 'dubai-kalach.jpg',
            title: 'Бріош Ferrero Rocher',
            description: `Шоколадна бріош із начинкою Nutella та обсмаженим фундуком.`,
            price: '750',
            weight: '≈800 грамм',
            iikoCode: '08046',
            iikoId: '69244426-01ba-45c3-99f3-cb36044cd17c'
        },

        {
            id: 'P6',
            imgFile: 'kalach98.jpg',
            title: 'Бріош із солоною карамеллю, брауні та фундуком',
            description: `Ванільна бріош із солоною карамеллю, шматочками шоколадного брауні та обсмаженим фундуком.`,
            price: '690',
            weight: '≈800 грамм',
            iikoCode: '08044',
            iikoId: '8dea22bf-aa4d-414e-afb7-86f21606e92c'
        },

        {
            id: 'P9',
            imgFile: 'karamel.jpg',
            title: 'Шоколадний коник',
            description: `Коник`,
            price: '290',
            weight: '200 грамм',
            iikoCode: '08041',
            iikoId: 'b4d3ada3-e56d-4e8e-b079-53197bb67a6e'
        },
        /*

        {
            id: 'P10',
            imgFile: 'dubai-choco.jpg',
            title: 'Дубайський шоколад від Vanil',
            description: `Неперевершене поєднання молочного шоколаду, хрусткого тіста катаїфі, фісташкової пасти та пасти тахіні. Справжній смак розкоші, створений для поціновувачів унікальних десертів.`,
            price: '550',
            weight: '160 грамм',
            iikoCode: '07603',
            iikoId: '4d6164b7-e434-41ce-8810-bfd4832e6519'
        },
        */
        {
            id: 'P8',
            imgFile: 'chel.jpg',
            title: 'Імбирний чоловічок ',
            description: ``,
            price: '250',
            weight: '',
            iikoCode: '08034',
            iikoId: '86c945ac-dcc4-44f3-9d07-2e420ba613b5'
        }
        /*
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
         title: 'Різдвяні листівки з авторськими ілюстраціями',
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
    },
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
