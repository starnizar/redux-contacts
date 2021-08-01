import React from "react";
import ContactCard from "./ContactCard";
import { useSelector} from "react-redux";

const ContactsList = () => {
    const contacts = useSelector( state => state.contacts.contacts)

    if (!contacts.length) {
        return (
            <h3 style={{marginLeft:'20px'}}>У вас пока нет контактов</h3>
        )
    }
    return contacts.map(contact => <ContactCard contact={contact} key={contact.id}/>)
}

export default ContactsList