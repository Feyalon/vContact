import { contact } from ".";

export const SET_CONTACTS = (state, contacts: contact) => {
    state.contacts = contacts
}
export const SET_CONTACT = (state, contact: contact) => {
    state.contact = contact
}
export const UPDATE_CONTACT = (state, contact: contact) => {
    state.contact = contact
}