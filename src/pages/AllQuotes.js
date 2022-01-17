import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Jim', text: 'Text 1' },
  { id: 'q2', author: 'Pekk', text: 'Text 2' },
]

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />
}

export default AllQuotes
