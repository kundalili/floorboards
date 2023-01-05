import React from 'react'
import profile from '../assets/1517538683969.jpeg'

export default function Body() {
  return (
    <div className='bg-black font-body font-thin flex flex-col justify-center items-center'>

        <h1 className='text-white text-6xl p-[50px]'>Hallo, ich bin Thies Poppendick</h1>
        <h5 className='text-white text-2xl pl-[50px] pr-[50px] font-light'>
        Mein Name ist Thies und ich bin Tischler. Seit über 30 Jahren arbeite ich in diesem Beruf und habe während dieser Zeit viele interessante Projekte erfolgreich abgeschlossen. Ich habe mich auf die Holzdielen spezialisiert und setze dabei auf hochwertige Materialien und sorgfältige Verarbeitung. In meinem Portfolio finden Sie eine Auswahl meiner bisherigen Arbeiten. Ich hoffe, dass ich Ihnen einen Eindruck davon vermitteln kann, was für mich Qualität und Kreativität bedeutet. Wenn Sie Interesse an einer Zusammenarbeit haben, kontaktieren Sie mich gerne. Ich freue mich auf Ihre Anfrage!        </h5>
        <img src={profile} className="h-[100px] w-[100px] rounded-full m-[30px]" alt='Thies'/>

    </div>
  )
}
