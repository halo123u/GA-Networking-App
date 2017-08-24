import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Feed extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: null,
            dataLoaded: false,
            userInfo: null,
            redirect: false
        }
      this.renderFeed = this.renderFeed.bind(this);  
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
        if (this.props.data !== null) {
            this.setState({redirect: false})
            axios.get('/profile/feed').then(res => {
                this.setState({
                    data: res.data,
                    dataLoaded: true,
                })
            }).catch(err=> {console.log(err)});
        }else{
            console.log('feed not loaded yet')
            this.setState({redirect: true})
        }
    }

    sendMessage=(id)=>{
            console.log(`sending message to ${id}`);
            this.props.recipient(id);
            this.setState({redirect:true});
    }

    renderFeed() {
        console.log(this.state.data);
        if (this.state.dataLoaded) {
            return (
            <div className='feed-container'> 
                {this.state.redirect ?(<Redirect to={`/sendMessage`} />) : null}   
              <ul className='feed'>  
                {this.state.data.map(profile => {
                    return (
                        <li className='feed-profile' key={profile.user_id}>
                            <img src={profile.picture_url} />
                            <h2>{profile.first_name} {profile.last_name}</h2>
                            <h2>Age:</h2> <h3>{profile.age}</h3>
                            <h2>Class:</h2> <h3>{profile.class}</h3>
                            <h2>Bio:</h2> <p>{profile.bio}</p>
                            <button onClick={(()=>this.sendMessage(profile.user_id))}>Send Message</button>
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
        const {redirect} = this.state;
        return(
           <div className='feed-container'> 
            <h1>Feed</h1>
            {redirect ?(<Redirect to='/profile'/>) : null}
            {this.renderFeed()}
           </div> 
        )
    }
}

export default Feed;
