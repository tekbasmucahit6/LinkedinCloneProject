import React from 'react'
import MiddleAddPost from '../pages/index/components/MiddleAddPost'
import SortEvent from '../pages/index/components/SortEvent'
import Post from '../pages/index/components/Post'

function MiddleBar() {
  return (
    <div>
      <MiddleAddPost />
      <SortEvent />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default MiddleBar