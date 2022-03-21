import React from 'react';

import listCategories from '../../data/listCategories.json';

import TitleBox from '../../components/TitleBox';

import Container from '../../components/Container';

import { ContentCategories, ContentCategoriesItem, LabelCategories } from './styles';

function Categories() {
   return (
      <Container height={220} justify="column">
         <TitleBox>Categorias</TitleBox>
         <ContentCategories>
            {listCategories.map(categorie => {
               return (
                  <ContentCategoriesItem onClick={() => window.open(categorie.link, '_blank')} key={categorie.url} url={categorie.url}>
                     <LabelCategories>{categorie.label}</LabelCategories>
                  </ContentCategoriesItem>
               )
            })}
         </ContentCategories>
      </Container>
   )
}

export default Categories;