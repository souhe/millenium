import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';

export default class Header extends Component{
	render (){
		return (
			<header >
				<div className="inner row">
					<nav className="inner large-12 small-12 column">
						<a href="#" className="logo">Szczep Millenium</a>
						<input type="checkbox" id="navOpen" /><label htmlFor="navOpen"></label>
						<ul>
							<li><Link to="/">O nas</Link></li>
							<li> <a>Drużyny</a>
								<ul>
									<li><Link to="/team/9dh">9 DH</Link></li>
									<li><Link to="/team/29dw">29 DW</Link></li>
									<li><Link to="/team/7gz">7 GZ</Link></li>
								</ul>
							</li>
							<li> <a>Galeria</a>
								<ul>
									<li><Link to="/">Szczep Millenium</Link></li>
									<li><Link to="/">Archiwum</Link></li>
								</ul>
							</li>
						</ul>
					</nav>
				</div>
			</header>  
		);
	}
}