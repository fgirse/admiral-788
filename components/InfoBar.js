/* eslint-disable prettier/prettier */
import React from 'react'
import LogoNeu from'../data/SvgLogoNeu'
import { PhoneIcon } from '@heroicons/react/solid';
import { AtSymbolIcon } from '@heroicons/react/solid';
import Modal6 from'./Modal6.js';
const InfoBar = () => {
  return (
    <>
   
    <section  className=" md:flex md:flex-row  md:bg-amber-800 md:mx-auto md:justify-around md:py-1 w-full items-center">
        
        <div className=" w-full flex flex-col md:flex-row md:items-center md:justify-start md:gap-x-5">
          <div className=' flex flex-col items-center justify-start w-96'>
          <LogoNeu width="123" height=""></LogoNeu>
          </div>
        
        
        <div className='flex flex-row justify-center md:justify-start items-center gap-x-1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     '>
                                                    <PhoneIcon className=" text-yellow-400 w-5 h-5"></PhoneIcon>
                                                    <p className='font-sans font-bold text-xs text-gray-100 md:text-sm lg:text-lg '>0761 38386747</p>
        </div>
    
         <div className='flex flex-row justify-center md:justify-start items-center gap-x-1'>
                                                <AtSymbolIcon className="text-yellow-400 w-5 h-5"></AtSymbolIcon>
                                                <p className='font-sans font-bold text-xs text-gray-100 md:text-sm lg:text-lg'>rettungsanker-freiburg@gmx.de</p>   
         </div>

        </div>
        
                <div className="hidden md:block md:mr-10" >

                        <div><Modal6></Modal6></div>
                 
        </div>
    </section>
    </>
  )
}

export default InfoBar