export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: 'Vanil Кафе-кондитерська',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    '🥚 Пасхальный кулич, панеттон, творожная пасха, сдобный краффин 🐇 Заказать'
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: '~/components/Loading.vue',
    /*
     ** Global CSS
     */
    css: ['normalize.css', '~assets/styles/main.scss'],
    /*
     ** SCSS styles that won't be in build but used in components
     */
    styleResources: {
        scss: [
            '~assets/styles/01_settings/*.scss',
            '~assets/styles/02_tools/*.scss'
        ]
    },
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [{ src: '~plugins/vue-datepicker.client.js', ssr: false }],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        // Doc: https://github.com/nuxt-community/style-resources-module/
        '@nuxtjs/style-resources'
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, { isClient, loaders: { vue } }) {
            vue.transformAssetUrls.video = ['poster'];
        },
        babel: {
            plugins: ['@babel/plugin-proposal-optional-chaining']
        }
    }
};
