import React from 'react'
import Layout from '../component/layout/layout'
import { useAuth } from '../context/auth'
const Homepage = () => {
  const [auth,setAuth] = useAuth()
  return (
    <Layout title={"Best Offers"}>
      <h1>Homepage </h1>
    </Layout>
  )
}

export default Homepage