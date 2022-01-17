import { useState } from 'react'

import styles from './Comments.module.css'
import NewCommentForm from './NewCommentForm'

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false)

  const handleCommentAdd = () => {
    setIsAddingComment(true)
  }

  return (
    <section className={styles.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={handleCommentAdd}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm />}
      <p>Comments...</p>
    </section>
  )
}

export default Comments
