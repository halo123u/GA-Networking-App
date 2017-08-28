import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Message from './Message';

class DMList extends Component {

constructor(props) {
    super(props);
     this.state= {
        apiDataLoaded: false,
        apiData: null,
        apiDataSent:null,
        userInfo: null,
        redirect: false
     }
}

    componentDidMount() {
        this.setState({userInfo: this.props.data})
        if(this.props.data !== null){
            this.setState({
                redirect: false
            })
            axios.get(`/messages/received/${this.props.data.id}`)
            .then(res => {
                this.setState ({
                    apiDataLoaded: true,
                    apiData: res.data.messages,
                    redirect: false
                })
            }).catch(err=>{console.log(err)});

            axios.get(`/messages/sent/${this.props.data.id}`)
            .then(res => {
                this.setState ({
                    apiDataSent: res.data.messages,
                    redirect: false
                })
            }).catch(err=>{console.log(err)})
        
        }else{
            this.setState({
                redirect: true
            })
        }

        }
        

deleteMessage=(id)=>{
    
    
    let currentMessages = this.state.apiData;
    currentMessages = currentMessages.filter(mssg=>{
            return mssg.id !== id
        });
    this.setState({
        apiData: currentMessages
    });
    let currentSentMessages = this.state.apiDataSent;
    currentSentMessages = currentSentMessages.filter(mssg=>{
            return mssg.id !== id
        });
    this.setState({
        apiDataSent: currentSentMessages
    });
    axios.delete(`/messages/${id}`);
}

renderMessages() {
    if (this.state.apiDataLoaded) {
        return(
            <div>
                <div className="message-tab mdl-card mdl-shadow--8dp">
                    <div className="mdl-card__title">
                        <h2 className="mdl-card__title-text">Received</h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                        {this.state.apiData.map(messages => {
                        return (
                            <Message key={messages.id} delete={this.deleteMessage} messages={messages} />
                        );  
                        })}
                    </div>
                </div>
                <div className="message-tab mdl-card mdl-shadow--8dp">
                    <div className="mdl-card__title">
                        <h2 className="mdl-card__title-text">Sent</h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                        {this.state.apiDataSent.map(messages => {
                            return (
                                <Message key={messages.id} delete={this.deleteMessage} messages={messages} />
                            );  
                        })}
                    </div>
                </div>
            </div>

        )
    } else {
        <div id="p2" className="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>
    }
}

    render(){
        const {redirect} = this.state;
        return (
       <div className="Dm-list">
           {redirect ?(<Redirect to='/profile'/>) : null}
           {this.renderMessages()}
       </div>
        )
    }
}

export default DMList;