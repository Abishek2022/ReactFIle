import React from 'react'
import Banner from '../PageComponent/Home/Banner';
import ArtGallery from '../PageComponent/Home/ArtGallery';

import Footer from '../PageComponent/Home/Footer';

function Home() {
    const myinfo = [
        {
            image: `https://pigmentgallery.es/wp-content/uploads/2022/05/RG_GEMS-X_2022_152x152-cm_Mixed-media.-Reverse-painting-on-Plexiglas.jpg`,

            subtitle: [
                {
                    subtitle: "Artists",
                },
            ],
            title: [
                {
                    title: "Juan Escudero ",
                },
            ],
        },
        {
            image: `https://pigmentgallery.es/wp-content/uploads/2022/05/JE_Mundaka_2023_Ed.4.15_124x100-cm_Etching-on-Awagami-Kitakata-Oizu.jpg`,

            subtitle: [
                {
                    subtitle: "Artists",
                },
            ],
            title: [
                {
                    title: "Rosa Galindo",
                },
            ],
        },
        {
            image: `https://pigmentgallery.es/wp-content/uploads/2024/07/JMFP_Retrato-de-estrella_2024_38x46-cm_Oil-on-canvas.jpg`,

            subtitle: [
                {
                    subtitle: "Artists",
                },
            ],
            title: [
                {
                    title: "Juan Manuel Fernández-Pinedo ",
                },
            ],
        },
        {
            image: `https://pigmentgallery.es/wp-content/uploads/2022/05/DM_Guepardo_150x185-cm_Acrylic-on-wood-1536x1250.jpg`,

            subtitle: [
                {
                    subtitle: "Artists",
                },
            ],
            title: [
                {
                    title: "David Morago",
                },
            ],
        },
        {
            image: `https://pigmentgallery.es/wp-content/uploads/2022/06/Adosado-44x46cm-1-1536x1531.jpg`,

            subtitle: [
                {
                    subtitle: "Artists",
                },
            ],
            title: [
                {
                    title: "Rosanna Casano",
                },
            ],
        },
        {
            image: `https://pigmentgallery.es/wp-content/uploads/2022/05/MF_Colonized_no_112_2022_130x100_cm_Mixed_media._Transphotography_on_watercolor_paper-1245x1536.jpg`,

            subtitle: [
                {
                    subtitle: "Artists",
                },
            ],
            title: [
                {
                    title: "Marta Fàbregas ",
                },
            ],
        },
        {
            image: `https://pigmentgallery.es/wp-content/uploads/2023/02/JVQ_Flores-de-Portinari_2020_200x240-cm_Crete-wash-and-wash-on-greaseproof-paper--1536x1343.jpg`,

            subtitle: [
                {
                    subtitle: "Artists",
                },
            ],
            title: [
                {
                    title: "Julio Vaquero",
                },
            ],
        },
        {
            image: `https://pigmentgallery.es/wp-content/uploads/2022/05/senderos-en-el-jardin-13-118x147-2022-1536x1247.jpg`,

            subtitle: [
                {
                    subtitle: "Artists",
                },
            ],
            title: [
                {
                    title: "Manu vb Tintoré ",
                },
            ],
        },
        {
            image: `https://pigmentgallery.es/wp-content/uploads/2022/06/048-1-00002.jpg`,

            subtitle: [
                {
                    subtitle: "Artists",
                },
            ],
            title: [
                {
                    title: "Gerard Fernández Rico",
                },
            ],
        },
        {
            image: `https://pigmentgallery.es/wp-content/uploads/2023/01/MFU_Dibujo-no-90_2022_253x35-cm_Charcoal-and-pencil-on-paper_IT-1536x1018.jpg`,

            subtitle: [
                {
                    subtitle: "Artists",
                },
            ],
            title: [
                {
                    title: "Marcelo Fuentes",
                },
            ],
        },
        {
            image: `https://pigmentgallery.es/wp-content/uploads/2022/06/Silvia004.jpg`,

            subtitle: [
                {
                    subtitle: "Artists",
                },
            ],
            title: [
                {
                    title: "Patricio Reig",
                },
            ],
        },
        {
            image: `https://pigmentgallery.es/wp-content/uploads/2022/05/AB_AB680_2021_130x130-cm_Acrylic-on-old-linen_IT.jpg`,

            subtitle: [
                {
                    subtitle: "Artists",
                },
            ],
            title: [
                {
                    title: "Anke Blaue",
                },
            ],
        },
    ];
    const fairsinfo = [
        {
            images: `https://pigmentgallery.es/wp-content/uploads/2022/05/burdeos.png`,
            date: [
                {
                    day: "07",
                },
                {
                    month: "JUNE",
                },
                {
                    week: "TUSDAY",
                },
            ],
            tittle: [
                {
                    tittlef: "Art Fairs 2022",
                },
                {
                    tittles: "BAD+ Bordeaux",
                },
                {
                    tittlet:
                        "7 de June de 2022 - 10:49 am | 10 de June de 2022 - 10:49 am / Burdeos, Francia",
                },
            ],
        },
    ];
    return (
        <div className='grid gap-14'>

            <Banner />
            <ArtGallery />
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
                            Un lugar sin ruido by Diego Benéitez{" "}
                        </div>
                        <div> 26 de June de 2024 - 2 de August de 2024 </div>
                    </div>
                    <div className="flex ml-80  h-10 w-4/12 border-b-2 border-black gap-3">
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

            <div className="h-fit ">
                <div className="grid gap-6 w-10/12 mx-auto">
                    <div className="text-6xl">Meet the artists</div>
                    <div className="w-10/12 grid gap-6 text-[18px]">
                        <div>
                            Our line of work, consisting of contemporary artists, includes
                            promising young talents and more established artists from the
                            Spanish and international scene.
                        </div>
                        <div>
                            His careful selection, the result of the eclectic taste of the
                            founder, starts from a modern figuration and goes into other
                            currents where we can find works by artists heirs of American
                            abstraction, material informalism or abstract geometries.
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-14  h-fit  mt-10">
                        {myinfo.map((val, ind) => {
                            return (
                                <div class="">
                                    <div className="">
                                        <img className="h-[210px] w-[360px]" src={val.image} />
                                    </div>
                                    <div className="">
                                        {val?.subtitle.map((item, ind) => {
                                            console.log(item);
                                            return (
                                                <div className="text-[18px]  text-gray-500 ">
                                                    {item.subtitle}
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="">
                                        {val?.title.map((item, ind) => {
                                            console.log(item);
                                            return (
                                                <div className="text-2xl font-serif">{item.title}</div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="bg-[#f8f8f8] border-t-2 h-[720px]">
                <div className="grid gap-16 w-10/12 mx-auto ">
                    <div className=" grid grid-cols-2 h-fit mt-24">
                        <div className="grid gap-5 ">
                            <div className="text-5xl font-serif font-medium w-11/12">
                                Art fair
                            </div>
                        </div>
                        <div className="flex ml-[400px]  h-10 w-[160px] border-b-2 border-black gap-3">
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

                    <div className="grid gap-10">
                        {fairsinfo.map((val, ind) => {
                            return (
                                <div className="flex gap-20">
                                    <div className="border-2 h-fit">
                                        {val?.date.map((item, ind) => {
                                            console.log(item);
                                            return (
                                                <div className="grid w-44 ">
                                                    <div className="grid grid-cols-2 w-44 ">
                                                        <div className="text-6xl text-purple-400">
                                                            {item.day}
                                                        </div>
                                                        <div className="font-semibold items-center  bg-red-500 flex">
                                                            {item.month}
                                                        </div>
                                                    </div>

                                                    <div className="text-[26px] text-gray-500 font-serif">
                                                        {item.week}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className=" flex flex-cols-2 mt-3 gap-16">
                                        <div>
                                            <img className="w-[210px] h-[180px]" src={val.images} />
                                        </div>
                                        <div className="grid h-[150px]">
                                            {val?.tittle.map((item, ind) => {
                                                console.log(item);
                                                return (
                                                    <div>
                                                        <div className="text-[18px] text-gray-500">
                                                            {item.tittlef}
                                                        </div>
                                                        <div className="font-semibold text-3xl ">
                                                            {item.tittles}
                                                        </div>
                                                        <div className="text-[18px] text-gray-500 font-semibold">
                                                            {item.tittlet}
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
<Footer />
         
        </div>
    )
}

export default Home