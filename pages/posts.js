import Head from 'next/head'
import { useSelector } from 'react-redux'
import { wrapper } from '../redux/store'
import { postsFetch } from '../redux/actions/posts'
import Main from '../Components/Layouts/Main'
import Post from '../Components/Post'

const Posts = ({ title, postsUser, userId }) => {
  let posts = useSelector(({ posts }) => posts.posts)

  if (postsUser) {
    posts = postsUser
  }

  const renderPosts = posts => {
    return posts.map(post => {
      return <Post key={post.id} {...post} />
    })
  }

  return (
    <>
      <Head>
        <title>Посты</title>
      </Head>
      <Main userId={userId} title={title || 'Посты'}>
        <div className="posts-items">{renderPosts(posts)}</div>
      </Main>
    </>
  )
}

export const getStaticProps = wrapper.getStaticProps(store => async () => {
  await store.dispatch(postsFetch())
})

export default Posts
