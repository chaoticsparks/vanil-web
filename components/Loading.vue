<template>
    <div v-show="loading" class="loading-container">
        <div class="loading">
            <img
                src="~assets/image/loading.svg"
                alt="Loading"
                class="loading__img"
            />
            <span class="loading__text h2-like">{{ loadingText }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        loadingText: {
            default: 'Отправляем данные',
            type: String
        }
    },
    data() {
        return {
            loading: false
        };
    },
    methods: {
        start() {
            this.loading = true;
        },
        finish() {
            this.loading = false;
        }
    }
};
</script>

<style lang="scss" scoped>
.loading-container {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 99;
    background-color: $text-color-light;
}

.loading {
    position: fixed;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    transform: translate(-50%, -50%);

    &__text {
        margin-top: 24px;
        font-size: 16px;
    }
}
</style>
