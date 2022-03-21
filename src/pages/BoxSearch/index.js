import React, { useState, useEffect } from 'react';

import Select from '../../components/Form/Select';
import { integrationAPIWebMotors } from '../../services/api';

import { Container, HeaderNavSearch, ContentLeft, ContentRight, BoxSelect, ButtonVender, RowCheck, ContentFooterBox, InputLocation, ContentFilter, ContentBoxSearch } from './styles';

function BoxSearch() {

   const years = [
      {
         ID: 1,
         Name: 2015
      },
      {
         ID: 2,
         Name: 2016
      },
      {
         ID: 3,
         Name: 2017
      },
      {
         ID: 4,
         Name: 2018
      },
      {
         ID: 5,
         Name: 2019
      },
      {
         ID: 6,
         Name: 2020
      },
   ];

   const [makeSelected, setMakeSelected] = useState('');
   const [modelSelected, setModelSelected] = useState('');
   const [versionSelected, setVersionSelected] = useState('');

   const [makes, setMakes] = useState([]);
   const [models, setModels] = useState([]);
   const [versions, setVersions] = useState([]);
   const [yearSelected, setYearSelected] = useState('');

   useEffect(() => {
      async function getMakes() {

         const response = await integrationAPIWebMotors({ httpMethod: 'GET', endPoint: 'Make' });

         if (response.length > 0) {
            setMakes(response);
         }
      }

      getMakes();
   }, [])

   async function handleChangeMake(e) {

      e.preventDefault();

      const value = e.target.value;

      if (value === 'Marca*') {
         return setMakeSelected('');
      }

      if (value !== makeSelected) {
         setVersions([]);
         document.getElementById('select-models').disabled = true;
         document.getElementById('select-version').disabled = true;
      }

      setMakeSelected(value);

      const response = await integrationAPIWebMotors({ httpMethod: 'GET', endPoint: `Model?MakeID=${value}` });

      if (response.length > 0) {
         setModels(response);
         document.getElementById('select-models').disabled = false;
      }
   }

   async function handleChangeModel(e) {

      e.preventDefault();

      const value = e.target.value;

      if (value === 'Modelo*') {
         return setMakeSelected('');
      }

      setModelSelected(value);

      const response = await integrationAPIWebMotors({ httpMethod: 'GET', endPoint: `Version?ModelID=${value}` });

      if (response.length > 0) {
         setVersions(response);
         document.getElementById('select-year').disabled = false;
         document.getElementById('select-version').disabled = false;
      }
   }

   function changeBottomContent(option) {

      if (option === 1) {
         document.getElementById('content-left').classList.add('bottom-click');
         document.getElementById('content-right').classList.remove('bottom-click');
      } else {
         document.getElementById('content-left').classList.remove('bottom-click');
         document.getElementById('content-right').classList.add('bottom-click');
      }
   }

   return (
      <Container>
         <HeaderNavSearch>
            <ContentLeft>
               <div onClick={() => changeBottomContent(1)} id="content-left" className="content-left-car bottom-click">
                  <img src="./images/car-model.png" lazy="loading" alt="Icone veiculo" />
                  <div>
                     <label>COMPRAR</label>
                     <strong>CARROS</strong>
                  </div>
               </div>
               <div onClick={() => changeBottomContent(2)} id="content-right" className="content-left-moto">
                  <img src="./images/motorcycle.png" lazy="loading" alt="Icone veiculo" />
                  <div>
                     <label>COMPRAR</label>
                     <strong>MOTOS</strong>
                  </div>
               </div>
            </ContentLeft>
            {window.innerWidth > 500 && (
               <ContentRight>
                  <ButtonVender>Vender meu carro</ButtonVender>
               </ContentRight>
            )}
         </HeaderNavSearch>
         <ContentBoxSearch>
            <RowCheck>
               <input type="checkbox" name="novos" id="novos" />
               <label htmlFor="novos">Novos</label>
               <input type="checkbox" name="usados" id="usados" className="usados" />
               <label htmlFor="usados">Usados</label>
            </RowCheck>
            <ContentFilter>
               {window.innerWidth > 500 && (
                  <InputLocation>
                     <div>
                        <img src="/images/icon-maps.png" loading="lazy" alt="Icone pino Google Maps" />
                        <label>Onde:<strong> São Paulo - SP</strong></label>
                     </div>
                     <div>
                        <label>Raio:<strong> 100km</strong></label>
                     </div>
                  </InputLocation>
               )}
               <BoxSelect>
                  {makes.length > 0 && <Select value={makeSelected} id="select-make" name="select-make" label="Marca" onChange={handleChangeMake} options={makes} />}
                  <Select disabled value={modelSelected} id="select-models" name="select-models" label="Modelo" onChange={handleChangeModel} options={models} />
               </BoxSelect>
            </ContentFilter>
            <ContentFilter>
               {window.innerWidth > 500 && (
                  <BoxSelect>
                     <Select disabled value={yearSelected} id="select-year" name="select-year" label="Ano Desejado" onChange={(e) => setYearSelected(e.target.value)} options={years} />
                     <Select disabled value={modelSelected} id="select-models" name="select-models" label="Faixa de Preço" onChange={handleChangeModel} options={models} />
                  </BoxSelect>
               )}
               <BoxSelect>
                  <Select disabled value={versionSelected} id="select-version" name="select-version" label="Versão" onChange={(e) => setVersionSelected(e.target.value)} options={versions} />
               </BoxSelect>
            </ContentFilter>
            <ContentFooterBox>
               <div className="content-busca-avancada">
                  <img src="/images/icon-arrow-right.png" loading="lazy" alt="Icone seta para direita" />
                  <label>Busca Avançada</label>
               </div>
               <div className="content-search">
                  {window.innerWidth > 500 && <p>Limpar Filtros</p>}
                  <button>VER OFERTAS</button>
               </div>
            </ContentFooterBox>
         </ContentBoxSearch>
      </Container >
   )
}
export default BoxSearch;