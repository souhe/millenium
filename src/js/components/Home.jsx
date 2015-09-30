import React, {Component, PropTypes} from 'react';
import * as infoActionCreators from '../modules/info';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

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
			<div>
				<h3>{info.title}</h3>
				<p>{info.description}</p>
			</div>
		);
    }

    static fetchData(store){
        let {fetchInfo} = infoActionCreators;
        return store.dispatch(fetchInfo());
    }
}

export default Home;
