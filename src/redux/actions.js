import {CREATE_CONTACT, DELETE_CONTACT, EDIT_CONTACT, HIDE_ALERT, SHOW_ALERT} from "./types";

export function createContact(newContact) {
    return{
        type: CREATE_CONTACT,
        payload: newContact
    }
}

export function deleteContact(id) {
    return {
        type: DELETE_CONTACT,
        payload: id
    }
}

export function editContact(editedContact) {
    return {
        type: EDIT_CONTACT,
        payload: editedContact
    }
}

export function showAlert(message) {
    return (dispatch) => {
        dispatch({type: SHOW_ALERT, payload:message})
        setTimeout(() => {
            dispatch(hideAlert())
        }, 2000)
    }

}
export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}