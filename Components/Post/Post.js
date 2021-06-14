import { useState } from 'react'
import Button from '../UI/Button'
import Comments from '../Comments'

const Post = ({ id, title, body }) => {
  const [showComment, setShowComment] = useState(false)

  const showCommentHandler = () => {
    setShowComment(prev => !prev)
  }

  let btnText = 'Открыть комментарии'

  if (showComment) {
    btnText = 'Скрыть комментарии'
  }

  return (
    <div className="posts-items__item item">
      <div className="posts-items__title item-title">{title}</div>
      <div className="posts-items__body">{body}</div>
      <Button btnHandler={showCommentHandler}>{btnText}</Button>
      {showComment && (
        <div className="comments-wrapper">
          <Comments postId={id} />
        </div>
      )}
    </div>
  )
}

export default Post
