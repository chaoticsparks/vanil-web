<template>
    <div>
        <section class="default-intro">
            <video
                autoplay
                loop
                muted
                playsInline
                preload="auto"
                class="bg-video"
                width="100"
                height="100"
                poster="~assets/video/video-placeholder.jpg"
            >
                <!--                <source src="~assets/video/vanildark2.webm" type="video/webm" />
                <source src="~assets/video/vanildark2.mp4" type="video/mp4" />
                Извините, Ваш браузер не поддерживает встроенные видео.-->
            </video>
            <div class="video-overlay"></div>
            <header class="default-header">
                <div class="default-header__logo">
                    <nuxt-link to="/">
                        <img
                            class="logo-img"
                            src="~assets/image/logo.svg"
                            alt="logo"
                        />
                    </nuxt-link>
                </div>
                <div class="default-header__phone">
                    <a
                        class="default-header__phone-link"
                        href="tel:+380931414890"
                        >+38 (093) 141-48-90</a
                    >
                </div>
                <div class="default-header__social">
                    <a
                        class="default-header__social-link"
                        href="https://www.facebook.com/vanilbakeryandicecreamery"
                        target="_blank"
                        ><img
                            class="social-icon"
                            src="~assets/image/fb-icon.svg"
                            alt="fb-icon"
                    /></a>
                    <a
                        class="default-header__social-link"
                        href="https://www.instagram.com/vanilodessa/"
                        target="_blank"
                        ><img
                            class="social-icon"
                            src="~assets/image/insta-icon.svg"
                            alt="insta-icon"
                    /></a>
                    <a
                        class="default-header__social-link"
                        href="https://www.tripadvisor.ru/Restaurant_Review-g295368-d12017150-Reviews-Vanil-Odessa_Odessa_Oblast.html"
                        target="_blank"
                        ><img
                            class="social-icon"
                            src="~assets/image/trip-icon.svg"
                            alt="trip-icon"
                    /></a>
                </div>
            </header>
            <div class="intro-text">
                <img
                    src="~assets/image/intro-text.svg"
                    alt="intro"
                    class="intro-text-img"
                />
            </div>
            <div class="scroll-down">
                <span class="scroll-down__text">Заказ</span>
                <img
                    class="scroll-down__img"
                    src="~assets/image/arrow-down.svg"
                    alt="Прокрутите вниз для заказа"
                />
            </div>
        </section>
        <main class="default-container">
            <nuxt />
        </main>
        <Footer />
        <nuxt-link v-show="getCartCounter" to="cart" class="fixed-cart">
            <div class="fixed-cart__icon">
                <img
                    src="~assets/image/fixed-cart-icon.svg"
                    alt="fixed-cart"
                    class="fixed-cart__image"
                />
                <span class="fixed-cart__counter">{{ getCartCounter }}</span>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Footer from '../components/Footer';
export default {
    components: {
        Footer
    },
    computed: {
        ...mapGetters(['getCartCounter'])
    }
};
</script>

<style lang="scss" scoped>
.default-intro {
    height: 100vh;
    min-height: 550px;
    position: relative;
    overflow: hidden;
}

.bg-video {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
}

.video-overlay {
    background-color: black;
    opacity: 0.3;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.default-header {
    margin-top: 20px;
    display: flex;
    align-items: center;
    position: relative;
    height: 76px;
    justify-content: flex-end;
    flex-wrap: wrap;
    @include max-breakpoint(tablet-portrait) {
        justify-content: center;
    }
    &__logo {
        top: 0;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        @include max-breakpoint(tablet-portrait) {
            position: static;
            transform: translate(0, 0);
            flex: 0 0 100%;
            text-align: center;
            padding-bottom: 10px;
        }
    }
    &__phone {
    }
    &__phone-link {
        color: $text-color-light;
        font-size: 18px;
        @include max-breakpoint(mobile-medium) {
            font-size: 16px;
        }
    }
    &__social {
        font-size: 0;
        margin-right: 45px;
        @include max-breakpoint(tablet-portrait) {
            margin-right: 0;
        }
    }
    &__social-link {
        margin-left: 16px;
        @include max-breakpoint(mobile-medium) {
            margin-left: 12px;
        }
    }
}
.logo-img {
    @include max-breakpoint(mobile-medium) {
        width: 127px;
    }
}

.social-icon {
    height: 20px;
    width: 20px;
    @include max-breakpoint(mobile-medium) {
        height: 19px;
        width: 19px;
    }
}

.default-container {
    margin: 150px auto;
    width: 100%;
    max-width: 1392px;
    padding: 0 48px;
    box-sizing: border-box;

    @include max-breakpoint(tablet-portrait) {
        margin: 100px auto;
        padding: 0 36px;
    }

    @include max-breakpoint(mobile-medium) {
        margin: 64px auto;
        padding: 0 16px;
    }
}
.intro-text {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    height: 70%;
    transform: translate(-50%, -50%);
    @include max-breakpoint(tablet-portrait) {
        font-size: 66px;
    }
    @include max-breakpoint(mobile-medium) {
        font-size: 50px;
    }
}
.intro-text-img {
    width: 100%;
    height: 100%;
    @include max-breakpoint(tablet-portrait) {
        width: 390px;
    }
    @include max-breakpoint(mobile-medium) {
        width: 292px;
    }
}

@keyframes scroll-down {
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(8px);
    }
}
.scroll-down {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;

    &__text {
        color: $text-color-light;
        font-size: 16px;
        font-family: 'LawyerGothic', sans-serif;
        text-transform: uppercase;
    }

    &__img {
        margin-top: 8px;
        width: 30px;
        animation-name: scroll-down;
        animation-duration: 1s;
        animation-direction: alternate;
        animation-iteration-count: infinite;
        animation-timing-function: ease;
    }
}
.fixed-cart {
    position: fixed;
    right: 45px;
    top: 108px;
    height: 80px;
    width: 80px;
    border-radius: 50%;
    background-color: $text-color-light;
    opacity: 0.8;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.05);
    border: 1px solid $text-color-location;
    cursor: pointer;
    @include max-breakpoint(tablet-portrait) {
        right: 20px;
        top: 50px;
    }
    @include max-breakpoint(mobile-medium) {
        width: 60px;
        height: 60px;
    }
    &__counter {
        display: inline-block;
        width: 16px;
        height: 13px;
        border-radius: 2px;
        position: absolute;
        top: 23px;
        right: 13px;
        font-family: NotoSans, sans-serif;
        font-weight: normal;
        font-size: 10px;
        opacity: 0.8;
        color: $text-color-dark-brown;
        background-color: white;
        border: 1px solid $text-color-location;
        text-align: center;
        line-height: 1.3;
    }
}
</style>
