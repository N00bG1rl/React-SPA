import QuoteForm from '../components/quotes/QuoteForm'

const NewQuote = () => {
  const handleQuoteAdd = data => {
    console.log(data)
  }

  return <QuoteForm onAddQuote={handleQuoteAdd}></QuoteForm>
}

export default NewQuote
