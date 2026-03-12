import Account from "./components/Account"
import Download from "./components/Download"
import Faq from "./components/Faq"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import Sell from "./components/Sell"
import Testimonial from "./components/Testimonial"
import Trusted from "./components/Trusted"

const App = () => {
  return (
    <div>
      <Navbar/>
      
      <main>
        <Hero/>
        <Trusted/>
        <Features/>
        <Portfolio/>
        <Sell/>
        <Account/>
        <Testimonial/>
        <Faq/>
        <Download/>
        <Footer/>
      </main>
    </div>
  )
}

export default App