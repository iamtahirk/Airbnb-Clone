import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

import './App.css'

function App() {
  const cardData = data.map(item => {
      return <Card
        key = {item.id}
        {...item}
      />
  })

  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <div className="cards-box">
        {cardData}
      </div>
    </div>
  )
}

export default App