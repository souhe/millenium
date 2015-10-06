import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import styles from './header.less';

export default class Header extends Component {
	static propTypes = {
		location: PropTypes.object,
		galleries: PropTypes.array,
		teams: PropTypes.array
	}

	handleNavClick(){
		this.refs.checkbox.checked = false;
	}

	activeClass(path){
		let {pathname} = this.props.location;
		return (pathname.indexOf(path) > -1)? styles.active: '';
	}

	render (){
		let {pathname} = this.props.location;
		let galleries = this.props.galleries
			? this.props.galleries.map(({url, name}) => <li key={url}><a href={url} target="_blank">{name}</a></li>)
			: null;
		let teams = this.props.teams
			? this.props.teams.map(({file, name}) => <li key={file}><Link to={`/team/${file}`}>{name}</Link></li>)
			: null;

		return (
			<header>
				<div className={styles.headerImage}></div>
				<div className={styles.navbar}>
					<div className="row">
						<nav className="large-12 small-12 column">
							<div className={styles.logo}>Szczep Millenium</div>
							<input ref="checkbox" type="checkbox" id="navOpen" /><label htmlFor="navOpen"></label>
							<ul onClick={::this.handleNavClick}>
								<li className={this.activeClass('about')}><Link to="/about" >O nas</Link></li>
								<li className={this.activeClass('team')}> <a>Drużyny</a>
									<ul>
										{teams}
									</ul>
								</li>
								<li className={styles.group}> <a>Galeria</a>
									<ul>
										{galleries}
									</ul>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		);
	}
}
