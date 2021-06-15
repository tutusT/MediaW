import { wrapper } from '../redux/store'
import '../styles/global.scss'
import Router from 'next/router'
import React from 'react'
import { appLoadingStart, appLoadingEnd } from '../redux/actions/app'
import { useDispatch } from 'react-redux'

const App = ({ Component, pageProps }) => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    const start = () => {
      dispatch(appLoadingStart())
    }
    const end = () => {
      dispatch(appLoadingEnd())
    }
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])

  return <Component {...pageProps} />
}

export default wrapper.withRedux(App)
