import React from 'react';

import { Container, ContentHeaderMenuMobile, ContentBodyMenuMobile } from './styles';

function MenuMobile({ closeMenuMobile }) {
   return (
      <Container>
         <ContentHeaderMenuMobile>
            <img src="https://www.webmotors.com.br/assets/img/photo-default-user.png?t=1.0.0" lazy="loading" alt="Icone WebMotors Menu Mobile" />
            <p onClick={() => window.location.href = 'https://www.webmotors.com.br/login?lkid=1402&r=https://www.webmotors.com.br&inst=header:webmotors::entrar-ou-cadastrar-se'}>Entrar ou Cadastrar-se</p>
            <img onClick={() => closeMenuMobile()} id="icon-close" src="/images/icon-close.png" lazy="loading" alt="Icone fechar menu Mobile" />
         </ContentHeaderMenuMobile>
         <ContentBodyMenuMobile>
            <label>Menu</label>
            <ul>
               <li onClick={() => window.location.href = 'https://www.webmotors.com.br/carros/estoque/?lkid=1391&inst=header:webmotors:menu-deslogado::comprar'}>
                  <img src="https://www.webmotors.com.br/assets/img/icon/icon-buy.svg?t=3758" lazy="loading" alt="Icone chave menu mobile" />
                  <span>Comprar</span>
               </li>
               <li onClick={() => window.location.href = 'https://www.webmotors.com.br/vender/?lkid=1392&inst=header:webmotors:menu-deslogado::vender'}>
                  <img src="https://www.webmotors.com.br/assets/img/icon/icon-sell.svg?t=3758" lazy="loading" alt="Icone veiculo vender" />
                  <span>Vender</span>
               </li>
               <li onClick={() => window.location.href = 'https://www.webmotors.com.br/tabela-fipe/?lkid=1393&inst=header:webmotors:menu-deslogado::tabela-fipe-webmotors'}>
                  <img src="https://www.webmotors.com.br/assets/img/icon/icon-table-fipe.svg?t=3758" lazy="loading" alt="Icone grafico subindo" />
                  <span>Tabela Fipe Webmotors</span>
               </li>
               <li onClick={() => window.location.href = 'https://www.webmotors.com.br/catalogo?lkid=1394&inst=header:webmotors:menu-deslogado::0km'}>
                  <img src="https://www.webmotors.com.br/assets/img/icon/icon-km.svg?t=3758" lazy="loading" alt="Icone carro 0km" />
                  <span>0km</span>
               </li>
               <li onClick={() => window.location.href = 'https://autopago.webmotors.com.br/?lkid=1395&inst=header:webmotors:menu-deslogado::auto-pago'}>
                  <img src="https://www.webmotors.com.br/assets/img/icon/icon-safe-buy.svg?t=3758" lazy="loading" alt="Icone escudo cifrao" />
                  <span>Autopago</span>
               </li>
               <li onClick={() => window.location.href = 'https://www.webmotors.com.br/vender/faztudo?lkid=1396&inst=header:webmotors:menu-deslogado::faz-tudo'}>
                  <img src="https://www.webmotors.com.br/assets/img/icon/icon-faz-tudo.svg?t=3758" lazy="loading" alt="Icone circulo" />
                  <span>FazTudo</span>
               </li>
               <li onClick={() => window.location.href = 'https://www.webmotors.com.br/financiamento/?lkid=1397&inst=header:webmotors:menu-deslogado::financiamento'}>
                  <img src="https://www.webmotors.com.br/assets/img/icon/icon-financing.svg?t=3758" lazy="loading" alt="Icone cifrao financiamento" />
                  <span>Financiamento</span>
               </li>
               <li onClick={() => window.location.href = 'https://www.autocompara.com.br/'}>
                  <img src="https://www.webmotors.com.br/assets/img/icon/icon-safe.svg?t=3758" lazy="loading" alt="Icone veiculo com escudo" />
                  <span>Seguro</span>
               </li>
               <li onClick={() => window.location.href = 'https://www.webmotors.com.br/wm1'}>
                  <img src="https://www.webmotors.com.br/assets/img/icon/icon-news-wm1.svg?t=3758" lazy="loading" alt="Icone noticias" />
                  <span>Notícias WM1</span>
               </li>
               <li onClick={() => window.location.href = 'https://www.cockpit.com.br/?lkid=1400&inst=header%3Awebmotors%3Amenu-deslogado%3A%3Arevendedor'}>
                  <img src="https://www.webmotors.com.br/assets/img/icon/icon-dealer.svg?t=3758" lazy="loading" alt="Icone usuário sistemas" />
                  <span>Revendedor</span>
               </li>
               <li onClick={() => window.location.href = 'https://ajuda.webmotors.com.br/hc/pt-br?lkid=1401&inst=header:webmotors:menu-deslogado::ajuda'}>
                  <img src="https://www.webmotors.com.br/assets/img/icon/icon-attendance.svg?t=3758" lazy="loading" alt="Icone ajuda" />
                  <span>Ajuda</span>
               </li>
            </ul>
         </ContentBodyMenuMobile>
      </Container>
   )
}

export default MenuMobile;