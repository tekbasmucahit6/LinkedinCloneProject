import React from 'react'
import { SlCalender } from "react-icons/sl";


function LeftBottomBar() {
  return (
    <div className='hidden xl:flex lg:flex md:flex border border-gray-300 rounded-lg shadow relative w-full bg-white pb-2 text-gray-600'>
        <div className='w-full flex flex-col justify-ecnter items-start'>
            <div>
                <p className='text-xs px-3 py-2'>En Yeni</p>
            </div>
        
            <div className='flex justify-start items-center'>
                <p className='flex justify-center items-center px-3 text-xs gap-2 hover:bg-gray-200 py-1 hover:cursor-pointer'><span><SlCalender /></span> <span>Mücahit Tekbaş Frontend Developer</span></p>
            </div>

            <hr className='w-full  my-3' />

            <div>
                <p className='text-xs px-3 py-2 text-blue-600 hover:cursor-pointer'>Gruplar</p>
            </div>

            <div className='flex justify-start items-center'>
                <p className='flex justify-center items-center px-3 text-xs gap-2 hover:bg-gray-200 py-1 hover:cursor-pointer'><span><SlCalender /></span> <span>Mücahit Tekbaş Frontend Developer - Sohbet Grubu</span></p>
            </div>


        </div>
    </div>
  )
}

export default LeftBottomBar