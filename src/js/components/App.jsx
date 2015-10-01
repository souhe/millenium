import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import Header from './Header';

class App extends Component{
    static propTypes = {
        children: PropTypes.object.isRequired,
    }

    render() {
        return (
            <div>
                <Header />
                <div className="row content">
                    <div className="large-12 column">
                    {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
