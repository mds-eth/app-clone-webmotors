import styled from 'styled-components';

export const ContentRecommended = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   overflow-x: scroll;
   overflow-y: hidden;
`

export const ContentItemRecommended = styled.div`
   width: 270px;
   min-width: 270px;
   height: 100%;
   border-radius: 8px;
   box-shadow: 0 2px 9px 0 rgb(158 184 209 / 41%);
   background: var(--color-white);
   cursor: pointer;
   margin: 0px 10px;

   img{
      border-radius: 8px 8px 0px 0px;
      width: 100%;
      height: 135px;
      object-fit: cover;  
   }
`

export const ContentDetailVehicle = styled.div`
   width: 100%;
   height: 50%;
   border-radius: 0px 0px 8px 8px;
   padding: 0px 10px;
`

export const TextDestaque = styled.small`
   background: #f53d57;
   border-radius: 11px;
   padding: 2px 10px;
   color: var(--color-white);
   font-size: var(--text-size-xx-small);
   font-weight: 500;
   display: flex;
   justify-content: center;
   margin-top: 8px;
   align-items: center;
   width: 50%;
   margin-left: 65px;
`

export const NameVehicle = styled.h2`
    font-size: var(--text-size-x-small);
    text-transform: uppercase;
    color: #2e2e37;
    font-weight: 500;
    margin-bottom: 4px;
    margin-top: 10px;
`

export const VehicleDetail = styled.h3`
    font-size: var(--text-size-xx-small);
    text-transform: uppercase;
    color: #8b8c99;
    font-weight: 400;
`

export const PriceVehicle = styled.h4`
    font-size: var(--text-size-x-large);
    color: #2e2e37;
    font-weight: 600;
    margin-top: 40px;
`

export const DataYearKm = styled.div`
   width: 100%;
   height: 20px;
   display: flex;
   align-items: center;
   justify-content: space-between;
`

export const ValueDataYearKm = styled.span`
   color: #8b8c99;
   font-size: var(--text-size-xx-small);
   line-height: 20px;
`

export const ContentLocation = styled.div`
   width: 100%;
   height: 10%;
   border-top: 1px solid hsla(0,0%,48.6%,.19);
   border-radius: 0px 0px 8px 8px;
   padding: 0px 10px;
   display: flex;
   align-items: center;

   img{
      width: 16px;
      height: 16px;
   }
`

export const TextLocation = styled.span`
   color: #696977;
   font-size: var(--text-size-xx-small);
   line-height: 1px;
   padding-left: 5px;
`