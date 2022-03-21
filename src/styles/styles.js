import styled from 'styled-components';

import { device } from './breakpoints';

export const ContainerMain = styled.main`
   width: 100%;
   background: var(--color-main);
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding: 0px 50px;

   @media ${device.mobile}{
      padding: 0px 20px;
   }
`;

export const ContainerHelp = styled.section`
   width: 100%;
   height: 45px;
   background: var(--color-red-default);
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   font-size: var(--text-size-xx-small);
   color: var(--color-white);
   margin-top: 20px;
   text-align: center;
`