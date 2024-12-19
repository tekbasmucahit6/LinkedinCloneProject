import React from 'react'
import RightUpBar from '../pages/index/components/RightUpBar'
import RightBottomBar from '../pages/index/components/RightBottomBar'

function RightBar() {
  return (
    <div className='w-full flex flex-col'>
        <RightUpBar />
        <RightBottomBar />
    </div>
  )
}

export default RightBar