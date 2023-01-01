
import type { NextPage } from 'next'
import Head from 'next/head'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import { useEffect } from "react"
import Me from "../components/Me";
import Nav from "../components/Nav";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from '../components/Footer'
/* React-toastify */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/* React-splide */
// Default theme
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';


const Home: NextPage = () => {
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

    
    return () => {
      window.removeEventListener('mousemove', heroMoveOnMouseMove);
    }

  },[])
  return (
    <div className="">
      <Head>
        <title>Portfolio of mine</title>
      </Head>
      <main className="">
        <Nav/>
        <section className='min-h-screen w-full bg-no-repeat sticky top-0 z-0 flex flex-col justify-center bg-[url("../public/futureGrid.webp")] bg-bg-dark bg-[length:105%_109%]' id='home'>          
          <div className='text-center p-6 px-2'> 
            <h1 className='text-5xl text-white py-1 font-Roboto-Condensed text-center md:text-7xl md:leading-tight font-bold lg:text-8xl lg:leading-tight'>Let us program <br/> and design <br/> the future </h1>
            {/* <p className='text-md text-white leading-8 font-Roboto'>
              Freelancer providing services for programming and bringing frontend designs to life.
            </p> */}
          </div>
          {/* <div className='mt-4 flex justify-around md:justify-center md:gap-20 text-gray-600'>
            <BsLinkedin className='text-2xl text-white md:text-4xl cursor-pointer'/>
            <BsGithub className='text-2xl text-white md:text-4xl cursor-pointer'/>
          </div> */}
          <a
            href="#work"
            className=" px-4 py-3 lg:px-5 lg:py-4 border-2 self-center font-Roboto text-white bg-[length:140%] bg-no-repeat bg-[url('../public/button-light.svg')] bg-[position:400%] hover:bg-[position:50%] hover:text-gray-900 transition-all duration-500 lg:text-lg mt-6"
          >
            Explore my universe
          </a>


        </section>

        <Me/>

        <Work/>

        <Contact/>

        <Footer/>

      </main>

      <ToastContainer />
    </div>
  )
}

export default Home
