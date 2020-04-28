import React from 'react'
import propTypes from 'prop-types'
import User from './User'
import { fetchData } from '../actions/injectDbData'

function Message ({message, author, datetime, key}) {

    const url = "http://localhost:8080/";


    fetch(url)
    .then(response => response.json())
    .then(res=>{
        fetchData(res);
    });

    if(User.getUser() === author){
        return (
            <div className="d-flex justify-content-end" key={key}>
                <div className="chat-my-message d-flex flex-row msg">
                    <div>
                        <span>{author}</span>
                        <p>{message}</p>
                        <small>{datetime}</small>
                    </div>
                </div>
            </div>
        );
    }else{
        return (
            <div className="d-flex justify-content-start">
                <div className="chat-message d-flex msg">
                    <div>
                        <span>{author}</span>
                        <p>{message}</p>
                        <small>{datetime}</small>
                    </div>
                </div>
            </div>
        );
    }
}

Message.propTypes = {
    message: propTypes.string.isRequired,
    author: propTypes.string.isRequired,
    datetime: propTypes.string.isRequired
}

export default Message;