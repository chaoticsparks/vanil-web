export const state = () => ({
    products: [
        {
            id: '1',
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
    ]
});

export const mutations = {};
