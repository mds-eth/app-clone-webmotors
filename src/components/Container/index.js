import React from 'react';

import { ContainerBox } from './styles';

function Container({ height, justify, children }) {
   return (
      <ContainerBox height={height} justify={justify}>
         {children}
      </ContainerBox>
   )
}

export default Container;