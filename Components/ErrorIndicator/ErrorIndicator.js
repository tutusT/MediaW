import { useDispatch } from 'react-redux'
import { HIDE_ERROR } from '../../redux/types'
import classes from '../../styles/components/ErrorIndicator.module.scss'
const ErrorIndicator = ({ errorMessage }) => {
  const dispatch = useDispatch()

  const closeBtnHandler = () => {
    dispatch({ type: HIDE_ERROR })
  }

  return (
    <div className={classes['error-indicator']}>
      <div>{errorMessage}</div>
      <div className={classes['close-btn']} onClick={closeBtnHandler}>
        X
      </div>
    </div>
  )
}

export default ErrorIndicator
