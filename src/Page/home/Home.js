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
  background-color:#2563eb ;
  /* background-color: rgba(59,130,246,.5); */
`;
