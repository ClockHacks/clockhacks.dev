import Socials from "./Socials"

const Footer = () => {
  return (
    <div className='bg-bg2 p-8 text-text2'>
      <div className="typography flex justify-between items-center">
        <a href='https://github.com/ClockHacks/clockhacks.dev/blob/main/LICENSE' className='text-accent1'>
          Copyright © ClockHacks 2023
        </a>
        <div className='flex items-center gap-4'>
          <Socials />
          <a href='https://one.clockhacks.dev' className='!text-accent1'>2022 Site</a>
        </div>
      </div>
    </div>
  )
}

export default Footer