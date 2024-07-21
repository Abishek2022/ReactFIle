import React from 'react'

function Location() {
  return (
    <div className="">
    <div className="grid gap-14 ">
        <div className="grid  justify-center  gap-2 text-center items-center">
            <div className="text-[24px] text-gray-500  font-semibold ">
                NEWS/PRESS
            </div>
            <div className="text-[40px]  font-serif">
                National and international press
            </div>
        </div>

        <div className="grid gap-[70px]">
            <div className="flex w-11/12 mx-auto gap-[811px]">
                <div className="flex gap-2  text-[18px] justify-between">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2em"
                            height="2em"
                            viewBox="0 0 1024 1024"
                        >
                            <path
                                fill="currentColor"
                                d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64"
                            />
                            <path
                                fill="currentColor"
                                d="m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z"
                            />
                        </svg>
                    </div>
                    <div>No posts where found for provided query parameters</div>
                </div>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2em"
                        height="2em"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 12h14m-7-7l7 7l-7 7"
                        />
                    </svg>
                </div>
            </div>
            <div className=" h-[650px] ml-[250px] flex">
                <div className=" bg-[#212529] w-[480px] text-white p-10 ">
                    <div className="w-10/12 grid gap-10 mx-auto mt-8">
                        <div className="text-[40px] w-9/12">
                            ¿Dónde se encuentra la galería?
                        </div>
                        <div className="grid gap-4">
                            <div className="w-10/12 text-[18px]">
                                Carrer de Trafalgar, 70, 08010 Barcelona
                            </div>
                            <div className="w-10/12 text-[18px]">
                                934 52 81 62 info@pigmentgallery.es
                            </div>
                        </div>

                        <div className="felx border-2 border-gray-500 text-center w-44 p-2 hover:bg-blue-500 cursor-pointer hover:border-blue-500">
                            Subscribe
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Location