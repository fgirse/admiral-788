  /* eslint-disable prettier/prettier */
  import react from 'react';
  import styled from'styled-components';
  import { device } from "../device";/* eslint-disable prettier/prettier */

const Heading3 = styled.h1`
     position: absolute;
  top: 5vh; left: 30vw; z-index: 50;
  font-family: 'Architects Daughter', cursive;
  color: #ffffa1;
  background-color: rgba(0,255,114,.7);
  border-radius: 1.5 rem;
  border: .75rem  solid rgb(0, 255, 114);
  text-align: center;
  padding: 1rem 1rem;
  font-size: 1.66666rem;
  border-radius: .5rem;
  font-weight: bold;
  transform: rotate(-15deg); 
  -webkit-text-stroke-width: .1rem;
  -webkit-text-stroke-color: #ffffff;
  }

  @media ${device.mobileM} {
  position: absolute;
  top: 14vh; left: 57vw; z-index: 50;
  font-family: 'BowlbyOneSC', cursive;
  color: #00ffa1;
  background-color: rgba(0,255,114,.3);
  border: 1.75rem  solid rgb(255, 255, 255);
  text-align: center;
  padding: 1rem 2rem;
  font-size: 4rem;
  border-radius: 1.5 rem;
  font-weight: bold;
  transform: rotate(-3deg); 
  -webkit-text-stroke-width: .1rem;
  -webkit-text-stroke-color: #ffffff;
  }

  @media ${device.mobileL} {
    display: none;
  position: absolute;
  top: 14vh; left: 57vw; z-index: 50;
  font-family: 'BowlbyOneSC', cursive;
  color: #00ffa1;
  background-color: rgba(0,255,114,.3);
  border: 1.75rem  solid rgb(255, 255, 255);
  text-align: center;
  padding: 1rem 2rem;
  font-size: 4rem;
  border-radius: 1.5 rem;
  font-weight: bold;
  transform: rotate(-3deg); 
  -webkit-text-stroke-width: .1rem;
  -webkit-text-stroke-color: #ffffff;
  }
  @media ${device.tablet} {
  display: none;
  position: absolute;
  top: -15vh; left: 27vw; z-index: 50;
  font-family: 'BowlbyOneSC', cursive;
  color: #00ffa1;
  background-color: rgba(0,255,114,.3);
  border: 1rem  solid rgb(255, 255, 255);
  text-align: center;
  padding: 1rem 2rem;
  font-size: 4rem;
  border-radius: 1.5 rem;
  font-weight: bold;
  transform: rotate(-3deg); 
  -webkit-text-stroke-width: .1rem;
  -webkit-text-stroke-color: #ffffff;
  }
  @media ${device.laptop} {
    display: block;
  position: absolute;
  top: 14vh; left: 43vw; z-index: 50;
  font-family: 'BowlbyOneSC', cursive;
  color: #00ffa1;
  background-color: rgba(0,255,114,.3);
  border: 1rem  solid rgb(255, 255, 255);
  text-align: center;
  padding: 1rem 2rem;
  font-size: 3rem;
  border-radius: 1.5 rem;
  font-weight: bold;
  transform: rotate(-3deg); 
  -webkit-text-stroke-width: .1rem;
  -webkit-text-stroke-color: #ffffff;
  }
  @media ${device.laptopL} {
  position: absolute;
  top: 14vh; left: 47vw; z-index: 50;
  font-family: 'BowlbyOneSC', cursive;
  color: #00ffa1;
  background-color: rgba(0,255,114,.3);
  border: 1.35rem  solid rgb(255, 255, 255);
  text-align: center;
  padding: 1rem 2rem;
  font-size: 4rem;
  border-radius: 2rem;
  font-weight: bold;
  transform: rotate(-3deg); 
  -webkit-text-stroke-width: .1rem;
  -webkit-text-stroke-color: #ffffff;
  }
  @media ${device.desktop} {
  position: absolute;
  top: 14vh; left: 57vw; z-index: 50;
  font-family: 'BowlbyOneSC', cursive;
  color: #00ffa1;
  background-color: rgba(0,255,114,.3);
  border: 1.75rem  solid rgb(255, 255, 255);
  text-align: center;
  padding: 1rem 2rem;
  font-size: 5rem;
  border-radius: 1.5 rem;
  font-weight: bold;
  transform: rotate(-3deg); 
  -webkit-text-stroke-width: .1rem;
  -webkit-text-stroke-color: #ffffff;
  }
  `
  export { Heading3 }



