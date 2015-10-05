import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import styles from './header.less';

export default class Header extends Component{
	handleNavClick(){
		this.refs.checkbox.checked = false;
	}

	render (){
		return (
			<header>
				<div className={styles.headerImage}></div>
				<div className={styles.navbar}>
					<div className="row">
						<nav className="large-12 small-12 column">
							<div className={styles.logo}>Szczep Millenium</div>
							<input ref="checkbox" type="checkbox" id="navOpen" /><label htmlFor="navOpen"></label>
							<ul onClick={::this.handleNavClick}>
								<li><Link to="/" activeClassName="active">O nas</Link></li>
								<li className={styles.group}> <a>Drużyny</a>
									<ul>
										<li><Link to="/team/7gz">7 GZ</Link></li>
										<li><Link to="/team/19gz">19 GZ</Link></li>
										<li><Link to="/team/9dh">9 DH</Link></li>
										<li><Link to="/team/17dh">17 DH</Link></li>
										<li><Link to="/team/29dw">29 DW</Link></li>
										<li><Link to="/team/13dh">13 DH</Link></li>
									</ul>
								</li>
								<li className={styles.group}> <a>Galeria</a>
									<ul>
										<li><a href="https://picasaweb.google.com/112150712274847266679">Szczep Millenium</a></li>
										<li><a href="https://picasaweb.google.com/szczepmillenium">Archiwum</a></li>
										<li><a href="https://picasaweb.google.com/114215322287153156788">Hufiec</a></li>
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
