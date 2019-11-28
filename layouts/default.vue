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
                poster="~assets/video/video-placeholder.png"
            >
                <!--<source src="~assets/video/flower.webm" type="video/webm" />
<source src="~assets/video/flower.mp4" type="video/mp4" />-->
                Извините, Ваш браузер не поддерживает встроенные видео.
            </video>
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
        <footer class="default-footer">
            <div class="default-header__logo">
                <nuxt-link to="/">
                    <img
                        class="logo-img"
                        src="~assets/image/logo.svg"
                        alt="logo"
                    />
                </nuxt-link>
            </div>
        </footer>
    </div>
</template>

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
}

.default-container {
    margin: 150px auto;
    width: 100%;
    max-width: 1024px;
}
.intro-text {
    height: 270px;
    width: 585px;
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
        height: 180px;
        width: 390px;
        font-size: 66px;
    }
    @include max-breakpoint(mobile-medium) {
        height: 135px;
        width: 293px;
        font-size: 50px;
    }
}
</style>
