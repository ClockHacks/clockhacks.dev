import SponsorData from '../../data/Sponsors.data'
import './Sponsors.scss'

const Sponsors = () => {
  return (
    <div className='mt-8'>
      <h3 className='text-center mb-4'>Sponsors</h3>
      <div className='sponsorlogos'>
        <div className='fourth'>
          {SponsorData.fourth.map((sponsor) => {
            return (
              <img src={sponsor.logo} alt='sponsor' onClick={() => window.open(sponsor.link)}></img>
            )
          })}
        </div>
        <div className='third'>
          {SponsorData.third.map((sponsor) => {
            return (
              <img src={sponsor.logo} alt='sponsor' onClick={() => window.open(sponsor.link)}></img>
            )
          })}
        </div>
        <div className='second'>
          {SponsorData.second.map((sponsor) => {
            return (
              <img src={sponsor.logo} alt='sponsor' onClick={() => window.open(sponsor.link)}></img>
            )
          })}
        </div>
        <div className='first'>
          {SponsorData.first.map((sponsor) => {
            return (
              <img src={sponsor.logo} alt='sponsor' onClick={() => window.open(sponsor.link)}></img>
            )
          })}
        </div>
        <p className='text-center px-8'>
          Interested in sponsoring? Contact us at <a href='mailto:business@rythmhacks.ca'>business@clockhacks.dev</a>. 
        </p>
      </div>
    </div>
  )
}

export default Sponsors