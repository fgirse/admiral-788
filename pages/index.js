/* eslint-disable prettier/prettier */
import Link from '/components/Link'
import { PageSEO } from '/components/SEO'
/* eslint-disable prettier/prettier */
import StyledButton from '/components/Buttons/Button';
import Flensburger from '../components/icons/svg/SVGFlensburger';
import Ganter from '../components/icons/svg/SVGGanter';
import Astra from '../components/icons/svg/SVGAstra';
import Skyline from "../components/icons/svg/SVGSkyline_weiss_3.js"
import SCLogo from "../components/icons/svg/SCLogo";
import Image from 'next/image';
import Modal6 from '../components/Modal6'
import LightBox from '../components/LightBoxProj'
import InfoBar from '../components/InfoBar';
import sketchy from "theme-ui-sketchy-preset"; 
import { PhoneIcon } from '@heroicons/react/solid';
import { AtSymbolIcon } from '@heroicons/react/solid';
import Tag from '/components/Tag'
import siteMetadata from '/data/siteMetadata'
import { getAllFilesFrontMatter } from '/lib/mdx'
import formatDate from '/lib/utils/formatDate'
import NewsletterForm from '/components/NewsletterForm'
import SectionContainer from '../components/SectionContainer'

import {
  jsx,
  Flex,
  Box,
  NavLink,
  ThemeProvider,
  Button,
  Card,
  Text,
  Label,
  Checkbox,
  Select,
  Textarea,
  Radio,
  Input,
  Badge,
  Alert,
  Divider,
  Styled as S
} from "theme-ui";


const theme = {
  ...sketchy,
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#33e",
  },

}

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
     <SectionContainer>
    <div className="mx-auto bg-slate-900 min-h-screen flex flex-col w-12/12">

<section className="mt-5 mx-auto flex-grow-1 border-t-4 border-b-4 border-amber-400 bg-[url('/Hero3.png')] w-full h-[calc(100vh-44vh)] bg-cover bg-center md:bg-[url('/Hero.png')] md:bg-cover bg-no-repeat md:w-[100vw] md:h-[calc(100vh-11vh-14vh)]">



</section>
<section className='hidden lg:block lg:mx-auto lg:mt-2 lg:rounded-3xl lg:w-screen bg-slate-900 lg:h-[14vh] '>


<div className='grid grid-cols-1 md:grid md:grid-cols-[7fr_6fr]  items-end justify-center'>
<div className=''>
<h1 className=" ml-5 headingB text-amber-100 lg:text-2xl xl:text-3xl 2xl:px-4 2xl:text-[3.5rem] font-black">Dein Treffpunkt in Freiburg !!!</h1>
</div>
<div className=''>
<Skyline width="100%" height="8vh"/>
</div>
 
</div>

</section>
{/*======================================================================= SECTION A ===========================================================*/}


<section className='mt-[2vh] mx-auto w-full md:-mt-[13vh] lg:mt-[3vh]'>
<div className=" w-11/12 h-96  mx-auto grid grid-cols-1 lg:grid lg:grid-cols-[1fr_2fr] lg:content-stretch lg:justify-around lg:gap-x-2">
          <div className=' w-full h-36 py-2'>
                <p className="mb-2 text-center text-2xl font-bold tracking-tight text-yellow-500 dark:text-white uppercase md:text-4xl xl:text-5xl">öfffnungzeiten</p>
                <p className="text-center mt-2 text-xs sm:text-2xl text-gray-300 md:text-base lg:text-xl">Montag-Donnerstag: 18 bis 24 Uhr</p>
                <p className="text-center text-xs sm:text-2xl md:text-base  text-gray-300 lg:text-xl xl:text-">Freitag und Samstag: 15 bis 03 Uhr</p>









 md:file:hidden'>

  <Modal6></Modal6>
</div>

          <div className="mt-5w-10/12 flex flex-col items-center bg-red-900 rounded-2xl border shadow-md md:flex-row lg:w-full  dark:border-gray-700 dark:bg-gray-800 ">
              <img className="p-3" src="/portrait-mick1.png" alt="portrait"/>
              <div className="w-full flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-yellow-500 dark:text-white xl:text-5xl">"Moin Moin"</h5>
                  <p className="mb-1 font-normal text- text-gray-100 dark:text-gray-400">In Hommage an eine typische Kiez-Kneipe auf St.Pauli, haben wir im Herzen von Freiburg ein Lokal eröffnet, welches es so südlich der Elbe wohl kein zweites Mal gibt. Ausgebaut im Stile eines Schiffrumpfes, ist der im Herzen der Altstadt gelegene Rettungsanker-Freiburg idealer Treffpunkt um nach Feierabend nette und interessante Menschen kennenzulernen. Wir sind stolz auf unser buntes, internationales Publikum. Unser Rettungsanker ist auch ideale Location zur Durchführung Ihres privaten oder geschäftlichen Events. Sprechen Sie uns an oder kontaktieren Sie uns vor Ort oder schreiben Sie uns eine email. Wir freuen uns Sie im Rettungsanker begrüsssen zu dürfen <br /><br />Michael Schreck und das Team des Rettungsanker.</p>
              </div>
          </div>
          


</div>
</section>

{/*========================== ENDE SECTION A ===================================================*/}
<div className='mt-12 flex flex-col md:flex md:flex-row items-baseline'>
<div className='hidden md:block w-7/12 z-10 mt- md:transform -translate-y-10 md:w-5/12 xl:w-4/12 xl:transform: xl:-translate-y-60'>
        <Image src="/lighthousebw.svg" alt="illustration" layout="responsive" height={473} width={473} />
      </div>
      <div className='hidden md:block md:w-5/12  right-7 transform -translate-y-1 md:right-16 lg:w-3/12 xl:w-2/12 float-right md:transform md:-translate-y- xl:transforn z-20 xl:-translate-y-[vh]' >
        <Image className='' src="/Astraballons.png" alt="astraballons" layout="responsive" height={2064} width={1739} />
      </div>
      <div className='hidden w-2/6 left-24  md:1/12 transform -translate-y-12 md:transform:-md:translate-y-6 lg:w-2/12 xl:transform xl:-translate-y-[0vh]' >
        <Image src="/rettungsring.png" alt="illustration" layout="responsive" height={473} width={473} />
      </div>
      <div className='hidden md:block transform -translate-y-12 right w-5/12  md:transform:-translate-y-24 lg:transform lg:w-3/12 lg:-transform: lg:translate-y-0' >
        <Image src="/Graffity_StPauli.png" alt="llustration" layout="responsive" height={473} width={473} />
      </div>

  
</div>

  {/*======================================= Section B =======================================================================*/}
  <section className="mt-[84vh] xl:-mt-48 xl:p-12">
  <div className="grid overflow-hidden grid-cols-1 md:grid md:grid-cols-3 grid-rows-2 gap-3">
	<div className="box"><Image width="619" height="696" src="/bulleye.png" layout="responsive" alt="Bullauge" /></div>
	<div className="box"><Image width="619" height="696" src="/bulleye.png" layout="responsive" alt="Bullauge" /></div>
	<div className="box"><Image width="619" height="696" src="/bulleye.png" layout="responsive" alt="Bullauge" />
  </div>
</div>


  </section>

   
          {/*======================================= Ende Section B =======================================================================*/}
 
 
        <h1 className='headingB  left-1 text-[4rem] text-yellow-500 text-center md:text-8xl lg:text-[10rem] xl:-mt-[56vh]'>Die Kneipe</h1>
      
 {/*========================================================== section E ===============================================================*/}  
    
 <section className=' xl:mt-[16vh]' >
        <div className='-mt-20 contain1er mx-auto rounded-2xl bg-slate-800 w-9/12'>
         <p className=' mt-16 text-gray-100  text-sm text-justify p-5 sm:mt-10 lg:-mb-160 lg:-mt-20 lg:text-3xl lg:leading-loose'>Gemütlich nordisches  Ambiente im Herzen der Altstadt Freiburgs gelegen. Orginales Waterkant-Feeling mit Astra, Flens & Co. Jeden Samstag Bundesliga Saison Spieltag <SCLogo className="mx-auto p-1 -mt-24 -mb-24 md:-mb-8 text-center w-11/12 lg:-mt-20"></SCLogo ><br/> Live in unserer  <Link href='/sportarena'><a className='text-yellow-600 hover:text-amber-300 hover:border-b-4 hover:border-slate-400 text-sm lg:text-4xl'>Sportarena.</a></Link> Bei Top Spielen mit grosser Nachfrage sind Reservierungen über unser Booking-Tool zu empfehlen.</p> 
        </div>
       
        <ThemeProvider theme={theme}>
          <div className=" mx-auto lg:w-11/12 lg:max-w-8xl grid grid-cols-1 justify-center items-center p-2 md:p-6  md:grid-cols-3 md:justify-around lg:item11s-center lg:gap-x-5" >

          <Card
          className='justify-self-center'
              mb={3}
              mt={20}
              sx={{
                maxWidth: 700,
                padding: "12px",
                color: "#ffffff",
                backgroundColor: "orange",
                border: "3px white solid",
                boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
              }} onGotPointerCapture={2}
            >
              <div className='mx-auto border- border-gray-100'>
                <Astra object-fit="cover" height="25vh"  width="100%"></Astra>
              </div>
              <Text>
                <p className="mt-10 text-2xl text-center text uppercase font-bold" >Astra Bier</p>
                <p className="text-xl text-center">natürlich direkt vom Kiez in den Anker</p>
              </Text>
            </Card>

            <Card className='justify-self-center'
              mb={3}
              mt={20}
              sx={{
                maxWidth: 700,
                padding: "12px",
                color: "#ffffff",
                backgroundColor: "orange",
                border: "3px white solid",
                boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
              }} onGotPointerCapture={2}
            >
              <div className='mx-auto border- border-gray-100'>
                <Ganter aobject-fit="cover" height="25vh"  width="100%"></Ganter>
              </div>
              <Text>
                <p className="mt-10 text-2xl text-center text uppercase font-bold" >Ganter Bier</p>
                <p className="text-xl text-center">frisches köstliches Ganter-Bräu vom Fass</p>
              </Text>
            </Card>
            <Card className='justify-self-center'
              mb={3}
              mt={20}
              sx={{
                maxWidth: 700,
                padding: "12px",
                color: "#ffffff",
                backgroundColor: "orange",
                border: "3px white solid",
                boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
              }} onGotPointerCapture={2}
            >
              <div className='mx-auto border- border-gray-100'>
                <Flensburger object-fit="cover" height="25vh"  width="100%"></Flensburger>
              </div>
              <Text>
                <p className="mt-10 text-2xl text-center text uppercase font-bold">Flensburger</p>
                <p className="text-xl text-center">das blonde Herbe aus dem hohen Norden</p>
              </Text>
            </Card>
          </div>
        </ThemeProvider>

      </section>
 {/*========================================================== section E =ende ==============================================================*/}  
      <h1 className='z-20 relative headingB text-[2rem] text-center text-gray-50 lg:headingA lg:text-yellow-500 lg:text-[4.66rem] lg:mt-12'>Impressionen Rettungsanker</h1>
        <div className='w-3/12 lg:w-2/12 lg:p-8 lg:transform lg:-translate-y-36 xl:transform xl-translate-y-24'>
        <Image src="/Albers_Illu_white.png" top-5 alt="Impressionen" height="208 " width="195" layout="responsive" />
      </div>
  {/*========================================================== section F ==============================================================*/}  
  <section className='-mt-36 ml-2 mx=auto w-11/12'>
        <ThemeProvider theme={theme}>
        <div className=" mx-auto lg:w-11/12 lg:max-w-8xl grid grid-cols-1 justify-center items-center p-2 md:p-6  md:grid-cols-3 md:justify-around lg:items-center lg:gap-x-3" >

            
          <Card className='justify-self-center' 
            mb={5}
              mt={20}
              sx={{
                maxWidth: 700,
                padding: "10px",
                color: "#ffffff",
                backgroundColor: "orange",
                border: "3px white solid",
                boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
              }} onGotPointerCapture={2}
            >
              <div className='w-96 border-8 border-gray-100'>
                <Image src="/Impress01.jpg" alt="Impressionen" height="250 " width="400" layout="responsive" />
              </div>
              <Text>
              <p className="mt- text-center font-bold text-3xl md:text-4xl ">Impressionen</p>
              </Text>
            </Card>

            <Card className='justify-self-center'
            mb={5}
              mt={20}
              sx={{
                maxWidth: 700,
                padding: "10px",
                color: "#ffffff",
                backgroundColor: "orange",
                border: "3px white solid",
                boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
              }} onGotPointerCapture={2}
            >
              <div className='w-96 border-8 border-gray-100'>
                <Image src="/Impress02.jpg" alt="Impressionen" height="250" width="400" layout="responsive" />
              </div>
              <Text>
              <p className="mt- text-center font-bold text-3xl md:text-4xl ">Impressionen</p>
              </Text>
            </Card>

            
            <Card className='justify-self-center'
            mb={5}
              mt={20}
              sx={{
                maxWidth: 700,
                padding: "10px",
                color: "#ffffff",
                backgroundColor: "orange",
                border: "3px white solid",
                boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
              }} onGotPointerCapture={2}
            >
              <div className='w-96 border-8 border-gray-100'>
                <Image src="/Impress03.jpg" alt="Impressionen" height="250" width="400" layout="responsive" />
              </div>
              <Text>
              <p className="mt- text-center font-bold text-3xl md:4xl ">Impressionen</p>
              </Text>
            </Card>
          </div>
        </ThemeProvider>

      </section>
 {/*========================================================== section F ende==============================================================*/}  

  {/*========================================================== section G =================================================*/}  
  <section className=''>
        <div>

          <hr className='w-48 mt-12 mx-auto md:w-9/12'/>
                
          <div className="w-36 mt-6 md:mt-20 mx-auto md:w-2/12 lg:m">
          <Image  src="/LogoNeu.png" alt="LogoNeu" layout="responsive" height="1060" width="1920"/>
          </div>
                
          <h1 className='headingB text-white mt-2 text-[3rem] text-center lg:headingA lg:text-[6rem] lg:text-gray-600'>Impressum</h1>
                  <div>
            <div className="mt-8 flex flex-col items-center justify-between">
                <h1 className='mx-auto w-9/12 md:text-4xl text-gray-100 text-center'>Rettungsanker Freiburg GbR</h1>
                  <h1 className='mx-auto w-9/12 md:text-3xl text-gray-100 text-center'>Adelhauserstrasse 7c</h1>
                  <h1 className='mx-auto w-9/12 md:text-3xl text-gray-100 text-center'>79098 Freiburg / Breisgau</h1>
            </div>

            <div className="mt-12">
              <h1 className='mt-5 mx-auto w-9/12 font-mono md:text-2xl text-yellow-400 text-center'>Geschäftsführung:</h1>
              <h1 className='mx-auto w-9/12 md:text-3xl text-gray-100 text-center'>Michael Schreck</h1>
            </div>


            <div className="mt-12">
              <h1 className='mt-5 mx-auto w-9/12 font-mono md:text-2xl text-yellow-400 text-center'>Steuernummer:</h1>
              <h1 className='mx-auto w-9/12 md:text-3xl text-gray-100 text-center'>1234567890</h1>
            </div>
            <div className="mt-12">
              <h1 className='mt-5 mx-auto w-9/12 font-mono md:text-2xl text-yellow-400 text-center'>Gerichtsstand:</h1>
              <h1 className='mb-10 mx-auto w-9/12 md:text-3xl text-gray-100 text-center'>Freiburg/ Breisgau</h1>
            </div>
        </div>

        </div>
        
      </section>


   {/*========================================================== section G ende==============================================================*/}  
              <LightBox width="500" height="400"></LightBox>
 {/*=======================================  Section C =======================================================================*/}

    </div>



     </SectionContainer>
   
    </>
  )
}
