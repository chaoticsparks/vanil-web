<template>
    <div>
        <header class="simple-layout-header">
            <div class="simple-layout-header__logo">
                <nuxt-link to="/">
                    <img
                        class="logo-img"
                        src="~assets/image/logo-brown-big.svg"
                        alt="logo"
                    />
                </nuxt-link>
            </div>
        </header>
        <main class="simple-layout-container">
            <div class="simple-layout-container__wrapper">
                <nuxt />
            </div>
        </main>
        <Footer />
    </div>
</template>

<script>
import Footer from '../components/Footer';
export default {
    components: {
        Footer
    }
};
</script>

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
    @include max-breakpoint(mobile-medium) {
        margin-top: 19px;
        padding-left: 9px;
        padding-right: 9px;
    }
}
.simple-layout-header {
    height: 116px;
    border-bottom: 1px solid $border-transparent;
    display: flex;
    align-items: center;
    @include max-breakpoint(mobile-medium) {
        height: 64px;
    }
    &__logo {
        margin-left: 44px;
        @include max-breakpoint(mobile-medium) {
            margin-left: 9px;
        }
    }
}
.logo-img {
    @include max-breakpoint(mobile-medium) {
        width: 115px;
        height: auto;
    }
}
</style>
