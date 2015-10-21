import React, {Component, PropTypes} from 'react';
import styles from './footer.less';

export default class Footer extends Component{
    static propTypes = {
        links: PropTypes.array
    }

    render(){
        let links = this.props.links.map(({url, name}) => (
            <div className="large-6 medium-6 small-12 column" key={url}>
                <a href={url} target="_blank">{name}</a>
            </div>)
        );
        return (
            <footer className={styles.footer}>
                <div className="row">
                    <div className="large-6 medium-6 small-12 column">
                        <div className={styles.linksHeader}>Przydatne linki </div>
                        <div className={styles.links + ' row'}>
                            {links}
                        </div>
                    </div>

                    <div className="large-6 medium-6 small-12 column">
                        <div className={styles.linksHeader}>Kontakt </div>
                        <div>szczepmillenium@gmail.com</div>

                        <div className="row">
                            <div className="large-3 medium-6 small-12 column">
                                <img src="images/zhp.png" alt="" className={styles.logo} />
                            </div>
                            <div className="large-3 medium-6 small-12 column">
                                <img src="images/hufiec.png" alt="" className={styles.logo} />
                            </div>
                            <div className="large-3 medium-6 small-12 column"></div>
                            <div className="large-3 medium-6 small-12 column"></div>

                        </div>
                    </div>
                </div>
            </footer>
        );
    }

}
