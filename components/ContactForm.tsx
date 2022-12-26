import {useState} from 'react';
import {IoMdPaperPlane} from 'react-icons/io';
import { useForm } from 'react-hook-form';


const ContactForm = () => {
    /* We can write a reusable function we can use to generate the `className` string with the above improvements. Here it is: */
    function classNames(...args: any[]) {
        return args.filter(Boolean).join(' ')
    }
    /* In onrder to show errors only after the user has tried to submit the form */
    const [isSubmitted,setIsSubmitted] = useState(false)

    const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = (data: any) => {
        setIsSubmitted(false);
        console.log(data);
    }
    const showErrors = () =>{
        setIsSubmitted(true);
        console.log(errors);
    }
  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
            {/* name */}
            <div className="input-slot ">
                <label className='mb-2 block font-Roboto text-sm uppercase text-white'>Name</label>
                <div className="relative mt-1 mb-12">
                    
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 opacity-60" viewBox="0 0 24 24" fill="white">
                            <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z">
                            </path>
                        </svg>
                    </div>

                    <input type="text" id="form-name" autoComplete='nope' minLength={3} className={classNames("peer text-white bg-[rgb(31,39,47)] border-[1.5px]   rounded-md block w-full pl-10 pr-10 p-2.5 focus:outline-none focus:border-[1.5px] focus:border-[rgb(105,25,255)]", (errors.name && isSubmitted) ? 'border-red-500 ' : 'border-[rgb(45,53,62)] ')}
                        {...register('name',{ required:true, minLength: 3 })}
                    />

                    {/* <!-- validation displays --> */}
                    <div className={classNames("flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none", (isSubmitted && !errors.name) ? 'visible' : 'invisible')}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-success-cyan" viewBox="0 0 20 20" fill="#10B981">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                    </div>
                    <div className={classNames("flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none text-red-500", (isSubmitted && errors.name) ? 'visible' : 'invisible')}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-alert-red" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                        </svg>
                    </div>  
                    
                    {/* <span className="absolute text-xs text-red-900 mt-[0.4rem] invisible peer-invalid:visible">Name is empty.</span> */}
                </div>
            </div>
            {/* email */}
            <div className="input-slot ">
                <label className='mb-2 block font-Roboto text-sm uppercase text-white'>Email</label>
                <div className="relative mt-1 mb-12">
                    
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 opacity-60" viewBox="0 0 20 20" fill="white"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z">
                            </path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z">

                            </path>
                        </svg>
                    </div>

                    <input type="email" id="form-name" autoComplete='nope' className={classNames("peer  text-white bg-[rgb(31,39,47)] border-[1.5px]  rounded-md block w-full pl-10 pr-10 p-2.5 focus:outline-none focus:border-[1.5px] focus:border-[rgb(105,25,255)]", (errors.email && isSubmitted) ? 'border-red-500 ' : 'border-[rgb(45,53,62)] ')}
                        {...register('email',{ required:true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/})}
                    />

                    {/* <!-- validation displays --> */}
                    <div className={classNames("flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none", (isSubmitted && !errors.email) ? 'visible' : 'invisible')}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-success-cyan" viewBox="0 0 20 20" fill="#10B981">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                    </div>
                    <div className={classNames("flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none text-red-500", (isSubmitted && errors.email) ? 'visible' : 'invisible')}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-alert-red" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                        </svg>
                    </div>  
                    
                    {/* <span className="absolute text-xs text-red-900 mt-[0.4rem] invisible peer-invalid:visible">Name is empty.</span> */}
                </div>
            </div>
            {/* message */}
            <div className="input-slot ">
                <label className='mb-2 block font-Roboto text-sm uppercase text-white'>Message</label>
                <div className="relative mt-1 mb-12">
                    

                    <textarea rows={4} id="form-name" autoComplete='nope' className={classNames("peer resize-none text-white bg-[rgb(31,39,47)] border-[1.5px]  rounded-md block w-full pr-10 p-2.5 focus:outline-none focus:border-[1.5px] focus:border-[rgb(105,25,255)]", (errors.message && isSubmitted) ? 'border-red-500 ' : 'border-[rgb(45,53,62)]')}
                        {...register('message',{ required:true })}
                    />

                    {/* <!-- validation displays --> */}
                    <div className={classNames("flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none", (isSubmitted && !errors.message) ? 'visible' : 'invisible')}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-success-cyan" viewBox="0 0 20 20" fill="#10B981">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                    </div>
                    <div className={classNames("flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none text-red-500", (isSubmitted && errors.message) ? 'visible' : 'invisible')}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-alert-red" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                        </svg>
                    </div>  
                    
                    {/* <span className="absolute text-xs text-red-900 mt-[0.4rem] invisible peer-invalid:visible">Name is empty.</span> */}
                </div>
            </div>

            {/* Submit button */}
            <button type='submit' className='border-2 bg-[url("../public/button-dark.svg")] bg-no-repeat bg-[length:200%] bg-[position:-300px]  hover:bg-[position:-80px] transition-all text-lg font-Roboto-Mono duration-700 hover:text-white border-white bg-white cursor-pointer px-4 py-2 flex items-center gap-2'
            onClick={()=>showErrors()}>
                Hit me up
                <IoMdPaperPlane/>
            </button>
        </form>
    </>
  )
}

export default ContactForm