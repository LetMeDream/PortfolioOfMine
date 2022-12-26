import React from 'react'
import {BiEnvelope} from 'react-icons/bi'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <>
        <section id='contact' className="min-h-screen flex flex-col relative z-10 bg-[#0f1922] py-28">

            <div className="w-10/12 mx-auto h-full flex flex-1 flex-col md:flex-row items-center">
                <div className="w-full mb-16 md:mb-0">
                    <h3 className='text-[rgb(105,25,255)] mb-4 text-xl font-Roboto-Condensed font-bold uppercase'>Contact</h3>
                    <h2 className="font-Roboto-Condensed font-bold text-4xl text-white lg:text-5xl mb-8">Got a problem to solve?</h2>
                    <p className="text-[#fffefa99] font-Roboto leading-relaxed max-w-prose mb-12">Get your space suit ready and tell me your ideas to develop your dream application. </p>
                    <a href='mailto:raulalfonzo66@gmail.com' className='flex items-center text-white font-Roboto text-lg cursor-pointer hover:text-[rgb(102,25,255)]'>
                        <BiEnvelope className='mr-2'/>Contact me
                    </a>
                </div>
                <div className="w-full border border-red-500 md:ml-28">
                    <ContactForm/>
                </div>
            </div>

            
        </section>
    </>
  )
}

export default Contact