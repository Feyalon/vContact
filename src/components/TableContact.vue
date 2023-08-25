<template>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Тег</th>
      <th scope="col">Имя</th>
      <th scope="col">Имэйл</th>
      <th scope="col">Номер</th>
      <th scope="col">Удаление</th>
      
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in $store.state.contacts" :key="item.id">
        <td>{{ item.tag }}</td>
        <td>
        <RouterLink :to="{path: `/user/${item.id}`}">
            {{ item.name }}
        </RouterLink>
        </td>
        <td>{{ item.email }}</td>
        <td>{{ item.number }}</td>
      <td>
        <button @click="() => deleteContact(item.id)" class="btn btn-danger">
            delete
        </button>
      </td>
    </tr>
    
  </tbody>
</table>
</template>
<script lang="ts">
import { defineComponent, onMounted, onBeforeMount } from 'vue';
import { useStore } from '../store';
import axios from 'axios';
import { RouterLink } from 'vue-router';

    export default defineComponent({
        setup() {
            const store = useStore()
            function update(){
                store.dispatch('getContacts')
            }
            onMounted(() => {
                update()
            })
            onBeforeMount(() => {
                update()
            })
            async function deleteContact(i: number) {
                await axios.delete(`https://feyalonfakeapi.onrender.com/posts/${i}`)
                update()
            }
            return {deleteContact}
        }

    })
</script>