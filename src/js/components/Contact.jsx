import React from 'react';
import styles from './contact.less';

var Group = ({name, items}) => {
    let liItems = items.map(item => <li className={styles.contactItem}>{item}</li>)
    return (
        <div>
            <label>{name}</label>
            <ul>
                {liItems}
            </ul>
        </div>
    );
}

export default ({gg, phone, email}) => {
    return (
        <div className="contactInfo">
            <h3>Kontakt</h3>
            {email && email.length? <Group name="Email" items={email} />: null}
            {phone && phone.length? <Group name="Telefon" items={phone} />: null}
            {gg && gg.length? <Group name="GG" items={gg} />: null}
        </div>

    );
};
