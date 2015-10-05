import React from 'react';
import H3 from './common/H3.jsx';

import styles from './contact.less';

var Group = ({name, items}) => {
    let liItems = items.join(',');
    return (
        <div>
            <label><b>{name}: </b></label>
            <span>
                {liItems}
            </span>
        </div>
    );
}

export default ({gg, phone, email}) => {
    return (
        <div className="contactInfo">
            <H3>Kontakt</H3>
            {email && email.length? <Group name="Email" items={email} />: null}
            {phone && phone.length? <Group name="Telefon" items={phone} />: null}
            {gg && gg.length? <Group name="GG" items={gg} />: null}
        </div>

    );
};
