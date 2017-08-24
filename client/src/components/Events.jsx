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
                    return (
                        <li className='event'>
                            <h2>Event Name:</h2> <h4>{event.name}</h4>
                            <h2>Event Group Name:</h2> <h4>{event.group.name}</h4>
                            {/* <h2>{event.venue.name}</h2>
                            <h4>{event.venue.address_1}</h4> */}
                            <h2>Event Page:</h2> <p>{event.event_url}</p>
                            <p>Event Description: {event.description}</p>
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