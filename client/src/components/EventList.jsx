import React, { Component } from 'react';
import axios from 'axios';

class EventList extends Component{
    constructor(){
        super();
        this.state ={
            apiLoaded: false,
            apiData: null
        }
    }

    componentDidMount() {
        console.log(this.props.user);   
        axios.get(`/events/myevents/${this.props.user.id}`).then(res=>{
            console.log(res.data);
            this.setState({
                apiData: res.data,
                apiLoaded:true
            });
        }).catch(err=>console.log(err));
    }
 render(){
    if(this.state.apiLoaded) {
      return (
              <ul className='event-info'>
                {this.state.apiData.map(event => {
                  return (
                      <li className='event'>
                          <h2>Event Name:</h2><h4>{event.data.name}</h4>
                          <h2>Event Group Name:</h2> <h4>{event.data.group.name}</h4>
                          {event.data.venue !== undefined ? <div className='venue-name'><h2>Location:</h2> <h4>{event.data.venue.name}</h4></div> : null}
                          {event.data.venue !== undefined ? <div className='venue-address'><h2>Address:</h2> <h4>{event.data.venue.address_1}</h4></div> : null}
                          <h2>Event Page:</h2> <p>{event.data.event_url}</p>
                           ({event.data.description})
                      </li>
                  )
                })}  
              </ul>    
      )
    } else {
        return <div className='loading'><h2>Data Not Loading...</h2></div>
    }
 }
}

export default EventList;