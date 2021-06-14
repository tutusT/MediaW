import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { wrapper } from '../../redux/store'
import { postsUserFetch } from '../../redux/actions/posts'
import { default as MainPosts } from '../posts'

const Posts = () => {
  const postsUser = useSelector(({ posts }) => posts.postsUser)

  const { query } = useRouter()

  return <MainPosts postsUser={postsUser} userId={query.id} />
}

export const getServerSideProps = wrapper.getServerSideProps(
  store =>
    async ({ query }) => {
      await store.dispatch(postsUserFetch(query.id))
    },
)

export default Posts
