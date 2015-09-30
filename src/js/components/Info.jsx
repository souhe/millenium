import React, {Component, PropTypes} from 'react';
import Cadre from './Cadre.jsx';

export default class Info extends Component{
    static propTypes = {
        info: PropTypes.object
    }

    render(){
        var {info} = this.props;
        var content = info.description ? info.description.map((item) => <p>{item}</p>) : null;

        return (
            <div className="info">
                <h3>{info.title}</h3>
				{content}

                <h4>Kadra</h4>
                <Cadre list={info.cadre} />
            </div>
        );
    }
}
