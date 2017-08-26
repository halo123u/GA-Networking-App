import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import axios from 'axios';

class EventList extends Component{
    constructor(){
        super();
        this.state ={
            apiLoaded: false,
            apiData: null,
            redirect: false
        }
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
        console.log(this.props.user);   
        if(this.props.user !== null){
            axios.get(`/events/myevents/${this.props.user.id}`).then(res=>{
                console.log(res.data);
                this.setState({
                    apiData: res.data,
                    apiLoaded:true,
                    redirect: false
                });
            }).catch(err=>console.log(err));
        }else{
            this.setState({
                redirect: true
            })
        }
    }
    removeFromList=(data)=>{
        axios.delete(`/events/${data.event_id}`).then(res=>{
            console.log(res);
            let currentEvents = this.state.apiData;
            console.log(currentEvents);
            currentEvents = currentEvents.filter(event=>{
                    return event.event_id !== data.event_id
                });
            this.setState({
                apiData: currentEvents
            },()=>{
                console.log(currentEvents);
            });

        }).catch(err=>{
            console.log(err);
        })
    }

    renderEventList(){
         if(this.state.apiLoaded) {
            return (
                    <ul className='event-info'>
                    {this.state.apiData.map((event, i) => {
                        console.log(event)
                        let eventTime = new Date(event.data.time).toString().split(' ').slice(0, 5).join(' ');
                        return (
                            <li className='event' key={i}>
                                <div className="events-page mdl-card mdl-shadow--8dp">
                                    <div className="mdl-card__title">
                                        <h2 className="mdl-card__title-text">{event.data.name}</h2>
                                    </div>
                                    <div className="mdl-card__supporting-text">
                                        <h3 className="subText"> {event.data.group.name} </h3>
                                        {event.data.venue !== undefined ? <h2>Location: {event.data.venue.name} @ {eventTime}</h2> : null}
                                        {event.data.venue !== undefined ? <h2>Address: {event.data.venue.address_1}</h2> : null}
                                    </div>
                                    <div className="mdl-card__actions mdl-card--border">
                                    <button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" value="add to favorites" onClick={()=>this.removeFromList(event)}>Delete from favorites</button>
                                        <Link className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" target="_blank" to={event.data.event_url}>Get More Info...</Link>
                                    </div>
                                </div>                 
                            </li>
                        )
                    })}  
                    </ul>
            )
        } else {
            return <div id="p2" className="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>
        }
    }
    render(){
        const {redirect} = this.state;
       return(
            <div className='events-container'> 
                {redirect ? <Redirect to='/login'/> : null}
                {this.renderEventList()}
            </div>
       )
    }
}

export default EventList;