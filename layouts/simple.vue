<template>
    <div>
        <header class="simple-layout-header">
            <div class="simple-layout-header__logo">
                <img
                    class="logo-img"
                    src="~assets/image/logo-brown-big.svg"
                    alt="logo"
                />
            </div>
        </header>
        <main class="simple-layout-container">
            <div class="simple-layout-container__wrapper">
                <nuxt />
            </div>
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
    </div>
</template>

<style lang="scss" scoped>
.simple-layout-container {
    margin: 64px auto 124px;
    width: 100%;
    max-width: 1024px;
    background-color: $text-color-light;
    box-sizing: border-box;
    &__wrapper {
        max-width: 730px;
    }
    @include max-breakpoint(tablet-landscape) {
        padding-left: 20px;
        padding-right: 20px;
    }
}
.simple-layout-header {
    height: 116px;
    border-bottom: 1px solid $text-color-location;
    display: flex;
    align-items: center;
    &__logo {
        margin-left: 44px;
    }
}
</style>
