import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   :root{

      --color-white: #ffffff;
      --color-main: #f3f5f8;
      --color-red-default: #f3123c;
      --color-text-header: #4d4c59;
      --text-primary: Poppins, sans-serif;
      --radius-default: 4px;

      --text-size-small-x: 10px;
      --text-size-xx-small: 12px;
      --text-size-x-small: 14px;
      --text-size-small: 16px;
      --text-size-medium: 18px;
      --text-size-large: 20px;
      --text-size-x-large: 22px;
      --text-size-xx-large: 24px;
      --text-size-big: 28px;
      --margin-top-default: 30px;
   }
   
   body::-webkit-scrollbar {
    background-color: #f3f5f8;
    width: 14px;
   }

   body::-webkit-scrollbar-track {
      background-color: #f3f5f8;
   }

   body::-webkit-scrollbar-thumb {
      background-color: #babac0;
      border-radius: 16px;
      border: 4px solid #f3f5f8;
   }

   body::-webkit-scrollbar-button {
      display:none;
   }

   *{
      margin: 0;
      padding: 0;
      outline: none;
      box-sizing: border-box;
      list-style: none;
      text-decoration: none;
      font-family: var(--text-primary);
   }

   li, button{
      cursor: pointer;
   }
`;

export default GlobalStyle;