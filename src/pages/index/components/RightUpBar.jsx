import React from 'react'
import { BsInfoCircleFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoGameController } from "react-icons/io5";
function RightUpBar() {
  return (
    <div className='flex flex-col justify-center items-start w-full border border-gray-300 rounded-lg shadow  bg-white py-2'>
        <strong className='flex justify-between items-center w-full px-3 text-xl'>LinkedIn Haberler <BsInfoCircleFill size={17} /></strong>
        <p className='text-lg my-2 text-gray-400 px-3'>Öne çıkan hikayeler</p>
        

        <div className='flex flex-col justify-center items-start hover:bg-gray-200 cursor-pointer w-full my-1'>
            <p className='px-3'>Fed puts inflation back in focus</p>
            <p className='px-3 text-xs'>1s önce • 400.395 okuyucu</p>
        </div>

        <div className='flex flex-col justify-center items-start hover:bg-gray-200 cursor-pointer w-full my-1'>
            <p className='px-3'>Amazon warehouse workers strike</p>
            <p className='px-3 text-xs'>1s önce • 271.181 okuyucu</p>
        </div>

        <div className='flex flex-col justify-center items-start hover:bg-gray-200 cursor-pointer w-full my-1'>
            <p className='px-3'>FAA bans drone flights over NJ</p>
            <p className='px-3 text-xs'>1s önce</p>
        </div>

        <div className='flex flex-col justify-center items-start hover:bg-gray-200 cursor-pointer w-full my-1'>
            <p className='px-3'>Existing home sales get sharp jolt</p>
            <p className='px-3 text-xs'>4a önce</p>
        </div>

        <div className='px-3'>
            <p className='flex justify-center items-center hover:bg-gray-200 text-sm hover:cursor-pointer p-1'>Daha fazla göster <IoIosArrowDown /></p>
        </div>

        <div className='flex flex-col justify-cneter items-start mt-5 w-full'>
            <p className='text-lg px-3 text-gray-400'>Bugünün oyunları</p>

            <div className='flex justify-start items-center hover:bg-gray-200 cursor-pointer py-1 w-full'>
                <p className='px-3'><IoGameController size={24} color='red' /></p>
                <div className='flex flex-col justify-center items-start'>
                    <p className='text-lg'>Tango</p>
                    <p className='text-xs'>30 bağlantı oynadı</p>
                </div>
            </div>

            <div className='flex justify-start items-center hover:bg-gray-200 cursor-pointer py-1 w-full'>
                <p className='px-3'><IoGameController size={24} color='red' /></p>
                <div className='flex flex-col justify-center items-start'>
                    <p className='text-lg'>Queens</p>
                    <p className='text-xs'>33 bağlantı oynadı</p>
                </div>
            </div>


        </div>
    </div>
  )
}

export default RightUpBar