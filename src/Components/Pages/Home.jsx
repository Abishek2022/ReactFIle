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
        <div className='grid gap-14'>
            <Banner />
            <ArtGallery />
            <Current />
            <ArtFile />
            <Events />
            <Location />
            <Footer />
        </div>
    )
}

export default Home