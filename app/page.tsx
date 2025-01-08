import Details from "./components/hero/details"
import Hero from "./components/hero/profilePic"

const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-around justify-center h-screen">
        <Hero/>
        <Details/>
      </div>
    </> 
  )
}

export default Home
