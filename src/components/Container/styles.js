import styled from 'styled-components';

export const ContainerBox = styled.div`
   width: 100%;
   height: ${props => props.height}px;
   margin-top: 70px;
   display: flex;
   flex-direction: ${props => props.justify};
`;
