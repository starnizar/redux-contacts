import {CREATE_CONTACT, DELETE_CONTACT, EDIT_CONTACT} from "./types";

const initialState = {
    contacts:[],
    toggle: true
}

export function contactsReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_CONTACT:
            return {...state, contacts:[...state.contacts, action.payload]}
        case DELETE_CONTACT:
            const updatedContacts = state.contacts.filter(contact => contact.id !== action.payload)
            return {...state, contacts: updatedContacts}
        case EDIT_CONTACT:
            const index = state.contacts.indexOf(state.contacts.find(contact => contact.id === action.payload.id))
            const editedContacts = [...state.contacts]
            editedContacts[index] = action.payload
            return {...state, contacts: editedContacts}
        default: return state
    }
}