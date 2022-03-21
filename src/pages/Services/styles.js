import styled from 'styled-components';

import { device } from '../../styles/breakpoints';

export const Container = styled.section`
   width: 100%;
   height: 240px;
   margin-top: 30px;
   display: flex;
   justify-content: space-between;

   @media ${device.mobile}{
      flex-direction: column;
      height: 600px;
   }
`;

export const ContentAutomotive = styled.div`
   width: 33%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   img{
      width: 100px;
      height: 50px;
   }

   @media ${device.mobile}{
      width: 100%;
   }
`

export const ContentImageAutomotive = styled.div`
   width: 100%;
   height: 85%;
   background-image: url('https://target.webmotors.com.br/personalizacao-home-car10/banner-car10.png');
   background-repeat: no-repeat;
   background-position: top 80% right 40%;
   background-size: cover;
   border-radius: var(--radius-default);
   padding: 20px 20px;
   display: flex;
   justify-content: space-between;
   flex-direction: column;
   cursor: pointer;
`

export const BoxChooseService = styled.div`
   width: 65%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   @media ${device.mobile}{
      width: 100%;
   }
`

export const LabelAutomotives = styled.p`
   font-size: var(--text-size-x-small);
   color: var(--color-white);
   font-weight: 700;
`

export const ContentChooseService = styled.div`
   width: 100%;
   height: 85%;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;

   @media ${device.mobile}{
      flex-direction: column;
      flex-wrap: nowrap;
   }
`

export const ItemChooseService = styled.div`
   width: 49%;
   height: 98px;
   border-radius: 8px;
   display: flex;
   justify-content: space-between;
   cursor: pointer;
   padding: 0px 0px 0px 50px;
   align-items: center;
   background: var(--color-white);

   img{
      height: 80%;
   }

   @media ${device.mobile}{
      width: 100%;
      margin: 5px 0px;
      padding: 0px 0px 0px 10px;
      img{
         width: 60%;
      }
   }
`

export const LabelService = styled.p`
    color: rgb(241, 18, 60);
    font-size: var(--text-size-small);
    font-weight: 700;
    width: 120px;
    line-height: 16px;
`