<template>
    <GetOneContact :id="routeParam.id"></GetOneContact>
</template>
<script lang="ts">
import { useRoute } from 'vue-router';
import GetOneContact from '../components/GetOneContact.vue'
    export default{
        components: {GetOneContact},
        setup() {
            const route = useRoute()
            const routeParam = JSON.parse(JSON.stringify(route.params))
            return {routeParam}
        }
    }
</script>