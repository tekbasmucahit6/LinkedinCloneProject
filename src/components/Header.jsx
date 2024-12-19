import React from 'react'
import { GrLinkedin } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import { ImHome3 } from "react-icons/im";
import { GoPersonFill } from "react-icons/go";
import { PiBagSimpleFill } from "react-icons/pi";
import { BiSolidBellRing , BiSolidMessageSquareDetail} from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";

function Header() {
  return (
    <div className='bg-[#ffffff] flex justify-center items-center p-2 xl:p-0 lg:p-0 md:p-0'>
        <div className='flex justify-between items-center px-4 w-full h-full xl:w-[1128px]'>


            <div className='flex justify-start items-center gap-4 w-3/12'>
                <p>
                    <GrLinkedin size={35} color='#0A66C2' className='rounded' />
                </p>
                <p className='xl:bg-[#EDF3F8] lg:bg-[#EDF3F8] md:bg-[#EDF3F8] px-3 py-1 rounded flex justify-center items-center'>
                    <FaSearch size={20} />
                    <input type="search" className='bg-transparent px-3 hidden xl:block lg:block  focus:w-80 focus:outline-none' placeholder='Arama yap' />
                </p>
            </div>

            <div className='flex justify-end items-center gap-7 w-6/12'>

                <p className='flex flex-col justify-center items-center border-b-2 border-black py-1'>
                    <ImHome3 size={24} />
                    <p className='text-xs  hidden xl:block lg:bloc md:block'>Ana Sayfa</p>
                </p>

                <p className='flex flex-col justify-center items-center text-gray-500 hover:text-gray-900 cursor-pointer'>
                    <GoPersonFill size={24} />
                    <p className='text-xs hidden xl:block lg:bloc md:block'>Ağım</p>
                </p>

                <p className='flex flex-col justify-center items-center text-gray-500 hover:text-gray-900 cursor-pointer'>
                    <PiBagSimpleFill size={24} />
                    <p className='text-xs  hidden xl:block lg:bloc md:block'>İş İlanları</p>
                </p>

                <p className='flex flex-col justify-center items-center text-gray-500 hover:text-gray-900 cursor-pointer'>
                    <BiSolidMessageSquareDetail size={24} />
                    <p className='text-xs  hidden xl:block lg:bloc md:block'>Mesajlaşma</p>
                </p>

                <p className='flex flex-col justify-center items-center py-1 relative text-gray-500 hover:text-gray-900 cursor-pointer'>
                    <BiSolidBellRing size={24} />
                    <p className='text-xs  hidden xl:block lg:bloc md:block'>Bildirimler</p>
                    <p className='absolute top-0 right-0 right rounded-full bg-red-600 px-1 text-xs text-white'>9</p>
                </p>

                <p className='xl:flex lg:flex md:flex flex-col justify-center items-center py-1 text-gray-500 hover:text-gray-900 cursor-pointer hidden'>
                    <img src={"./img/mucahitLogo.jpg"} className='w-7 rounded-full' alt="" />
                    <p className='text-xs  hidden xl:flex lg:flex md:flex  justify-center items-center'>Ben <IoMdArrowDropdown size={17} /></p>
                </p>


            </div>

            <div className='hidden xl:flex lg:flex md:flex mr-16 justify-start items-center border-l-2 border-gray-300 px-4 py-1'>
                <p className='flex flex-col justify-center items-center  py-1'>
                    <TiThMenu size={24} />
                    <p className='text-xs  hidden xl:flex lg:flex md:flex justify-center items-end'>İş İçin <IoMdArrowDropdown /></p>
                </p>
            </div>


        </div>
    </div>
  )
}

export default Header