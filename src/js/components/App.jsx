import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import Header from './Header';
import Footer from './Footer';

// import styles from './commonStyles/site';

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

                <Footer />
            </div>
        );
    }
}

export default App;
