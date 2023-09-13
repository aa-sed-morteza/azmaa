import React from "react";
import styled from "styled-components";
import pic from "../../../assets/banner5.webp";

const Container = styled.section`
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export default function Banner() {
  return (
    <Container>
      <img src={pic} alt="banner" />
    </Container>
  );
}
