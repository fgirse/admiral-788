/* eslint-disable prettier/prettier */
import React from 'react'
import LogoNeu from'../data/SvgLogoNeu'
import { PhoneIcon } from '@heroicons/react/solid';
import { AtSymbolIcon } from '@heroicons/react/solid';
import Modal6 from'./Modal6.js';
const InfoBar = () => {
  return (
    <>
   
    <section  className=" md:flex md:flex-row  md:bg-amber-800 md:mx-auto md:justify-around w-full py-2 items-center">
        
        <div className=" w-full flex flex-col md:flex-row md:items-center md:justify-start md:gap-x-5">
          <div className='mt-5 items-center justify-center mb-3 mx-auto'>
          <LogoNeu width="133" height=""></LogoNeu>
          </div>
        
        
        <div className='flex flex-row justify-center md:justify-start items-center'>
                                                    <PhoneIcon className=" text-yellow-400 w-5 h-5"></PhoneIcon>
                                                    <p className='text-xs text-gray-100 md:text-lg '>0761 38386747</p>
        </div>
    
         <div className='flex flex-row justify-center md:justify-start items-center'>
                                                <AtSymbolIcon className="text-yellow-400 w-5 h-5"></AtSymbolIcon>
                                                <p className='text-xs text-gray-100 md:text-lg'>rettungsanker-freiburg@gmx.de</p>   
         </div>

        </div>
        
                <div className="hidden md:py-1 " >

                        <div><Modal6></Modal6></div>
                 
        </div>
    </section>
    </>
  )
}

export default InfoBar