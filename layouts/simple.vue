<template>
    <div>
        <header class="simple-layout-header">
            <div class="simple-layout-header__logo">
                <img class="logo-img" src="~assets/image/logo.svg" alt="logo" />
            </div>
        </header>
        <main class="simple-layout-container">
            <div class="simple-layout-container__wrapper">
                <nuxt />
            </div>
        </main>
    </div>
</template>

<style lang="scss" scoped>
.simple-layout-container {
    margin: 64px auto 124px;
    width: 100%;
    max-width: 1024px;
    background-color: $text-color-light;
    &__wrapper {
        max-width: 730px;
    }
}
.logo-img {
    fill: black;
}
.simple-layout-header {
    height: 116px;
    border-bottom: 1px solid rgba(80, 201, 206, 0.3);
    display: flex;
    align-items: center;
    &__logo {
        background-color: orange;
        margin-left: 44px;
    }
}
.logo-img {
}
</style>
