/* eslint-disable prettier/prettier */
import React from 'react';
import styled from'styled-components';
import { device } from "../../components/device";

const Heading1 = styled.h1`
  font-family: 'Architekt Daughters', cursive;
  color: orange;
  text-align: center;
  padding: 1rem 1rem;
  font-size: 2rem;
  font-weight: black; 
  -webkit-text-stroke-width: .1rem;
  -webkit-text-stroke-color: #ffffff;

  @media ${device.mobileM} {
    font-size: 2rem;
  }

  @media ${device.mobileM} {
    font-size: 2rem;
  }

  @media ${device.mobileM} {
    font-size: 2rem;
  }

  @media ${device.mobileL} {
    font-size: 2rem;
  }

  @media ${device.Tablet} {
    font-size: 3rem;
  }
  @media ${device.laptop} {
    font-size: 4rem;
  }
  @media ${device.laptopL} {
    font-size: 10rem;
  }
  @media ${device.desktop} {
    font-size: 6rem;
  }

  


  `
  export { Heading1 }