import React, { Component } from 'react';

import axios from 'axios';

class Feed extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: null,
            dataLoaded: false,
        }
      this.renderFeed = this.renderFeed.bind(this);  
    }

    componentDidMount() {
        this.setState({userInfo: this.props.data})
        if (this.state.userInfo !== null) {
            axios.get('/profile/feed').then(res => {
                this.setState({
                    data: res.data,
                    dataLoaded: true,
                })
            }).catch(err=> {console.log(err)});
        }
    }

    renderFeed() {
        console.log(this.state.data);
        if (this.state.dataLoaded) {
            return (
            <div className='feed-container'>    
              <ul className='feed'>  
                {this.state.data.map(profile => {
                    return (
                        <li className='feed-profile' key={profile.user_id}>
                            <h2>{profile.first_name} {profile.last_name}</h2>
                            <h3>{profile.age}</h3>
                            <h3>{profile.class}</h3>
                            <p>{profile.bio}</p>
                            <button>Send Message</button>
                        </li>    
                    )
                })}
            </ul>
           </div> 
            )
        }
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
            {this.renderFeed()}
           </div> 
        )
    }
}

export default Feed;
