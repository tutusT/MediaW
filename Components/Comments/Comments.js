import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { commentsFetch } from '../../redux/actions/comments'
import Comment from '../Comment'

const Comments = ({ postId: id }) => {
  const comments = useSelector(({ comments }) => {
    return comments.comments.filter(({ postId }) => postId === id)
  })

  const dispatch = useDispatch()

  useEffect(() => {
    if (!comments.length) {
      dispatch(commentsFetch(id))
    }
  }, [])

  const renderComments = comments => {
    return comments.map(({ id, name, body }) => {
      return <Comment key={id} name={name} body={body} />
    })
  }

  return (
    <div className="comments-wrapper__items">{renderComments(comments)}</div>
  )
}

export default Comments
