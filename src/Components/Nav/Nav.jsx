import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className='w-full flex flex-col sm:flex-row items-center justify-between sm:min-h-52 h-fit bg-css-white px-5'>
        <div className='flex gap-10 items-center'>
            <div className='w-fit h-20 uppercase text-[9vw] relative flex items-center justify-start font-medium '><NavLink to={`/`}>Prasa.</NavLink></div>
        </div>
        <div className='flex flex-col w-full pl-5'>
            <ul className='flex gap-2 sm:gap-0 w-full items-end sm:items-start justify-between sm:pl-5 py-3'>
                <ul className='flex gap-6'>
                    <NavLink to={`/`} className={({isActive}) =>` ${isActive ? 'relative before:w-full before:absolute before:bg-zinc-800 before:top-full before:h-[2px] before:transition-all before:left-0' : ''} relative hover:before:w-full before:absolute before:bg-zinc-800 before:top-full before:left-1/2 before:h-[2px] before:w-0 before:transition-all hover:before:left-0 w-fit px-2 uppercase tracking-tighter text-sm font-medium`}>Home</NavLink>
                    <NavLink to={`/about`} className={({isActive}) =>` ${isActive ? 'relative before:w-full before:absolute before:bg-zinc-800 before:top-full before:h-[2px] before:transition-all before:left-0' : ''} relative hover:before:w-full before:absolute before:bg-zinc-800 before:top-full before:left-1/2 before:h-[2px] before:w-0 before:transition-all hover:before:left-0 w-fit px-2 uppercase tracking-tighter text-sm font-medium`}>About</NavLink>
                </ul>
                    <NavLink to={`/shopnow`} className={({isActive}) =>` ${isActive ? 'relative before:w-full before:absolute before:bg-zinc-800 before:top-full before:h-[2px] before:transition-all before:left-0' : ''} relative hover:before:w-full before:absolute before:bg-zinc-800 before:top-full before:left-1/2 before:h-[2px] before:w-0 before:transition-all hover:before:left-0 w-fit px-2 uppercase tracking-tighter text-sm font-medium`}>Shop now</NavLink>
            </ul>
            <div className=' w-full  sm:pr-3 py-3 border-t border-zinc-400'>
                <p className=' w-full sm:w-[70%] text-sm leading-4 tracking-tighter opacity-85'>Discover a curated selection of stylish accessories to elevate your look. From statement jewelry to trendy bags, we have everything you need to express your unique style.</p>
            </div>
        </div>
    </div>
  )
}

export default Nav