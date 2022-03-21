import styled from 'styled-components';

import { device } from '../../styles/breakpoints';

export const Container = styled.section`
   width: 933px;
   max-width: 933px;
   height: 312px;
   max-height: 312px;
   background: var(--color-white);
   border-radius: var(--radius-default);
   box-shadow: 0 8px 20px 0 rgb(158 184 209 / 43%);
   z-index: 9998;
   margin-top: -40px;
   padding: 0px 10px;

   @media ${device.mobile}{
      width: 98%;
   }
`;

export const HeaderNavSearch = styled.header`
   width: 100%;
   height: 25%;
   display: flex;
   align-items: center;
   justify-content: space-between;
`

export const ContentLeft = styled.div`
   width: 60%;
   height: 100%;
   display: flex;

   .bottom-click{
      border-bottom: 3px solid var(--color-red-default);
   }

   .content-left-car, .content-left-moto{
      display: flex;
      align-items: end;
      width: 40%;
      cursor: pointer;
      height: 100%;

      img{
         width: 30px;
      }

      div{
         padding-left: 10px;
         display: flex;
         flex-direction: column;
         align-items: start;
         justify-content: end;
         width: 100%;
         height: 100%;
         

         label{
            line-height: 10px;
            font-size: var(--text-size-x-small);
         }

         strong{
            line-height: 30px;
            font-size: var(--text-size-xx-large);
            font-weight: 500;
            color: var(--color-red-default);
         }
      }

      @media ${device.mobile}{
         width: 100%;
      }
   }
   .content-left-moto{
      padding-left: 20px;
   }

   @media ${device.mobile}{
      width: 100%;
   }
`

export const ContentRight = styled.div`
   width: 40%;
   height: 100%;
   display: flex;
   align-items: end;
   justify-content: flex-end;
`

export const ButtonVender = styled.div`
   width: 190px;
   height: 50px;
   border: 2px solid #ffb000;
   background: #ffff;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: var(--radius-default);
   color: #ffb000;
   font-weight: 500;
   cursor: pointer;
`

export const ContentBoxSearch = styled.div`
   width: 100%;
   height: 75%;
   padding: 20px 40px;
   display: flex;
   flex-direction: column;

   @media ${device.mobile}{
      padding: 10px 10px;
   }
`

export const RowCheck = styled.div`
   width: 100%;
   height: 50px;
   display: flex;
   align-items: center;

   input{
      width: 20px;
      height: 20px;
   }

   label{
      padding-left: 5px;
   }

   .usados{
      margin-left: 30px;
   }
`

export const ContentFilter = styled.div`
   width: 100%;
   height: 25%;
   display: flex;
   justify-content: space-between;
`

export const InputLocation = styled.div`
   width: 49%;
   height: 40px;
   border: 1px solid #3c3c3c;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0px 10px;

   div:nth-child(1){
      width: 75%;
      height: 100%;
      display: flex;
      align-items: center;
      border-right-style: solid;

      img{
         width: 20px;
         height: 20px;
      }
      label{
         padding-left: 10px;
         font-family: var(--text-primary);
         color: var(--color-text-heade);
         font-size: var(--text-size-xx-small);

         strong{
            font-weight: 700;
         }
      }
   }
   div:nth-child(2){
      width: 25%;
      height: 100%;
      display: flex;
      align-items: center;
      label{
         padding-left: 5px;
         font-family: var(--text-primary);
         color: var(--color-text-heade);
         font-size: var(--text-size-xx-small);

         strong{
            font-weight: 700;
         }
      }
   }
`

export const BoxSelect = styled.div`
   width: 49%;
   height: 40px;
   display: flex;
   justify-content: space-between;

   select{
      border: 1px solid #3c3c3c;
      width: 49%;
      height: 100%;
   }

   #select-version{
      width: 100%;
   }

   @media ${device.mobile}{
      width: 100%;
   }
`

export const ContentFooterBox = styled.div`
   width: 100%;
   height: 50px;
   display: flex;
   justify-content: space-between;

   .content-busca-avancada, .content-search{
      display: flex;
      align-items: center;
      width: 49%;
      color: #686976;
   }

   .content-busca-avancada{
      img{
         width: 10px;
         height: 10px;
      }
      label{
         padding-left: 5px;
         cursor: pointer;
      }
   }
   .content-search{
      display: flex;
      align-items: center;
      justify-content: space-between;

      p{
         cursor: pointer;
      }

      button{
         border-radius: var(--radius-default);
         width: 280px;
         height: 100%;
         border: none;
         background: var(--color-red-default);
         font-weight: 700;
         font-size: var(--text-size-small);
         color: var(--color-white);
      }
   }
`

