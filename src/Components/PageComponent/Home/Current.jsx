import React from 'react'

function Current() {
  return (
    <div className="bg-[#f8f8f8] border-t-2 h-[720px]">
    <div className=" grid grid-cols-2  h-fit w-10/12 mx-auto mt-24">
        <div className="grid gap-5 ">
            <div className="text-5xl font-serif font-medium w-11/12">
                Current exhibitions
            </div>
            <div className="mt-10">
                <img
                    className="h-64 "
                    src="https://pigmentgallery.es/wp-content/uploads/2024/06/DBZ_La-verdad-del-alma_2024_80x120-cm_Mixed-media-on-wood-1536x1031.jpg"
                />
            </div>
            <div>- Exhibition</div>
            <div className="text-3xl font-semibold w-9/12">
                Un lugar sin ruido by Diego Benéitez
            </div>
            <div> 26 de June de 2024 - 2 de August de 2024 </div>
        </div>
        <div className="flex ml-80  h-10 w-4/12  border-black gap-3">
        <div className='border-b-2 border-black flex'>
            <div className="font-semibold text-[18px]">See all exhibitions</div>
            <div className="">
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
                        d="M5 12h14m-6 6l6-6m-6-6l6 6"
                    />
                </svg>
            </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Current