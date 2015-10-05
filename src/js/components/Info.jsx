import React, {Component, PropTypes} from 'react';
import Cadre from './Cadre';
import Contact from './Contact';

import Markdown from 'react-markdown';
import H1 from './common/H1';

export default class Info extends Component{
    static propTypes = {
        info: PropTypes.object
    }

    render(){
        var {info} = this.props;

        return (
            <div>
                <H1>{info.title}</H1>
                <Markdown source={info.description} />
                <Cadre list={info.cadre} />
                <Contact {...info.contact} />
            </div>
        );
    }
}
