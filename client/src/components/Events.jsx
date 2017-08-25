import React, { Component } from 'react';
import axios from 'axios';

class Events extends Component {
    constructor() {
        super();
        this.state = {
            eventInfo: null,
            eventInfoLoaded: false,
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


    render() {
      if(this.state.eventInfoLoaded) {  
        return (
            <div className='events-container'>
                <ul className='event-info'>
                  {this.state.eventInfo.map(event => {
                    
                    let eventTime = new Date(event.time).toString().split(' ').slice(0, 5).join(' ');
                      
                    return (
                        <li className='event'>
                            <h2>Event Name:</h2> <h4>{event.name}</h4>
                            <h2>Group:</h2> <h4>{event.group.name}</h4>
                            <h2>Time:</h2> <h4>{eventTime}</h4>
                            {event.venue !== undefined ? <div className='venue-name'><h2>Location:</h2> <h4>{event.venue.name}</h4></div> : null}
                            {event.venue !== undefined ? <div className='venue-address'><h2>Address:</h2> <h4>{event.venue.address_1}</h4></div> : null}
                            <h2>Event Page:</h2> <a href = {event.event_url}>{event.event_url}</a>
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