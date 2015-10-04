import React, {Component, PropTypes} from 'react';
import * as teamActionCreators from '../modules/team';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import NewsFeed from './NewsFeed';
import Paper from './common/Paper';
import PaperPaddingContent from './common/PaperPaddingContent';
import Markdown from 'react-markdown';
import H1 from './common/H1';
import Cadre from './Cadre';
import Meeting from './Meeting';
import TeamPhoto from './TeamPhoto';


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
        let {time, day, place} = team.meeting || {};
        let contentClasses = team.newsfeed? "large-8 medium-8 small-12 column" : "large-12 medium-12 small-12 column";
        let newsFeed = team.newsfeed? (
            <div className="large-4 medium-4 small-12 column">
                <NewsFeed url={team.newsfeed} />
            </div>
        ): null;

		return (
            <div className="row">
                <div className={contentClasses}>
                    <Paper noPadding={true}>
                        <PaperPaddingContent>
                            <H1>{team.name}</H1>
                        </PaperPaddingContent>

                        <TeamPhoto photoName={team.photo} />
                        <PaperPaddingContent>
                            <Markdown source={team.description} />
                            <Cadre list={team.cadre} />
                            <Meeting time={time} day={day} place={place} />
                        </PaperPaddingContent>
                    </Paper>
                </div>
                {newsFeed}
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
