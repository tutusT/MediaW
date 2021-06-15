import Comment from '../Comment'

const Comments = ({ comments }) => {
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
