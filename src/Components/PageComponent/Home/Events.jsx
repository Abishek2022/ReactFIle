import React from 'react'

const Events = () => {
    const fairsinfo = [
     
        {
            images: `https://pigmentgallery.es/wp-content/uploads/2022/05/burdeos.png`,
                    day: "07",
                    month: "JUNE",
                    week: "TUSDAY",
            tittle: [
                {
                    sub: "Art Fairs 2022",
                    tittle: "BAD+ Bordeaux",
                    desc:
                        "7 de June de 2022 - 10:49 am | 10 de June de 2022 - 10:49 am / Burdeos, Francia",
                },
            ],
        },
        {
            images: `https://pigmentgallery.es/wp-content/uploads/2022/06/seatlle.jpg`,
                    day: "21",
                    month: "JULY",
                    week: "Thrusday",
            tittle: [
                {
                    sub: "Art Fairs 2022",
                    tittle: "BAD+ Bordeaux",
                    desc:
                        "7 de June de 2022 - 10:49 am | 10 de June de 2022 - 10:49 am / Burdeos, Francia",
                },
            ],
        },
        {
            images: `https://pigmentgallery.es/wp-content/uploads/2022/06/kiaf.jpg`,
                    day: "02",
                    month: "SEPETEMBER",
                    week: "FRIDAY",
            tittle: [
                {
                    sub: "Art Fairs 2022",
                    tittle: "BAD+ Bordeaux",
                    desc:
                        "7 de June de 2022 - 10:49 am | 10 de June de 2022 - 10:49 am / Burdeos, Francia",
                },
            ],
        },
       
    ];
    return (
        <div className="bg-[#f8f8f8]  h-fit">
            <div className="grid gap-16 w-10/12 mx-auto ">
                <div className=" grid grid-cols-2 h-fit mt-24">
                    <div className="grid gap-5 ">
                        <div className="text-5xl font-serif font-medium w-11/12">
                            Art fair
                        </div>
                    </div>
                    <div className="flex ml-[400px]  h-10 w-[160px] gap-3">
                        <div className='flex border-b-2 border-black'>
                        <div className="font-semibold text-[15px]">See All Art fairs</div>
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

                <div className="grid  gap-14">
                    { fairsinfo.map((val, ind) => {
                        return (
                            <div className="flex gap-44 ">
                                <div className="h-ftt ">
                                            <div className=' grid w-full '>
                                                <div className=' gap-4 flex'>
                                                    <div className=' w-full h-full text-6xl   text-purple-400 '>{val.day}</div>
                                                    <div className=' w-full h-full items-center mt-10 -ml-3 font-semibold  '>{val.month}</div>

                                                </div>
                                               
                                                <div className='text-[25px] font-serif '>{val.week}</div>
                                            </div>
                                       
                                </div>
                                <div className=" flex flex-cols-2 mt-3 gap-16 ">
                                    <div>
                                        <img className="w-[210px] h-[180px] " src={val.images} />
                                    </div>
                                    <div className="grid h-[150px] ">
                                        {val?.tittle.map((item, ind) => {
                                            console.log(item);
                                            return (
                                                <div>
                                                    <div className="text-[18px] text-gray-500">
                                                        {item.sub}
                                                    </div>
                                                    <div className="font-semibold text-3xl ">
                                                        {item.tittle}
                                                    </div>
                                                    <div className="text-[18px] text-gray-500 font-semibold">
                                                        {item.desc}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Events