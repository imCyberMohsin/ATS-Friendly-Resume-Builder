import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Resume from './components/Resume/Resume'
import Home from './components/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/MyResume" element={<Resume />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
