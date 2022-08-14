<template>
<HeaderAll />
<router-view></router-view>
</template>

<script>

import HeaderAll from './components/section/HeaderAll.vue'
export default {
    name: "App",
    components: { HeaderAll }
}


</script>

<style scoped>


</style>
