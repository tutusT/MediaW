const Button = ({
  className: clsn = 'btn',
  btnHandler,
  children,
  icon,
  disabled = false,
}) => {
  return (
    <button className={clsn} onClick={btnHandler} disabled={disabled}>
      {icon ? (
        <>
          <img className={clsn + '-img'} src={icon} alt="" />
          <div className={clsn + '-text'}>{children}</div>
        </>
      ) : (
        children
      )}
    </button>
  )
}

export default Button
