import { LayoutGroup } from 'framer-motion'
import Head from 'next/head'
import Navbar from '../modules/Navbar'

const Layout = ({ children, router, title }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width , initial-scale=1" />
        <meta name="theme-color" content="#95DF5A" />
        <link rel="shortcut icon" href="favicon.ico" />
        <title>{title}- تور گردشگری </title>
      </Head>
      <Navbar path={router && router.asPath} />
      {children}

    </>
  )
}
export default Layout
