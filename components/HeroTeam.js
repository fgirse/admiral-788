/* eslint-disable prettier/prettier */
import React from 'react';
import styled from'styled-components';
import { device } from "./device";


    const StyledHeroTeam = styled.div`
    position: relative;
    height: 266vh;
    width: 100vw;
    background-color: green;
    background-image: url('/matroseimseil.png'), url('/lighthousebw.svg'), url('/LogoAlt.png'), url('/illumaritim-2.png');
    background-repeat: no-repeat, no-repeat, no-repeat ,no-repeat;
    background-size: 8vw 28vh, 20vw 95vh, 10vw 3vh, 100vw 266vh;
    background-position: 71vw 2vh, 0vw 0vh, 30vw 3vh, 0vh 0vw;  
    
    
    
    @media ${device.mobileM} {
      position: relative;
    height: 333vh;
    width: 100vw;
    background-color: green;
    background-image: url('/matroseimseil.png'), url('/lighthousebw.svg'), url('/LogoAlt.png'), url('/illumaritim-2.png');
    background-repeat: no-repeat, no-repeat, no-repeat ,no-repeat;
    background-size: 15vw 23vh, 20vw 95vh, 79vw 9vh, 100vw 333vh;
    background-position: 76vw 2vh, 0vw 0vh, 11vw 3vh, 0vh 0vw;            
  }

    @media ${device.mobileL} {
    position: relative;
    height: 333vh;
    width: 100vw;
    background-color: green;
    background-image: url('/matroseimseil.png'), url('/lighthousebw.svg'), url('/LogoAlt.png'), url('/illumaritim-2.png');
    background-repeat: no-repeat, no-repeat, no-repeat ,no-repeat;
    background-size: 8vw 28vh, 20vw 95vh, 4vw 14vh, 100vw 333vh;
    background-position: 71vw 2vh, 0vw 0vh, 30vw 3vh, 0vh 0vw;             
  }
    
    @media ${device.tablet} {
      position: relative;
    height: 266vh;
    width: 100vw;
    background-color: green;
    background-image: url('/matroseimseil.png'), url('/lighthousebw.svg'), url('/LogoAlt.png'), url('/illumaritim-2.png');
    background-repeat: no-repeat, no-repeat, no-repeat ,no-repeat;
    background-size: 8vw 28vh, 20vw 95vh, 60vw 12vh, 100vw 266vh;
    background-position: 71vw 2vh, 0vw 0vh, 30vw 3vh, 0vh 0vw;            
  }

  
  @media ${device.laptop} {
    position: relative;
    height: 266vh;
    width: 100vw;
    background-color: green;
    background-image: url('/matroseimseil.png'), url('/lighthousebw.svg'), url('/LogoAlt.png'), url('/illumaritim-2.png');
    background-repeat: no-repeat, no-repeat, no-repeat ,no-repeat;
    background-size: 8vw 28vh, 20vw 95vh, 40vw 14vh, 100vw 266vh;
    background-position: 71vw 2vh, 0vw 0vh, 30vw 3vh, 0vh 0vw;            
  }

  @media ${device.laptopL} {
    position: relative;
    height: 266vh;
    width: 100vw;
    background-color: green;
    background-image: url('/matroseimseil.png'), url('/lighthousebw.svg'), url('/LogoAlt.png'), url('/illumaritim-2.png');
    background-repeat: no-repeat, no-repeat, no-repeat ,no-repeat;
    background-size: 8vw 28vh, 20vw 95vh, 40vw 14vh, 100vw 266vh;
    background-position: 71vw 2vh, 0vw 0vh, 30vw 3vh, 0vh 0vw;           
  }
  
  @media ${device.desktop} {
    position: relative;
    height: 266vh;
    width: 100vw;
    background-color: green;
    background-image: url('/matroseimseil.png'), url('/lighthousebw.svg'), url('/LogoAlt.png'), url('/illumaritim-2.png');
    background-repeat: no-repeat, no-repeat, no-repeat ,no-repeat;
    background-size: 8vw 28vh, 20vw 95vh, 40vw 14vh, 100vw 266vh;
    background-position: 71vw 2vh, 0vw 0vh, 30vw 3vh, 0vh 0vw;

`

export default StyledHeroTeam

