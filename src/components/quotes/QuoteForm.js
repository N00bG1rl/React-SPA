import { Fragment, useRef, useState } from 'react'
import { Prompt } from 'react-router-dom'

import Card from '../UI/Card'
import LoadingSpinner from '../UI/LoadingSpinner'
import styles from './QuoteForm.module.css'

const QuoteForm = props => {
  const [isFormFocus, setIsFormFocus] = useState(false)

  const authorInputRef = useRef()
  const textInputRef = useRef()

  function handleFormSubmit(event) {
    event.preventDefault()

    const enteredAuthor = authorInputRef.current.value
    const enteredText = textInputRef.current.value

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText })
  }

  const handleFormFocus = () => {
    setIsFormFocus(true)
  }

  // Wont work inside form submit handlerer, it wont get there
  const handleFocus = () => {
    setIsFormFocus(false)
  }

  return (
    <Fragment>
      <Prompt
        when={isFormFocus}
        message={location => 'Are you sure you want to leave?'}
      />
      <Card>
        <form
          onFocus={handleFormFocus}
          className={styles.form}
          onSubmit={handleFormSubmit}
        >
          {props.isLoading && (
            <div className={styles.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={styles.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={styles.actions}>
            <button onClick={handleFocus} className='btn'>
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  )
}

export default QuoteForm
