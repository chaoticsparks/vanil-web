<template>
    <div class="wrapper">
        <header class="header">
            <img class="logo-img" src="~assets/image/logo.svg" alt="logo" />
            <a class="phone" href="tel:+380931414890">+38 (093) 14 14 890</a>
        </header>
        <main class="main">
            <div class="main__img-block">
                <img
                    src="~assets/image/products/main.jpg"
                    alt="Мини тортик Аutumn kiss!"
                />
            </div>
            <article class="main__text-block">
                <h1>Мини тортик "Аutumn kiss"!</h1>
                <div class="price_weight">
                    <span class="price">420 ₴</span>
                    <span class="weight">~ 750г</span>
                </div>
                <div class="buy">
                    <div v-if="!ordered" class="order">
                        <input
                            v-model="phone"
                            v-mask="'+38 (###) ###-##-##'"
                            type="text"
                            placeholder="Номер телефона *"
                            class="cart-form__phone form-default"
                            :class="{
                                'cart-form-error': phoneError
                            }"
                            @keyup="checkValidity"
                        />
                        <button class="btn btn-order" @click="submitForm">
                            Заказать
                        </button>
                    </div>
                    <span v-if="phoneError" class="error-text">
                        Пожалуйста, укажите номер телефона полностью.
                    </span>
                    <p v-if="ordered" class="order-success">
                        Спасибо, ваш заказ в обработке. <br />Наш менеджер
                        свяжется с вами в ближайшее время!
                    </p>
                </div>

                <p>
                    Лучший подарок для преподавателей, учителей и репетиторов!
                </p>
                <p>Порадует за чашкой кофе или чая с тёплыми мыслями о вас!</p>

                <p>
                    Мы создали особый десерт с осенним дизайном и декором
                </p>

                <div class="ingredients-block">
                    <span class="bolder">В составе:</span>
                    <ul class="ingredients">
                        <li>
                            — бисквит на миндальной пасте 100% с
                            карамелизированными кедровыми орешками
                        </li>
                        <li>— нежный крем чиз</li>
                        <li>— облепиховое конфи с куантро</li>
                    </ul>
                </div>
                <p>
                    Упаковываем в милую подарочную упаковку
                </p>
            </article>
        </main>
        <div class="photos">
            <div class="photos__big">
                <img
                    src="~assets/image/products/big.jpg"
                    alt=""
                    class="big-img"
                />
                <img
                    src="~assets/image/products/mobile-big.jpg"
                    alt=""
                    class="mobile-big-img"
                />
            </div>
            <div class="photos__left">
                <img src="~assets/image/products/left.jpg" alt="" />
            </div>
            <div class="photos__right">
                <img src="~assets/image/products/right.jpg" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mask } from 'vue-the-mask';
import { ViberClient } from 'messaging-api-viber';
export default {
    directives: { mask },
    data: () => ({
        phone: '',
        phoneError: false,
        ordered: false
    }),
    computed: {
        ...mapGetters(['getCartCounter'])
    },
    methods: {
        checkValidity() {
            if (this.phone.length === 19) {
                this.phoneError = false;
            }
        },
        async submitForm() {
            if (this.phone.length < 19) {
                this.phoneError = true;
                return;
            }
            this.phoneError = false;
            const client = ViberClient.connect({
                accessToken:
                    '4ab3498feb67d4ea-13b937d35cdef139-8f4d592ff4262b1e',
                origin: '/api/'
            });

            let info;
            try {
                info = await client.getAccountInfo();
            } catch (e) {}

            const members = info.members.map(member => member.id);

            const messageString = `Заказ Мини тортик Аutumn kiss!\nНомер телефона: ${this.phone}`;
            await client.broadcastText(members, messageString);
            this.ordered = true;
        }
    }
};
</script>

<style lang="scss" scoped>
.wrapper {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @include max-breakpoint(tablet-landscape) {
        padding: 0 16px;
    }
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 32px 0 48px;
}

.phone {
    color: $accent;
    text-decoration: none;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.33;

    &:hover {
        text-decoration: underline;
    }
}
a {
    color: $accent;
    font-weight: 500;
}
.main {
    display: flex;
    justify-content: space-between;

    &__text-block {
        color: #686868;
        width: 49%;

        @include max-breakpoint(mobile-medium) {
            width: 100%;
        }
    }

    &__img-block {
        width: 44%;

        img {
            width: 100%;
            height: auto;
        }

        @include max-breakpoint(mobile-medium) {
            width: 100%;
            margin-bottom: 32px;
        }
    }

    @include max-breakpoint(mobile-medium) {
        flex-direction: column;
    }
}

h1 {
    font-size: 36px;
    font-weight: 500;
    line-height: 1.39;
    color: #686868;
    margin-top: 0;

    @include max-breakpoint(mobile-medium) {
        font-size: 24px;
        line-height: 1.67;
    }
}

.price_weight {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 16px 0 32px;
    width: 94%;
}

.price {
    font-size: 36px;
    font-weight: bold;
    line-height: 0.56;
    color: $accent;
}
.weight {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.67;
    color: #b5b5b5;
}
p {
    margin: 10px 0;
    line-height: 2.14;
}
.ingredients-block {
    margin: 32px 0;
}
.ingredients {
    margin: 0;
    padding: 0;
    li {
        line-height: 32px;
        list-style: none;
    }
}
.bolder {
    font-weight: 500;
    color: #414040;
}
.photos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 64px;
    margin-bottom: 128px;

    img {
        width: 100%;
        height: auto;
    }

    &__big {
        width: 100%;
        margin-bottom: 64px;

        @include max-breakpoint(mobile-medium) {
            margin-bottom: 32px;
        }
    }

    &__left {
        width: 45%;

        @include max-breakpoint(mobile-medium) {
            width: 100%;
            margin-bottom: 32px;
        }
    }

    &__right {
        width: 45%;

        @include max-breakpoint(mobile-medium) {
            width: 100%;
        }
    }

    @include max-breakpoint(mobile-medium) {
        flex-direction: column;
    }
}

.big-img {
    @include max-breakpoint(mobile-medium) {
        display: none;
    }
}

.mobile-big-img {
    display: none;
    @include max-breakpoint(mobile-medium) {
        display: block;
    }
}

.order {
    display: flex;
}

.buy {
    display: flex;
    flex-direction: column;
    height: 74px;
    justify-content: space-between;
}

.btn-order {
    margin-top: 0;
    margin-left: 16px;
    width: auto;
    padding: 0 24px;
    height: auto;
    font-family: inherit;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 16px;
    background-color: $accent;
    transition: background-color 0.5s ease;

    &:hover {
        background-color: darken($accent, 10);
    }
}

.error-text {
    font-size: 13px;
    color: red;
}

.order-success {
    color: green;
}
</style>
