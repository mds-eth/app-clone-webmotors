import styled from 'styled-components';

export const ContentCategories = styled.div`
   max-width: 100%;
   height: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
   overflow-x: scroll;

   div:not(:first-child){
      margin: 0px 10px;
   }
`

export const ContentCategoriesItem = styled.div`
   min-width: 276px;
   height: 100%;
   border-radius: var(--radius-default);
   background-image: ${props => `url(${props.url})`};
   background-size: cover;
   background-repeat: no-repeat;
   padding: 15px 24px;
   cursor: pointer;
   
`

export const LabelCategories = styled.label`
   color: #fff;
   font-family: var(--text-primary);
   font-weight: 500;
   font-size: var(--text-size-xx-large);
`