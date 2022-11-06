import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { deleteQuote } from '../../lib/api';
import Notification from '../UI/Notification';
import classes from './HighlightedQuote.module.css';

const HighlightedQuote = (props) => {
  const history = useHistory();
  const { sendRequest, status, error } = useHttp(deleteQuote);

  const deleteQuoteHandler = () => {
    sendRequest(props.id);
  }

  useEffect(() => {
    if (!error && status === 'completed') {
      history.push('/quotes');
    }
  }, [status, error, history]);

  return (
    <section className={classes.container}>
      {error && <Notification status='error' title='ERROR' message='Failed to delete' />}
      <figure className={classes.quote}>
        <p>' {props.text} '</p>
        <figcaption>~ {props.author}</figcaption>
      </figure>
      <i className={`fa-solid fa-trash-can ${classes['dlt-btn']}`} onClick={deleteQuoteHandler}></i>
    </section>
  );
};

export default HighlightedQuote;
