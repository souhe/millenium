import React from 'react';
import H3 from './common/H3';
import Icon from './common/Icon';

import styles from './contact.less';

var Group = ({name, items, icon}) => {
    if(items && items.length){
        let liItems = items.join(',');
        return (
            <div>
                <Icon name={icon} />
                <label><b>{name}: </b></label>
                <span>
                    {liItems}
                </span>
            </div>
        );
    }
    return <span />;
}

export default ({gg, phone, email}) => {
    return (
        <div className="contactInfo">
            <H3>Kontakt</H3>
            <Group name="Email" items={email} icon="envelope" />
            <Group name="Telefon" items={phone} icon="phone"/>
            <Group name="GG" items={gg} icon="weixin"/>
        </div>

    );
};
