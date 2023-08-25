<template>
    <ul>
        <li class="mb-3">
            <input type="text" placeholder="Новое имя" :value="name" @input="name = $event.target.value" required>
        </li>
        <li class="mb-3">
            <input type="text" placeholder="Новый имэйл" @input="email = $event.target.value" required>
        </li>
        <li class="mb-3"> 
            <input type="text" placeholder="Новый номер" @input="number = $event.target.value" required>
        </li>
        <li class="mb-3">
            <input type="text" placeholder="Новый тег" @input="tag = $event.target.value" required>
        </li>
        <li>
            <RouterLink to="/">
                <button class="btn btn-primary mt-3" @click="() => {updateContact()}">
                    Подтвердить
                </button>
            </RouterLink>
        </li>
    </ul>
</template>
<script lang="ts">
import {defineComponent, ref, defineProps} from 'vue'
import axios from 'axios'
export default defineComponent({
    props: ['id'],
    setup(props) {
        console.log(props)
        const name = ref("")
        const email = ref("")
        const number = ref("")
        const normalId = JSON.parse(JSON.stringify(props.id))
        console.log(normalId)
        const tag = ref("")
        async function updateContact() {
            axios.put(`https://feyalonfakeapi.onrender.com/posts/${normalId}`, {
                name: name.value,
                email: email.value,
                number: number.value,
                tag: tag.value
            })
        }
        return {updateContact, name, email, number, tag}
    },
})
</script>