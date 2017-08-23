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
           console.log(res.data);
           console.log(res.data[0]);
            this.setState({
                first_name: res.data[0].first_name,
                last_name: res.data[0].last_name,
                age: res.data[0].age,
                class: res.data[0].class,
                bio: res.data[0].bio,
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
           <div className='feed-container'> 
            <h1>Feed</h1>
            <h2>{this.state.first_name} {this.state.last_name}</h2>
            <h3>{this.state.age}</h3>
            <h3>{this.state.class}</h3>
            <p>{this.state.bio}</p>
           </div> 
        )
    }
}

export default Feed;
