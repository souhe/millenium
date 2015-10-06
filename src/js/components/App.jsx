import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as linksActionCreators from '../modules/links';
import * as infoActionCreators from '../modules/info';

import Header from './Header';
import Footer from './Footer';

@connect(
    state => ({links: state.links, teams: state.info.teams, galleries: state.info.galleries}),
    dispatch => ({ infoActions: bindActionCreators(infoActionCreators, dispatch), linksActions: bindActionCreators(linksActionCreators, dispatch)  })
)
class App extends Component{
    static propTypes = {
        children: PropTypes.object.isRequired,
    }

    render() {
        let{location, teams, galleries, links} = this.props;
        return (
            <div>
                <Header location={location} teams={teams} galleries={galleries}/>

                <div className="row content">
                    <div className="large-12 column">
                    {this.props.children}
                    </div>
                </div>

                <Footer links={links}/>
            </div>
        );
    }

    componentDidMount(){
        this.props.linksActions.fetchLinks();
        this.props.infoActions.fetchInfo();
    }
}

export default App;
