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
import dogs from './mockDogs'

const App = () => {
  const [mockDogs, setMockDogs] = useState(dogs)
  console.log(mockDogs)
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dogindex" element={<DogIndex />} />
      <Route path="/dognew" element={<DogNew />} />
      <Route path="/dogshow" element={<DogShow />} />
      <Route path="/dogedit" element={<DogEdit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App 