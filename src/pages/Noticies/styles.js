import styled from 'styled-components';

export const ContentNoticies = styled.div`
   max-width: 100%;
   height: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
   overflow-x: scroll;
   overflow-y: hidden;
`;

export const NoticieItem = styled.div`
   width: 178px;
   min-width: 178px;
   height: 100%;
   border-radius: var(--radius-default);
   background: yellow;
   cursor: pointer;
   background: var(--color-white);
   display: flex;
   flex-direction: column;
   box-shadow: 0 2px 9px 0 rgb(158 184 209 / 41%);
   margin: 0px 10px;

   img{
      border-radius: 8px 8px 0px 0px;
      width: 100%;
      height: 120px;
      min-height: 120px;
   }
`

export const ContentTextNoticies = styled.div`
   width: 100%;
   height: 200px;
   border-radius: 0px 0px 8px 8px;
   padding: 10px 10px;
`

export const TextTitle = styled.h3`
   color: #ff6d00;
   font-size: var(--text-size-xx-small);
`

export const TextBox = styled.h4`
    padding-top: 20px;
    color: #2e2e37;
    font-weight: 500;
    font-size: var(--text-size-xx-small);
    line-height: 15px;
    min-height: 65px;
`

export const ContentAuthor = styled.div`
   width: 100%;
   height: 70px;
   display: flex;
   align-items: center;
   padding: 10px 10px;

   span{
      font-size: var(--text-size-small-x);
      padding-left: 5px;
   }
`

export const ImageAvatar = styled.div`
   width: 30px;
   height: 30px;
   border-radius: 50px;
   background-image: ${props => `url(${props.url})`};
   background-size: cover;
   background-repeat: no-repeat;
   
`