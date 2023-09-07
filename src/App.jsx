import Navbar from './components/Navbar'
import Landing from './sections/Landing'
import About from './sections/About'
import FAQ from './sections/FAQ'
import Team from './sections/Team'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div className='h-screen mb-20'>
      <Navbar />
      <Landing />
      <About />
      <FAQ />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
