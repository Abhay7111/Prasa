import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className='w-full flex items-start justify-between px-5'>
        <h1 className='w-[25%] uppercase font-semibold text-xl'>The heat, soul, and creativity behind the exceptional accessories at prasa</h1>
        <div className='w-[68%] flex flex-col justify-end items-start relative calc-css-h-full'>
            <div className='w-full max-h-full pt-32'>
                <p className='w-full flex items-center justify-between'>
                    <p className='opacity-80'>Shop now and find the perfect pieces to complete any outfit.</p>
                    <NavLink to={`/`}><li className='uppercase tracking-tighter text-sm font-medium list-disc'>shop now</li></NavLink>
                </p>
                <img src="https://cdn.pixabay.com/photo/2020/04/22/08/17/portrait-5076529_960_720.jpg" alt="Image not found" className='text-xl font-bold uppercase w-full max-h-[90%] object-cover' />
            </div>
        </div>

    </div>
  )
}

export default Home