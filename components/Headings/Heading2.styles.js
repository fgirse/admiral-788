import React from 'react';
import styled from'styled-components';
import { device } from "../device";

const Heading2 = styled.h2`
  font-family: 'Architect Daughters', cursive;
  color: #ffffff;
  text-align: center;
  padding: 1rem 2rem;
  font-size: 6rem;
  font-weight: bold; 
  -webkit-text-stroke-width: .15rem;
  -webkit-text-stroke-color: orange;

  @media ${device.mobileM} {
    font-size: 6rem; 
    width:66vw;
    font-size: 4rem;     
  }

  @media ${device.laptopL} {
    font-size: 7rem;
    margin-top: 13vh;     
  }

  @media ${device.desktop} {
    font-size: 15rem;
    padding: 0;  
    text-aligne: center;   
  }
  `

export { Heading2 }