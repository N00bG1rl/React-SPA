import { useParams, Route } from 'react-router-dom'
import { Fragment } from 'react'

import Comments from '../components/comments/Comments'

const QuoteDetails = () => {
  // For displaing quoteId ?
  const params = useParams()

  return (
    <Fragment>
      <h1>Quote details page</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  )
}

export default QuoteDetails
