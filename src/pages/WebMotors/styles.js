import styled from 'styled-components';

export const ContainerButtons = styled.div`
   width: 100%;
   height: 80px;
   display: flex;
   overflow-x: scroll;
   overflow-y: hidden;

   button:not(:first-child){
      margin: 0px 10px;
   }
`;

export const ButtonWebMotors = styled.button`
   width: 200px;
   height: 100%;
   cursor: pointer;
   background: var(--color-red-default);
   border-radius: 8px;
   border: none;
   color: var(--color-white);
   font-size: var(--text-size-medium);
   font-weight: 400;
   text-transform: none;

   min-width: 200px;
   
`
