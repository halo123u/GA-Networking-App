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
            console.log(res.data)
            this.setState({
                eventInfo: res.data,
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
                            <h3>{event.name}</h3>
                            <h3>{event.group.name}</h3>
                            <h3>{event.venue.name}</h3>
                            <h4>{event.venue.address_1}</h4>
                            <h4>{event.event_url}</h4>
                            <p>{event.description}</p>
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