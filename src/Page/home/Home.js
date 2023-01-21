import React from 'react'
import styled from 'styled-components';
import Center from '../../center/Center'
import Footer from '../../footer/Footer';
import Grid from '../../grid/Grid';
import Header from '../../header/Header'
import Instruction from '../../instruction/Instruction';

export default function Home() {
  return (
   <>
   <UiDesign>
      <Header/>
      <Center/>
    </UiDesign>
    <Instruction/>
    <Grid/>
    <Footer/>
   </>
    

  )
}
const UiDesign = styled.div`
  width: 100%;
  height: 100vh;

  background-image: linear-gradient(to right bottom,#2563eb,rgba(59,130,246,.5));

`;
