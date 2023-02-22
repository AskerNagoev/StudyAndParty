import React from 'react';
import Events from "../Events/Events";

const Entertainment = (props) => {
    return (
        <div>
            <Events events={props.events}/>
        </div>
    )
}

export default Entertainment;