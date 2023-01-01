import {useEffect} from 'react'
import '@splidejs/react-splide/css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
/* import ssn from '../public/images/ssnCollage.png' */



const Work = () => {

  useEffect(()=>{
    const pagination = document.querySelector('.splide__pagination');
    console.log(pagination?.classList.add('invisible'));
    /* console.log(ssn); */
  },[])

  return (
    <>
      <section className="relative z-10 bg-white p-10 border-b-2 border-stone-500" >
          <h2 className='text-xl text-main uppercase text-center font-Roboto-Condensed font-black mb-10'>
            Some of my work
          </h2>
          <h2 className='text-stone-900 text-6xl font-Roboto-Condensed text-center'>Explore my universe</h2>
      </section>

      <section id='work' className="min-h-screen relative z-10 bg-white ">

        {/* <h3 className='text-4xl md:text-8xl cursor-pointer'>
          (╯°□°)╯︵ ┻━┻
        </h3> */}
        <Splide hasTrack={ false } aria-label="My Favorite Images"
          
        >
          <SplideTrack>
            {/* Delicious */}
            <SplideSlide className='bg-bg-dark min-h-screen min-w-screen group bg-[url(../public/images/deliciousCollage.png)] transition-all   duration-500 bg-[size:100%] hover:bg-[size:105%] bg-center'>
              <a href="https://letmedream.github.io/delicious " className='flex items-center justify-center min-h-screen' target='_blank'>

                <div className="absolute right-0 w-full h-full bg-gradient-to-t from-neutral-900">
                </div>

                <div className="w-10/12"> 
                
                  <h2 className='text-white text-6xl transition-transform duration-500 z-20 relative group-hover:-translate-y-full font-Roboto-Mono'>
                    Delicious
                  </h2>

                  <div className='overflow-hidden'>
                    <h3 style={{ textShadow: '1px 1px gray' }} className='transition-transform   -translate-y-full group-hover:-translate-y-0 duration-500 max-w-prose text-white font-Roboto'>
                      Delicious is a web mockup for a api-consuming application. It connects to spoonacular' API and allows us to explore an endless variety of dishes along with their ingredients and  step by step instructions. 
                    </h3>
                  </div>

                  <h3 className='group-hover:translate-y-[200%] border-b border-white transition-transform duration-500 relative z-20 text-white font-Roboto'>Website &nbsp;&nbsp;ReactJs &nbsp;&nbsp;Styled Component </h3>

                </div>
              </a>
            </SplideSlide>
            {/* Trivia */}
            <SplideSlide className='bg-bg-dark min-h-screen min-w-screen group bg-[url(../public/images/triviaCollage.png)] transition-all duration-500 bg-[size:100%] hover:bg-[size:105%] bg-center'>
              <a href="https://letmedream.github.io/trivia/ " className='flex items-center justify-center min-h-screen' target='_blank'>

                <div className="absolute right-0 w-full h-full bg-gradient-to-t from-neutral-900">
                </div>

                <div className="w-10/12"> 
                
                  <h2 className='text-white text-6xl transition-transform duration-500 z-20 relative group-hover:-translate-y-full font-Roboto-Mono'>
                    Trivia
                  </h2>

                  <div className='overflow-hidden'>
                    <h3 style={{ textShadow: '1px 1px gray' }}  className='transition-transform -translate-y-full group-hover:-translate-y-0 duration-500 max-w-prose text-white font-Roboto'>
                      Just a trivia game created in ReactJs
                    </h3>
                  </div>

                  <h3 className='group-hover:translate-y-[200%] border-b border-white transition-transform duration-500 relative z-20 text-white font-Roboto'>&nbsp;&nbsp;ReactJs </h3>

                </div>
              </a>
            </SplideSlide>
            {/* SSN */}
            <SplideSlide className='bg-bg-dark min-h-screen min-w-screen group bg-[url(../public/images/ssnCollage.png)] transition-all duration-500 bg-[size:100%] hover:bg-[size:105%] bg-center'>
              <a href="https://ssn.com.ve" className='flex items-center justify-center min-h-screen' target='_blank'>

                <div className="absolute right-0 w-full h-full bg-gradient-to-t from-neutral-900">
                </div>

                <div className="w-10/12"> 
                
                  <h2 className='text-white text-6xl transition-transform duration-500 z-20 relative group-hover:-translate-y-full font-Roboto-Mono'>
                    SSN
                  </h2>

                  <div className='overflow-hidden'>
                    <h3 style={{ textShadow: '1px 1px gray' }}  className='transition-transform -translate-y-full group-hover:-translate-y-0 duration-500 max-w-prose text-white font-Roboto'>
                      Website for SSN, a brand with a vision to help customers with network installations, technical support, hosting services, equiptment repair and more.
                    </h3>
                  </div>

                  <h3 className='group-hover:translate-y-[200%] border-b border-white transition-transform duration-500 relative z-20 text-white font-Roboto'>Website &nbsp;&nbsp;Laravel</h3>

                </div>
              </a>
            </SplideSlide>
            {/* letMeChat */}
            <SplideSlide className='bg-bg-dark min-h-screen min-w-screen group bg-[url(../public/images/letMeChat.png)] transition-all duration-500 bg-[size:100%] hover:bg-[size:105%] bg-center'>
              <a href="https://letmedream.github.io/letMeChat/ " className='flex items-center justify-center min-h-screen' target='_blank'>

                <div className="absolute right-0 w-full h-full bg-gradient-to-t from-neutral-900">
                </div>

                <div className="w-10/12"> 
                
                  <h2 className='text-white text-6xl transition-transform duration-500 z-20 relative group-hover:-translate-y-full font-Roboto-Mono'>
                    letMeChat
                  </h2>

                  <div className='overflow-hidden'>
                    <h3 style={{ textShadow: '1px 1px gray' }}  className='transition-transform -translate-y-full group-hover:-translate-y-0 duration-500 max-w-prose text-white font-Roboto'>
                      letMeChat is a simple web mockup for a chat application. It was created using ReactJs, using Tailwind for styling and Firebase   for authentication and storage
                    </h3>
                  </div>

                  <h3 className='group-hover:translate-y-[200%] border-b border-white transition-transform duration-500 relative z-20 text-white font-Roboto'>Website &nbsp;&nbsp;ReactJs &nbsp;&nbsp;Tailwind &nbsp;&nbsp;Firebase</h3>

                </div>
              </a>
            </SplideSlide>

            

            <SplideSlide className='bg-bg-dark min-h-screen min-w-screen flex items-center justify-center'>  
            </SplideSlide>

          </SplideTrack>

          <div className="splide__arrows relative">
            <button className="splide__arrow splide__arrow--prev p-6 bg-bg-dark absolute -top-20 md:-top-[50vh]"> 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 lg:w-7 lg:h-7 shrink-0 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
            <button className="splide__arrow splide__arrow--next p-6 bg-bg-dark absolute -top-20 md:-top-[50vh]"> 
            
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 lg:w-7 lg:h-7 shrink-0 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>

            </button>
          </div>

        </Splide>

      </section>
    </>
  )
}

export default Work