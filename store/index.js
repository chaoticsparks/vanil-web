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
            imgFile: 'paskavanil.jpg',
            title: 'Великодня паска від Vanil',
            description: `Розкішна великодня паска, створена за технологією панетоне.<br><br>
Здобне вологе тісто на італійському борошні Manitoba, вимішане на великій кількості жовтків і фермерського масла.<br><br>
Додаємо ароматичну пасту, як у панетоне - з натуральної ванілі та бобів тонка, для глибокого й складного аромату.<br><br>
На вибір:<br>
— в’ялена журавлина, родзинки, курага та мигдаль<br>
— шматочки шоколаду, курага та апельсинові цукати`,
            price: '950',
            weight: '≈750 грам',
            iikoCode: '06776',
            iikoId: '788f9a72-32d3-4549-a255-9b94f164fdb5'
        },
        {
            id: 'P2',
            imgFile: 'paskanutella.jpg',
            title: 'Великодня паска Nutella',
            description: `Здобна, пухка паска на італійському борошні Manitoba з великою кількістю жовтків і фермерського масла.<br><br>
Усередині - щедра начинка зі справжньої Nutella.<br><br>
Чи може бути ще краще?<br>
Так. Ми додали ще більше Nutella.`,
            price: '650',
            weight: '≈500 грам',
            iikoCode: '08118',
            iikoId: '1dc268fe-ba04-4318-9d77-12d66a2e7b4c'
        },
      {
        id: 'P3',
        imgFile: 'paskalotusbiscoff.jpg',
        title: 'Великодня паска Lotus Biscoff',
        description: `Пухка здобна паска на італійському борошні Manitoba, вимішана на жовтках і фермерському маслі.<br><br>
Усередині - кремова начинка з Lotus Biscoff з насиченим карамельним смаком, легкою пряністю та тією самою впізнаваною печеньковістю.`,
        price: '650',
        weight: '≈500 грам',
        iikoCode: '08109',
        iikoId: 'f8921c0c-c4b2-4d10-a83d-7ab421863e32'
      },
      {
        id: 'P4',
        imgFile: 'paskapistachiocream.jpg',
        title: 'Великодня паска Pistachio Cream',
        description: `Пухка здобна паска на італійському борошні Manitoba, вимішана на жовтках і фермерському маслі.<br><br>
Усередині - крем з італійської фісташкової пасти: ніжний, з тонким горіховим смаком і легкою солодкістю.<br><br>
Вишукана, м’яка, з оксамитовою текстурою та витонченим післясмаком.`,
        price: '650',
        weight: '≈500 грам',
        iikoCode: '08114',
        iikoId: '0adbd1bc-4bfb-410b-8b5b-2224791305c2'
      },
      {
        id: 'P5',
        imgFile: 'sirnapaska.jpg',
        title: 'Запечена великодня сирна паска',
        description: `Ніжна запечена сирна паска з оксамитовою текстурою та насиченим вершковим смаком.<br><br>
Готується на основі відбірного сиру, вершкового масла та яєць, з легкою цитрусовою ноткою.<br><br>
Усередині - курага, в’ялена журавлина, лимонні цукати та фісташка.<br><br>,
Ідеальна для святкового столу та затишних великодніх моментів 💛`,
        price: '750',
        weight: '≈600 грам',
        iikoCode: '07863',
        iikoId: 'c3490745-2657-4685-8177-e8d268eba095'
      },
      {
        id: 'P6',
        imgFile: 'sirnapaskafistashka.jpg',
        title: 'Заварна фісташкова сирна паска з вишнею Amarena',
        description: `Ніжна заварна сирна паска з шовковою текстурою та насиченим фісташковим смаком.<br><br>
На основі відбірного сиру, вершків і жовтків з додаванням фісташкового праліне.<br><br>
Усередині - вишня Amarena та подроблена фісташка.<br><br>,
Кремова, вишукана, з глибоким післясмаком.`,
        price: '1100',
        weight: '≈850 грам',
        iikoCode: '06128',
        iikoId: 'e5606cc2-d1bd-4281-a842-4ff97801f7bd'
      },
      {
        id: 'P7',
        imgFile: 'paskamalutka.jpg',
        title: 'Паска «Малютка»',
        description: ``,
        price: ['250', '250', '250'],
        weight: '≈150 грам',
        options: {
          name: 'Смак на вибір:',
          values: ['Nutella - Пухка здобна паска з ніжною текстурою та насиченим шоколадно-горіховим серцем Nutella.',
            'Cолона карамель - Пухка ванільна паска з кремовою начинкою солоної карамелі - баланс солодкого й легкої солоності.',
          `Лимонний курд - Легка здобна паска з яскравою начинкою лимонного курду - освіжаюча кислинка та ніжна кремовість.`],
          errorText: 'Будь ласка>, виберіть смак!'
        },
        iikoCode: ['08112', '08110', '08111'],
        iikoId: ['d0b9b1bb-58a9-4961-8e66-06509a841b9d', '8b25413b-4c74-4a11-9d47-b581503f1893', '32dbed6c-2509-4ef9-b3ba-dee5245c4dd7']
      },
      {
        id: 'P8',
        imgFile: 'cakepopsiyayca.jpg',
        title: 'Набір кейкпопсів «Великодні яйця» (3 шт)',
        description: `Ніжні кейкпопси у формі яєць, створені на основі справжньої паски.<br><br>
Усередині - соковита текстура та яскравий «жовток» із ганаша манго-маракуйя, що додає легкої тропічної свіжості.<br><br>
Зовні - хрустка оболонка з рожевого шоколаду.`,
        price: '480',
        weight: '',
        iikoCode: '08119',
        iikoId: 'fc6966ce-2ba3-43f7-baae-be43a3c6112b'
      },
      {
        id: 'P9',
        imgFile: 'panettonevanil.jpg',
        title: 'Справжній італійський панеттон від Vanil',
        description: `Пряний, солодкий та теплий аромат натуральної ванілі у поєднанні з бобами тонка та м'якоттю клементину.
Близько 3 днів безперервного процесу ферментації тiста на заквасці Lievito Madre.<br><br>
✔️Високобілкове італійське борошно;<br>
✔️Новозеландське вершкове масло;<br>
✔️Фісташка вищої якості;<br>
✔️В'ялена вишня та журавлина, замочені в іспанському хересі;<br>
✔️Valrhona – французький шоколад зі смаком малини Framboise.<br><br>
Все це і наша любов до свого ремесла зробили наш панеттон унікальним і гідним найвищих похвал!`,
        price: '950',
        weight: '≈450 грам',
        iikoCode: '08047',
        iikoId: 'f8752792-4c1f-446c-a02e-e7298cf81d01'
      },
/*
        {
            id: 'P3',
            imgFile: 'paskalotusbiscoff.jpg',
            title: 'Великодня паска-малютка з нутелою',
            description: ``,
            price: '210',
            weight: '≈150 грам',
            iikoCode: '07861',
            iikoId: '7cd30e5c-0f64-4e0e-acf6-b34202fe4a28'
        },
        {
            id: 'P4',
            imgFile: 'kulich4.jpg',
            title: 'Великодня паска малютка з солоною карамеллю тоффі',
            description: ``,
            price: '210',
            weight: '≈150 грам',
            iikoCode: '07862',
            iikoId: 'fdda2cd0-a415-47b1-8715-253d14055487'
        },*/
        /* {
            id: 'P8',
            imgFile: 'panettone.jpg',
            title: 'Справжній італійський панеттон від Vanil',
            description: `
Пряний, солодкий та теплий аромат натуральної ванілі у поєднанні з бобами тонка та м'якоттю клементину;<br><br>
Близько 3 днів безперервного процесу ферментації тiста на заквасці Lievito Madre;<br><br>
✔️Високобілкове італійське борошно;<br>
✔️Новозеландське вершкове масло;<br>
✔️Фісташка вищої якості;<br>
✔️В'ялена вишня та журавлина, замочені в іспанському хересі;<br>
✔️Valrhona – французький шоколад зі смаком малини Framboise.<br><br>
Все це і наша любов до свого ремесла зробили наш панеттон унікальним і гідним найвищих похвал!`,
            price: '1900',
            weight: '≈1 кг',
            iikoCode: '05900',
            iikoId: '6ef2f8c6-6b8b-44f1-8962-34a6e9fe47da'
        },
        {
            id: 'P9',
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
            weight: '≈750 грамм',
            iikoCode: '07195',
            iikoId: 'b33cdd86-819d-47f1-a3a1-8084386de236'
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
            imgFile: 'panettone3.jpg',
            title: 'Панеттон з фісташковим кремом',
            description: `Пухкий, вологий, та пряний панеттон, збагачений ароматами клементинів, натуральної ванілі та бобів тонка з серединкою фісташкового крему.
<br><br>Щедро вкритий шапкою подрібнених фісташок.`,
            price: '1500',
            weight: '≈750 грамм',
            iikoCode: '07368',
            iikoId: 'e367c32c-c70f-4e5f-8acf-08f6b463d606'
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
            id: 'P5',
            imgFile: 'carskaya.jpg',
            title: 'Шоколадна заварна сирна паска Без ЦУКРУ',
            description: `Найніжніша сирна заварна пасха на подушці насиченого брауні. З бельгійським шоколадом sugar free та в'яленою журавлиною.`,
            price: '850',
            weight: '≈850 грамм',
            iikoCode: '07366',
            iikoId: 'df39ca6e-e107-4902-a055-6877c6a7b9b7'
        },
         */
       /* {
            id: 'P5',
            imgFile: 'baked_kulich.jpg',
            title: 'Запечна сирна паска в бельгійському шоколаді',
            description: `Запечений сир з журавлиною,курагою та фісташками, здобрений великою кількістю лимонної цедри та апельсиновими цукатами.`,
            price: '650',
            weight: '≈500 грам',
            iikoCode: '07863',
            iikoId: 'c3490745-2657-4685-8177-e8d268eba095'
        },
        {
            id: 'P6',
            imgFile: 'yayca.jpg',
            title: 'Набір шоколадних великодніх яєць',
            description: `Яйця з бельгійського шоколаду з дубайською начинкою, та з білого шоколаду з хрусткими кульками та пухнастим тістом пішмані.`,
            price: '650',
            weight: '4шт ≈360 грам',
            iikoCode: '07857',
            iikoId: '3a4f14ea-e101-49e6-8b98-d2e0964d942c'
        },
        {
            id: 'P7',
            imgFile: 'yayca.jpg',
            title: 'Набір шоколадних великодніх яєць',
            description: `Яйця з бельгійського шоколаду з дубайською начинкою, та з білого шоколаду з хрусткими кульками та пухнастим тістом пішмані.`,
            price: '330',
            weight: '2шт ≈180 грам',
            iikoCode: '07858',
            iikoId: '5cc37471-cd45-4a92-ba91-8bb07bd3980f'
        }*/

        /*{
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
        },*/

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
