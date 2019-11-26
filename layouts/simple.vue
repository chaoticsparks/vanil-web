<template>
    <div>
        <header class="simple-layout-header">
            <div class="simple-layout-header__logo">
                <img class="logo-img" src="" alt="" />
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

    &__wrapper {
        max-width: 730px;
    }
}
</style>
