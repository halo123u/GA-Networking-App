import React, { Component } from 'react';


class Message extends Component {
    constructor(props) {
      super(props);
      this.state = {

      };

    }

render() {
   return (
     <div className= "message-container">
        <p>{props.name_from}</p>
        <p>{props.time_stamp} </p>
        <p>{props.content}</p>
            <Link to={#}/>
     </div>

     );

  }

}


export default Message;