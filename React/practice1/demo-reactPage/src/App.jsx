import React from 'react'
import NavBar from './Components/NavBar.jsx'
import CenterSection from './Components/CenterSection.jsx'
import About from './Components/About.jsx'
import Cards from './Components/Cards.jsx'

const App = () => {
  return (
    <div className='container'>
      <NavBar />
      <CenterSection />
      <About />
      <Cards />
    </div>
  )
}

export default App