import React from 'react'
import '../styles/alert.scss'

const Alert = ({message}) => {
    return (
        <div className={'alert'}>
            <i className="fa fa-exclamation-circle"/>{message}
        </div>
    )
}

export default Alert