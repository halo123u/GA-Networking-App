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
                  {this.state.eventInfo.map((event, i) => {
                    
                    let eventTime = new Date(event.time).toString().split(' ').slice(0, 5).join(' ');
                      
                    return (
                        <li className='event' key={i}>
                            <div className="events-page mdl-card mdl-shadow--8dp">
                                <div className="mdl-card__title">
                                    <h2 className="mdl-card__title-text">{event.name}</h2>
                                </div>
                                <div className="mdl-card__supporting-text">
                                    <h3 className="subText"> {event.group.name} </h3>
                                    {event.venue !== undefined ? <h2>Location: {event.venue.name} @ {eventTime}</h2> : null}
                                    {event.venue !== undefined ? <h2>Address: {event.venue.address_1}</h2> : null}
                                </div>
                                <div className="mdl-card__actions mdl-card--border">
                                    <a className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary" target="_blank" href = {event.event_url}>Get More Info...</a>
                                </div>
                            </div>                 
                        </li>
                    )
                  })}  
                </ul>
            </div>    
        )
      } else {
          return <div id="p2" className="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>
      }
    }
}

export default Events;