import bg1 from "../public/bg1.jpg"
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {BsFillMoonStarsFill,BsLinkedin,BsGithub} from 'react-icons/bs'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Portfolio of mine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-white">
        <section className='min-h-screen bg-no-repeat bg-cover bg-fixed sticky top-0 z-0' id='home'
          style={{
            backgroundImage:`url(${bg1.src})`
          }}
        >
          <nav className='pt-10 px-10 pb-6 mb-12 flex justify-between items-center'>
            <h2 className='text-xl'>Portfolio</h2>
            <ul className='flex items-center text-xl'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
              </li>
              <li>
                <a href="#" className='li bg-gradient-to-r from-teal-600 to-teal-500 p-1 px-2 ml-4 rounded-md text-white text-lg'>
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className='text-center p-6 px-2'>
            <h2 className='text-3xl py-2 text-teal-600 font-semibold'>Raúl Alfonzo</h2>
            <h3 className='text-xl py-1'>Front-end web developer</h3>
            <p className='text-md leading-8 text-gray-800'>
              Freelancer providing services for programming and bringing frontend designs to life.
            </p>
          </div>
          <div className='mt-4 flex justify-around md:justify-center md:gap-20 text-gray-600'>
            <BsLinkedin className='text-2xl md:text-4xl cursor-pointer'/>
            <BsGithub className='text-2xl md:text-4xl cursor-pointer'/>
          </div>


        </section>

        <section className=" flex bg-gray-900 py-28 relative z-10 min-h-screen flex-col md:flex-row">

        </section>

      </main>

      
    </div>
  )
}

export default Home
