import React from 'react'

function Toolbar() {
  return (
    <div className=' grid gap-16 w-full h-fit   p-0 z-10'>
    <div class="shadow-lg fixed top-0 z-40 bg-white w-full">
      <div class="flex  gap-10 flex-row h-24 justify-between  text-black p-5 s-2 items-center ">

        <div class="font-bold pl-10 text-2xl cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 64 64"><path fill="currentColor" d="M33.126 44.979c-2.951-2.363-7.736-2.363-10.687 0c-2.948 2.364-2.948 6.195 0 8.559c2.95 2.364 7.735 2.364 10.687 0c2.949-2.364 2.949-6.195 0-8.559m-11.34-3.409c2.287-2.841 1.513-6.43-1.727-8.014c-3.241-1.583-7.72-.564-10.007 2.277c-2.284 2.841-1.512 6.43 1.727 8.014c3.242 1.585 7.722.565 10.007-2.277m-3.103-13.552c2.189-2.446 1.66-5.713-1.183-7.297c-2.842-1.585-6.919-.887-9.109 1.559c-2.19 2.446-1.66 5.712 1.182 7.296c2.842 1.585 6.921.887 9.11-1.558m2.017-8.71c2.718 1.582 6.669.98 8.823-1.341c2.155-2.322 1.7-5.485-1.017-7.066c-2.717-1.582-6.668-.981-8.822 1.34c-2.156 2.322-1.701 5.485 1.016 7.067m22.946-4.037c2.42-1.237 2.689-3.667.6-5.43c-2.087-1.763-5.746-2.19-8.167-.954c-2.422 1.236-2.69 3.667-.601 5.43s5.748 2.19 8.168.954"/><path fill="currentColor" d="M52.475 33.199c-2.164-.636-4.031-1.186-4.544-2.459c-.297-.738-.181-1.822.323-3.221c5.366-5.02 13.394-13.109 13.168-16.396c-.09-1.314-2.184-3.196-3.557-3.196l-.108.004c-1.486.102-3.757 2.068-6.183 4.73a10.075 10.075 0 0 0-.781-1.761C48.248 6.515 42.653 4 35.444 4c-5.605 0-11.846 1.545-18.045 4.468c-7.957 3.752-13.9 11.576-15.14 19.934c-.922 6.206.18 15.592 10.658 25.075C17.563 57.684 24.879 60 33.514 60h.003c6.932 0 13.955-1.543 19.271-4.23C58.729 52.765 62 48.609 62 44.066c0-8.066-5.506-9.685-9.525-10.867m5.39-23.772c.631 0 2.027 1.31 2.06 1.798c.191 2.783-9.723 12.647-16.35 18.529l-1.13-.983l-.739-.645c4.932-7.358 13.366-18.509 16.159-18.699M39.266 31.06l1.522-1.745l1.731 1.51L41 32.569zm12.62 22.924C46.84 56.536 40.146 58 33.517 58h-.002c-8.14 0-14.978-2.133-19.256-6.006C4.435 43.105 3.386 34.418 4.235 28.695c1.146-7.714 6.648-14.943 14.019-18.418C24.187 7.479 30.132 6 35.444 6c6.383 0 11.473 2.207 13.618 5.904c.462.795.772 1.645.952 2.535c-4.478 5.283-9.026 12.053-9.895 13.359l-2.777 3.184c-1.458-.015-2.918.622-3.368 2.161c-1.658 5.655-5.351 9.162-5.351 9.162s9.361-1.85 11.152-3.952c.97-1.138 1.44-2.498 1.429-3.738l2.908-3.334c.388-.341.965-.854 1.676-1.496c-.004.624.082 1.194.286 1.702c.875 2.172 3.284 2.88 5.835 3.63c3.977 1.17 8.09 2.379 8.09 8.949c.001 3.75-2.882 7.272-8.113 9.918"/><path fill="currentColor" d="M54.121 39.807c-2.95-2.363-7.736-2.363-10.686 0s-2.949 6.195 0 8.559s7.735 2.363 10.686 0s2.95-6.196 0-8.559m-1.453 7.394c-2.147 1.721-5.633 1.721-7.779 0c-2.147-1.721-2.147-4.51 0-6.23c2.146-1.721 5.632-1.721 7.779 0s2.147 4.509 0 6.23"/></svg></div>
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
      <img className='w-full  h-[600px]' src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcW91cGpiY2o0Y2YzMHM1ZHhzdG96b3lsc3dveW5uNHRoYW5qaXdxcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xqklsTVVXhPa/giphy.webp'/></div>
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
    <div className='bg-[#f0eded] border-t-2 h-[720px]'>
    <div className=' grid grid-cols-2  h-fit w-10/12 mx-auto mt-24'>
      <div className='grid gap-5 '>
        <div className='text-5xl font-serif font-medium w-11/12'>Current exhibitions</div>
        <div className='mt-10'><img className='h-64 ' src='https://pigmentgallery.es/wp-content/uploads/2024/06/DBZ_La-verdad-del-alma_2024_80x120-cm_Mixed-media-on-wood-1536x1031.jpg'/></div>
        <div>- Exhibition</div>
        <div className='text-3xl font-semibold w-10/12'>Un lugar sin ruido by Diego Benéitez </div>
        <div> 26 de June de 2024 - 2 de August de 2024 </div>
      </div>
      <div className='flex ml-80  h-10 w-4/12 border-b-2 border-black gap-3'>
    
      <div className='font-semibold text-[18px]'>See all exhibitions</div>
      <div className=''><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6 6l6-6m-6-6l6 6"/></svg></div>
   
      </div>

    </div>
</div>
    </div>
  )
}

export default Toolbar