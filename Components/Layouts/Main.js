import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userFetch } from '../../redux/actions/users'
import classes from '../../styles/components/MainLayout.module.scss'
import NavBar from '../UI/NavBar'
import UserInfo from '../UserInfo'

const Main = ({ userId, children, title }) => {
  const user = useSelector(({ users }) => users.selectedUser)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!userId) return

    dispatch(userFetch(userId))
  }, [])

  return (
    <div className={classes['site-wrapper']}>
      <aside className={classes['left-block']}>
        <NavBar />
      </aside>
      <main className={classes['site-content']}>
        <h1 className="title">{title}</h1>
        {children}
      </main>
      {user.length ? (
        <aside className={classes['right-block']}>
          <UserInfo user={user} />
        </aside>
      ) : null}
    </div>
  )
}

export default Main
