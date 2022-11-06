import React, { useState } from "react";
import styled from "styled-components";

const FilterBox = styled.div`
  border: 1px solid #cbcbcb;
  border-radius: 4px;
  padding: 8px;
  display: flex;
  gap: 10px;
`;

const FilterItem = styled.p`
background-color: #FFFFFF;
color:#9F9F9F;
font-size:3.721vw;
font-weight:300;
border-radius: 2px;
margin: 0;
padding: 5px 7px;
&.select{
  background-color:#707070;
  color:#FFFFFF;
  font-weight:700;
}
}
`;

export default function Filtering() {
    const[ select,setSelect] = useState(1);
  return (
    <FilterBox>
      <FilterItem onClick={()=>{setSelect(1)}} className={select===1 ? "select" : ""}>جدیدترین</FilterItem>
      <FilterItem onClick={()=>{setSelect(2)}} className={select===2 ? "select" : ""}>قدیمی‌ترین</FilterItem>
      <FilterItem onClick={()=>{setSelect(3)}} className={select===3 ? "select" : ""}>شفاف‌ترین</FilterItem>
      <FilterItem onClick={()=>{setSelect(4)}} className={select===4 ? "select" : ""}>حروف الفبا</FilterItem>
    </FilterBox>
  );
}
