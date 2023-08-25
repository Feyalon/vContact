<template>
<div class="d-flex flex-column">
    <h3>
        Добавление контактов
    </h3>
    <input  type="text" class="form-control mb-3" placeholder="name" aria-label="Example text with button addon" aria-describedby="button-addon1" v-model="name">
    <input type="text" class="form-control mb-3" placeholder="email" aria-label="Example text with button addon" aria-describedby="button-addon1" v-model="email">
    <input type="text" class="form-control mb-3" placeholder="tag" aria-label="Example text with button addon" aria-describedby="button-addon1" v-model="tag">
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="number" aria-label="Example text with button addon" aria-describedby="button-addon1" v-model="number">
        <button class="btn btn-primary" @click="addContact" type="button" id="button-addon1">add</button>
    </div>
</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios  from 'axios';
import { useStore } from '../store';
    export default defineComponent({
        setup() {
            const store = useStore()
            let id = Date.now()
            let name = ref("")

            let email = ref("")
            let number = ref("")
            let tag = ref("")
            

            function update(){
                store.dispatch('getContacts')
                
            }
            async function addContact() {
                await axios.post('https://feyalonfakeapi.onrender.com/posts', {
                    id: id,
                    name: name.value,
                    email: email.value,
                    number: number.value,
                    tag: tag.value
                }).then((status) => {

                    name.value = ""
                    email.value = ""
                    number.value = ""
                    tag.value = ""
                    console.log(status)
                })
                update()
            }
            return {addContact, name, email, number, tag}
        },
    })
</script>