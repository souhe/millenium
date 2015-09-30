import React, {Component, PropTypes} from 'react';

export default class Cadre extends Component{
    static propTypes = {
        list: PropTypes.array
    }

    render(){
        var {list} = this.props;
        var content = list ? list.map((item) => {
            return (
                <li>
                    <label>{item.title} : </label>
                    <span>{item.name}</span>
                </li>
            );
        }) : null;

        return (
            <ul className="info">
                {content}
            </ul>
        );
    }
}
