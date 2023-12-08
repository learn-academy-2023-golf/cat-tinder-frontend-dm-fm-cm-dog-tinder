import './App.css';
import React, { useState } from 'react'
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
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dogindex" element={<DogIndex dogs={dogs} />} />
      <Route path="/dognew" element={<DogNew createDog={createDog}/>} />
      <Route path="/dogshow/:id" element={<DogShow dogs={dogs} />} />
      <Route path="/dogedit" element={<DogEdit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App 