import React from 'react'
import LeftBar from '../pages/LeftBar'
import RightBar from '../pages/RightBar'
function MainLayout({children}) {
  return (
    <div className=''>
      <div className='left-bar w-[20vw] fixed h-[100vh] bg-black text-white'><LeftBar></LeftBar></div>
      <div className='w-[60vw] mx-auto'>{children}</div>
      <div className="right bar w-[20vw] fixed h-[100vh] bg-black text-white right-0 top-0"><RightBar></RightBar></div>
    </div>
  )
}

export default MainLayout
