import Details from "./components/hero/details"
import Hero from "./components/hero/profilePic"
import Slider from "./components/slider/slider"

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-2 h-screen">
        <Hero/>
        <Details/>
      </div>
      <Slider/>
    </> 
  )
}

export default Home
