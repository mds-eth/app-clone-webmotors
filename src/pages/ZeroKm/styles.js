import styled from 'styled-components';

export const ContentZeroKm = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   overflow-x: scroll;
   overflow-y: hidden;

   div:not(:first-child){
      margin: 0px 10px;
   }
`

export const ItemZeroKm = styled.div`
   width: 178px;
   min-width: 178px;
   border-radius: 8px;
   background: var(--color-white);
   box-shadow: 0 2px 9px 0 rgb(158 184 209 / 41%);
   background-image: ${props => `url(${props.url})`};
   background-repeat: no-repeat;
   background-size: 100%;
   background-position: top;
   cursor: pointer;

`