import Head from 'next/head'
import { useSelector } from 'react-redux'
import { wrapper } from '../redux/store'
import { fetchUsers } from '../redux/actions/users'
import Main from '../Components/Layouts/Main'
import User from '../Components/User'

const Users = () => {
  const users = useSelector(({ users }) => users.users)

  const renderUsers = users => {
    return users.map(user => {
      return <User key={user.id} {...user} />
    })
  }

  return (
    <>
      <Head>
        <title>Пользователи</title>
      </Head>
      <Main userId={users[0]?.id} title="Пользователи">
        <div className="users-items">{renderUsers(users)}</div>
      </Main>
    </>
  )
}

export const getStaticProps = wrapper.getStaticProps(store => async () => {
  await store.dispatch(fetchUsers())
})

export default Users
