/* eslint-disable prettier/prettier */
import React from 'react';
import styled from'styled-components';
import { device } from "./device";

const StyledHeroWohin = styled.div`
  

    background-color: orange;

  @media ${device.tablet} {
        width: 99.5vw;
        height: 100vh;
        background-color: #07214f ;
        color: #ffffff;
        text-align: center;
        background-image: url('/lighthousebw.svg'), url('/LogoAlt.png');
        background-repeat: no-repeat, no-repeat;
        background-size: 25vw 70vh, 25vw 7vh;
        background-position: 1vw 6vh, 35vw 59vh;
  }
`;
export default StyledHeroWohin


