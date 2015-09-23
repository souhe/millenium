import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';

class App extends Component{
    static propTypes = {
        children: PropTypes.object.isRequired,
    }

    render() {
        return (
            <div>
                <div className="header"></div>
                <ul className="nav">
                    <li><Link to="/">O nas</Link></li>
                    <li><Link to="/team/29dw">29 DW</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

export default App;
