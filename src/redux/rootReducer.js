import {combineReducers} from "redux";
import {contactsReducer} from "./contactsReducer";
import {appReducer} from "./appReducer";

export const rootReducer = combineReducers({
    contacts:contactsReducer,
    app: appReducer
})