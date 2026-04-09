import Header from './components/header/header'
import Hero from './components/hero/hero'
import './App.css'
import Companies from './components/Companies/Companies'
import Resedencies from './components/Resedencies/Resedencies'
import OurValues from './components/OurValues/OurValues'
import ContactUs from './components/ContactUs/ContactUs'
import GetStarted from './components/GetStarted/GetStarted'
import Footer from './components/Footer/Footer'
  
const App = () => {
  return (
    <div className='App'>
      <div className="gradient-wrapper">
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>

      <Companies />

      <Resedencies />

      <OurValues />

      <ContactUs />

      <GetStarted />

      <Footer />

      {/* <div className="heightDiv"></div> */}
    </div>
  )
}

export default App
