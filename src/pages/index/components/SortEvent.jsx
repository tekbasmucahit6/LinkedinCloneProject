import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
function SortEvent() {
  return <div className='flex justify-end items-center my-2'>
  <hr className='w-6/12' />
  <p className='flex justify-center items-center text-xs gap-2'>Sıralama ölçütü <span className='font-bold flex justify-center items-center hover:cursor-pointer'>En Önemli <IoMdArrowDropdown size={17} /></span></p>
</div>
}

export default SortEvent