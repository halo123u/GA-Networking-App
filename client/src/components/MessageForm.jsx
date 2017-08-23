import React, { Component } from 'react';

import axios from 'axios';

class MessageForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: '',
        };
       this.handleInputChange = this.handleInputChange.bind(this);
       this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState ({
            [name]: value,
        });
    }

    handleFormSubmit(e) {
     axios
       .post('/messages', {
           text: this.state.text,
       })
       .then(res => {
           console.log(res);
       }).catch(err => console.log(err));
       e.target.reset();
    }

   render() {
       return (
             <div className="message-form">
              <h1>Message Form</h1>
            <form onSubmit={(e) => this.handleFormSubmit}>
              <input type="text" placeholder="Hello" name="text" value={this.state.text} onChange={this.handleInputChange} />
              <input type="submit" value="submit" />
            </form>
            </div>
       )
   }
}

export default MessageForm;