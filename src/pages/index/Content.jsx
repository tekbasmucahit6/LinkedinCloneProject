import React from 'react'
import LeftBar from '../../components/LeftBar'
import MiddleBar from '../../components/MiddleBar'
import Message from '../../components/Message'
import RightBar from '../../components/RightBar'

function Content() {
  return (
    <div className='flex justify-center items-center'>
        <div className='w-full xl:w-[1129px] lg:w-[1128px] md:w-[1128px] flex flex-wrap flex-col xl:flex-row lg:flex-row md:flex-row  justify-center items-start gap-6 mt-5'>
            <div className='w-full xl:w-[226px] lg:w-[226px] md:w-[226px]'>
                <LeftBar />
            </div>
            <div className='w-full xl:w-[555px] lg:w-[555px] md:w-[471px]'>
                <MiddleBar />
            </div>
            <div className='w-full xl:w-[300px] lg:w-[300px] md:w-[300px]'>
                <RightBar />
            </div>
        </div>

        <div className='fixed bottom-0 right-2'>
            <Message />
        </div>
    </div>
  )
}

export default Content