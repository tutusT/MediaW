const Comment = ({ name, body }) => {
  return (
    <div className="comments__item">
      <div className="comments_item-title">{name}</div>
      <div className="comments_item-body">{body}</div>
    </div>
  )
}

export default Comment
