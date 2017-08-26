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
                                    <Link className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" target="_blank" to={event.event_url}>Get More Info...</Link>
                                     <button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" value="add to favorites" onClick={()=>this.addToList(event)}>Add to favorites</button>
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