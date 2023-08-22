import { useState, useEffect } from "react";
import { GiHamburgerMenu } from 'react-icons/gi'

const links = [
  {
    name: 'About Us',
    href: '#about',
  }, {
    name: 'FAQ',
    href: '#faq'
  }, {
    name: 'Sponsors',
    href: '#sponsors'
  }, {
    name: 'Our Team',
    href: '#team'
  }, {
    name: 'Contact Us',
    href: '#contact'
  }
]

const Navbar = () => {

  const [top, setTop] = useState(true)
  const [open, setOpen] = useState(false)

  useEffect(() => {

    const scrollHandler = () => {
      setTop(window.scrollY <= 50)
    }
    window.addEventListener('scroll', scrollHandler, true);

    return () => {
      window.removeEventListener('scroll', scrollHandler, true);
    };
  }, []);

  return (
    <nav className={`py-8 sticky top-0 z-50 ${(top) ? "" : "!border-b-gray-500"} border-b-[1px] border-b-bg1 transition-colors`}>
      <div className="typography flex justify-between px-8">
        <h4 className='text-accent1 font-bold cursor-pointer' onClick={() => {window.scrollTo(0,0)}}>ClockHacks 2</h4>

        <div className='text-text1 hidden md:flex gap-8 items-center'>
          {links.map((link) => (
            <a href={link.href} className="hover:opacity-80 transition-opacity">{link.name}</a>
          ))}
        </div>

        <div className='flex md:hidden items-center z-40' onClick={() => {setOpen(!open)}}>
          <GiHamburgerMenu className='text-2xl text-text2 cursor-pointer' />
        </div>

        <div onClick={() => setOpen(!open)} className={`navbar-popup transition-opacity bg-bg1 fixed top-0 left-0 place-items-center h-[100dvh] w-screen grid`} style={{opacity: (open ? "100" : "0"), pointerEvents: (open ? "auto" : "none")}}>
          <div className='flex flex-col text-center gap-8 items-center'>
            <h3 className='text-2xl text-accent1'>Navigation</h3>
            {links.map((link) => (
              <a href={link.href} className="text-text1 hover:opacity-80 transition-opacity">{link.name}</a>
            ))}
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar