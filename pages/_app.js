import Head from 'next/head'
import { wrapper } from '../redux/store'
import '../styles/global.scss'

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Тестовое задание</title>
    </Head>
    <Component {...pageProps} />
  </>
)

export default wrapper.withRedux(App)