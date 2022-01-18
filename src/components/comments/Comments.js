import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

import useHttp from '../../hooks/use-http'
import NewCommentForm from './NewCommentForm'
import { getAllComments } from '../../lib/api'
import CommentsList from './CommentsList'
import LoadingSpinner from '../UI/LoadingSpinner'
import styles from './Comments.module.css'

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false)
  const params = useParams()
  const { quoteId } = params
  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments)

  useEffect(() => {
    sendRequest(quoteId)
  }, [quoteId, sendRequest])

  const handleCommentAdd = () => {
    setIsAddingComment(true)
  }

  // Wrap with useCallback for avoiding infinite loop
  const handleAddedComment = useCallback(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  let comments

  if (status === 'pending') {
    comments = (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    )
  }

  if (status === 'completed' && (loadedComments || loadedComments.length > 0)) {
    comments = <CommentsList comments={loadedComments} />
  }

  if (
    status === 'completed' &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comments = <p className='centered'>No comments found.</p>
  }

  return (
    <section className={styles.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={handleCommentAdd}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={params.quoteId}
          onAddedComment={handleAddedComment}
        />
      )}
      {comments}
    </section>
  )
}

export default Comments
