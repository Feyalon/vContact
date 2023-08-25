
<template>
    <br>
    <SearchContact></SearchContact>
    <FilterContent></FilterContent>
    <h1>
        Список контактов
    </h1>
    <TableContact></TableContact>
    <NewContact></NewContact>
</template>
<script lang="ts">
import NewContact from '../components/NewContact.vue'
import SearchContact from '../components/SearchContact.vue'
import TableContact from '../components/TableContact.vue'
import FilterContent from '../components/FilterContent.vue'
export default {
    components: {SearchContact, TableContact, NewContact, FilterContent},
    setup(){
        
        
        
        return {}
    }
}
</script>