import React, { Component } from 'react';

import axios from 'axios';

class Feed extends Component{
    constructor(props){
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            age: '',
            class: '',
            // cohort: '',
            // interest: '',
            // location: '',
            bio: '',
        //     picture_url: ''
        }
    }

    componentDidMount() {
        axios.get('/profile/feed').then(res => {
           console.log(res);
            this.setState({
                first_name: res.data.first_name,
                last_name: res.data.last_name,
                age: res.data.age,
                class: res.data.class,
                bio: res.data.bio,
           }) 
        })
    }
    
    // handleEventChange(e) {
    //     this.setState ({
    //         age: '',
    //         class: '',
    //         cohort: '',
    //         interest: '',
    //         location: '',
    //         bio: '',
    //         picture_url: ''

    //     })
    // }


    render(){
        return(
            <h1>Feed</h1>
        )
    }
}

export default Feed;
