import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class MessageForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: '',
            redirect: false
        };
       this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount() {
        console.log('Checking Logged in Status')
        if(this.props.authState){
            console.log('logged in already')
        }else{
            console.log('not logged in')
        }
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
            this.setState({
                redirect: true
            })
        }).catch(err=>{
            console.log(err);
        })
        
    }

   render() {
       const {redirect} = this.state;
       return (
             <div className="message-form">
              <h1>Message Form</h1>
              {redirect ? <Redirect to='/inbox' /> : null}
            <form onSubmit={(e)=>this.handleFormSubmit(e)} >
              <input type="text" placeholder="Hello" name="text" value={this.state.text} onChange={this.handleInputChange} />
              <input type="submit" value="submit" />
            </form>
            </div>
       )
   }
}

export default MessageForm;