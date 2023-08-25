import { createStore, Store } from "vuex"
import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
export interface contact{
    id: number,
    name: string,
    number: string,
    tag: string,
    email: string
}
export interface contactChange {
    name: string,
    number: string,
    tag: string,
    email: string
}
const store = createStore({
    state,
    actions,
    getters,
    mutations
})

export function useStore() {
    return store as Store
}

export default store

