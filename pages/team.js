/* eslint-disable prettier/prettier */
import React from 'react';
import dynamic from "next/dynamic"
import styled from 'styled-components'
import { StyledButton } from "/components/Buttons/Button.styles"
import LogoAlt from '../components/icons/svg/logoAlt';
import { Button, Page, Text } from '@geist-ui/core'
import Image from 'next/image';
import viewSource from '../components/viewSource'
import { bgWrap, bgText } from '../components/styles.module.css'


const team = () => {



  return (
<>
{/*====================================== wrapper background ==================================================================================================================================*/}
<div className="mx-auto bg-cover bg-[url('/IllustrMaritim.png')] w-[100vw] h-[333vh] bg-no-repeat bg-center relative z-0 lg;h-[100vh]">
{/*====================================== flex-col==============================================================================================================================*/}   
    <div className='flex flex-col items-center justify-start'>

        <div className=" h-[10vh] lg:h-full">
            <p className="mt-12 headingD text-5xl text-amber-600  uppercase text-center xl:text-[7rem] ">das team</p> 
        </div>
        <div className='mt-5 w-10/12 xl:w-7/12'>
             <Image src='/Logoalt.png' alt='logo alt' height='138' width='1100' layout='responsive' />
        </div>
    </div>
{/*====================================== flex-col ende ==================================================================================================================================*/}
<section className="mx-auto w-10/12 py-12 px-6 text-center md:py-4 md:px-4">

<div className="mt-4 flex flex-wrap -mx-24">
       <div className="-mt-28 p-24 md:w-1/3 xl:p-36">
         <Image className="rounded-full" src="/matrose.png" layout="responsive" width="100" height="120" alt="Portrait"/>
         <h3 className="mt-3 text-5xl text-yellow-600 mb-2 font-bold font-heading">Simon</h3>
         <span className="text-2xl text-blue-800 font-bold ">Obermaat</span>
         <p className="mt-4  text-1xl text-gray-300 leading-relaxed xl:text-xl">Simon ist Teammitglied der ersten Stunde. Im richtigen Leben studiert Simon an der Uni Erziehungswissenschaften und hat gerade seinee Master absolviert. Simon ist ausgewiesener SC Freiburg Fan und wann immer möglich begleited er das Team zu den Auswärtsspielen</p>
       </div> 
      <div className="-mt-28 p-24 md: w-1/3 xl:p-36 ">
       <Image className="rounded-full" src="/portrait-mick1.png" layout="responsive" width="100" height="120" alt="Portrait"/>
       <h3 className="mt-3 text-5xl text-yellow-600 mb-2 font-bold font-heading">Mick</h3>
         <span className="text-2xl text-blue-800 font-bold ">Captain</span>
         <p className="mt-4 text-1xl text-gray-300 leading-relaxed xl:text-xl">Volker Schneider und Michael Schreck haben 2017 die Idee und das Konzept des Rettungsankers initiert und liessen den Kahn in September 2017 vom Stapel laufen. Seit Januar 2020 zeigt sich Michael nun in alleiniger Verantwortung für den Rettungsanker und steurt das Schiff in diesen unruhigen Zeiten verantwortungsvoll durch die hohen Wogen </p>
       </div>
       <div className="-mt-28 p-24 md:w-1/3 xl:p-36">
       <Image className="rounded-full" src="/offizierin.png" layout="responsive" width="100" height="120" alt="Portrait"/>
       <h3 className="mt-3 text-5xl text-yellow-600 mb-2 font-bold font-heading">Anne</h3>
         <span className="text-2xl text-blue-800 font-bold ">I. Offizierin</span>
         <p className="mt-4 text-1xl xl: text-center text-sm text-gray-300 leading-relaxed xl:text-xl ">Auch Anne ist Teammitglied derersten Stunde nach Stapelablauf des Rettungsanker-Mit Ihrer langjährigen Gastroerfahrung  ist sie ein wichtiger Pfeiler im Team des Rettungsankers</p>
       </div>
     </div>
</section>
 </div>
{/*====================================== wrapper background ende ==================================================================================================================================*/}

</>


)
}

export default team












