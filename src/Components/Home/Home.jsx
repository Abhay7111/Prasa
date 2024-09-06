import React from 'react'
import { NavLink } from 'react-router-dom'
import Lstr from '../dgn/Lstr'

function Home() {
  return (
    <div className=''>
        <div className='w-full overflow-x-hidden flex flex-col h-fit sm:flex-row items-start justify-between px-5'>
        <div className='flex relative flex-col items-start justify-between calc-css-h-full pb-10'>
            <h1 className='w-full sm:w-[75%] uppercase relative z-10 font-semibold text-xl mt-10 sm:mt-0'>The heat, soul, and creativity behind the exceptional accessories at prasa</h1>
            <div className='scale-[1.2] z-0 absolute sm:relative top-[200%] -right-[19%] sm:top-auto sm:right-auto overflow-hidden'>
            <Lstr/>
            </div>
        </div>
        <div className='xl:w-[68%] flex flex-col justify-end items-start z-20 relative h-fit calc-css-h-full'>
            <div className='w-full max-h-full sm:pt-32'>
                <p className='w-full flex items-center justify-between sm:py-0 py-10'>
                    <p className='opacity-80 sm:w-fit w-[65%]'>Shop now and find the perfect pieces to complete any outfit.</p>
                    <NavLink to={`/`}><li className='uppercase tracking-tighter text-sm font-medium list-disc'>shop now</li></NavLink>
                </p>
                <img src="https://cdn.pixabay.com/photo/2020/04/22/08/17/portrait-5076529_960_720.jpg" alt="Image not found" className='text-xl font-bold uppercase w-full h-auto sm:max-h-[90%] object-cover' />
            </div>
        </div>
        </div>
        <div className=' w-full min-h-screen'>

        </div>
    </div>
  )
}

export default Home