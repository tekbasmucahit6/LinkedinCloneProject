import React from 'react'
import { TfiWorld } from "react-icons/tfi";
import { SlLike } from "react-icons/sl";
import { MdOutlineComment } from "react-icons/md";
import { FaRetweet } from "react-icons/fa6";
import { RiSendPlaneFill } from "react-icons/ri";

function Post() {
  return (
    <div className='border border-gray-300 rounded-lg shadow bg-white w-full pb-2 my-2'>
        <div className='flex justify-start items-center w-full px-3 pt-4 gap-4'>


            <div className='flex justify-center items-center'>
                <img src={"./img/mucahitLogo.jpg"} className='w-12 rounded-full shadow' alt="" />
            </div>


            <div className='flex flex-col justify-center items-start'>
                <p className='text-sm font-bold hover:underline hover:text-blue-600 cursor-pointer'>Mücahit Tekbaş</p>
                <p className='text-xs'>Full Stack Developer</p>
                <p className='text-xs flex justify-center items-center gap-3'>1 hafta <TfiWorld size={14} /></p>
            </div>


        </div>

        <div className='flex justify-start items-center px-3 py-3'>
            <p className='text-sm'>Hello everyone, I am Mücahit Tekbaş, I am 19 years old, I graduated from the web design department of the IT department in high school, I am currently on my way to becoming a senior full stack web developer, I have been interested in this sector for 5 years, the first 2 years were on the mobile side, the last 3 years were on the web side, you can check out my projects in the posts section ☺️ <span className='underline cursor-pointer hover:text-blue-600 ms-5'>...daha fazla</span></p>
        </div>

        <div className='flex flex-col gap-3'>
            <div className='flex justify-between items-center text-sm px-3 my-2'>
                <p className='hover:text-blue-600 cursor-pointer'>Mücahit tekbaş ve 1000 diğer kişi</p>

                <p className='hover:text-blue-600 cursor-pointer'>100 yorum * 1000 paylaşım</p>
                
            </div>

            <div>
                <hr className='w-full ' />
            </div>

            <div className='grid grid-cols-4'>
                <div className='flex justify-center items-center hover:bg-gray-100 py-2 gap-3 cursor-pointer'>
                    <p><SlLike /></p>
                    <p>Beğen</p>
                </div>

                <div className='flex justify-center items-center hover:bg-gray-100 py-2 gap-3 cursor-pointer'>
                    <p><MdOutlineComment /></p>
                    <p>Yorum Yap</p>
                </div>

                <div className='flex justify-center items-center hover:bg-gray-100 py-2 gap-3 cursor-pointer'>
                    <p><FaRetweet /></p>
                    <p>Paylaş</p>
                </div>

                <div className='flex justify-center items-center hover:bg-gray-100 py-2 gap-3 cursor-pointer'>
                    <p><RiSendPlaneFill /></p>
                    <p>Gönder</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Post