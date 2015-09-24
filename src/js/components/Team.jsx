import React, {Component, PropTypes} from 'react';
import * as teamActionCreators from '../modules/team';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

@connect(
    state => ({team: state.team}),
    dispatch => ({ actions: bindActionCreators(teamActionCreators, dispatch) })
)
class Home extends Component{
    static propTypes = {
        info: PropTypes.object,
        actions: PropTypes.object
    }
    render(){
		let team = this.props.team;
		return (
			<div>
                <div >
                    <h3>{team.name}</h3>
                    <p>{team.description}</p>
                </div>
			</div>
		);
    }

    static fetchData(store, history){
        let {fetchTeam} = teamActionCreators;
        let {teamName} = history;

        return store.dispatch(fetchTeam(teamName));
    }
}

export default Home;
