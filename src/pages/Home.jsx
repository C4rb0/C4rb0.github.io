import Hero from '../assets/components/layout/Hero'
import Terminal from '../assets/utils/Terminal/Terminal'
import '../assets/css/Home.css'

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Terminal />
    </div>
  )
}

export default Home