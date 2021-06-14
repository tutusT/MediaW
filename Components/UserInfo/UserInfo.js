import { useRouter } from 'next/router'

import Button from '../UI/Button'

const UserInfo = ({ user }) => {
  const userData = { ...user[0] }

  const router = useRouter()

  return (
    <div className="user-info">
      <div className="user-info__top">
        <div className="user-info__name">{userData.name}</div>
        <div className="user-info__email">{userData.email}</div>
      </div>
      <div className="user-info__bottom">
        <div className="user-info__city">{userData.address.city}</div>
        <div className="user-info__website">{userData.website}</div>

        {!router.asPath.includes('post') && (
          <Button
            className="user-info__btn"
            icon="static/btn-icon.svg"
            btnHandler={() => {
              router.push(`posts/${userData.id}`)
            }}
          >
            Смотреть посты
          </Button>
        )}
      </div>
    </div>
  )
}

export default UserInfo
