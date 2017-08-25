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
                  {this.state.eventInfo.map((event, i) => {
                    
                    let eventTime = new Date(event.time).toString().split(' ').slice(0, 5).join(' ');
                      
                    return (
<<<<<<< HEAD
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
=======
                        <li className='event'>
                            <h2>Event Name:</h2><h4>{event.name}</h4>
                            <h2>Event Group Name:</h2> <h4>{event.group.name}</h4>
                            {event.venue !== undefined ? <div className='venue-name'><h2>Location:</h2> <h4>{event.venue.name}</h4></div> : null}
                            {event.venue !== undefined ? <div className='venue-address'><h2>Address:</h2> <h4>{event.venue.address_1}</h4></div> : null}
                            <h2>Event Page:</h2> <p>{event.event_url}</p>
                             ({event.description})
                             <input type="button" value="add to my list" onClick={()=>this.addToList(event)}/> 
>>>>>>> 5c7d2fc95e0ba788f41482f6ee5c7f8662dc4177
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