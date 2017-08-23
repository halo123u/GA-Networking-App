import React, { Component } from 'react';


const Message =(props)=> {    
    return (
      <div className= "message-container">
          <p>{props.messages.first_name} {props.messages.last_name}</p>
          <p>{props.messages.sender_id}</p>
          <p>{props.messages.time_stamp} </p>
          <p>{props.messages.content}</p>
          <p onClick={()=>props.delete(props.messages.id)}>DELETE</p> 
      </div>

      );

    }


export default Message;