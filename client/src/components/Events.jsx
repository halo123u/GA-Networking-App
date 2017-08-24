import React from 'react';
import axios from 'axios';

class Events extends Component {
    constructor() {
        super();
        this.state = {
            eventInfo: null,
        }
    }
    componentDidMount() {
        axios.get(`https://api.meetup.com/2/open_events?zip=10010&and_text=False&offset=0&city=New+York&format=json&limited_events=False&topic=technology&state=ny&photo-host=public&page=15&radius=2&desc=False&status=upcoming&sig_id=194427674&sig=d42a130a9aa999fefef47099dd667b44183feae3&sign=true&key=${process.env.API_KEY}`)
        .then(res => {
            console.log(res.data)
            this.setState({
                eventInfo: res.data.results,
                // eventName: res.data.results.name,
                // groupName: res.data.results.group.name,
                // venueName: res.data.results.venue.name,
                // venueAddress: res.data.results.venue.address_1,
                // eventUrl: res.data.results.event_url,
                // description: res.data.results.description,
            })
        })
    }


    render() {
        return (
            <div className='events-container'>
                <ul className='event-info'>
                  {this.state.eventInfo.map(event => {
                    return (
                        <li>{event.name}</li>
                        <li>{event.group.name}</li>
                        <li>{event.venue.name}</li>
                        <li>{event.venue.address_1}</li>
                        <li>{event.event_url}</li>
                        <li>{event.description}</li>
                    )
                  })}  
                </ul>
            </div>    
        )
    }
}

export default Events;