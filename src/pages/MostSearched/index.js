import React, { useEffect } from 'react';

import listMostSearched from '../../data/listMostSearched.json';

import TitleBox from '../../components/TitleBox';
import Container from '../../components/Container';

import { ContentMost, ContentItemMost, LabelContentMost } from './styles';

function MostSearched() {

   useEffect(() => {
      const listNames = [...document.getElementsByClassName('list-names')];

      for (var i in listNames) {
         const name = listNames[i].innerHTML.split(' ');
         document.getElementById(i).innerHTML = `${name[0]} <span style="color: var(--color-red-default); font-size: var(--text-size-big)">${name[1]}</span>`;
      }

   }, []);
   return (
      <Container height={270} justify="column">
         <TitleBox>Carros mais buscados</TitleBox>
         <ContentMost>
            {listMostSearched.map((searched, index) => {
               return (
                  <ContentItemMost onClick={() => window.open(searched.link, '_blank')} key={searched.alt} url={searched.url}>
                     <LabelContentMost id={index} className="list-names">{searched.label}</LabelContentMost>
                  </ContentItemMost>
               )
            })}
         </ContentMost>
      </Container>
   )
}

export default MostSearched;