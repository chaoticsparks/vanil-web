<template>
    <div class="footer-placeholder">
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
                        href="mailto:vanilodesa@gmail.com"
                        target="_blank"
                        ><img
                            class="contact-icon"
                            src="~assets/image/email-icon.svg"
                            alt="email-icon"
                        />vanilodesa@gmail.com</a
                    >
                    <div class="default-footer__contacts-schedule">
                        <img
                            src="~assets/image/schedule-icon.svg"
                            class="contact-icon"
                            alt="schedule-icon"
                        />
                        <span class="default-footer__schedule-text"
                            >ПН-ВС: 8:00 – 18:00</span
                        >
                    </div>
                    <a
                        class="default-footer__contacts-phone"
                        href="tel:+380931414890"
                        ><img
                            src="~assets/image/phone-icon.svg"
                            class="contact-icon"
                            alt="phone-icon"
                        />+38 (093) 141-48-90</a
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

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer-placeholder {
    height: 60px;
    width: 100%;
    @include max-breakpoint(tablet-portrait) {
        height: 98px;
    }
}
.footer-section {
    position: absolute;
    bottom: 0;
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
    @include max-breakpoint(tablet-portrait) {
        height: 98px;
    }
    &__logo {
        margin-left: 20px;
        @include max-breakpoint(tablet-portrait) {
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
            margin-top: 9px;
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
            margin-top: 9px;
            margin-right: 0;
        }
    }
    &__social {
        font-size: 0;
        margin-right: 20px;
        @include max-breakpoint(tablet-portrait) {
            margin-right: 0;
            position: absolute;
            left: 19px;
            bottom: 23px;
        }
    }
    &__social-link {
        margin-left: 8px;
        @include max-breakpoint(tablet-portrait) {
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
    @include max-breakpoint(tablet-portrait) {
        width: 72px;
        height: 100%;
    }
}
</style>
