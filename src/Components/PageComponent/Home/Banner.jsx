import React from 'react'

function Banner() {
  return (
    <div className="grid grid-colsh-[500px] relative  w-screen border-red-500 mt-24 ">
        <div className=" h-full  bg-green-500 ">
          <img
            className="w-full  h-[600px]"
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcW91cGpiY2o0Y2YzMHM1ZHhzdG96b3lsc3dveW5uNHRoYW5qaXdxcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xqklsTVVXhPa/giphy.webp"
          />
        </div>
        <div className="flex flex-col  justify-center items-center gap-4  w-10/12 h-full mx-auto  absolute z-10 top-0 left-0 right-0 bottom-0">
          <div className=" font-serif  text-7xl text-white ">
            Living the art experience
          </div>
          <div className=" text-2xl  text-white text-center w-10/12  ">
            We connect with an audience sensitive to the changes taking place in
            the art world and in the world in general
          </div>
        </div>
      </div>

  )
}

export default Banner