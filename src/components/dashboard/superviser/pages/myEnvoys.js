import React from "react";
import styled from "styled-components";
import EnvoyCard from "../../../general/envoyCard";
import pic from "../../../../assets/hamidreza.webp";

export default function MyEnvoys() {
  return (
    <Container>
      <Title>
        <p className="home">پنل / </p>
        <p className="component"> نمایندگان من </p>
      </Title>
      <Gallery>
        <AddEnvoy>
          <p className="text">ثبــت نمایندۀ جـدید</p>
        </AddEnvoy>
        <EnvoyCard
          persantage={96}
          name="حمیدرضا درویش"
          state="سیستان و بلوچستان"
          commission="امنیت اخلاقی"
          img={pic}
          id={1}
        />
        
        <EnvoyCard
          persantage={20}
          name=" صابر نیساز"
          state=" یزد "
          commission="امنیت اجتماعی"
          img={pic}
          id={2}
        />
         <EnvoyCard
          persantage={75}
          name=" حمید روحی"
          state=" یزد "
          commission="ورزش"
          img={pic}
          id={3}
        />
      </Gallery>
    </Container>
  );
}

const Container = styled.section`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow: hidden;
  @media (min-width: 480px) {
    background-color: #ffffff;
    padding: 25px 10% 0;
  }
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 12px;
  padding-right: 10px;
  .home {
    font-size: 3.721vw;
    font-weight: 700;
    margin: 0;
    color: rgba(0, 0, 0, 0.2);
  }
  .component {
    font-size: 3.721vw;
    font-weight: 700;
    margin: 0;
    color: rgba(112, 112, 112, 1);
  }
  @media (min-width: 480px) {
    margin-bottom: 25px;
    .home,
    .component {
      font-size: 1.25vw;
    }
  }
`;

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 12px 10px 13px;
`;

const AddEnvoy = styled.div`
  background-color: #ffaa00;
  box-shadow: 0px 6px 8px -2px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 4px;
  .text {
    margin: 0;
    color: #ffffff;
    font-weight: 700;
    font-size: 3.721vw;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    &:before {
      content: "+";
      display: inline-flex;
      align-items: center;
      font-size: 4.651vw;
      font-weight: 500;
      color: #ffffff;
    }
  }
`;
