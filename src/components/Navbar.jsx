import { useState, useEffect } from "react";

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
      <div className="typography flex justify-between">
        <h4 className='text-accent1 font-bold cursor-pointer' onClick={() => {window.scrollTo(0,0)}}>ClockHacks 2</h4>
        <div className='text-text1 flex gap-8 items-center'>
          {links.map((link) => (
            <a href={link.href} className="hover:opacity-80 transition-opacity">{link.name}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar