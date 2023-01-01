import React from 'react';
import {BsLinkedin,BsGithub} from 'react-icons/bs';

const Footer = () => {
  return (
    <>
        <footer className='relative z-10 bg-bg-dark pt-10 border-t border-t-[#2d353e]'>
            <div className='w-10/12 mx-auto flex flex-col text-white justify-center divide-y-2 divide-[#2d353e]'>
                <div className='py-10 text-center font-Roboto-Condensed'>
                  Logoless
                </div>
                {/* <hr className='border-stone-600 backdrop-blur-sm' /> */}
                <div className=' py-10 md:py-14 flex justify-center gap-4 md:gap-12 font-Roboto text-sm uppercase lg:gap-20'>
                  <a href="#about" className='group flex flex-col'>
                    About
                    <span className='h-[1px] w-full scale-0 group-hover:scale-100 bg-white transition-all '></span>
                  </a>
                  <a href="#work" className='flex flex-col group'>
                    Work
                    <span className='h-[1px] w-full scale-0 group-hover:scale-100 bg-white transition-all '></span>
                  </a>
                  <a href="#contact" className='flex flex-col group'>
                    Contact
                    <span className='h-[1px] w-full scale-0 group-hover:scale-100 bg-white transition-all '></span>
                  </a>
                  <a href="#" className='flex flex-col group'>
                    Source Code
                    <span className='h-[1px] w-full scale-0 group-hover:scale-100 bg-white transition-all '></span>
                  </a>
                </div>
                {/* <hr className='border-stone-600 backdrop-blur-sm' /> */}
                <div className='py-10 flex justify-center gap-10 text-2xl'>
                  <a href="https://github.com/LetMeDream" target='_blank'>
                    <BsGithub className='hover:scale-110 duration-500 transition-all'/>
                  </a>
                  <a href="https://www.linkedin.com/in/raulalfonzorondon/" target='_blank'>
                    <BsLinkedin className='hover:scale-110 duration-500 transition-all'/>
                  </a>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer