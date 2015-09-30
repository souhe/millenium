import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';

export default class Header extends Component{
	handleNavClick(){
		var node = React.findDOMNode(this.refs.checkbox);
		node.checked = false;
	}

	render (){
		return (
			<header>
				<div className="navbar">
					<div className="row">
						<nav className="large-12 small-12 column">
							<div className="logo">Szczep Millenium</div>
							<input ref="checkbox" type="checkbox" id="navOpen" /><label htmlFor="navOpen"></label>
							<ul onClick={::this.handleNavClick}>
								<li><Link to="/">O nas</Link></li>
								<li className="group"> <a>Drużyny</a>
									<ul>
										<li><Link to="/team/9dh">9 DH</Link></li>
										<li><Link to="/team/29dw">29 DW</Link></li>
										<li><Link to="/team/7gz">7 GZ</Link></li>
									</ul>
								</li>
								<li className="group"> <a>Galeria</a>
									<ul>
										<li><Link to="/">Szczep Millenium</Link></li>
										<li><Link to="/">Archiwum</Link></li>
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
