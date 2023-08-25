<template>
    <GetOneContact :id="routeParam.id"></GetOneContact>
</template>
<script lang="ts">
import { onMounted, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import useStore  from '../store';
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