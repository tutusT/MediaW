import { useEffect, useState } from 'react'
import Button from '../UI/Button'
import Comments from '../Comments'
import { commentsFetch } from '../../redux/actions/comments'
import { useDispatch, useSelector } from 'react-redux'
import { Transition } from 'react-transition-group'

const Post = ({ id, title, body }) => {
  const [showComment, setShowComment] = useState(false)

  const [btnText, setBtnText] = useState('Открыть комментарии')

  const [disabledBtn, setDisabledBtn] = useState(false)

  const comments = useSelector(({ comments }) => {
    return comments.comments.filter(({ postId }) => postId === id)
  })

  const showCommentHandler = () => {
    if (showComment) {
      setDisabledBtn(false)
      setShowComment(false)
      setBtnText('Открыть комментарии')
      return
    }
    setShowComment(true)
    setDisabledBtn(true)
  }

  const loadedComments = () => {
    setDisabledBtn(false)
    setBtnText('Скрыть комментарии')
  }

  const dispatch = useDispatch()

  useEffect(() => {
    if (showComment) {
      if (comments.length) {
        loadedComments()
        return
      }
    } else {
      return
    }

    dispatch(commentsFetch(id))
  }, [comments, showComment])

  return (
    <div className="posts-items__item item">
      <div className="posts-items__title item-title">{title}</div>
      <div className="posts-items__body">{body}</div>
      <Button btnHandler={showCommentHandler} disabled={disabledBtn}>
        {btnText}
      </Button>
      <Transition in={showComment} timeout={500} mountOnEnter unmountOnExit>
        {state => (
          <div className={`comments-wrapper ${state}`}>
            <Comments comments={comments} />
          </div>
        )}
      </Transition>
    </div>
  )
}

export default Post
