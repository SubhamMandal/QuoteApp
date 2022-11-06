import { useState } from 'react';
import classes from './Notification.module.css';

const Notification = (props) => {
    const [hideNotification, setHideNotification] = useState(false);
    let specialClasses = '';

    if (props.status === 'error') {
        specialClasses = classes.error;
    }
    if (props.status === 'success') {
        specialClasses = classes.success;
    }

    setTimeout(() => {
        setHideNotification(true);
    }, 5000);

    const cssClasses = `${classes.notification} ${specialClasses}`;
    if (hideNotification) {
        return <></>;
    }
    return (
        <section className={cssClasses}>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
        </section>
    );
}

export default Notification;