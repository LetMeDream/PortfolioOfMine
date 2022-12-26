import React from 'react';
import {IoMdPaperPlane} from 'react-icons/io';
import { useForm } from 'react-hook-form';

const ContactForm = () => {

    const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = (data: any) => {
        console.log(data);
    }

  return (
    <>
        <form>
            <div className="relative mt-1 mb-12">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 opacity-60" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z">
                        </path>
                    </svg>
                </div>

                <input type="text" id="form-name" name="name" className="bg-neutrals-700 border-[1.5px] border-neutrals-500 rounded-md block w-full pl-10 pr-10 p-2.5 focus:outline-none"/>

                {/* <!-- validation displays --> */}
                {/* <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none invisible peer-valid:visible">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-success-cyan" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none invisible peer-invalid:visible">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-alert-red" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                    </svg>
                </div>   */}
                
                <span className="absolute text-xs text-alert-red mt-[0.4rem] invisible peer-invalid:visible">Name is empty.</span>
            </div>

            {/* Submit button */}
            <button type='submit' className='border-2 bg-[url("../public/button-dark.svg")] bg-no-repeat bg-[length:200%] bg-[position:-300px]  hover:bg-[position:-80px] transition-all text-lg font-Roboto-Mono duration-700 hover:text-white border-white bg-white cursor-pointer px-4 py-2 flex items-center gap-2'>
                Hit me up
                <IoMdPaperPlane/>
            </button>
        </form>
    </>
  )
}

export default ContactForm