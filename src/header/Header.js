import React from 'react'
import styled from 'styled-components';

export default function Header() {
  return (
    <ForHeader>
    <H2>YouTube2MP3</H2>
    </ForHeader>
  )
}

const ForHeader = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  padding-left:10px;
  /* background-color: red; */
`;
const H2 = styled.h2`
font-size:20px;
color:white;
font-weight:500;
`;