import { useEffect } from "react"
import "./App.css"
import Carousel from "./components/Carousel/Carousel"
import NavigationBar from "./components/NavigationBar/NavigationBar"
import JobTile from "./components/JobTile/JobTile"
import Footer from "./components/Footer/Footer.jsx"
import AOS from "aos"
import "aos/dist/aos.css"
import { Typewriter } from "react-simple-typewriter"

// image import
import companieslogo from "./assets/companieslogo.png"
import homebanner from "./assets/homebanner.png"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      delay: 100,
      offset: 90,
    })
  }, [])

  return (
    <div className="App font-display">
      <NavigationBar />
      {/* home section one  */}
      <section className="w-full">
        <div className="mt-10 flex justify-center items-center flex-col">
          <h3 className="text-primary font-w400" data-aos="fade-up">
            Explore Your Future with
          </h3>
          <h1 className="text-secondary font-masterbold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
            <Typewriter data-aos="fade-up" words={["NetWorkStranger"]} loop={1} cursor cursorStyle="" typeSpeed={50} deleteSpeed={50} delaySpeed={1000} />
          </h1>
          <p className="text-center w-[1088px]" data-aos="fade-up">
            We believe in the power of connections and the unlimited potential they hold. As we continue to redefine the future of professional networking, we're on the lookout for talented individuals who share our passion for innovation. Explore exciting career opportunities with us, where your skills meet cutting-edge technology.
          </p>
        </div>
      </section>
      {/* section two */}
      <section className="w-full bg-black text-zinc-50 mt-40 p-20">
        <div className="w-[1062px]">
          <div data-aos="fade-up">
            <h3 className="text-f48">How is Life at</h3>
            <h1 className="text-f90">NetWorkStrangers</h1>
          </div>
          <div className="flex flex-col gap-3 mt-5" data-aos="fade-up">
            <p>At NetWorkStranger, we don't just build connections; we build a culture of excellence. Join a workplace where innovation meets collaboration, and every idea has the potential to make a difference. Discover a vibrant atmosphere that encourages growth, values diversity, and celebrates success.</p>
            <p>Here, work isn't just a task; it's a journey of exploration, learning, and accomplishment. Dive into a culture that nurtures creativity, fosters teamwork, and empowers you to reach new heights. Life at NetWorkStranger is more than a job; it's an adventure of endless possibilities.</p>
          </div>
        </div>

        {/* carousel  */}
      </section>
      <div className="h-72 bg-gradient-to-r from-sky-500 to-blue-600 w-full flex justify-center items-center">{/* <Carousel /> */}carousel here</div>
      {/* job openings section */}
      <section className="w-full flex justify-center flex-col items-center pb-20">
        <div className="flex justify-center items-center flex-col m-24">
          <h1 className="text-f48 font-black" data-aos="fade-up">
            Latest Job Openings
          </h1>
          <p className="text-f20 text-center text-neutral-500" data-aos="fade-up">
            Start your dream career now. Join our team of professionals
          </p>
        </div>

        {/* tile component  */}
        <div className="w-[1278px] flex justify-center items-center" data-aos="fade-up">
          <div className="flex justify-center items-center flex-wrap gap-5">
            <JobTile title={"Python Consultant"} location={"Remote (India)"} experience={"Minimum 5 years"} />
            <JobTile title={"Digital Marketing Executive"} location={"Remote (India)"} experience={"Minimum 5 years"} />
            <JobTile title={"Content Writer"} location={"Remote (India)"} experience={"Minimum 5 years"} />
            <JobTile title={"BD-Lead"} location={"Remote (India)"} experience={"Minimum 5 years"} />
            <JobTile title={"UX Designer"} location={"Remote (India)"} experience={"Minimum 5 years"} />
            <JobTile title={"Sales Manager"} location={"Remote (India)"} experience={"Minimum 5 years"} />
          </div>
        </div>
      </section>
      {/* companies  */}
      <section className="w-full flex justify-center items-center flex-col gap-10 p-10">
        <h4 className="text-f24" data-aos="fade-up">
          Trusted by individuals and teams at the world’s boldest companies
        </h4>
        <img src={companieslogo} alt="companies logos" data-aos="fade-up" />

        {/* line */}
        <div className="h-[3px] w-3/4 bg-gradient-to-r from-white from-1% via-sky-500 via-[percentage:80%] to-white"></div>

        {/* banner  */}
        <div className="w-[1510px] relative flex justify-center items-center text-white">
          <div className="absolute text-center">
            <h4 className="text-primary">Ready to Elevate Your Network Game</h4>
            <h1 className="text-secondary font-masterbold">Join NetworkStranger now!</h1>
            <button className="bg-white hover:bg-blue-400 text-blue-700 hover:text-white font-bold py-2 px-4 rounded-btnradius shadow-md hover:shadow-lg transition duration-200">Get Started for Free</button>
          </div>
          <img src={homebanner} alt="homebanner image" />
        </div>
      </section>

      {/* footer component  */}
      <Footer />
    </div>
  )
}

export default App
