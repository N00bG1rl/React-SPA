import { Fragment } from 'react'
import {
  useHistory,
  useLocation,
} from 'react-router-dom/cjs/react-router-dom.min'

import QuoteItem from './QuoteItem'
import styles from './QuoteList.module.css'

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1
    } else {
      return quoteA.id < quoteB.id ? 1 : -1
    }
  })
}

const QuoteList = props => {
  const history = useHistory()
  const location = useLocation()

  // Vanilla JS, constructor func
  const queryParams = new URLSearchParams(location.search)
  const sortingOption = queryParams.get('sort') === 'asc'
  const sortedQuotes = sortQuotes(props.quotes, sortingOption)

  // Update shareble url, with query parameter
  const handleSorting = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${sortingOption ? 'desc' : 'asc'}`,
    })
    //history.push(`${location.pathname}?sort=${sortingOption ? 'desc' : 'asc'}`)
  }

  return (
    <Fragment>
      <div className={styles.sorting}>
        <button onClick={handleSorting}>
          Sort {sortingOption ? 'Descending' : 'Ascending'}
        </button>
      </div>
      <ul className={styles.list}>
        {sortedQuotes.map(quote => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  )
}

export default QuoteList
