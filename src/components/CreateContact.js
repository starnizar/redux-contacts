import React, {useState} from 'react'
import '../styles/createContact.scss'
import {useDispatch, useSelector} from "react-redux";
import {createContact, showAlert} from "../redux/actions";
import Alert from "./Alert";

const CreateContact = () => {
        const alert = useSelector(state => state.app.alert)
        const dispatch = useDispatch()
        const [state, setState] = useState({
                name:'',
                phone:'',
                email:'',
                birthday:'',
        })

        const submitHandler = event => {
                event.preventDefault()
                // const {name, phone, email, birthday} = state
                // const newContact = {
                //         name, phone, email, birthday,
                //         id: Date.now().toString()
                // }

                const newContact = {...state, id: Date.now().toString()}
                if (!state.name.trim()) {
                        return dispatch(showAlert('Поле Имя не может быть пустым'))
                }
                dispatch(createContact(newContact))
                setState({
                        name:'',
                        phone:'',
                        email:'',
                        birthday:'',
                })
        }

        const changeInputHandler = event => {
                setState(prevState => ({...prevState,...{
                        [event.target.name]:event.target.value
                }}))
        }

    return (
        <form onSubmit={submitHandler}>
            {alert && <Alert message={alert}/>}
            <div className={'formWrapper'}>
                <div className={'inputWrapper'}>
                    <label htmlFor='name'>Имя</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={state.name}
                        onChange={changeInputHandler}
                    />
                </div>
                <div className={'inputWrapper'}>
                    <label htmlFor='phone'>Телефон</label>
                    <input
                        type='tel'
                        id='phone'
                        name='phone'
                        value={state.phone}
                        onChange={changeInputHandler}
                    />
                </div>
                <div className={'inputWrapper'}>
                    <label htmlFor='email'>Почта</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={state.email}
                        onChange={changeInputHandler}
                    />
                </div>
                <div className={'inputWrapper'}>
                    <label htmlFor='birthday'>День рождения</label>
                    <input
                        className={'date'}
                        type='date'
                        id='birthday'
                        name='birthday'
                        value={state.birthday}
                        onChange={changeInputHandler}
                    />
                </div>
            </div>
            <button type='submit'>Добавить</button>
        </form>
    )
}

export default CreateContact