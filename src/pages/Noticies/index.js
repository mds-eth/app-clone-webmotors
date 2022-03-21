import React from 'react';

import listNoticies from '../../data/listNoticies.json';

import TitleBox from '../../components/TitleBox';
import Container from '../../components/Container';

import { ContentNoticies, NoticieItem, ContentTextNoticies, TextTitle, TextBox, ContentAuthor, ImageAvatar } from './styles';

function Noticies() {
   return (
      <Container height={320} justify="column">
         <TitleBox>Notícias</TitleBox>
         <ContentNoticies>
            {listNoticies.map(noticie => {
               return (
                  <NoticieItem key={noticie.alt}>
                     <img src={noticie.url} lazy="loading" alt={noticie.alt} />
                     <ContentTextNoticies>
                        <TextTitle>{noticie.label}</TextTitle>
                        <TextBox>{noticie.text}</TextBox>
                     </ContentTextNoticies>
                     <ContentAuthor>
                        <ImageAvatar url={noticie.avatar} />
                        <span>por <strong>{noticie.author}</strong></span>
                     </ContentAuthor>
                  </NoticieItem>
               )
            })}
         </ContentNoticies>
      </Container>
   )
}

export default Noticies;