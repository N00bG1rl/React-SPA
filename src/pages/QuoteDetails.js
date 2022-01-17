import { useParams, Route } from 'react-router-dom'
import { Fragment } from 'react'

import HighlightedQuote from '../components/quotes/HighlightedQuote'
import Comments from '../components/comments/Comments'

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Jim', text: 'Text 1' },
  { id: 'q2', author: 'Pekk', text: 'Text 2' },
]

const QuoteDetails = () => {
  // For displaing quoteId ?
  const params = useParams()
  //const paramsId = +params.quoteID

  const quote = DUMMY_QUOTES.find(content => content.id === params.quoteId)

  if (!quote) return <p>No quote found!</p>

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  )
}

export default QuoteDetails
