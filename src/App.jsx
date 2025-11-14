
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Address from './Components/Address'
import Service1 from './Components/Service1'
import Service2 from './Components/Service2'
import Service3 from './Components/Service3'
import Service4 from './Components/Service4'
import Service5 from './Components/Service5'
import Service6 from './Components/Service6'
import Service7 from './Components/Service7'
import Service8 from './Components/Service8'
import Service9 from './Components/Service9'
import Service10 from './Components/Service10'
import Home from './Components/Home'
import Slider from './Components/Slider';

function App() {


  return (
    <>    
    <Slider/>
    <Navbar/>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/service1" element={<Service1 />} />
        <Route path="/service2" element={<Service2 />} />
        <Route path="/service3" element={<Service3 />} />
        <Route path="/service4" element={<Service4 />} />
        <Route path="/service5" element={<Service5 />} />
        <Route path="/service6" element={<Service6 />} />
        <Route path="/service7" element={<Service7 />} />
        <Route path="/service8" element={<Service8 />} />
        <Route path="/service9" element={<Service9 />} />
        <Route path="/service10" element={<Service10 />} />
        <Route path="/address" element={<Address />} />
      </Routes>
      <Footer/>

    </>

  )
}

export default App
