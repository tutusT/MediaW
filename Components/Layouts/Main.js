import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../../redux/actions/users'
import classes from '../../styles/components/MainLayout.module.scss'
import NavBar from '../UI/NavBar'
import UserInfo from '../UserInfo'
import Spinner from '../Spinner'
import ErrorIndicator from '../ErrorIndicator'

const Main = ({ userId, children, title }) => {
  const { user, error } = useSelector(({ users, app }) => ({
    user: users.selectedUser,
    error: app.error,
  }))

  const dispatch = useDispatch()

  const app = useSelector(({ app }) => app.loading)

  useEffect(() => {
    if (!userId) return

    dispatch(fetchUser(userId))
  }, [])

  return (
    <>
      {error && <ErrorIndicator errorMessage="Ошибка сети!" />}

      <div className={classes['site-wrapper']}>
        <aside className={classes['left-block']}>
          <NavBar />
        </aside>
        <main className={classes['site-content']}>
          {app ? (
            <Spinner />
          ) : (
            <>
              <h1 className="title">{title}</h1>
              {children}
            </>
          )}
        </main>
        {user.length ? (
          <aside className={classes['right-block']}>
            <UserInfo user={user} />
          </aside>
        ) : null}
      </div>
    </>
  )
}

export default Main
