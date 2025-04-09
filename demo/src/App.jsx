import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer';
import Akash from './Akash';
import Chandan from './Chandan';
import Vikas from './Vikas';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ fontSize: "100px", color:"red"}}> applute </div>
      <Navbar/>
      <Footer/>
      <Akash/>
      <Chandan/>
      <Vikas/>
    </>
  )
}

export default App
