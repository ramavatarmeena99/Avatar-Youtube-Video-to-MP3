import React from 'react'
import styled from 'styled-components';
import Center from '../../center/Center'
import Header from '../../header/Header'

export default function Home() {
  return (
    <UiDesign>
      <Header/>
      <Center/>

    </UiDesign>
  )
}
const UiDesign = styled.div`
  width: 100%;
  height: 100vh;
  /* background-image: linear-gradient(to right bottom,rgba(50, 18, 14,0.5),rgba(37,99,235,0.5) ); */
  background-image: linear-gradient(to right top, #0c5c9b, #1365a7, #196eb3, #1f78bf, #2481cb, #2282d0, #2084d4, #1e85d9, #177ed7, #1277d4, #1270d1, #1569ce);
  /* background-color: rgba(37,99,235,0.5) */
`;
/* // var(--tw-gradient-from),var(--tw-gradient-to,)!important */