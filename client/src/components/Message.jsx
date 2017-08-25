import React, { Component } from 'react';


const Message =(props)=> {    
    return (
        <div className="demo-list-action mdl-list">
            <div className="mdl-list__item">
                <span className="mdl-list__item-primary-content">
                    <i className="material-icons mdl-list__item-icon">person</i>
                    <span>{props.messages.first_name} {props.messages.last_name}</span>
                </span>
                <a onClick={()=>props.delete(props.messages.id)} className="mdl-list__item-secondary-action" href="#"><i className="material-icons">delete</i></a>
            </div>
            <div className="messageContent">
                <li>{props.messages.time_stamp}</li>
                <li>{props.messages.content}</li>
            </div>
        </div>
      );

    }


export default Message;