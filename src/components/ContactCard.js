import React, {useState} from "react";
import {useDispatch} from "react-redux";
import '../styles/contactCard.scss'
import {deleteContact, editContact, showAlert} from "../redux/actions";

const ContactCard = ({contact}) => {
    const dispatch = useDispatch()
    const [state, setState] = useState({...contact})
    const [toggle, setToggle] = useState(true)

    const inputHandler = event => {
        setState(prevState => ({...prevState, ...{
                [event.target.name]: event.target.value
            }}))
    }

    const editContacts = () => {
        if (!state.name.trim()) {
            return dispatch(showAlert('Поле Имя не может быть пустым'))
        }
        setToggle(!toggle)
        if (toggle){
            return
        }
        dispatch(editContact(state))
    }

  return (
      <div className={toggle ? 'contactCard' : 'editCard'}>
          <input
              className={'contactName'}
              readOnly={toggle}
              type='text'
              name='name'
              value={state.name}
              onChange={inputHandler}/>
          <div>
              <i className="fa fa-phone"/>
              <input
                  readOnly={toggle}
                  type='tel'
                  name='phone'
                  value={state.phone}
                  onChange={inputHandler}/>
          </div>
          <div>
              <i className="fa fa-envelope"/>
              <input
                  readOnly={toggle}
                  type='email'
                  name='email'
                  value={state.email}
                  onChange={inputHandler}/>
          </div>
          <div>
              <i className="fa fa-birthday-cake"/>
              <input
                  readOnly={toggle}
                  type='date'
                  name='birthday'
                  value={state.birthday}
                  onChange={inputHandler}/>
          </div>
          <div className={'cardBtnsWrapper'}>
              <button className={'edit'} onClick={editContacts}>{
                  toggle
                  ? <i className="fa fa-edit"/>
                  :<i className="fa fa-check-square"/>}</button>
              <button className={'trash'} disabled={!toggle} onClick={() => dispatch(deleteContact(contact.id))}>
                  <i className="fa fa-trash"/>
              </button>
          </div>
      </div>
  )
}

export default ContactCard