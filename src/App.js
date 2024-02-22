import { useEffect } from "react"
import "./App.css"
import Carousel from "./components/Carousel/Carousel"
import NavigationBar from "./components/NavigationBar/NavigationBar"
import JobTile from "./components/JobTile/JobTile"
import Footer from "./components/Footer/Footer.jsx"
import AOS from "aos"
import "aos/dist/aos.css"
import { Typewriter } from "react-simple-typewriter"
import content from "./assets/content/content.js"

// image import
import companieslogo from "./assets/images/companieslogo.png"
import homebanner from "./assets/images/homebanner.png"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      delay: 100,
      offset: 90,
    })
  }, [])

  return (
    <div className="App font-display">
      <NavigationBar />
      {/* home section one  */}
      <section className="w-full text-[#6C6C6C]">
        <div className="mt-10 flex justify-center items-center flex-col">
          <h3 className="sm:text-primary text-navfontsize font-w400 text-[#000]">Explore Your Future with</h3>
          <h1 className="sm:text-secondary text-primary font-masterbold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
            <Typewriter data-aos="fade-up" words={["NetWorkStranger"]} loop={1} cursor cursorStyle="" typeSpeed={50} deleteSpeed={50} delaySpeed={1000} />
          </h1>
          <p className="text-center sm:w-[1088px] w-[336] p-2 sm:text-f20 text-footerfont" data-aos="fade-up">
            {content.homePage.content}
          </p>
        </div>
      </section>
      {/* section two - life at network strangers */}
      <section className="w-full bg-black text-zinc-50 sm:mt-40 sm:p-20 sm:pb-40 mt-10 p-10 pb-40">
        <div className="w-full">
          <div data-aos="fade-up">
            <h3 className="sm:text-f48 text-f24">How is Life at</h3>
            <h1 className="sm:text-f90 text-primary">NetWorkStrangers</h1>
          </div>
          <div className="flex flex-col gap-3 mt-5 text-[#CECECE] sm:w-[1062px] w-[336px] sm:text-navfontsize text-footerfont" data-aos="fade-up">
            <p>{content.aboveCarouselTextOne.content}</p>
            <p>{content.aboveCarouselTextTwo.content}</p>
          </div>
        </div>
      </section>
      <div className="h-72 p-16 relative bg-gradient-to-r from-sky-500 to-blue-600 w-full flex justify-center items-center">
        <div className="w-full absolute top-[-100px]">
          <Carousel />
        </div>
      </div>
      {/* job openings section */}
      <section className="w-full flex justify-center flex-col items-center pb-20">
        <div className="flex justify-center items-center flex-col sm:m-24 mt-24">
          <h1 className="sm:text-f48 text-f24 font-black">Latest Job Openings</h1>
          <p className="sm:text-f20 text-footerfont text-center text-neutral-500">Start your dream career now. Join our team of professionals</p>
        </div>

        {/* tile component  */}
        <div className="w-full flex justify-center items-center sm:m-0 m-20">
          <div className="flex justify-center items-center sm:flex-row sm:flex-wrap flex-col gap-5">
            {jobTile.map((e, idx) => (
              <JobTile key={idx} title={e.job.title} location={e.job.location} experience={e.job.experience} />
            ))}
          </div>
        </div>
      </section>
      {/* companies  */}
      <section className="w-full flex justify-center items-center flex-col gap-10 p-10">
        <h4 className="sm:text-f24 text-footerfont text-center text-[#1E1E1E]">Trusted by individuals and teams at the world’s boldest companies</h4>
        <img src={companieslogo} alt="companies logos" />

        {/* line */}
        <div className="h-[3px] sm:w-3/4 w-full bg-gradient-to-r from-white from-1% via-sky-500 via-[percentage:80%] to-white"></div>

        {/* banner  */}
        <div className="sm:w-[1510px] w-[336px] sm:h-[318px] h-[170px] sm:mt-20 sm:mb-20 relative flex justify-center items-center text-white">
          <div className="absolute text-center">
            <h4 className="sm:text-primary text-footerfont">Ready to Elevate Your Network Game</h4>
            <h1 className="sm:text-secondary text-f20 font-masterbold">Join NetworkStranger now!</h1>
            <button className="sm:w-[235px] w-[139px] bg-white hover:bg-blue-400 text-blue-700 hover:text-white font-bold sm:py-2 sm:px-4 rounded-btnradius shadow-md hover:shadow-lg transition duration-200 sm:text-[16px] text-[12px]">Get Started for Free</button>
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

const jobTile = [
  {
    job: {
      title: "Python Consultant",
      location: "Remote (India)",
      experience: "Minimum 5 Years",
    },
  },
  {
    job: {
      title: "Digital Marketing Executive",
      location: "Remote (India)",
      experience: "Minimum 5 Years",
    },
  },
  {
    job: {
      title: "Content Writer",
      location: "Remote (India)",
      experience: "Minimum 5 Years",
    },
  },
  {
    job: {
      title: "BD-Lead",
      location: "Remote (India)",
      experience: "Minimum 5 Years",
    },
  },
  {
    job: {
      title: "UX Designer",
      location: "Remote (India)",
      experience: "Minimum 5 Years",
    },
  },
  {
    job: {
      title: "Sales Manager",
      location: "Remote (India)",
      experience: "Minimum 5 Years",
    },
  },
]
