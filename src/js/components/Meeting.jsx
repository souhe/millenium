import React, {Component, PropTypes} from 'react';

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
                <h3>Termin zbiórki</h3>
                <b>{day} {time}</b> {place}
            </div>
        ): null;
    }
}
