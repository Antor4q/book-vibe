

import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav/Nav'


function App() {
  

  return (
    <div className='lg:max-w-[1440px] mx-auto'>
     <Nav></Nav>
     
     <Outlet></Outlet>

    </div>
  )
}

export default App
