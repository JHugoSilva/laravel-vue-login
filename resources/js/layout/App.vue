<template>
    <div>
        <Header/>
        <router-view></router-view>
    </div>
</template>

<script>

    import Header from './header.vue'

    export default {
        name:'App',
        components: {
            Header
        }
    }

</script>
