import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoBookmark } from "react-icons/io5";


function LeftUpBar() {
  return (
    <div>
        <div className='border border-gray-300 rounded-lg shadow relative w-full bg-white pb-2'>
            {/* banner event */}
            <div>
                <img src={"./img/mucahitBanner.jpg"} className='rounded-tr-lg rounded-tl-lg w-full h-[57px]' alt="" />
            </div>


            {/* logo event */}
            <div className='flex justify-center items-center'>
                <div className='absolute top-5 rounded-full border-2 border-gray-300 shadow'>
                    <img src={"./img/mucahitLogo.jpg"} className='w-[72px] rounded-full' alt="" />
                </div>
            </div>

            {/* self info event */}
            <div className='mt-14 flex flex-col justify-center items-center text-center gap-2 w-full'>


                <Link
                className='text-lg hover:underline'
                to={"/"}>
                    Mücahit tekbaş
                </Link>
                <p className='text-xs px-4'>
                software developer | react developer | react native developer | frontend developer | backend developer | full stack developer
                </p>



                <div 
                    className='hidden xl:flex lg:flex md:flex flex-col w-full gap-2 justify-center items-center'>
                        <hr className='w-full my-2' />
                        <p className='text-xs flex justify-between items-center w-full hover:bg-gray-200 px-2 py-1 cursor-pointer'><span className='text-gray-400'>Profil görüntüleyenler</span> <span className='text-blue-500 font-bold'>18000</span></p>
                        <p className='text-xs flex justify-between items-center w-full hover:bg-gray-200 px-2 py-1 cursor-pointer'><span className='text-gray-400'>Gönderi gösterim sayısı</span> <span className='text-blue-500 font-bold'>18000</span></p>
                        <hr className='w-full' />

                        <p className='text-xs flex justify-start items-center w-full hover:bg-gray-200 px-2 py-3 cursor-pointer gap-2 text-gray-500'><span><IoBookmark size={20} /></span> <span>Kaydedilen öğeler</span></p>

                </div>


            </div>

        </div>

         {/* show more sett on sm device */}
         <div className='flex xl:hidden lg:hidden md:hidden justify-center items-center text-center my-2'>
            <p className='flex justify-center items-center gap-2'>Daha Fazla Göster <IoMdArrowDropdown size={24} /></p>
        </div>
    </div>
  )
}

export default LeftUpBar