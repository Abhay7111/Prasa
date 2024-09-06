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
        <div className=' w-full pt-10 h-fit'>
            <div className='flex flex-col sm:flex-row sm:items-center justify-center sm:justify-between'>
                <h1 className='text-6xl sm:text-9xl text-start px-5 w-full sm:w-fit'>Find the perfect</h1>
                <h2 className='text-4xl sm:text-7xl w-full py-10 sm:pl-0 pl-10 sm:w-fit text-end'>Pieces to match Your style.</h2>
            </div>
            <div className='py-10 w-full h-fit overflow-x-auto'>
                <div className='flex items-center justify-start gap-5 w-fit px-10 sm:px-0'>
                <div className='w-[80vw] sm:w-[32vw] h-96'>
                    <img src="https://cdn.pixabay.com/photo/2018/01/06/23/43/girl-3066198_1280.jpg" alt="Image not found" className='text-xl font-bold uppercase w-full h-full object-cover' />
                </div>
                <div className='w-[80vw] sm:w-[32vw] bg-[#ddddfa] sm:bg-transparent h-96 p-1 flex flex-col items-start justify-between'>
                    <div>
                        <p className='text-xl font-medium'>132 collections</p>
                        <h3 className='text-3xl font-bold uppercase'>Boucles <br /> d'oreilles</h3>
                    </div>
                    <div>
                        <p className='opacity-75'>From delicate studs to statement hoops, <br /> each pair is crafted with precision and care, <br /> ensuring you find the perfect earrings <br /> to express your personal style.</p>
                    <NavLink to={`/`}><li className='uppercase tracking-tighter text-sm font-bold list-disc'>Go to collections</li></NavLink>
                    </div>

                </div>
                <div className='w-[80vw] sm:w-[32vw] h-96'>
                    <img src="https://cdn.pixabay.com/photo/2017/07/20/15/16/earring-2522608_1280.jpg" alt="Image not found" className='text-xl font-bold uppercase w-full h-full object-cover' />
                </div>
                </div>
            </div>
            <div className='py-10 w-full h-fit overflow-x-auto'>
                <div className='flex items-center justify-start gap-5 w-fit px-10 sm:px-0'>
                <div className='w-[80vw] sm:w-[32vw] bg-[#ddddfa] sm:bg-transparent h-96 p-1 flex flex-col items-start justify-between'>
                    <div>
                        <p className='text-xl font-medium'>132 collections</p>
                        <h3 className='text-3xl font-bold uppercase'>Boucles <br /> d'oreilles</h3>
                    </div>
                    <div>
                        <p className='opacity-75'>From delicate studs to statement hoops, <br /> each pair is crafted with precision and care, <br /> ensuring you find the perfect earrings <br /> to express your personal style.</p>
                        <NavLink to={`/`}><li className='uppercase tracking-tighter text-sm font-bold list-disc'>Go to collections</li></NavLink>
                    </div>

                </div>
                <div className='w-[80vw] sm:w-[32vw] h-96'>
                    <img src="https://cdn.pixabay.com/photo/2019/12/18/13/59/christmas-4704072_1280.jpg" alt="Image not found" className='text-xl font-bold uppercase w-full h-full object-cover' />
                </div>
                <div className='w-[80vw] sm:w-[32vw] h-96'>
                    <img src="https://cdn.pixabay.com/photo/2016/10/04/18/29/cattle-show-1715098_1280.jpg" alt="Image not found" className='text-xl font-bold uppercase w-full h-full object-cover' />
                </div>
                </div>
            </div>

        </div>
        <div className='flex flex-col w-full'>
            <div className='flex w-full h-fit py-10 items-start justify-between'>
                <div className='flex h-72 flex-col p-5 items-start justify-between'>
                </div>
                <div className='w-full flex flex-col items-center'>
                    <p className='sm:text-[4vw] w-full justify-between flex uppercase pr-5 items-center font-semibold'><hr className='border-b-2 border-zinc-700 w-80'/><span>Accessories is not</span> <NavLink to={`/`}><li className='text-lg list-disc font-bold'>[cart]</li></NavLink></p>
                    <p className='sm:text-[4vw] font-semibold leading-none uppercase ml-[10%]'>just add-ons</p>
                    <p className='sm:text-[4vw] font-semibold leading-none uppercase ml-[45%]'>it's essential for</p>
                    <p className='sm:text-[4vw] font-semibold leading-none w-full flex items-center justify-between uppercase'> <span className='flex flex-col text-sm font-light'><span className='opacity-90'>Total products</span><span className='text-lg font-bold opacity-100'>(365)</span></span> personal style.</p>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Home