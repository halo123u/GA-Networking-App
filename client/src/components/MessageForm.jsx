import React, { Component } from 'react';

import axios from 'axios';

class MessageForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: '',
        };
       this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState ({
            [name]: value,
        });
    }

    handleFormSubmit =(e) => {  
        e.preventDefault();   
        axios.post(`/messages/${this.props.sender.id}`,{
            recipient_id: this.props.recipient,
            time_stamp: (Date().split(' ').slice(4, 5).join(' ')),
            content: this.state.text

        }).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
        
    }

   render() {
       return (
             <div className="message-form">
              <h1>Message Form</h1>
            <form onSubmit={(e)=>this.handleFormSubmit(e)} >
{/* 
            <button class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored">
             <i class="material-icons"></i>
            </button> */}

              <div class="mdl-textfield mdl-js-textfield">       
              <input class="mdl-textfield__input" id="hello" type="text" placeholder="Hello..." name="text" value={this.state.text} onChange={this.handleInputChange} />
              <label class="mdl-textfield__label" for="hello"></label>

             <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" id="send" type="submit" value="send" >
             Send
             </button>

            </div>
            </form>
            </div>
       )
   }
}




export default MessageForm;