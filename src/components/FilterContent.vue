<template>
    <div class="d-flex">
        <select class="form-select" @change="name = $event.target.value" aria-label="Default select example">
            <option value="name">По имени</option>
            <option value="tag">По тегу</option>
            <option value="number">По Номеру</option>
            <option value="email">По имэйлу</option>
        </select>
        <button class="btn btn-primary" @click="filterContent">
            Отфильтровать
        </button>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import {useStore} from '../store/index'
    export default defineComponent({
        setup() {
            const name = ref('')
            const store = useStore()
            function filterContent() {
                store.dispatch("filterContact", name.value)
            }
        return {filterContent, name}
        }
    })
</script>