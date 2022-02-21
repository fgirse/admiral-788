/* eslint-disable prettier/prettier */
import { SRLWrapper } from "simple-react-lightbox";
import Image from'next/image'; 
// USE THE IMPORT BELOW INSTEAD IF YOU ARE USING THE PRO VERSION
// import { SRLWrapper } from 'simple-react-lightbox-pro'

function MyComponent() {
  return (
    <SRLWrapper>
     <Image src="/Impress01.png" alt="Impress01" height="183" width="275" layout="responsive"/>

    </SRLWrapper>
  );
}

export default MyComponent;