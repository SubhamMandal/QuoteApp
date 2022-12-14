import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';
import NotFound from './pages/NotFound';
import AllQuotes from './pages/AllQuotes';

const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));
const NewQuote = React.lazy(() => import('./pages/NewQuote'));
// const LoadingSpinner = React.lazy(() => import('./components/UI/LoadingSpinner'));

function App() {
  return (
    <div>
      <Layout>
        <Suspense fallback={<div className='centered'><LoadingSpinner /></div>}>
          <Switch>
            <Route path='/' exact>
              <Redirect to='/quotes' />
            </Route>
            <Route path='/quotes' exact>
              <AllQuotes />
            </Route>
            <Route path='/quotes/:quoteId' >
              <QuoteDetail />
            </Route>
            <Route path='/new-quote'>
              <NewQuote />
            </Route>
            <Route path='*'>
              <Redirect to='/quotes' />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
