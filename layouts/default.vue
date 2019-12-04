<template>
    <div>
        <section class="default-intro">
            <video
                autoplay
                loop
                muted
                class="bg-video"
                width="100"
                height="100"
                poster="~assets/video/video-placeholder.jpg"
            >
                <source src="~assets/video/vanildark2.webm" type="video/webm" />
                <source src="~assets/video/vanildark2.mp4" type="video/mp4" />
                Извините, Ваш браузер не поддерживает встроенные видео.
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
                        href="tel:+380933479806"
                        >+380933479806</a
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
            <h1 class="intro-text">
                Merry Christmas<br />
                and<br />
                Happy New Year
            </h1>
        </section>
        <main class="default-container">
            <nuxt />
        </main>
        <section class="footer-section">
            <footer class="default-footer">
                <div class="default-footer__logo">
                    <nuxt-link to="/">
                        <img
                            class="logo-brown-img"
                            src="~assets/image/logo-brown.svg"
                            alt="logo"
                        />
                    </nuxt-link>
                </div>
                <div class="default-footer__contacts">
                    <a
                        class="default-footer__contacts-email"
                        href="mailto:info@vanil.od.ua"
                        target="_blank"
                        ><img
                            class="contact-icon"
                            src="~assets/image/email-icon.svg"
                            alt="email-icon"
                        />info@vanil.od.ua</a
                    >
                    <div class="default-footer__contacts-schedule">
                        <img
                            src="~assets/image/schedule-icon.svg"
                            class="contact-icon"
                            alt="schedule-icon"
                        />
                        <span class="default-footer__schedule-text"
                            >ПН-ВС: 9:00 – 22:00</span
                        >
                    </div>
                    <a
                        class="default-footer__contacts-phone"
                        href="tel:+380933479806"
                        ><img
                            src="~assets/image/phone-icon.svg"
                            class="contact-icon"
                            alt="phone-icon"
                        />+380 73 077 7065</a
                    >
                </div>
                <div class="default-footer__social">
                    <a
                        class="default-footer__social-link"
                        href="https://www.facebook.com/vanilbakeryandicecreamery"
                        target="_blank"
                        ><img
                            class="social-icon"
                            src="~assets/image/fb-icon-brown.svg"
                            alt="fb-icon-brown"
                    /></a>
                    <a
                        class="default-footer__social-link"
                        href="https://www.instagram.com/vanilodessa/"
                        target="_blank"
                        ><img
                            class="social-icon"
                            src="~assets/image/insta-icon-brown.svg"
                            alt="insta-icon-brown"
                    /></a>
                    <a
                        class="default-footer__social-link"
                        href="https://www.tripadvisor.ru/Restaurant_Review-g295368-d12017150-Reviews-Vanil-Odessa_Odessa_Oblast.html"
                        target="_blank"
                        ><img
                            class="social-icon"
                            src="~assets/image/trip-icon-brown.svg"
                            alt="trip-icon-brown"
                    /></a>
                </div>
            </footer>
        </section>
        <nuxt-link v-if="getCartCounter" to="cart" class="fixed-cart">
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
export default {
    computed: {
        ...mapGetters(['getCartCounter'])
    }
};
</script>

<style lang="scss" scoped>
.default-intro {
    height: 100vh;
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
    white-space: nowrap;
    color: $text-color-light;
    font-size: 100px;
    font-family: RosamundaOne, sans-serif;
    text-align: center;
    line-height: 0.9;
    font-weight: normal;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @include max-breakpoint(tablet-portrait) {
        font-size: 66px;
    }
    @include max-breakpoint(mobile-medium) {
        font-size: 50px;
    }
}
.footer-section {
    width: 100%;
    background-color: $text-color-brown-transparent;
}
.default-footer {
    margin: 0 auto;
    max-width: 1392px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: normal;
    font-size: 12px;
    flex-wrap: wrap;
    position: relative;
    @include max-breakpoint(mobile-medium) {
        height: 98px;
    }
    &__logo {
        margin-left: 20px;
        @include max-breakpoint(mobile-medium) {
            margin-left: 0;
            position: absolute;
            left: 19px;
            top: 23px;
        }
    }
    &__contacts {
        display: flex;
        align-items: center;
        margin-left: auto;
        @include max-breakpoint(tablet-portrait) {
            flex-direction: column;
            align-items: normal;
            order: 3;
            margin-right: 20px;
        }
    }
    &__contacts-email {
        display: flex;
        align-items: center;
        margin-right: 24px;
        color: $text-color-brown;
        @include max-breakpoint(tablet-portrait) {
            font-size: 12px;
            margin-right: 0;
        }
    }
    &__contacts-schedule {
        display: flex;
        align-items: center;
        margin-right: 24px;
        @include max-breakpoint(tablet-portrait) {
            font-size: 12px;
            margin-top: 4px;
            margin-right: 0;
        }
    }
    &__contacts-phone {
        display: flex;
        align-items: center;
        color: $text-color-brown;
        margin-right: 50px;
        @include max-breakpoint(tablet-portrait) {
            font-size: 12px;
            margin-top: 4px;
            margin-right: 0;
        }
    }
    &__social {
        font-size: 0;
        margin-right: 20px;
        @include max-breakpoint(mobile-medium) {
            margin-right: 0;
            position: absolute;
            left: 19px;
            bottom: 23px;
        }
    }
    &__social-link {
        margin-left: 8px;
        @include max-breakpoint(mobile-medium) {
            margin-left: 9px;
            &:first-of-type {
                margin-left: 0;
            }
        }
    }
}
.contact-icon {
    height: 18px;
    width: 18px;
    margin-right: 6px;
    @include max-breakpoint(tablet-portrait) {
        height: 14px;
        width: 14px;
    }
}
.logo-brown-img {
    @include max-breakpoint(mobile-medium) {
        width: 72px;
        height: 100%;
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
