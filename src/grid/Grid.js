import React from "react";
import styled from "styled-components";
import { gridData } from "./GridData";

export default function Grid() {
  return (
    <ForGrid
      style={{
   

      }}
    >
      {gridData.map((item, index) => {
        return (
          <ForGridData
          key={index}
            style={{
    
        backgroundColor: `${item.color}`,

            }}
     

          >
            <p style={{ fontSize: "23px", fontWeight: "700" }}>{item.title}</p>
            <p style={{ fontSize: "15px", fontWeight: "400" }}>
              {item.description}
            </p>
          </ForGridData>
        );
      })}
    </ForGrid>
  );
}

const ForGrid = styled.div`
     width:100%;
        height:90vh;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-wrap: wrap;
        padding: 0px 200px;
        padding-top: 20px;
        border-top:1px solid #e6e6e6;
  /* @media (max-width: 768px) {
  font-size: 30px;

   padding:20px 40px ;
  } */
`;
const ForGridData = styled.div`
    width: 230px;
              height: 250px;
           
              border-radius: 10px;
              margin: 10px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: center;
              padding-left: 10px;
              padding-right: 18px;
              padding-bottom: 23px;
              padding-top: 20px;
  /* @media (max-width: 768px) {
  font-size: 30px;

   padding:20px 40px ;
  } */
`;