import React from 'react'
import { GoKebabHorizontal } from "react-icons/go";
import { IoCreateOutline } from "react-icons/io5";
import { IoMdArrowDropup } from "react-icons/io";
function Message() {
  return (
    <div className='hidden xl:flex lg:flex md:flex w-[288px] h-[47px] px-2 flex justify-between items-center bg-white border border-gray-200 rounded-tr-lg rounded-tl-lg shadow-lg'>
        <div className='flex justify-start items-center gap-2 relative'>
            <img src={"./img/mucahitLogo.jpg"} className='w-8 rounded-full shadow' alt="" />
            <p className='text-lg'>Mesajlaşma</p>
            <div className='bg-white p-1 rounded-full absolute left-5 top-5'>
                <p className='p-1 rounded-full bg-green-600'></p>
            </div>
        </div>

        <div className='flex jsutify-center items-center gap-4'>
            <p><GoKebabHorizontal size={20}/></p>
            <p><IoCreateOutline size={20}/></p>
            <p><IoMdArrowDropup size={22}/></p>
        </div>
    </div>
  )
}

export default Message