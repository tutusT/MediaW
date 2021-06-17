import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { wrapper } from '../../redux/store'
import { fetchPostsByUser } from '../../redux/actions/posts'
import { default as MainPosts } from '../posts'

const Posts = () => {
  const postsByUser = useSelector(({ posts }) => posts.postsByUser)

  const { query } = useRouter()

  return <MainPosts postsByUser={postsByUser} userId={query.id} />
}

export const getServerSideProps = wrapper.getServerSideProps(
  store =>
    async ({ query }) => {
      await store.dispatch(fetchPostsByUser(query.id))
    },
)

export default Posts
