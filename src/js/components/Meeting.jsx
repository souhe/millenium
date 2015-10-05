import React, {Component, PropTypes} from 'react';
import H3 from './common/H3.jsx';


export default class Meeting extends Component{
    static PropTypes = {
        day: PropTypes.string.required,
        time: PropTypes.string.required    ,
        place: PropTypes.string.required
    }

    render(){
        let {day, time, place} = this.props;
        return this.props.time? (
            <div className="meeting">
                <H3>Termin zbiórki</H3>
                <b>{day} {time}</b> ({place})
            </div>
        ): null;
    }
}
