import React, { useState } from 'react';

import { ReactComponent as IconHeart } from '../../assets/heart-logo.svg';

import MenuMobile from '../MenuMobile';

import { Container, ContentMenuHeader } from './styles';

function Header() {

   const [viewMenu, setViewMenu] = useState(false);

   function setViewMenuMobile() {
      document.body.style.overflow = 'hidden';
      setViewMenu(true);
   }
   function closeMenuMobile(){
      document.body.style.overflow = '';
      setViewMenu(false);
   }
   return (
      <>
         {viewMenu && <MenuMobile closeMenuMobile={closeMenuMobile} />}
         <Container>
            <img src="https://www.webmotors.com.br/assets/img/webmotors.svg?t=1.0.0" lazy="loading" alt="Logo Web Motors" />
            <ContentMenuHeader>
               <ul>
                  <li className="li-hide">Comprar</li>
                  <li className="li-hide">Vender</li>
                  <li className="li-hide">Serviços</li>
                  <li className="li-hide">Ajuda</li>
                  <li className="li-hide">
                     <img src="https://www.webmotors.com.br/assets/img/photo-default-user.png?t=1.0.0" lazy="loading" alt="Logo Grade Web Motors" />
                     <small>Entrar</small>
                  </li>
                  <li className="li-hide">
                     <IconHeart />
                  </li>
                  <li>
                     <img onClick={() => window.open('https://www.webmotors.com.br/login/?r=https://www.webmotors.com.br/garagem/propostas?lkid=1367', '_blank')} id="logo-chat" src="https://www.webmotors.com.br/assets/img/chat.svg?t=2635" lazy="loading" alt="Logo Chat Web Motors" />
                  </li>
                  <li>
                     <img id="logo-chat" src="https://www.webmotors.com.br/assets/img/notification.svg?t=2635" lazy="loading" alt="Logo Sino Web Motors" />
                  </li>
                  {window.innerWidth <= 900 && (
                     <li onClick={() => setViewMenuMobile()}>
                        <img id="logo-menu-hamburguer" src="https://www.webmotors.com.br/assets/img/icon/icon-hamburguer.svg?t=748" lazy="loading" alt="Logo Menu Hamburguer" />
                     </li>
                  )}
               </ul>
            </ContentMenuHeader>
         </Container>
      </>
   )
}
export default Header;