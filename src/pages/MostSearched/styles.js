import styled from 'styled-components';

export const ContentMost = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   overflow-x: scroll;
   overflow-y: hidden;
`

export const ContentItemMost = styled.div`
   width: 178px;
   min-width: 178px;
   border-radius: 8px;
   background: var(--color-white);
   box-shadow: 0 2px 9px 0 rgb(158 184 209 / 41%);
   background-image: ${props => `url(${props.url})`};
   background-position: 50%;
   background-position-y: 70px;
   background-size: 230px;
   background-repeat: no-repeat;
   padding: 24px;
   cursor: pointer;
   margin: 0px 10px;
`

export const LabelContentMost = styled.h3`
   font-size: var(--text-size-small);
   font-weight: 600;
   color: #2e2d37;
   width: 30px;
`