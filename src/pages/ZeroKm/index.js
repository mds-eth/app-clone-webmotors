import React from 'react';

import listZeroKm from '../../data/listZeroKm.json';

import TitleBox from '../../components/TitleBox';
import Container from '../../components/Container';

import { ContentZeroKm, ItemZeroKm } from './styles';

function ZeroKm() {
   return (
      <Container height={230} justify="column">
         <TitleBox>Carros 0KM no Brasil</TitleBox>
         <ContentZeroKm>
            {listZeroKm.map(zero => {
               return (
                  <ItemZeroKm onClick={() => window.open(zero.link, '_blank')} key={zero.alt} url={zero.url} />
               )
            })}
         </ContentZeroKm>
      </Container>
   )
}

export default ZeroKm;