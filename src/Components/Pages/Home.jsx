import React from 'react'
import Banner from '../PageComponent/Home/Banner';
import ArtGallery from '../PageComponent/Home/ArtGallery';
import Footer from '../PageComponent/Home/Footer';
import Current from '../PageComponent/Home/Current';
import Location from '../PageComponent/Home/Location';
import ArtFile from '../PageComponent/Home/ArtFile';
import Events from '../PageComponent/Home/Events';

function Home() {

    return (
        <div className='grid'>
            <Banner />
          <div className='grid gap-10 bg-white'>
          <ArtGallery />
            <Current />
            <ArtFile />
            <Events />
          </div>
            <div className='bg-red-500  fixed top-[101px] -z-10 left-0 w-full h-[110px]'>
                <img src='https://www.giffywalls.com/blog/wp-content/uploads/2023/01/mountain-wallpaper-for-walls-2048x1016.jpg'/>

            </div>
            <div className='h-[500px] boarder-2 w-full text-white flex justify-between items-center '>
            <div className=' text-4xl w-10/12 text-center font-serif mx-auto '>We have an important presence in the international market through our participation in fairs such as ArtParis, Kiaf in Seoul or Estampa.</div>
            </div>
           <div className='bg-white grid gap-10'>
           <Location />
           <Footer />
           </div>
        </div>
    )
}

export default Home