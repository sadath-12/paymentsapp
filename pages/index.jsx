import Head from 'next/head'
import Image from 'next/image'
import { Hero, Navbar, PayBy, Pricing, Services } from '../components'
import HomeLayout from '../components/Layouts/HomeLayout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className=' font-openSans mx-auto w-full'>
      <Head>
        <title>PayMe</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

<HomeLayout>
  <div className='w-full mx-auto'>

  <Hero/>
  <PayBy/>
  <Services/>
  <Pricing/>
  </div>
</HomeLayout>

     
    </div>
  )
}
