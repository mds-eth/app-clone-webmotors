import React from 'react';

import CarouselComponent from '../Carousel';

import listBanner from '../../data/listBanner.json';

import { Container } from './styles';

function Banner() {
   return (
      <Container>
         <CarouselComponent>
            {listBanner.map(banner => {
               return (
                  <img key={banner.url} src={banner.url} height="250px" lazy="loading" alt={banner.alt} />
               )
            })}
         </CarouselComponent>
      </Container>
   )
}
export default Banner;


