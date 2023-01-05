import React from 'react'
import arrow from './../assets/arrow.png'

export default function Footer() {
  return (
    <div className='bg-black h-full'>
        <div className=' flex justify-between pt-[100px]'>
        <h2 className='text-body text-6xl text-left text-white font-thin h-[400px] w-[400px] m-[50px]  ml-[200px]'>
        Sie haben Fragen oder möchten ein Angebot von mir erhalten? Ich freue mich auf Ihre Nachricht!</h2>   
        
            <div className='bg-[url("https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")] rounded-full h-[600px] bg-center w-[600px]'>
                          
            </div>
            <div className='flex flex-col justify-end pr-[80px]'>
                <h6 className='text-white text-xl 
                                font-body border-2 border-white 
                                rounded-full p-[10px] m-[10px]'>
                                thies[at]poppendieck.de
                </h6>
                <h6 className='text-white text-xl 
                                font-body border-2 border-white 
                                rounded-full p-[10px] m-[10px] pr-[80px]'>
                                + 49 177 2646061
                </h6>
            </div>
            
        </div>
        <img src={arrow} alt='arrow' className='pb-[100px] pl-[200px]' />

    </div>
  )
}
