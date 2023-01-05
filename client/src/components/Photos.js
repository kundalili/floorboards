import React from 'react'
import floor1 from './../assets/image12.png'
import floor2 from './../assets/image13.png'
import floor3 from './../assets/image14.png'
import floor4 from './../assets/image15.png'
import floor5 from './../assets/image16.png'
import floor6 from './../assets/image17.png'

export default function Photos() {
  return (
    <div className=''>
        <h2 className='text-4xl font-body font-thin p-[50px] align-middle'>
        Arum is dolorer iaepelliqui odiorem ex et iunduntur sint qui de nullor sitem aut autem nis ipsam quiasit 
        </h2>
        <div className='grid grid-cols-3 gap-10 p-[100px]'>
            <img src={floor1} alt='floor'/>
            <img src={floor2} alt='floor'/>
            <img src={floor3} alt='floor'/>
            <img src={floor4} alt='floor'/>
            <img src={floor5} alt='floor'/>
            <img src={floor6} alt='floor'/>
        </div>
    </div>
  )
}
