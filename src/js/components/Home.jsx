import React, {Component, PropTypes} from 'react';
import * as infoActionCreators from '../modules/info';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Info from './Info';
import NewsFeed from './NewsFeed';
import Paper from './common/Paper';

@connect(
    state => ({info: state.info}),
    dispatch => ({ actions: bindActionCreators(infoActionCreators, dispatch) })
)
class Home extends Component{
    static propTypes = {
        info: PropTypes.object,
        actions: PropTypes.object
    }
    render(){
		let info = this.props.info;
		return (
            <div className="row">
                <div className="large-8 medium-8 small-12 column">
                    <Paper>
                        <Info info={info} />
                    </Paper>
                </div>
                <div className="large-4 medium-4 small-12 column">
				    <NewsFeed url={info.newsfeed} />
                </div>
			</div>
		);
    }

    static fetchData(store){
        let {fetchInfo} = infoActionCreators;
        return store.dispatch(fetchInfo());
    }
}

export default Home;
