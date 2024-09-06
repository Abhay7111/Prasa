import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className='w-full flex items-center justify-between sm:min-h-52 h-fit bg-css-white px-5'>
        <div className='flex gap-10 items-center'>
            <div className='w-fit h-20 uppercase text-[9vw] relative flex items-center justify-start font-medium '><NavLink to={``}>Prasa.</NavLink></div>
        </div>
        <div className='flex flex-col w-full pl-5'>
            <ul className='flex w-full items-start justify-between pl-5 py-3'>
                <ul className='flex gap-6'>
                    <NavLink to={`/`}><li className='uppercase tracking-tighter text-sm font-medium list-disc'>Home</li></NavLink>
                    <NavLink to={`/`}><li className='uppercase tracking-tighter text-sm font-medium list-disc'>About</li></NavLink>
                </ul>
                    <NavLink to={`/`}><li className='uppercase tracking-tighter text-sm font-medium list-disc'>shop now</li></NavLink>
            </ul>
            <div className=' w-full  sm:pr-3 py-3 border-t border-zinc-400'>
                <p className=' w-full sm:w-[70%] text-sm leading-4 tracking-tighter opacity-85'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis doloremque iusto dolore nobis excepturi mollitia sunt eligendi corrupti recusandae dolores qui ullam deleniti voluptatem magni labore aspernatur praesentium, distinctio impedit.</p>
            </div>
        </div>
    </div>
  )
}

export default Nav