import { wrapper } from '../redux/store'
import '../styles/global.scss'

const App = ({ Component, pageProps }) => <Component {...pageProps} />

export default wrapper.withRedux(App)
