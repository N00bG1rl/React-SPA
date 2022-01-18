import { useHistory } from 'react-router-dom'

import QuoteForm from '../components/quotes/QuoteForm'

const NewQuote = () => {
  const history = useHistory()

  const handleQuoteAdd = data => {
    console.log(data)

    // Redirect after submit with programmatic/imperative navigation
    history.push('/quotes')
  }

  return <QuoteForm onAddQuote={handleQuoteAdd}></QuoteForm>
}

export default NewQuote
