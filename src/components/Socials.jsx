import { BsGithub, BsLinkedin, BsYoutube, BsTwitch, BsInstagram } from "react-icons/bs" 

const socialsData = [
  {
    icon: BsGithub,
    href: "https://github.com/ClockHacks"
  }, {
    icon: BsLinkedin,
    href: "https://www.linkedin.com/company/clockhacks"
  }, {
    icon: BsYoutube,
    href: "https://www.youtube.com/channel/UCTXw20G-JSnQE80tZmwUbwg"
  }, {
    icon: BsTwitch,
    href: "https://www.twitch.tv/clockhacks/"
  }, {
    icon: BsInstagram,
    href: "https://www.instagram.com/clockhacks/"
  }
]

const Socials = () => {
  return (
    <div className='flex gap-2'>
      {
        socialsData.map((social) => {
          return (
            <a href={social.href} className='text-accent1'>
              <social.icon className='text-xl' />
            </a>
          )
        })
      }
    </div>
  )
}

export default Socials