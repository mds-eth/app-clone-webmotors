import React from 'react';

import listServices from '../../data/listServices.json';

import TitleBox from '../../components/TitleBox';

import { Container, ContentAutomotive, BoxChooseService, ContentImageAutomotive, LabelAutomotives, ContentChooseService, ItemChooseService, LabelService } from './styles';

function Services() {
   return (
      <Container>
         <ContentAutomotive>
            <TitleBox>Serviços Automotivos</TitleBox>
            <ContentImageAutomotive onClick={() => window.open('https://www.webmotors.com.br/car10?lkid=1517', '_blank')}>
               <img src="https://target.webmotors.com.br/personalizacao-home-car10/logo-car10.png" lazy="loading" alt="Logo car10 Serviços Automoticos" />
               <LabelAutomotives>Uma plataforma de serviços para o carro com descontos e agendamento online</LabelAutomotives>
            </ContentImageAutomotive>
         </ContentAutomotive>
         <BoxChooseService>
            <TitleBox>Escolha um Serviço</TitleBox>
            <ContentChooseService>
               {listServices.map(service => {
                  return (
                     <ItemChooseService onClick={() => window.open(service.link, '_blank')} key={service.label}>
                        <LabelService>{service.label}</LabelService>
                        <img src={service.url} lazy="loading" alt={service.alt} />
                     </ItemChooseService>
                  )
               })}
            </ContentChooseService>
         </BoxChooseService>
      </Container>
   )
}
export default Services;