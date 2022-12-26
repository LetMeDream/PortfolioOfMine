import {useState,useEffect,useRef} from 'react';
import { BiMoon } from 'react-icons/bi';
import {useWindowSize} from '../hooks/useWindowSize'


const Nav = () => {
    /* Windows size */
    const size = useWindowSize();
    const width = size.width;
    useEffect(()=>{
        if(width!>768){
            setIsActive(false)
        }
    },[width])

    /* Active state of our nav */
    const [isActive, setIsActive] = useState(false);
    /* hook to the element */
    const nav = useRef<HTMLUListElement>(null);

    /* Background on our nav */
    const [navBackgrounded, setNavBackGrounded] = useState(false);
    /* We can write a reusable function we can use to generate the `className` string with the above improvements. Here it is: */
    function classNames(...args: any[]) {
        return args.filter(Boolean).join(' ')
    }


    /* This (typeof window !== 'undefined') down below is in order to check whether we are in the browser or in the server in Next.js */
    /* Check this out for more info: https://bobbyhadz.com/blog/javascript-referenceerror-document-is-not-defined */
    const hero = (typeof window !== 'undefined') && document.getElementById("home");
    useEffect(()=>{
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

        return ()=>{
            window.removeEventListener("scroll", passedSection);
        }
  
    },[navBackgrounded])

    /* Here we make de nav grow depending on the isActive value */
    useEffect(()=>{ 
        if(!nav.current) return
        /* console.log(nav.current.style.height) */
        if(isActive){
            nav.current.style.height = 48 + 'px'
        }else{
            nav.current.style.height = 8 + 'px'

        }
        
    },[isActive])

  return (
    <>
        <nav 
            className={classNames('py-2 md:py-3 px-16 md:px-28 flex flex-col md:flex-row fixed w-full top-0 z-20 transition-all duration-700 md:justify-between md:items-center',          navBackgrounded && 'bg-[rgb(15,25,34,.7)] backdrop-blur-sm')}>
                <h2 
                    className='md:text-xl pt-1 md:pt-0 text-white font-black font-Roboto'><a href="#"
                    >Portfolio</a>
                </h2>
                <ul className={classNames('flex items-center transition-all duration-700 gap-2 text-xl', (!isActive&&width!<=768) && '-translate-y-[100px]')}
                    ref={nav}
                >
                
                    <li className=" duration-800 flex flex-col items-center group relative">
                        <a href="#about" className='li transition-all font-thin font-Roboto pl-0 md:pl-2 px-2 pt-1 rounded-md text-white text-base'>
                        About 
                        </a>
                        <span className="w-[90%] h-[.5px] top-[100%] scale-0 transition-all group-hover:scale-100 bg-slate-50 absolute"></span>
                    </li>
                    <li className=" duration-800 flex flex-col items-center group relative">
                        <a href="#work" className='li transition-all font-thin font-Roboto px-2 pt-1 rounded-md text-white text-base'>
                        Work 
                        </a>
                        <span className="w-[90%] h-[.5px] transition-all top-[100%] scale-0 group-hover:scale-100 bg-slate-50 absolute"></span>
                    </li>
                    <li className=" duration-800 flex flex-col items-center group relative">
                        <a href="#contact" className='li transition-all font-thin font-Roboto px-2 pt-1 rounded-md text-white text-base'>
                        Contact 
                        </a>
                        <span className="w-[90%] h-[.5px] top-[100%] scale-0 transition-all group-hover:scale-100 bg-slate-50 absolute"></span>
                    </li>
                    <li>
                        <BiMoon className='cursor-pointer text-white text-2xl ml-4 hover:scale-105 transition-all'/>
                    </li>
                </ul>
                {/* Responsive nav toggle button */}
                <div className="button md:hidden absolute right-16 flex flex-col items-end gap-1 cursor-pointer py-2"
                    onClick={()=>{setIsActive((prev)=>!prev)}}
                    >
                    {/* svg open */}
                    <svg
                        id="toggle-menu-open"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        className={classNames("h-6 w-6 relative -top-1", isActive && 'hidden')}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                        strokeWidth="2"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                    {/* svg close */}
                    <svg
                        id="toggle-menu-close"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        className={classNames("h-6 w-6 relative -top-1", !isActive && 'hidden')}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                        strokeWidth="2"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </div>
        </nav>
    </>
  )
}

export default Nav