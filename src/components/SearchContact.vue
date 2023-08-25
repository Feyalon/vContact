<template>
    <div class="input-group mb-3 d-flex">
        <input type="text" @change="searchChange($event)" class="form-control" placeholder="Поиск" aria-label="Example text with button addon" aria-describedby="button-addon1">
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
    import axios from 'axios';
    import { useStore } from '../store';
    export default defineComponent({
        setup() {
            const store = useStore()
            const name = ref("")
            let searchText = ref("")
            function searchChange (event: any) {  
                store.dispatch("searchContact", event.target.value)
            };
            return {searchText, searchChange, name}
        }
    })
</script>