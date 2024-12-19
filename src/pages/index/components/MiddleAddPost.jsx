import React from 'react'
import { IoLogoYoutube } from "react-icons/io";
import { FaRegImage } from "react-icons/fa6";
import { PiArticleNyTimesBold } from "react-icons/pi";

function MiddleAddPost() {
  return (
    <div className='border border-gray-300 rounded-lg shadow  bg-white w-full h-[116px] grid grid-rows-2 gap-5 py-4'>

        <div className='flex justify-center items-center gap-5'>


            <div className=' flex justify-center items-center'>
                <img src={"./img/mucahitLogo.jpg"} className='w-[48px] rounded-full shadow' alt="" />
            </div>

            <div className='w-9/12'>
                <input type="text" placeholder='Gönderi Başlatın' className='px-3 py-3 border border-gray-400 rounded-full w-full bg-white focus:outline-none' />
            </div>


        </div>

        <div className='grid grid-cols-3 px-3'>
            <div className='flex justify-center items-center gap-2 hover:cursor-pointer hover:bg-gray-100 py-2'>
                <p><IoLogoYoutube color='#5F9B41' size={22} /></p>
                <p>Video</p>
            </div>
            
            <div className='flex justify-center items-center gap-2 hover:cursor-pointer hover:bg-gray-100 py-2'>
                <p><FaRegImage size={22} color='#378FE9' /></p>
                <p>Fotoğraf</p>
            </div>

            <div className='flex justify-center items-center gap-2 hover:cursor-pointer hover:bg-gray-100 py-2'>
                <p><PiArticleNyTimesBold size={22} color='#E06847' /></p>
                <p>Yazı Yaz</p>
            </div>

        </div>

    </div>
  )
}

export default MiddleAddPost