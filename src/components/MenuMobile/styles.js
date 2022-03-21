import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  z-index: 9999;
  background: red;
  position: absolute;
  display: flex;
  flex-direction: column;
`;

export const ContentHeaderMenuMobile = styled.header`
   width: 100%;
   height: 100px;
   background: #2e2e37;
   display: flex;
   align-items: center;
   justify-content: space-around;

   #icon-close{
      width: 25px;
      height: 25px;
   }

   p{
      font-size: var(--text-size-x-small);
      color: #fff;
      font-weight: 500;
   }
   
`

export const ContentBodyMenuMobile = styled.div`
   width: 100%;
   height: 100%;
   background: var(--color-white);

   padding: 30px 40px;

   ul{
      margin-top: 15px;
      li{
         display: flex;
         align-items: center;
         padding: 10px 0px;

         span{
            font-size: var(--text-size-x-small);
            color: #868698;
            padding-left: 10px;
         }
      }
   }
`