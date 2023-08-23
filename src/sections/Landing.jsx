import { useEffect, useState } from "react";

const Landing = () => {

  const finalHeader = 'ClockHacks 2'.split('')
  const [header, setHeader] = useState('ClockHacks 2')
  
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval = null;

  const clicked = () => { 
    let iteration = 0;

    clearInterval(interval);
      
    interval = setInterval(() => {
      setHeader(header
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return finalHeader[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("")
      )
      
      if (iteration >= 12) { 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 40);
  }

  useEffect(() => {
    clicked()
  }, [])

  return (
    <section className='flex flex-col justify-center h-[calc(100vh-96px)] typography'>
      <h1 className='text-9xl' onClick={clicked}>{header}</h1>
      <h2 className='font-normal mb-4'>A hackathon for <span className='text-accent1'>time</span></h2>
      <div className='mb-[7rem] flex items-center gap-2'>
        <button>Sponsor Us</button>
        <button>Visit 2022</button>
      </div>
    </section>
  )
}

export default Landing