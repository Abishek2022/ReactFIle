import React from 'react'

function ArtGallery() {
  return (
    <div className="flex flex-col justify-between items-center h-fit p-3 ">
    <div className="text-5xl  font-serif">
      Contemporary art gallery in Barcelona
    </div>
    <div className="text-[23px] p-3 w-8/12 mt-6 mx-auto text-center">
      Pigment Gallery was founded in Barcelona in 2016 by Ferran Josa with
      the intention of connecting with an audience sensitive to the changes
      taking place in the art world and the world in general
    </div>
    <div className="text-[23px] p-2 w-8/12 mx-auto text-center ">
      Our goal has always been to promote contemporary art within a line
      that goes from modern figuration to the purest abstract art
    </div>
    <div className="border-1 bg-black text-white w-34 p-5 h-12 mt-10 rounded-sm flex items-center text-center hover:bg-gray-600 ">
      More Details
    </div>
  </div>
  )
}

export default ArtGallery