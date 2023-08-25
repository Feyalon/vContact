import axios  from "axios"
import { contact, contactChange } from "."
export const getContacts = ({commit}) => {
    axios.get("https://feyalonfakeapi.onrender.com/posts").then((response) => {
        commit('SET_CONTACTS', response.data)
    })
}
export const getContact = ({commit}, contactId) => {
    axios.get(`https://feyalonfakeapi.onrender.com/posts?id=${contactId}`).then((response) => {
                commit('SET_CONTACT', response.data)
        })
}
export const searchContact = async ({commit}, searchText) => {
    if(searchText == ""){
        await axios.get("https://feyalonfakeapi.onrender.com/posts").then((response) => {
            commit('SET_CONTACTS', response.data)
        })
    }else{
        if(Number(searchText)){
            await axios.get(`https://feyalonfakeapi.onrender.com/posts?number_like=${searchText}`).then((response) => {
            console.log(searchText)
            commit('SET_CONTACTS', response.data)
        })
        }else{
            await axios.get(`https://feyalonfakeapi.onrender.com/posts?name_like=${searchText}`).then((response) => {
            console.log(searchText)
            commit('SET_CONTACTS', response.data)
    })
        }
    }
}
export const filterContact = ({commit}, name) => {
    axios.get(`https://feyalonfakeapi.onrender.com/posts?_sort=${name}`).then((response) => {
        commit('SET_CONTACTS', response.data)
    })
}