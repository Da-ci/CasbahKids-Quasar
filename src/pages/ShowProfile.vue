<template>
    <q-page :class=windowSize()>

    </q-page>
</template>

<script>
export default {
    data() {
        return {
            windowWidth: window.innerWidth,
        };
    },
    methods: {
        windowSize() {

            if (599.99 > this.windowWidth > 0)
                return 'margin-bottom'
            else if (1023.99 > this.windowWidth && this.windowWidth > 600)
                return 'q-pa-sm'
            else if (1439.99 > this.windowWidth && this.windowWidth > 1024)
                return 'q-pa-md'
            else if (1919.99 > this.windowWidth && this.windowWidth > 1440)
                return 'q-pa-lg'
            else if (this.windowWidth > 1920)
                return 'q-pa-xl'
        }
    },
};
</script>

<style scoped>

</style>
