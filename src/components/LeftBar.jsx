import React from 'react'
import LeftUpBar from '../pages/index/components/LeftUpBar'
import LeftBottomBar from '../pages/index/components/LeftBottomBar'

function LeftBar() {
  return (
    <div className='w-full flex flex-col gap-2'>
        <LeftUpBar />
        <LeftBottomBar/>
    </div>
  )
}

export default LeftBar