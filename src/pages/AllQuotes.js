import { useCallback, useEffect, useState } from "react";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

const AllQuotes = () => {
    const [quotesChanged, setQuotesChanged] = useState(false);
    const { sendRequest, data: loadedQuotes, status, error } = useHttp(getAllQuotes, true);
    useEffect(() => {
        sendRequest();
    }, [sendRequest, quotesChanged]);

    const deleteQuoteHandler = useCallback(() => {
        setQuotesChanged((prev) => !prev);
    }, []);

    if (status === 'pending') {
        return <div className="centered"><LoadingSpinner /></div>;
    }

    if (status === 'error') {
        return <div className="centered focused">{error}</div>
    }

    if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
        return <NoQuotesFound />
    } 

    return <QuoteList quotes={loadedQuotes} onDelete={deleteQuoteHandler}/>;
}

export default AllQuotes;