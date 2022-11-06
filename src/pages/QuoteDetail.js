import { Fragment, useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import Comments from "../components/comments/Comments";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

// const DUMMY_QUOTES = [
//     { id: 'q1', author: 'Subham', text: 'You do not give up until the very end.' },
//     { id: 'q2', author: 'Mandal', text: "Sometimes you don't know what to do, and that's absolutly okay!" },
// ];

const QuoteDetail = () => {
    const params = useParams();
    const match = useRouteMatch();
    const { sendRequest, status, data: quote, error } = useHttp(getSingleQuote, true);
    // const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    const { quoteId } = params;
    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if (status === 'pending') {
        return <div className="centered"><LoadingSpinner /></div>;
    }

    if (error) {
        return <div className="centered focused">{error}</div>;
    }

    if (!quote.text) {
        return <NoQuotesFound />;
    }

    return (
        <Fragment>
            <HighlightedQuote id={quote.id} text={quote.text} author={quote.author} />
            <Route path={`${match.path}`} exact>
                <div className="centered">
                    <Link to={`${match.url}/comment`} className='btn--flat'>Load Comments</Link>
                </div>
            </Route>
            <Route path={`${match.path}/comment`} >
                <Comments />
            </Route>
        </Fragment>

    );
}

export default QuoteDetail;