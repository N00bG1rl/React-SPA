import { useParams, Route, Link, useRouteMatch } from 'react-router-dom'
import { Fragment } from 'react'

import HighlightedQuote from '../components/quotes/HighlightedQuote'
import Comments from '../components/comments/Comments'

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Jim', text: 'Text 1' },
  { id: 'q2', author: 'Pekk', text: 'Text 2' },
]

const QuoteDetails = () => {
  const match = useRouteMatch()
  console.log(match)
  // For displaing quoteId
  const params = useParams()
  //const paramsId = +params.quoteID

  const quote = DUMMY_QUOTES.find(content => content.id === params.quoteId)

  if (!quote) return <p>No quote found!</p>

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  )
}

export default QuoteDetails
