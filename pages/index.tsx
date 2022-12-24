import bg2 from "../public/futureGrid.webp"
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import { BiMoon } from 'react-icons/bi'
import { useEffect, useState } from "react"
import About from "../components/about"

const Home: NextPage = () => {

  const [navBackgrounded, setNavBackGrounded] = useState(false);
  /* We can write a reusable function we can use to generate the `className` string with the above improvements. Here it is: */
  function classNames(...args: any[]) {
    return args.filter(Boolean).join(' ')
  }

  useEffect(()=>{
    /* Bg position movement on mouse mose */
    const hero = document.getElementById("home");
    const parallaxMultiplier = 0.015;

    const heroMoveOnMouseMove = (e: MouseEvent) =>{
      if(!hero) return
      let x = e.clientX;
      let y = e.clientY;
      hero.style.backgroundPositionX = "-" + x * parallaxMultiplier + "px";
      hero.style.backgroundPositionY = "-" + y * parallaxMultiplier + "px";
    }  
    window.addEventListener('mousemove', heroMoveOnMouseMove);
    // ----------------------------------------------------------------------
    /* Knowing when we scroll passed first section, in order to change nav's bg */
    const passedSection = () => {
      if(hero){
        if (window.scrollY >= hero.offsetHeight) {
          setNavBackGrounded(true)
        } else{
          setNavBackGrounded(false)
        }
      }
    }
    window.addEventListener("scroll", passedSection);

    return () => {
      window.removeEventListener('mousemove', heroMoveOnMouseMove);
      window.removeEventListener("scroll", passedSection);
    }

  },[navBackgrounded])

  return (
    <div className="">
      <Head>
        <title>Portfolio of mine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <nav className={classNames('py-3 px-28 flex fixed w-full top-0 z-20 transition-all duration-700 justify-between items-center', navBackgrounded && 'bg-[rgb(0,0,0,.6)]')}>
            <h2 className='text-xl text-white font-Roboto'><a href="#"
            >Portfolio</a></h2>
            <ul className='flex items-center gap-2 text-xl'>
              
              <li className=" duration-800 flex flex-col items-center group relative">
                <a href="#about" className='li transition-all font-thin font-Roboto px-2 pt-1 rounded-md text-white text-base'>
                  About 
                </a>
                <span className="w-[90%] h-[.5px] top-[100%] scale-0 transition-all group-hover:scale-100 bg-slate-50 absolute"></span>
              </li>
              <li className=" duration-800 flex flex-col items-center group relative">
                <a href="#" className='li transition-all font-thin font-Roboto px-2 pt-1 rounded-md text-white text-base'>
                  Work 
                </a>
                <span className="w-[90%] h-[.5px] transition-all top-[100%] scale-0 group-hover:scale-100 bg-slate-50 absolute"></span>
              </li>
              <li className=" duration-800 flex flex-col items-center group relative">
                <a href="#" className='li transition-all font-thin font-Roboto px-2 pt-1 rounded-md text-white text-base'>
                  Contact 
                </a>
                <span className="w-[90%] h-[.5px] top-[100%] scale-0 transition-all group-hover:scale-100 bg-slate-50 absolute"></span>
              </li>
              <li>
                <BiMoon className='cursor-pointer text-white text-2xl ml-4 hover:scale-105 transition-all'/>
              </li>
            </ul>
        </nav>
        <section className='min-h-screen w-full bg-no-repeat sticky top-0 z-0 flex flex-col justify-center bg-[url("../public/futureGrid.webp")] bg-[rgb(105,25,255)] bg-[length:105%_109%] md:bg-cover' id='home'
          
        >          
          <div className='text-center p-6 px-2'> 
            <h2 className='text-4xl text-white py-1 font-Roboto'>Front-end web developer</h2>
            <p className='text-md text-white leading-8 font-Roboto'>
              Freelancer providing services for programming and bringing frontend designs to life.
            </p>
          </div>
          <div className='mt-4 flex justify-around md:justify-center md:gap-20 text-gray-600'>
            <BsLinkedin className='text-2xl text-white md:text-4xl cursor-pointer'/>
            <BsGithub className='text-2xl text-white md:text-4xl cursor-pointer'/>
          </div>
          <a
            href="/#work"
            className=" px-4 py-3 lg:px-5 lg:py-4 border-2 self-center font-Roboto text-white bg-[length:140%] bg-no-repeat bg-[url('../public/button-light.svg')] bg-[position:400%] hover:bg-[position:50%] hover:text-gray-900 transition-all duration-500 lg:text-lg mt-16"
          >
            Dig into my universe
          </a>


        </section>

        <About/>

        <section className=" flex relative bg-white z-10 min-h-screen flex-col md:flex-row">
          
        </section>

      </main>

      
    </div>
  )
}

export default Home
