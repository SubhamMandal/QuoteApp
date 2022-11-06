import { Link } from 'react-router-dom';
import classes from './QuoteItem.module.css';
import { deleteQuote } from '../../lib/api';
import useHttp from '../../hooks/use-http';
import { useEffect } from 'react';
import Notification from '../UI/Notification';

const QuoteItem = (props) => {
  const { sendRequest, status, error } = useHttp(deleteQuote, true);

  const { onDelete } = props;

  const deleteQuoteHandler = (event) => {
    event.stopPropagation();
    event.preventDefault();
    sendRequest(props.id);
  }

  useEffect(() => {
    if (!error && status === 'completed') {
      onDelete();
    }
  }, [status, error, onDelete]);

  return (
    // <li className={classes.container}>
    //   <div className={classes.item}>
    //     <figure>
    //       <blockquote>
    //         <p>{props.text}</p>
    //       </blockquote>
    //       <figcaption>{props.author}</figcaption>
    //     </figure>
    //     <Link className='btn' to={`/quotes/${props.id}`}>
    //       View Fullscreen
    //     </Link>
    //   </div>
    //   <button className={classes['button-53']} onClick={deleteQuoteHandler}>Delete</button>
    //   {error && <Notification status='error' title='ERROR' message='Failed to delete' />}
    // </li>
    <li className={classes.container}>
      <Link to={`/quotes/${props.id}`}>
        <div className={classes.item}>
          <figure>
            <blockquote>
              <p>{props.text}</p>
            </blockquote>
            <figcaption>{props.author}</figcaption>
          </figure>
          <button className={classes['button-53']} onClick={deleteQuoteHandler}>Delete</button>
        </div>
      </Link>
      {error && <Notification status='error' title='ERROR' message='Failed to delete' />}
    </li>
  );
};

export default QuoteItem;
