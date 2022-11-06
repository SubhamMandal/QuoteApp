import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

const NewQuote = () => {
    const history = useHistory();
    const { sendRequest, status, error } = useHttp(addQuote);

    useEffect(() => {
        if (!error && status === 'completed') {
            history.push('/quotes');
        }
    }, [status, history, error]);

    const addQuoteHandler = (quoteData) => {
        sendRequest(quoteData);
    }

    if (error) {
        return <p className='centered'>some error occured</p>
    }

    return (
        <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
    );
}

export default NewQuote;