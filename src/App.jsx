import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function App() {
  const user = useSelector((state)=>state.user.user)
  return (
    
   <div className='w-full   h-screen '>
    
      {Object.keys(user).length ? <div className='    rounded-xl p-1 md:p-0 md:rounded-none overflow-hidden bottom-0 justify-center lg:relative h-[10%] w-full '>
          <Header/>
      </div>
      :'' }
      <div className={`bg-white ${!Object.keys(user).length ? 'h-[100%]' :'h-[85%]' } w-full flex flex-col `}>
         <Outlet/>
      </div>
      {Object.keys(user).length ? <div className='     h-0 lg:h-[5%] w-full '>
          <Footer/>
      </div>:''}
   </div>
  )
}

export default App
