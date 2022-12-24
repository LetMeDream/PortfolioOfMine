import {useEffect} from 'react'

const About = () => {

  useEffect(()=>{
    /*========= ONLOAD EVENT =========*/
    window.addEventListener("load", () => updateTypewriter());

    /*========= TYPEWRITER =========*/
    const typewriterHeadlines = [
      "Developer",
      "Problem solver",
      "Coffeeholic",
      "Freelancer",
      "MountainClimber",
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

          typewriter.style.animation =
            "typing " + speed + "s steps(" + textLength + ", end)";
          index === typewriterHeadlines.length - 1
            ? (index = 0)
            : index++; /* go back to index 0, if incrementing will causes OutOfBoundsException */
        }, 450); 
        return timeout     
    }
    let timeout = updateTypewriter();

    return () =>{
      clearTimeout(timeout)
    }
  },[])

  return (
    <>
      <section className=" flex bg-[#0f1922] relative z-10 min-h-screen flex-col md:flex-row" id='about'>
            <div className="bg-[url(../public/bg3.jpg)] bg-cover w-2/4 min-h-screen">

            </div>
            <div className="bg-transparent w-2/4 flex items-center justify-center">
            {/* <!-- typerwiter headline--> */}
              <div className="inline-block">
                <h3
                  id="typewriter"
                  className=" font-bold text-5xl text-white lg:text-5xl mb-8 font-Roboto-Mono  overflow-hidden whitespace-nowrap w-0"
                >
                  Error (╯°□°)╯︵ ┻━┻
                </h3>
              </div>
            </div>
      </section>
      
    </>
  )
}


export default About