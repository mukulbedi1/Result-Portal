import React from 'react'
import Login from './Login'
import Bg_Img from './Image/Background_Image.jpg'


export default function Background() {
  return (
    <div className='w-full h-screen bg-no-repeat bg-cover fixed flex justify-center items-center'>
        <img className='w-full h-screen' src={Bg_Img} alt="Background_Image" />

          <Login collegeName ="PANJAB UNIVERSITY" siteName="RESULT PORTAL"/>
    </div>
  )
}
