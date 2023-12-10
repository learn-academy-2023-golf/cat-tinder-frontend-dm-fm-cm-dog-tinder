import './App.css'
import React, { useState, useEffect } from 'react'
import { Route, Routes} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import DogIndex from './pages/DogIndex'
import DogNew from './pages/DogNew'
import DogShow from './pages/DogShow'
import DogEdit from './pages/DogEdit'
import NotFound from './pages/NotFound'
import mockDogs from './mockDogs'

const App = () => {
  const [dogs, setDogs] = useState(mockDogs)

  const createDog = (createdDog) => {
    
  }

  const updateDog = (updatedDog) => {
    setDogs((prevDogs) =>
      prevDogs.map((dog) => (dog.id === updatedDog.id ? updatedDog : dog))
    )
  }

  useEffect(() => {
  }, [])
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dogindex" element={<DogIndex dogs={dogs} />} />
      <Route path="/dognew" element={<DogNew createDog={createDog}/>} />
      <Route path="/dogshow/:id" element={<DogShow dogs={dogs} />} />
      <Route path="/dogedit/:id" element={<DogEdit dogs={dogs} updateDog={updateDog} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App 