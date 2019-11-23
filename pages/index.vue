<template>
    <div>
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
                <img class="logo-img" src="" alt="" />
            </div>
            <div class="default-header__phone">
                <a class="default-header__phone-link" href="tel:+380933479806"
                    >+380933479806</a
                >
            </div>
            <div class="default-header__social">
                <img class="fb-icon" src="" alt="" />
                <img class="insta-icon" src="" alt="" />
                <img class="tripadvisor" src="" alt="" />
            </div>
        </header>
    </div>
</template>

<style lang="scss" scoped>
.bg-video {
    object-fit: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -1;
}

.default-header {
    &__logo {
    }

    &__phone {
    }
}
</style>
