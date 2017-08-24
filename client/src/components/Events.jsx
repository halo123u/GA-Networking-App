import React, { Component } from 'react';
import axios from 'axios';

class Events extends Component {
    constructor() {
        super();
        this.state = {
            eventInfo: null,
        }
    }
    componentDidMount() {
        axios.get(`https://api.meetup.com/2/open_events?&sign=true&photo-host=public&zip=10010&country=United States&topic=technology&city=New York&state=NY&radius=2&page=15&key=${process.env.API_KEY}`)
        .then(res => {
            console.log(res.data)
            this.setState({
                eventInfo: res.data,
            })
        })
    }


    render() {
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
    }
}

export default Events;