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
    <section className='flex flex-col justify-center h-[calc(100vh-96px)] p-8 typography'>
      <h1 className='text-4xl lg:text-9xl cursor-pointer text-center lg:text-left' onClick={clicked}>{header}</h1>
      <h2 className='text-lg lg:text-3xl font-normal mb-4 text-center lg:text-left'>November <del>3-5</del> 24-26, 2023 | Time. <span className='text-accent1'>Reinvented.</span></h2>
      <div className="flex flex-col md:flex-row items-center w-full">
        <a className="bg-accent1 text-center font-bold hadow-lg my-2 md:mr-3 p-3 text-white rounded-lg w-full" target="_BLANK" href="https://docs.google.com/forms/d/e/1FAIpQLScJjZKZyVWQyC4ehvoWkJ0nd8Ul75DQ0Wjn0vW23d13a4WX_A/viewform">
          Registration Form
        </a>
        <a className="bg-bg2 text-center font-bold hadow-lg my-2 mb-5 md:mb-0 p-3 text-white rounded-lg w-full" target="_BLANK" href="https://discord.com/invite/gN3k2Wmv2b">
          Discord Server
        </a>
      </div>
      <div className='text-xs mb-[7rem] flex items-center justify-center lg:justify-start gap-2'>
        <button onClick={() => window.open('mailto:business@clockhacks.dev')}>Sponsor Us</button>
        <button className='contrast' onClick={() => window.open('https://one.clockhacks.dev')}>Visit 2022</button>
      </div>
    </section>
  )
}

export default Landing