import React, { Component } from 'react';
import axios from 'axios';

import Message from './Message';

class DMList extends Component {

constructor(props) {
    super(props);
     this.state= {
        apiDataLoaded: false,
        apiData: null,
        userInfo: props.data
     }
}

componentDidMount() {
    
    if(this.state.userInfo !== null){
        console.log('getting messages')
        axios.get(`/messages/received/${this.props.data.id}`)
        .then(res => {
            console.log(res.data.messages)
            this.setState ({
                apiDataLoaded: true,
                apiData: res.data.messages,
            })
        }).catch(err=>{console.log(err)})
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
        return (
       <div className="Dm-list">
           {this.renderMessages()}
       </div>
        )
    }
}

export default DMList;