const Comment = ({ name, body }) => {
  return (
    <div className="comments-wrapper__item">
      <div className="comments-wrapper__item-title">{name}</div>
      <div className="comments-wrapper__item-body">{body}</div>
    </div>
  )
}

export default Comment
