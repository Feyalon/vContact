<template>
    <div>
        <RouterLink to="/">
            <button class="btn btn-primary m-3">
                Назад
            </button>
        </RouterLink>
        <div v-for="item in $store.state.contact" :key="item.id" v-if="!update" class="m-3">
            <h1>
                Имя: {{ item.name }}
            </h1>
            <h1>
                Имэйл: {{ item.email }}
            </h1>
            <h1>
               Номер: {{ item.number }}
            </h1>
            <h1>
                Тег: {{ item.tag }}
            </h1>
        </div>
        <div v-if="update" class="mt-3">
            <UpdateContact :id="id"></UpdateContact>
        </div>
        <button class="btn btn-primary m-3" @click="update = true" v-if="!update">
            Редактировать контакт
        </button>
    </div>
</template>
<script lang="ts">
import {defineComponent, ref, onMounted} from 'vue'
import UpdateContact from '../components/UpdateContact.vue'
import {useStore} from '../store/index'
    export default defineComponent({
        components: {UpdateContact},
        props: ['id'],
        setup(props) {
            let update: any = ref(false)
            const store = useStore()
            const result: any = ref(null)
            console.log(props.id)
            onMounted(() => {
                store.dispatch('getContact', props.id)
            })
            return {result, update}
        }
    })
</script>