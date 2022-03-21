import React from 'react';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import slideImages from '../../data/listBanner.json';

import { Container } from './styles';

function SlideShow({ children }) {
   return (
      <Container>
         <Slide className="carousel">
            {slideImages.map((slideImage, index) => (
               <div style={{ 'backgroundImage': `url(${slideImage.url})` }} className="each-slide" key={index}>
               </div>
            ))}
         </Slide>
      </Container>
   )
}

export default SlideShow;