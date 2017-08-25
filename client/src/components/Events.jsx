import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';

class Events extends Component {
    constructor() {
        super();
        this.state = {
            eventInfo: null,
            eventInfoLoaded: false,
            redirect: false
        }
    }
    componentDidMount() {
        axios.get('/events')
        .then(res => {
            console.log(res)
            this.setState({
                eventInfo: res.data.results,
                eventInfoLoaded: true,
            })
        })
    }
    addToList=(event)=>{
        console.log('this link works');
        console.log(event);
        // console.log(this.props);
        axios.post('/events',{event: event , user_id: this.props.data.id});
        this.setState({
            redirect:true
        });
    }


    render() {
      if(this.state.eventInfoLoaded) {
          const {redirect}= this.state;  
        return (
            <div className='events-container'> 
                {redirect ? <Redirect to='/myeventlist'/> : null}
                <ul className='event-info'>
                  {this.state.eventInfo.map(event => {
                    return (
                        <li className='event'>
                            <h2>Event Name:</h2><h4>{event.name}</h4>
                            <h2>Event Group Name:</h2> <h4>{event.group.name}</h4>
                            {event.venue !== undefined ? <div className='venue-name'><h2>Location:</h2> <h4>{event.venue.name}</h4></div> : null}
                            {event.venue !== undefined ? <div className='venue-address'><h2>Address:</h2> <h4>{event.venue.address_1}</h4></div> : null}
                            <h2>Event Page:</h2> <p>{event.event_url}</p>
                             ({event.description})
                             <input type="button" value="add to my list" onClick={()=>this.addToList(event)}/> 
                        </li>
                    )
                  })}  
                </ul>
            </div>    
        )
      } else {
          return <div className='loading'><h2>Data Not Loading...</h2></div>
      }
    }
}

export default Events;