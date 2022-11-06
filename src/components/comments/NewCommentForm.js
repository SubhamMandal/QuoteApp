import { useEffect, useRef } from 'react';
import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import Notification from '../UI/Notification';

import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const { sendRequest, status, error } = useHttp(addComment);

  const { onAddedComment, quoteId } = props;

  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const commentText = commentTextRef.current.value;
    // optional: Could validate here

    // send comment to server
    if (commentText.trim() === '') {
      return;
    }
    sendRequest({
      commentData: { text: commentText },
      quoteId: quoteId,
    });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === 'pending' && <div className='centered'><LoadingSpinner /></div>}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
      {error && <Notification status='error' title='ERROR' message='Failed to comment' />}
    </form>
  );
};

export default NewCommentForm;
