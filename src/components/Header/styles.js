import styled from 'styled-components';

import { device } from '../../styles/breakpoints';

export const Container = styled.header`
  width: 100%;
  height: 64px;
  background: var(--color-white);
  padding: 0px 14px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 7%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  img{
     cursor: pointer;
  }
`;


export const ContentMenuHeader = styled.nav`
   width: 50%;
   height: 100%;
   display: flex;
   justify-content: end;

   ul{
      display: flex;
      align-items: center;

      li{
         display: flex;
         align-items: center;
         padding: 0px 20px;
         font-size: var(--text-size-xx-small);
         color: var(--color-text-header);
         height: 100%;
         cursor: pointer;

         img{
            width: 24px;
            height: 24px;
         }

         #logo-chat{
            width: 18px;
         }
      }

      li:hover{
         border-bottom: 2px solid var(--color-red-default);
      }

      li:nth-child(5){
         display: flex;
         align-items: center;

         small{
            padding-left: 10px;
            font-size: var(--text-size-xx-small);
         }
      }
   }

   @media ${device.tablet}{
      ul{
         li{
            padding: 0px 10px;
         }
         .li-hide{
            display: none !important; 
         }
      }
   }
`
