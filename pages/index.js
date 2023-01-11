import Head from 'next/head'
import { Header } from '../components/header'
import { Main } from '../components/main'
import { Loader } from '../components/loader'
import { useContext } from 'react'
import { MenuContext } from '../components/context/menucontext'


export default function Home() {


  return (
    <div >
      <Head>
          <link rel="preload" as="image" href="https://res.cloudinary.com/dimejiscloud/image/upload/v1669638914/mrlongwiththepose_cufhyc.png" />
          <title>Odebiyi Ridwan Portfolio</title>
      </Head>
      <Loader />
      <Header />
      <Main />
    </div>
  )
}
