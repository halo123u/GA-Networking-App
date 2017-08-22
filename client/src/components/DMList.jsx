import React, { Component } from 'react';
import axios from 'axios';

import Message from './Message';

class DMList extends Component {

constructor(props) {
    super(props);
     this.state= {
        apiDataLoaded: false,
        apiData: null,
        userInfo: null
     }
}

componentDidMount() {
    if(this.state.userInfo !== null){
        axios.get(`/messages/receive/${this.props.data.id}`)
        .then(res => {
            console.log(res)
            this.setState ({
                apiDataLoaded: true,
                apiData: res.data.data,
            })
        }).catch(err=>{console.log(err)})
    }
}

renderMessages() {
    if (this.state.apiDataLoaded) {
        return this.state.apiData.map(messages => {
            return (
                <Message key={messages.id} messages={messages} />
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