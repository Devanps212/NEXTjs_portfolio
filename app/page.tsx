import Details from "./components/hero/details"
import Hero from "./components/hero/profilePic"

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-2 h-screen">
        <Hero/>
        <Details/>
      </div>
    </> 
  )
}

export default Home
