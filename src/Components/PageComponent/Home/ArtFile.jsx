import React from 'react'

const ArtFile = () => {
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
  return (
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
  )
}

export default ArtFile