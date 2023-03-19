import React, { useState } from "react";
import styled from "styled-components";
import ok from "../../../assets/like.webp";
import disagree from "../../../assets/dislike.webp";
import info from "../../../assets/info.webp";

export default function ActionsCensus({ total, data}) {
  const [envoy, setEnvoy] = useState(267);

  const dataOptions = data.activity_choice.map((item,i)=>{
    return(
      <Item className="active" key={i}>
          <Type color="#6CBBA9" icon={ok}>
            {item.name}
          </Type>
          <Number color="#6CBBA9">
            <span>{(data.vote.filter(x=>x.vote == item.name).length)}/</span>
            {total}
          </Number>
        </Item>
    )
  })
  return (
    <Container>
      <Title> آمار آراء</Title>
      <Row>
        {dataOptions}
        {/* <Item className="active">
          <Type color="#6CBBA9" icon={ok}>
            همراه:
          </Type>
          <Number color="#6CBBA9">
            <span>{positive}/</span>
            {total}
          </Number>
        </Item> */}

        {/* <Item>
          <Type color="#FFA5A5" icon={disagree}>
            غیرهمراه:
          </Type>
          <Number color="#FFA5A5">
            <span>{negative}/</span>
            {total}
          </Number>
        </Item> */}

        {/* <Item>
          <Type color="#CBCBCB" icon={info}>
            نامشخص:
          </Type>
          <Number color="#CBCBCB">
            <span>{another}/</span>
            {total}
          </Number>
        </Item> */}
      </Row>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid #cbcbcb;
  border-radius: 4px;
  padding: 0px 29px 20px;
  margin-top: 40px;
  @media (min-width: 480px) {
    padding: 0px 45px 30px 40px;
    margin-top: 60px;
  }
`;

const Title = styled.h4`
  font-weight: 300;
  font-size: 4.651vw;
  color: #9f9f9f;
  transform: translateY(-3.023vw);
  background: #ffffff;
  width: 35%;
  margin: 0;
  text-align: center;
  margin-right: -5%;
  @media (min-width: 480px) {
    font-size: 1.875vw;
    transform: translateY(-1.615vw);
    width: 40%;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5px;
  gap: 10px;
  @media (min-width: 480px) {
    flex-direction: column;
    gap: 15px;
  }
  &>:nth-child(2){
    &>p{
      color: #FFA5A5;
      &:before{
        background-image: url(${disagree});
      }
    }
    &> div span{
      color: #FFA5A5;
    }
    
  }
  &>:nth-child(3){
    &>p{
      color: #CBCBCB;
      &:before{
        background-image: url(${info});
      }
    }
    &> div span{
      color: #CBCBCB;
    }
    
  }
`;


const Item = styled.div`
  width: 48%;
  display: flex;
  gap: 7px;
  align-items: center;
  @media (min-width: 480px) {
    width: 100%;
    &.active {
      background-color: #dff5f0;
      border-radius: 8px;
      padding: 5px;
    }
  }
  
`;

const Type = styled.p`
  margin: 0;
  font-size: 3.721vw;
  font-weight: 400;
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  gap: 7px;
  &:before {
    content: "";
    display: inline-flex;
    background-image: url(${(props) => props.icon});
    background-size: contain;
    background-repeat: no-repeat;
    width: 3.488vw;
    height: 3.488vw;
   
  }
  @media (min-width: 480px) {
    font-size: 1.25vw;
    font-weight: 300;
    &:before {
      width: 1.563vw;
      height: 1.563vw;
    }
  }
`;

const Number = styled.div`
  font-size: 3.651vw;
  font-weight: 400;
  color: #9f9f9f;
  span {
    color: ${(props) => props.color};
    font-weight: 700;
  }
  @media (min-width: 480px) {
    font-size: 1.667vw;
  }
`;
