import React from 'react'

function RightBottomBar() {
  return (
    <div className='my-2 sticky top-1'>
        <img src={"./img/hiring.png"} className='rounded-xl' alt="" />

        <p className='text-xs flex flex-rows flex-wrap gap-3 justify-center items-center my-2'>
            <span className='text-gray-400 hover:text-blue-600 hover:underline cursor-pointer'>Hakkında</span>
            <span className='text-gray-400 hover:text-blue-600 hover:underline cursor-pointer'>Erişilebilirlik</span>
            <span className='text-gray-400 hover:text-blue-600 hover:underline cursor-pointer'>Yardım Merkezi</span>
            <span className='text-gray-400 hover:text-blue-600 hover:underline cursor-pointer'>Gizlilik ve Koşullar</span>
            <span className='text-gray-400 hover:text-blue-600 hover:underline cursor-pointer'>Reklam Tercihleri</span>
            <span className='text-gray-400 hover:text-blue-600 hover:underline cursor-pointer'>Reklam</span>
            <span className='text-gray-400 hover:text-blue-600 hover:underline cursor-pointer'>Ticari Hizmetler</span>
            <span className='text-gray-400 hover:text-blue-600 hover:underline cursor-pointer'>LinkedIn uygulamasını yükle</span>
            <span className='text-gray-400 hover:text-blue-600 hover:underline cursor-pointer'>Daha Fazla</span>
        </p>
    </div>
  )
}

export default RightBottomBar