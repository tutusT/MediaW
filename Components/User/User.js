import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { userFetch } from '../../redux/actions/users'
import Button from '../UI/Button'

const User = ({ id, name, address: { city } }) => {
  const router = useRouter()

  const dispatch = useDispatch()

  const getUser = id => {
    dispatch(userFetch(id))
  }

  const showPost = () => {
    router.push(`posts/${id}`)
  }

  return (
    <div className="users-items__item item">
      <div
        className="users-items__title item-title"
        onClick={() => {
          getUser(id)
        }}
      >
        {name}
      </div>
      <div className="users-items__city">{city}</div>
      <Button className="btn" btnHandler={showPost}>
        Смотреть посты
      </Button>
    </div>
  )
}

export default User
