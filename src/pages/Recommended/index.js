import React from 'react';

import listRecommended from '../../data/listRecommended.json';

import TitleBox from '../../components/TitleBox';
import Container from '../../components/Container';

import { ContentRecommended, ContentItemRecommended, ContentDetailVehicle, TextDestaque, NameVehicle, VehicleDetail, PriceVehicle, DataYearKm, ValueDataYearKm, ContentLocation, TextLocation } from './styles';

function Recommended() {
   return (
      <Container height={420} justify="column">
         <TitleBox>Recomendados para você</TitleBox>
         <ContentRecommended>
            {listRecommended.map(recommended => {
               return (
                  <ContentItemRecommended key={recommended.nameCar} onClick={() => window.open(recommended.link, '_blank')}>
                     <img src={recommended.url} lazy="loading" alt="Imagem veículo para venda" />
                     <ContentDetailVehicle>
                        <TextDestaque>Oferta destaque</TextDestaque>
                        <NameVehicle>{recommended.nameCar}</NameVehicle>
                        <VehicleDetail>{recommended.details}</VehicleDetail>
                        <PriceVehicle>{recommended.price}</PriceVehicle>
                        <DataYearKm>
                           <ValueDataYearKm>{recommended.year}</ValueDataYearKm>
                           <ValueDataYearKm>{recommended.km}</ValueDataYearKm>
                        </DataYearKm>

                     </ContentDetailVehicle>
                     <ContentLocation>
                        <img src="https://www.webmotors.com.br/assets/img/icon/icon-location.svg?t=6547" lazy="loading" alt="Icone pino Maps" />
                        <TextLocation>{recommended.city}</TextLocation>
                     </ContentLocation>
                  </ContentItemRecommended>
               )
            })}
         </ContentRecommended>
      </Container>
   )
}
export default Recommended;