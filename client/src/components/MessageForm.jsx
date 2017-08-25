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
    componentDidMount() {
        if(this.props.authState){
            this.setState({redirect: false})
        }else{
            this.setState({
                redirect: true
            })
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
           <div className="message-form mdl-card mdl-shadow--8dp">
               {redirect ? <Redirect to='/inbox' /> : null}
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">Send A Message</h2>
                </div>
                <form onSubmit={(e)=>this.handleFormSubmit(e)} >
                    <div className="mdl-card__supporting-text">
                        <div className="mdl-textfield mdl-js-textfield">  
                            <textarea className="mdl-textfield__input" id="hello" type="text" name="text" value={this.state.text} onChange={this.handleInputChange} rows= "5"></textarea>
                            <label className="mdl-textfield__label" htmlFor="hello">Send a message...</label>
                        </div>
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" id="send" type="submit" value="send" >
                            <i className="material-icons">send</i>
                        </button>
                    </div>
                </form>
            </div>
       )
   }
}




export default MessageForm;