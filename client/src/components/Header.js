import React from 'react'


export default function Header() {
  return (
      <div className='bg-[url("https://cdn.pixabay.com/photo/2016/03/15/02/42/floor-1256804_1280.jpg")] h-96 w-full bg-cover'>
            <ul className='flex justify-between items-center'>
                <a ><li className='text-white text-3xl p-6 '>Über mich</li></a>
                <a><li className='text-white text-3xl p-6'>Referenzen</li></a>
                <a><li className='text-white text-3xl p-6'>Kontakt</li></a>
            </ul>
      </div>
  )
}
