import React from 'react'
import Header from '../components/Header'

function Layouts({Content}) {
  return (
    <div>
        <Header />
        <Content />
    </div>
  )
}

export default Layouts