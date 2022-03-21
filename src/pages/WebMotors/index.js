import React from 'react';

import TitleBox from '../../components/TitleBox';
import Container from '../../components/Container';

import { ContainerButtons, ButtonWebMotors } from './styles';

function WebMotors() {
   return (
      <Container height={120} justify="column">
         <TitleBox>Na Webmotors</TitleBox>
         <ContainerButtons>
            <ButtonWebMotors onClick={() => window.open('https://www.webmotors.com.br/financiamento/?lkid=1068&idcmpint=t1:c17:m07:webmotors:na-webmotors:posicao-1::financiamento', '_blank')}>Financiamento</ButtonWebMotors>
            <ButtonWebMotors onClick={() => window.open('https://www.webmotors.com.br/vender/?idcmpint=t1:c17:m07:webmotors:na-webmotors:posicao-2::venda-seu-veiculo', '_blank')}>Venda seu veículo</ButtonWebMotors>
            <ButtonWebMotors onClick={() => window.open('https://www.webmotors.com.br/catalogo?idcmpint=t1:c17:m07:webmotors:na-webmotors:posicao-3::catalogo-de-0km', '_blank')}>Catálogo de 0KM</ButtonWebMotors>
            <ButtonWebMotors onClick={() => window.open('https://www.autocompara.com.br/?idcmpint=t1:c17:m07:webmotors:na-webmotors:posicao-4::seguro', '_blank')}>Seguro</ButtonWebMotors>
            <ButtonWebMotors onClick={() => window.open('https://www.webmotors.com.br/tabela-fipe/?idcmpint=t1:c17:m07:webmotors:na-webmotors:posicao-5::tabela-fipe', '_blank')}>Tabela Fipe</ButtonWebMotors>
            <ButtonWebMotors onClick={() => window.open('https://autopago.webmotors.com.br/?idcmpint=t1:c17:m07:webmotors:na-webmotors:posicao-6::autopago', '_blank')}>AutoPago</ButtonWebMotors>
         </ContainerButtons>
      </Container>
   )
}

export default WebMotors;