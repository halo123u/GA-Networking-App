import React, { Component } from 'react';


class Feed extends Component{
    constructor(props){
        super(props);
        this.state = {
            age: '',
            class: '',
            cohort: '',
            interest: '',
            location: '',
            bio: '',
            picture_url: ''
        }
    }

    
    handleEventChange(e) {
        this.setState ({
            age: '',
            class: '',
            cohort: '',
            interest: '',
            location: '',
            bio: '',
            picture_url: ''

        })
    }


    render(){
        return(
            <h1>Feed</h1>
        )
    }
}

export default Feed;
