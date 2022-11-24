import React from "react";
import styled from "styled-components";
import pic from "../../../assets/yazdan.webp";

export default function Profile() {
  return (
    <Container>
      <Content>
        <Image>
          <img src={pic} alt="profile-picture" />
        </Image>
        <Label>
          <p className="title">ناظر نمایندگان</p>
          <p className="name">سید مرتضی یزدان‌پرست</p>
        </Label>
      </Content>
    </Container>
  );
}

const Container = styled.div`
background: #F3F3F3;
margin-inline: -29%;
margin-top: -18%;
padding: 18px;
}
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const Image = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 90px;
  border: 4px solid #095644;
  box-shadow: 0px 6px 5px -3px rgba(0, 0, 0, 0.25);
  img {
    width: 100%;
    height: 100%;
    border-radius:100%;
    object-fit: contain;
  }
`;

const Label =styled.div`
  display:flex;
  flex-direction:column;
  gap:12px;
  .title{
    margin:0;
    color: #707070;
    font-size:2.791vw;
    font-weight:300;
  }
  .name{
    margin:0;
    color: #707070;
    font-weight:700;
    font-size:5.581vw;
  }
`


