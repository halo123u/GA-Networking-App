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
        userInfo: null,
        redirect: false
     }
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
        this.setState({userInfo: this.props.data})
        if(this.props.data !== null){
            this.setState({
                redirect: false
            })
            console.log('getting messages')
            axios.get(`/messages/received/${this.props.data.id}`)
            .then(res => {
                console.log(res.data.messages)
                this.setState ({
                    apiDataLoaded: true,
                    apiData: res.data.messages,
                    redirect: false
                })
            }).catch(err=>{console.log(err)})
        }else{
            console.log("messages not loaded")
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
    axios.delete(`/messages/${id}`);
}

renderMessages() {
    if (this.state.apiDataLoaded) {
        return this.state.apiData.map(messages => {
            return (
                <Message key={messages.id} delete={this.deleteMessage} messages={messages} />
            );
        });
    } else return <p>Loading...</p>
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