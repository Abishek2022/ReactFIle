import React from 'react'




function Toolbar() {

  const myinfo = [{
    image: `https://pigmentgallery.es/wp-content/uploads/2022/05/RG_GEMS-X_2022_152x152-cm_Mixed-media.-Reverse-painting-on-Plexiglas.jpg`,


    subtitle: [
      {
        subtitle: 'Artists'
      },

    ],
    title: [
      {
        title: 'Rosa Galindo'
      },

    ],
  },
  {
    image: `https://pigmentgallery.es/wp-content/uploads/2022/05/JE_Mundaka_2023_Ed.4.15_124x100-cm_Etching-on-Awagami-Kitakata-Oizu.jpg`,


    subtitle: [
      {
        subtitle: 'Artists'
      },

    ],
    title: [
      {
        title: 'Rosa Galindo'
      },

    ],


  },
  {
    image: `https://pigmentgallery.es/wp-content/uploads/2022/05/DM_Guepardo_150x185-cm_Acrylic-on-wood.jpg`,


    subtitle: [
      {
        subtitle: 'Artists'
      },

    ],
    title: [
      {
        title: 'Rosa Galindo'
      },

    ],
  },
  {
    image: `https://pigmentgallery.es/wp-content/uploads/2022/05/RG_GEMS-X_2022_152x152-cm_Mixed-media.-Reverse-painting-on-Plexiglas.jpg`,


    subtitle: [
      {
        subtitle: 'Artists'
      },

    ],
    title: [
      {
        title: 'Rosa Galindo'
      },

    ],
  },
  {
    image: `https://pigmentgallery.es/wp-content/uploads/2022/05/JE_Mundaka_2023_Ed.4.15_124x100-cm_Etching-on-Awagami-Kitakata-Oizu.jpg`,


    subtitle: [
      {
        subtitle: 'Artists'
      },

    ],
    title: [
      {
        title: 'Rosa Galindo'
      },

    ],


  },
  {
    image: `https://pigmentgallery.es/wp-content/uploads/2022/05/DM_Guepardo_150x185-cm_Acrylic-on-wood.jpg`,


    subtitle: [
      {
        subtitle: 'Artists'
      },

    ],
    title: [
      {
        title: 'Rosa Galindo'
      },

    ],
  }


  ];
  const fairsinfo=[{
    images:`https://pigmentgallery.es/wp-content/uploads/2022/05/burdeos.png`,
    date:[
      {
        day: '07'
      },
      {
        month: 'JUNE'
      },
      {
        week: 'TUSDAY'
      }

    ],
    tittle:[
      {
        tittlef: 'Art Fairs 2022'
      },
      {
        tittles: 'BAD+ Bordeaux'
      },
      {
        tittlet: '7 de June de 2022 - 10:49 am | 10 de June de 2022 - 10:49 am / Burdeos, Francia'
      },
    ],

  }];
  return (
    <div className=' grid gap-16 w-full h-fit p-0 z-10'>
      <div class="shadow-lg fixed top-0 z-40 bg-white w-full">
        <div class="flex  gap-10 flex-row h-24 justify-between  text-black p-5 s-2 items-center ">

          <div class="font-bold pl-10 text-2xl cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 64 64"><path fill="currentColor" d="M33.126 44.979c-2.951-2.363-7.736-2.363-10.687 0c-2.948 2.364-2.948 6.195 0 8.559c2.95 2.364 7.735 2.364 10.687 0c2.949-2.364 2.949-6.195 0-8.559m-11.34-3.409c2.287-2.841 1.513-6.43-1.727-8.014c-3.241-1.583-7.72-.564-10.007 2.277c-2.284 2.841-1.512 6.43 1.727 8.014c3.242 1.585 7.722.565 10.007-2.277m-3.103-13.552c2.189-2.446 1.66-5.713-1.183-7.297c-2.842-1.585-6.919-.887-9.109 1.559c-2.19 2.446-1.66 5.712 1.182 7.296c2.842 1.585 6.921.887 9.11-1.558m2.017-8.71c2.718 1.582 6.669.98 8.823-1.341c2.155-2.322 1.7-5.485-1.017-7.066c-2.717-1.582-6.668-.981-8.822 1.34c-2.156 2.322-1.701 5.485 1.016 7.067m22.946-4.037c2.42-1.237 2.689-3.667.6-5.43c-2.087-1.763-5.746-2.19-8.167-.954c-2.422 1.236-2.69 3.667-.601 5.43s5.748 2.19 8.168.954" /><path fill="currentColor" d="M52.475 33.199c-2.164-.636-4.031-1.186-4.544-2.459c-.297-.738-.181-1.822.323-3.221c5.366-5.02 13.394-13.109 13.168-16.396c-.09-1.314-2.184-3.196-3.557-3.196l-.108.004c-1.486.102-3.757 2.068-6.183 4.73a10.075 10.075 0 0 0-.781-1.761C48.248 6.515 42.653 4 35.444 4c-5.605 0-11.846 1.545-18.045 4.468c-7.957 3.752-13.9 11.576-15.14 19.934c-.922 6.206.18 15.592 10.658 25.075C17.563 57.684 24.879 60 33.514 60h.003c6.932 0 13.955-1.543 19.271-4.23C58.729 52.765 62 48.609 62 44.066c0-8.066-5.506-9.685-9.525-10.867m5.39-23.772c.631 0 2.027 1.31 2.06 1.798c.191 2.783-9.723 12.647-16.35 18.529l-1.13-.983l-.739-.645c4.932-7.358 13.366-18.509 16.159-18.699M39.266 31.06l1.522-1.745l1.731 1.51L41 32.569zm12.62 22.924C46.84 56.536 40.146 58 33.517 58h-.002c-8.14 0-14.978-2.133-19.256-6.006C4.435 43.105 3.386 34.418 4.235 28.695c1.146-7.714 6.648-14.943 14.019-18.418C24.187 7.479 30.132 6 35.444 6c6.383 0 11.473 2.207 13.618 5.904c.462.795.772 1.645.952 2.535c-4.478 5.283-9.026 12.053-9.895 13.359l-2.777 3.184c-1.458-.015-2.918.622-3.368 2.161c-1.658 5.655-5.351 9.162-5.351 9.162s9.361-1.85 11.152-3.952c.97-1.138 1.44-2.498 1.429-3.738l2.908-3.334c.388-.341.965-.854 1.676-1.496c-.004.624.082 1.194.286 1.702c.875 2.172 3.284 2.88 5.835 3.63c3.977 1.17 8.09 2.379 8.09 8.949c.001 3.75-2.882 7.272-8.113 9.918" /><path fill="currentColor" d="M54.121 39.807c-2.95-2.363-7.736-2.363-10.686 0s-2.949 6.195 0 8.559s7.735 2.363 10.686 0s2.95-6.196 0-8.559m-1.453 7.394c-2.147 1.721-5.633 1.721-7.779 0c-2.147-1.721-2.147-4.51 0-6.23c2.146-1.721 5.632-1.721 7.779 0s2.147 4.509 0 6.23" /></svg></div>
          <div class="flex gap-5 items-center text-[15px] justify-between  font-serif cursor-pointer ">
            <div >ABOUT US</div>
            <div>ARTISTS</div>
            <div>EXHIBITIONS</div>
            <div>EXHIBITIONS</div>
            <div>VIRTUSL TOUR</div>
          </div>
          <div class="flex gap-10 cursor-pointer">

            <button class="border-2 border-[#d9d5d4] text-black w-36 bg-[#d9d5d4] rounded-sm font-semibold text-[18px] p-2 font-serif hover:bg-gray-200">CONTACT</button>
            <div className='border-2 flex gap-2 justify-between items-center font-serif w-34 h-8 mt-2 rounded-sm p-[4px]'>
              <div><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 72 72"><g stroke="#000" stroke-linecap="round" stroke-linejoin="round"><path d="M30 42.773L31.206 42l.658 1.272l1.43-.066l-.066 1.431l1.272.657l-.773 1.206l.773 1.206l-1.272.657l.066 1.431l-1.43-.066L31.206 51L30 50.227L28.794 51l-.657-1.272l-1.431.066l.066-1.431l-1.272-.657l.773-1.206l-.773-1.206l1.272-.657l-.066-1.431l1.431.066l.657-1.272z" /><circle cx="30" cy="30" r="2" /><path fill="none" stroke-width="1.5" d="M34 31c-.45 1-1.719 2-4 2s-3.55-1-4-2" /></g><g stroke-linecap="round" stroke-linejoin="round"><path fill="#d22f27" d="M50 55H22V17l28 20H33z" /><path fill="#fff" stroke="#fff" d="M30 42.773L31.206 42l.658 1.272l1.43-.066l-.066 1.431l1.272.657l-.773 1.206l.773 1.206l-1.272.657l.066 1.431l-1.43-.066L31.206 51L30 50.227L28.794 51l-.657-1.272l-1.431.066l.066-1.431l-1.272-.657l.773-1.206l-.773-1.206l1.272-.657l-.066-1.431l1.431.066l.657-1.272z" /><circle cx="30" cy="30" r="2" fill="#fff" stroke="#fff" /><path fill="none" stroke="#fff" stroke-width="1.5" d="M34 31c-.45 1-1.719 2-4 2s-3.55-1-4-2" /></g><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M50 55H22V17l28 20H33z" /><path fill="none" stroke="#1e50a0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M50 55H22V17l28 20H33z" /></svg></div>
              <div>Nepali</div>
            </div>
          </div>


        </div>
      </div>

      <div className='grid grid-colsh-[500px] relative  w-screen border-red-500 mt-24 '>

        <div className=' h-full  bg-green-500 '>
          <img className='w-full  h-[600px]' src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcW91cGpiY2o0Y2YzMHM1ZHhzdG96b3lsc3dveW5uNHRoYW5qaXdxcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xqklsTVVXhPa/giphy.webp' /></div>
        <div className='flex flex-col  justify-center items-center gap-4  w-10/12 h-full mx-auto  absolute z-10 top-0 left-0 right-0 bottom-0'>
          <div className=' font-serif  text-7xl text-white '>Living the art experience</div>
          <div className=' text-2xl  text-white text-center w-10/12  '>We connect with an audience sensitive to the changes taking place in the art world and in the world in general</div>
        </div>
      </div>

      <div className='flex flex-col justify-between items-center h-fit p-3 '>
        <div className='text-5xl  font-serif'>Contemporary art gallery in Barcelona</div>
        <div className='text-[23px] p-3 w-8/12 mt-6 mx-auto text-center'>Pigment Gallery was founded in Barcelona in 2016 by Ferran Josa with the intention of connecting with an audience sensitive to the changes taking place in the art world and the world in general</div>
        <div className='text-[23px] p-2 w-8/12 mx-auto text-center '>Our goal has always been to promote contemporary art within a line that goes from modern figuration to the purest abstract art</div>
        <div className='border-1 bg-black text-white w-34 p-5 h-12 mt-10 rounded-sm flex items-center text-center hover:bg-gray-600 '>More Details</div>
      </div>
      <div className='bg-[#f8f8f8] border-t-2 h-[720px]'>
        <div className=' grid grid-cols-2  h-fit w-10/12 mx-auto mt-24'>
          <div className='grid gap-5 '>
            <div className='text-5xl font-serif font-medium w-11/12'>Current exhibitions</div>
            <div className='mt-10'><img className='h-64 ' src='https://pigmentgallery.es/wp-content/uploads/2024/06/DBZ_La-verdad-del-alma_2024_80x120-cm_Mixed-media-on-wood-1536x1031.jpg' /></div>
            <div>- Exhibition</div>
            <div className='text-3xl font-semibold w-9/12'>Un lugar sin ruido by Diego Benéitez </div>
            <div> 26 de June de 2024 - 2 de August de 2024 </div>
          </div>
          <div className='flex ml-80  h-10 w-4/12 border-b-2 border-black gap-3'>

            <div className='font-semibold text-[18px]'>See all exhibitions</div>
            <div className=''><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6 6l6-6m-6-6l6 6" /></svg></div>

          </div>

        </div>
      </div>

      <div className='h-fit '>
        <div className='grid gap-6 w-10/12 mx-auto'>
          <div className='text-6xl'>Meet the artists</div>
          <div className='w-10/12 grid gap-6 text-[18px]'>
            <div >Our line of work, consisting of contemporary artists, includes promising young talents and more established artists from the Spanish and international scene.</div>
            <div>His careful selection, the result of the eclectic taste of the founder, starts from a modern figuration and goes into other currents where we can find works by artists heirs of American abstraction, material informalism or abstract geometries.</div>
          </div>

          <div className='grid grid-cols-3 gap-2  h-fit  mt-10'>
            {

              myinfo.map((val, ind) => {
                return (
                  <div class=''>
                    <div className=''>
                      <img className='h-[210px] w-[360px]' src={val.image} />
                    </div>
                    <div className=''>{
                      val?.subtitle.map((item, ind) => {
                        console.log(item)
                        return <div className='text-[18px]  text-gray-500 '>{item.subtitle}</div>

                      })}</div>
                    <div className=''>{
                      val?.title.map((item, ind) => {
                        console.log(item)
                        return <div className='text-2xl font-serif'>{item.title}</div>

                      })}</div>
                  </div>
                )
              })

            }
          </div>

        </div>

      </div>


      <div className='bg-[#f8f8f8] border-t-2 h-[720px]'>
        <div className='grid gap-16 w-10/12 mx-auto '>
          <div className=' grid grid-cols-2 h-fit mt-24'>
            <div className='grid gap-5 '>
              <div className='text-5xl font-serif font-medium w-11/12'>Art fair</div>

            </div>
            <div className='flex ml-[400px]  h-10 w-[160px] border-b-2 border-black gap-3'>
              <div className='font-semibold text-[15px]'>See All Art fairs</div>
              <div className=''><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6 6l6-6m-6-6l6 6" /></svg></div>
            </div>
          </div>

          <div className='grid gap-10'>{
            
              fairsinfo.map((val, ind) => {
                return (
                  <div className='flex gap-[100px]'>
                    <div className=''>{
                       val?.date.map((item, ind)=>{
                        console.log(item);
                        return(
                        
                          <div className='grid gap-10'>
                       <div className='grid grid-cols-2 border-2' >
                            <div className='text-6xl text-purple-400'>{item.day}</div>
                            <div className='font-semibold mt-7'>{item.month}</div>
                            </div>
                          <div className='text-[26px] text-gray-500 font-serif'>{item.week}</div>
                          </div>
                        )
                     
                    

                       })}
                </div>
                    <div className=' flex flex-cols-2 mt-3 gap-16'>
                      <div><img className='w-[210px] h-[180px]' src={val.images} /></div>
                      <div className='grid h-[150px]'>{
                        val?.tittle.map((item, ind)=>{
                          console.log(item);
                          return(
                            <div>
                          <div className='text-[18px] text-gray-500'>{item.tittlef}</div>
                          <div className='font-semibold text-3xl '>{item.tittles}</div>
                          <div className='text-[18px] text-gray-500 font-semibold'>{item.tittlet}</div>
                          </div>
                          )
                        })}</div>
                    </div>

                  </div>


                )
              }
              )

            
          }

          </div>
        </div>
      </div>




      <div className='bg-[#f0eded] border-t-2 h-[450px]   '>
        <div className=' grid grid-row-2 gap-24  h-fit w-10/12 mx-auto mt-10 '>
          <div className='flex gap-14'>
            <div className='grid  justify-between items-center '>
              <div ><svg xmlns="http://www.w3.org/2000/svg" width="8em" height="8em" viewBox="0 0 64 64"><path fill="currentColor" d="M33.126 44.979c-2.951-2.363-7.736-2.363-10.687 0c-2.948 2.364-2.948 6.195 0 8.559c2.95 2.364 7.735 2.364 10.687 0c2.949-2.364 2.949-6.195 0-8.559m-11.34-3.409c2.287-2.841 1.513-6.43-1.727-8.014c-3.241-1.583-7.72-.564-10.007 2.277c-2.284 2.841-1.512 6.43 1.727 8.014c3.242 1.585 7.722.565 10.007-2.277m-3.103-13.552c2.189-2.446 1.66-5.713-1.183-7.297c-2.842-1.585-6.919-.887-9.109 1.559c-2.19 2.446-1.66 5.712 1.182 7.296c2.842 1.585 6.921.887 9.11-1.558m2.017-8.71c2.718 1.582 6.669.98 8.823-1.341c2.155-2.322 1.7-5.485-1.017-7.066c-2.717-1.582-6.668-.981-8.822 1.34c-2.156 2.322-1.701 5.485 1.016 7.067m22.946-4.037c2.42-1.237 2.689-3.667.6-5.43c-2.087-1.763-5.746-2.19-8.167-.954c-2.422 1.236-2.69 3.667-.601 5.43s5.748 2.19 8.168.954" /><path fill="currentColor" d="M52.475 33.199c-2.164-.636-4.031-1.186-4.544-2.459c-.297-.738-.181-1.822.323-3.221c5.366-5.02 13.394-13.109 13.168-16.396c-.09-1.314-2.184-3.196-3.557-3.196l-.108.004c-1.486.102-3.757 2.068-6.183 4.73a10.075 10.075 0 0 0-.781-1.761C48.248 6.515 42.653 4 35.444 4c-5.605 0-11.846 1.545-18.045 4.468c-7.957 3.752-13.9 11.576-15.14 19.934c-.922 6.206.18 15.592 10.658 25.075C17.563 57.684 24.879 60 33.514 60h.003c6.932 0 13.955-1.543 19.271-4.23C58.729 52.765 62 48.609 62 44.066c0-8.066-5.506-9.685-9.525-10.867m5.39-23.772c.631 0 2.027 1.31 2.06 1.798c.191 2.783-9.723 12.647-16.35 18.529l-1.13-.983l-.739-.645c4.932-7.358 13.366-18.509 16.159-18.699M39.266 31.06l1.522-1.745l1.731 1.51L41 32.569zm12.62 22.924C46.84 56.536 40.146 58 33.517 58h-.002c-8.14 0-14.978-2.133-19.256-6.006C4.435 43.105 3.386 34.418 4.235 28.695c1.146-7.714 6.648-14.943 14.019-18.418C24.187 7.479 30.132 6 35.444 6c6.383 0 11.473 2.207 13.618 5.904c.462.795.772 1.645.952 2.535c-4.478 5.283-9.026 12.053-9.895 13.359l-2.777 3.184c-1.458-.015-2.918.622-3.368 2.161c-1.658 5.655-5.351 9.162-5.351 9.162s9.361-1.85 11.152-3.952c.97-1.138 1.44-2.498 1.429-3.738l2.908-3.334c.388-.341.965-.854 1.676-1.496c-.004.624.082 1.194.286 1.702c.875 2.172 3.284 2.88 5.835 3.63c3.977 1.17 8.09 2.379 8.09 8.949c.001 3.75-2.882 7.272-8.113 9.918" /><path fill="currentColor" d="M54.121 39.807c-2.95-2.363-7.736-2.363-10.686 0s-2.949 6.195 0 8.559s7.735 2.363 10.686 0s2.95-6.196 0-8.559m-1.453 7.394c-2.147 1.721-5.633 1.721-7.779 0c-2.147-1.721-2.147-4.51 0-6.23c2.146-1.721 5.632-1.721 7.779 0s2.147 4.509 0 6.23" /></svg></div>
              <div className='flex items-center w-[244px]  h-10 p-5 text-white bg-black '>Subscribe to our Newsletter</div>
            </div>
            <div className='grid grid-cols-4  '>
              <div className='grid gap-5  w-44'>
                <div className='text-3xl font-serif'>Sections</div>
                <div className='grid font-serif  gap-2 '>
                  <div>Artists</div>
                  <div>Artists Worldwide</div>
                  <div>Works</div>
                  <div>Exhibitions</div>
                  <div>Art fairs</div>
                  <div>Offline</div>
                </div>
              </div>
              <div className='grid grid-cols-3 gap-64'>
                <div className='grid  gap-5 h-24'>
                  <div className='text-3xl font-serif w-56'>News & Media</div>
                  <div className='grid font-serif  gap-2  '>
                    <div>The Gallery</div>
                    <div>Virtual Tour</div>
                    <div className='flex gap-4'>
                      <div><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><g fill="none"><g clip-path="url(#akarIconsFacebookFill0)"><path fill="currentColor" fill-rule="evenodd" d="M0 12.067C0 18.034 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067" clip-rule="evenodd" /></g><defs><clipPath id="akarIconsFacebookFill0"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></g></svg></div>
                      <div><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" /></svg></div>
                      <div><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" /></svg></div>
                      <div><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" /></svg></div>
                    </div>

                  </div>
                </div>
                <div className='grid gap-5  h-24 '>
                  <div className='text-3xl font-serif w-56'>Sobre Nosotros</div>
                  <div className='grid font-serif  gap-2 '>
                    <div>Gallery in Barcelona</div>
                    <div>Gallery in Paris</div>
                    <div>+34 93 452 81 62</div>
                    <div>info@pigmentgallery.es</div>
                    <div className='flex gap-3 items-center'>
                      <div><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0" /></svg></div>
                      <div>Contact Forme</div>
                    </div>

                  </div>
                </div>
                <div className=' mt-14'>
                  <div className='grid '>
                    <div className='flex items-center gap-4 '>
                      <div><svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 36 36"><path fill="#22408b" d="M27.796 19L8 5v26h19.796L15.918 19z" /><path fill="#dd2f45" d="M25 18L9 7.196V30h16L13.574 18z" /><path fill="#fff" d="m14.291 24.041l.586-.816l-1 .098l.1-1l-.817.586l-.414-.916l-.414.916l-.817-.586l.099 1l-1-.098l.586.816l-.916.414l.916.414l-.586.816l1-.098l-.099 1l.817-.586l.414.916l.414-.916l.817.586l-.1-1l1 .098l-.586-.816l.916-.414zm-1.546-7.147l.001.002l.001-.002l.018.002c1.468 0 2.66-1.13 2.784-2.567a3.2 3.2 0 0 1-1.595 1.442l-.175-.244l.611-.276l-.611-.276l.391-.545l-.668.066l.067-.668l-.546.391l-.276-.612l-.276.612l-.546-.391l.067.668l-.668-.066l.391.545l-.611.276l.611.276l-.167.233a3.203 3.203 0 0 1-1.566-1.431a2.795 2.795 0 0 0 2.763 2.565" /></svg></div>
                      <div className='flex items-center'>Nepal</div>
                    </div>
                    <div className='flex items-center gap-4'>
                      <div><svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 64 64"><path fill="#1e75bb" d="M64.03 32.02c0 17.686-14.335 32.02-32.02 32.02c-17.684 0-32.02-14.33-32.02-32.02C-.01 14.338 14.323 0 32.01 0c17.68 0 32.02 14.333 32.02 32.02" /><path fill="#186da3" d="M15.239 41.27C9.566 29.099 9.311 16 14.442 5.17C5.748 10.892.002 20.727.002 31.914c0 17.685 14.331 32.02 32.02 32.02c.316 0 .625-.039.937-.047c-7.34-6.177-13.525-13.61-17.716-22.609" /><g fill="#00a650"><path d="M50.37 44.701c-.206 1.701-1.862 1.95-2.669 3.05c.344 1.928-1.377 5.05.573 5.341c1.851.278 2.194-5.594 2.479-8.01c-.253-.004-.174-.336-.383-.383M47.594 3.931c-1.073.819-2.979-.319-4.065-.49c-1.118.469-2.111 1.068-3.436 1.335c-.214.555.043 1.379.193 2.096c1.21.751 2.871.432 4.575.382c-.359 1.919-.257 3.693-1.716 4.196c-1.794.617-4.172-1.058-6.098-1.143c-.841.18-.621 1.413-1.531 1.524c-1.494-.921-3.4-1.429-4.573-2.67c.354-.498.269-1.821-.192-2.098c-3.243-.169-6.102 1.796-8.581 1.145c-.309 1.093-1.25 1.547-1.906 2.289c.316 3.076-3.16 3.847-3.816 6.292c-.447 1.666.439 3.779-.38 5.721c2.01 1.787 2.12 5.727 5.149 6.103c2.033.252 3.721-.84 6.098-1.145c.914.72 1.163 1.602 2.863 1.145c.88 1.035-.356 3.704.383 4.768c1.392 2.01 2.438 3.416 2.096 5.911c-.143 1.043-1.013 1.975-.953 3.053c.043.821.737 1.536.953 2.286c.728 2.558.984 5.62 2.476 7.821c.142.581-.324.56-.19 1.143c1.096.847 4.482.293 5.532-.382c2.153-1.374 1.77-4.811 3.812-6.102c.316-.959-.158-1.737-.186-2.858c.684-1.097 1.93-1.629 2.858-2.48c.801-2.733-.743-4.535-.569-7.248c2.199-3.583 5.781-5.785 6.861-10.489a38.837 38.837 0 0 1-3.622.762c-1.622-1.68-2.852-3.757-4.192-5.72c.311-3.01-2.629-4.71-2.1-6.675c.392.054.174.712.569.762c.814-1.652 1.349 1.767 1.717 2.48c.146.281.771.428.955.762c.247.455.033 1.032.191 1.525c.384 1.217 1.692 1.755 1.906 3.052c.182 1.106-.087 1.556.384 2.097c3.58-1.374 7.341-2.57 8.581-6.292c-.989-.347-1.553-1.117-2.101-1.907c-.458.749-1.158 1.253-2.289 1.334c-.427-1.608-1.515-2.549-1.906-4.196c1.685-.757 1.918 1.491 3.053 1.907h1.717c.431 1.041 1.789 1.159 3.266 1.157c-2.906-4.649-6.955-8.513-11.786-11.153" /><path d="M24.84 2.106c-.387.055-.377.516-.765.571c-1.194.124-2.43-.548-3.435 0c.119 1.387-.142 2.396-.186 3.623c1.333 1.396 3.397 1.086 4.765-.188c-.111-.62.13-.89.19-1.336c1.362-.163 1.542-1.514 2.286-2.289c1.229.208 1.649-.391 2.483-.572c1.246 1.617 3.566 2.153 4.195 4.385c.253-.788.127-1.774.953-1.524c-1.341-.705-4.132-2.54-2.669-4.197c1.847 1.356 3.23 4.04 4.809 5.272c.02-.047.067-.091.15-.123c1.075.668-.519.676-.38 1.525c.623-.073.836-.558 1.333-.763c.035-.799-.938-.589-.766-1.524c.702-.574 2.122-.426 2.859-.954a3.593 3.593 0 0 1 .599-2.685a31.963 31.963 0 0 0-9-1.307c-2.575 0-5.06.336-7.457.908c.081.325.109.704.04 1.178" /></g></svg></div>
                      <div className='items-center '>Earth</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=' flex gap-3 ml-44 border-t-2 w-[770px] border-black'>

            <div className=' font-thin'>PIGMENT GALLERY © 2022 | Privacy Policy | Cookie Policy | Formulated clauses | Terms and conditions of sale	</div>


          </div>

        </div>
      </div>
    </div>



  )



}



export default Toolbar