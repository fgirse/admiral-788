/* eslint-disable prettier/prettier */
import React from 'react'
import StyledHeroDrinks from '../components/HeroDrinks';
import Image from 'next/image';
import  { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import Ganter from '../components/icons/svg/SVGGanter'
import Astra from '../components/icons/svg/SVGAstra'
import Flensburger from '../components/icons/svg/SVGFlensburger'
import SectionContainer from '../components/SectionContainer.js'
import Getränke from '/components/icons/svg/SVGDrinks.js'
export default function Drinks()  {
    
      
        return (
          <>
  
<section className='w-11/12 mx-auto bg-slate-900'>
 
      <div className="container mx-auto py-2 px-4">
      <div className='="p-2 w-3/12 flex-col justify-center place-content-center items-center'>
      <Image className="" src="/LogoAlt.png" alt="Logo alt" height="230" width="1049" layout="responsive"/>
      </div>
      <Getränke className="mx-auto" height="20vh" width="76.66vw"></Getränke>        
      </div>                                                                                                                                                                                               

{/*====================================== GRID START =================================================================*/}
                      
                      <div className="mb-24 mx-auto w-9/12 bg-white/10 px-6 py-12 rounded-3xl text-slate-100 grid overflow-hidden grid-lines grid-cols-[12vw_2fr_2fr_1fr] grid-rows-1 gap-y-5 grid-flow-row w-auto items-center">
                      <Astra  object-fit="cover" height="4vw" width="6vw"></Astra> 
                      <p className="text-sm xl:text-3xl">Astra Bier </p>
                      <p className="text-sm xl:text-3xl">0.33 Liter Flasche </p>
                      <p className="text-sm xl:text-3xl">3.90 Euro </p>
                      <Flensburger object-fit="cover" height="6vh" width="6vw"></Flensburger>
                        <p className="text-sm md:text-md lg:text-xl xl:text-3xl">Flensburger Pils </p>
                      <p className="text-sm md:text-md lg:text-xl xl:text-3xl">0.33 Liter Flasche </p>
                      <p className="text-sm md:text-md lg:text-xl xl:text-3xl">3.90 Euro </p>
                      <Ganter a object-fit="cover" height="8vh" width="6vw"></Ganter>
                      <p className="text-sm xl:text-3xl">Ganter Weizen </p>
                      <p className="t3ext-sm xl:text-3xl">0.33 Liter offen </p>
                      <p className="text-sm xl:text-3xl">4.90 Euro </p>
                      <Ganter a object-fit="cover" height="8vh" width="6vw"></Ganter>
                      <p className="text-sm xl:text-3xl">Ganter Märzen </p>
                      <p className="text-sm xl:text-3xl">0.33 Liter Flasche </p>
                      <p className="text-sm xl:text-3xl">3.90 Euro </p>
                      <Ganter a object-fit="cover" height="8vh" width="6vw"></Ganter>
                      <p className="text-sm xl:text-3xl">Ganter Radler </p>
                      <p className="text-sm xl:text-3xl">0.33 Liter Flasche </p>
                      <p className="text-sm xl:text-3xl">3.90 Euro </p>
                      <Ganter a object-fit="cover" height="8vh" width="6vw"></Ganter>
                      <p className="text-sm xl:text-3xl">Ganter Alkoholfrei </p>
                      <p className="text-sm xl:text-3xl">0.5 Liter offen</p>
                      <p className="text-sm xl:text-3xl">4.20 Euro </p>
                      <Ganter a object-fit="cover" height="8vh" width="6vw"></Ganter>
                      <p className="text-sm xl:text-3xl">Weinschorle </p>
                      <p className="text-sm xl:text-3xl">0.25 Liter offen</p>
                      <p className="text-sm xl:text-3xl">4.20 Euro </p>

                      </div>
                      
       {/*====================================== GRID ENDE=================================================================*/}
        </section>
    </>
  )
  }