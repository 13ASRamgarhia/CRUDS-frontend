import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='flex h-screen justify-center items-center'>
      <div className="banner w-full tablet:w-3/4 laptop:w-1/2 px-5 flex flex-col justify-center items-center space-y-5 laptop:space-y-7">
        <div className="brand flex text-white space-x-6 laptop:space-x-9">
          <div className="flex flex-col text-center justify-center text-white font-bold text-6xl laptop:text-7xl"><div className='flex justify-center'><p>C</p></div><div className='flex px-1'><p className='text-center text-lg laptop:text-xl font-normal tracking-wider'>Create</p></div></div>
          <div className="flex flex-col text-center justify-center text-white font-bold text-6xl laptop:text-7xl"><div className='flex justify-center'><p>R</p></div><div className='flex px-1'><p className='text-center text-lg laptop:text-xl font-normal tracking-wider'>Read</p></div></div>
          <div className="flex flex-col text-center justify-center text-white font-bold text-6xl laptop:text-7xl"><div className='flex justify-center'><p>U</p></div><div className='flex px-1'><p className='text-center text-lg laptop:text-xl font-normal tracking-wider'>Update</p></div></div>
          <div className="flex flex-col text-center justify-center text-white font-bold text-6xl laptop:text-7xl"><div className='flex justify-center'><p>D</p></div><div className='flex px-1'><p className='text-center text-lg laptop:text-xl font-normal tracking-wider'>Delete</p></div></div>
          <div className="flex flex-col text-center justify-center text-white font-bold text-6xl laptop:text-7xl"><div className='flex justify-center'><p>S</p></div><div className='flex px-1'><p className='text-center text-lg laptop:text-xl font-normal tracking-wider'>Send</p></div></div>
        </div>

        <div className="flex flex-col justify-center items-center text-white text-xl">
          <p className='tracking-wider leading-6 text-center font-normal' style={{ textShadow: "3px 3px 3px #000" }}>A single page application to showcase CRUDS operation skills using MERN Stack. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, vel, nam corporis dolore autem, fugit hic pariatur adipisci esse facilis quisquam tempora iste? Labore laudantium sed quaerat, molestias cum perferendis?</p>
        </div>

        <div className="flex flex-col justify-center items-center text-white text-xl">
          <Link to="/Home"><div className='w-36 bg-[#15131B] border border-white py-3 px-3 text-center font-medium rounded-lg hover:text-white focus:text-white cursor-pointer'>Get Started</div></Link>
        </div>
      </div>

    </div>
  )
}

export default Landing