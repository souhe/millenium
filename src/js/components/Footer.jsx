import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import styles from './footer.less';

export default class Footer extends Component{
    render(){
        return (
            <footer className={styles.footer}>
                <div className="row">
                    <div className="large-6 medium-6 small-12 column">
                        <div className={styles.linksHeader}>Przydatne linki </div>
                        <div className={styles.links + ' row'}>
                            <div className="large-6 medium-6 small-12 column"><a href="http://www.zhp.pl">Strona ZHP</a></div>
                            <div className="large-6 medium-6 small-12 column"><a href="http://www.slaska.zhp.pl">Chorągiew Śląska</a></div>
                            <div className="large-6 medium-6 small-12 column"><a href="http://lubliniec.zhp.pl">Hufiec Lubliniec</a></div>
                            <div className="large-6 medium-6 small-12 column"><a href="http://szczepfeniks.webnode.com">Szczep "Feniks"</a></div>
                            <div className="large-6 medium-6 small-12 column"><a href="http://www.szczepmillenium.prv.pl/">Szczep Millenium (2008-2011)</a></div>
                            <div className="large-6 medium-6 small-12 column"><a href="http://szczepmillenium.lunet.pl">Szczep Millenium (2011-2013)</a></div>
                        </div>
                    </div>

                    <div className="large-6 medium-6 small-12 column">
                        <div className={styles.linksHeader}>Kontakt </div>
                        <div>szczepmillenium@gmail.com</div>
                    </div>
                </div>
            </footer>
        );
    }
}
