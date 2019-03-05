import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Let\'s hit the beach!',
        iconLeft: <i className="icon-left massive sun icon"></i>,
        iconRight: <i className="icon-right massive sun icon"></i>
    },
    winter: {
        text: 'Brr, it is chilly!',
        iconLeft: <i className="icon-left massive snowflake icon"></i>,
        iconRight: <i className="icon-right massive snowflake icon"></i>
    }
};

const getSeason = (lat, month) => {
    // if in Northern Hemisphere -- lat > 0: 
    // Summer = April - Sept == month[3:8]
    // Else Winter
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};
// Returned Component
const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconLeft, iconRight } = seasonConfig[season]; 

    return (
        <div className={`season-display ${season}`}>
            <div>{iconLeft}</div>
            <h1>{text}</h1>
            <div>{iconRight}</div>
        </div>
    );
}
export default SeasonDisplay;