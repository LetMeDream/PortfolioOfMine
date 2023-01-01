import {useEffect} from 'react'


const Me = () => {

  useEffect(()=>{
    /*========= ONLOAD EVENT =========*/
    window.addEventListener("load", () => updateTypewriter());

    /*========= TYPEWRITER =========*/
    const typewriterHeadlines = [
      "Developer",
      "Problem solver",
      "Coffeeholic",
      "Freelancer",
      "Mountainclimber",
    ];
    let index = 0;
    const typewriter = document.getElementById("typewriter");
    typewriter?.addEventListener("animationend", updateTypewriter);
    function updateTypewriter() {
      if (typewriter == null) return;

      typewriter.style.animation = "none";

      let timeout = setTimeout(function () {
          typewriter.innerText = typewriterHeadlines[index];

          let textLength = typewriterHeadlines[index].length;
          let speed = textLength / 2.4;

          typewriter.style.width = '0px';
          typewriter.style.animation =
            "typing " + speed + "s steps(" + textLength + ", end)";
          if(index === typewriterHeadlines.length - 1){
            index = 0
          }else{
            index++; /* go back to index 0, if incrementing will causes OutOfBoundsException */
          }
        }, 650); 
        return timeout     
    }
    let timeout = updateTypewriter();

    return () =>{
      clearTimeout(timeout)
    }
  },[])

  return (
    <>
      <section className=" flex bg-bg-dark relative pb-10 md:pb-0 z-10 min-h-screen flex-col md:flex-row" id='about'>
            <div className="bg-[url(../public/bg3.jpg)] md:w-2/4 min-h-screen  bg-cover">

            </div>
            <div className="md:w-2/4 flex flex-col items-left justify-center px-20">
            {/* <!-- typerwiter headline--> */}
              <div className="relative py-16 w-fit md:py-0">
                <h2 className='text-main font-Roboto-Condensed font-bold uppercase text-xl mb-6'>About</h2>
                <h3
                  id="typewriter"
                  className=" font-bold text-white  text-3xl lg:text-5xl md:mb-8 font-Roboto-Mono  overflow-hidden whitespace-nowrap "
                >
                  Error (╯°□°)╯︵ ┻━┻
                </h3>
              </div>
              <p className='text-white font-Roboto leading-7 md:leading-8'>
                Hello there. My name is Raúl, a passionate freelancer bringing your frontend programming and designs to life. I am experienced in developing web apps ranging from landing pages to full-fledged applications.  
              </p>
            </div>
      </section>
      
    </>
  )
}


export default Me