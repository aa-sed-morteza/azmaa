import React, { useEffect, useState } from "react";
import styled from "styled-components";
import EnvoyCard from "../../../general/envoyCard";
import pic from "../../../../assets/hamidreza.webp";
import title from "../../../../assets/title.svg";
import { BaseBackURL } from "../../../../constant/api";
import axios from "axios";
import { useUser } from "../../../context/userContext";
import { useNavigate } from "react-router-dom";
import BestEnvoy from "../../../home/components/bestEnvoy";

export default function MyEnvoys() {
  const { state, dispatch } = useUser();
  const [envoy, setEnvoys] = useState([]);
  const navigate = useNavigate();

  const getEnvoys = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}api/v1/accounts/parliament_member/?super_visor__id=${state.id}`,
    };

    axios(config).then((res) => {
      // console.log(res.data);
      if (res.data.length > 0) {
        setEnvoys([...res.data]);
      }
    });
  };

  useEffect(() => {
    getEnvoys();
  }, []);

  return (
    <Container>
      <Title>
        <p className="home">پنل / </p>
        <p className="component"> نمایندگان من </p>
      </Title>
      <Gallery>
        {/* <AddEnvoy>
          <p className="text">ثبــت نمایندۀ جـدید</p>
        </AddEnvoy> */}
        <CardGallery>
          <GalleryTitle>نمایندگان من</GalleryTitle>
          {envoy.length === 0 ? (
            "در حال حاضر نماینده‌ای برای شما ثبت نشده است"
          ) : (
            <EnvoyPart>
              {envoy.map((item, i) => (
                <BestEnvoy
                  key={i}
                  envoy={item}
                  click={() => {
                    navigate(`/envoy/${item.id}`);
                  }}
                />
              ))}
            </EnvoyPart>
          )}
        </CardGallery>
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
    background-color: #f5f5f5;
    padding: 0;
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
    display: none;
  }
`;

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 12px 10px 13px;
  @media (min-width: 480px) {
    padding: 0;
    gap: 2.604vw;
    background-color: inherit;
  }
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

  @media (min-width: 480px) {
    box-shadow: 0px 6px 8px -2px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    padding: 0.052vw;
    width: 26%;
    .text {
      font-size: 1.25vw;
      &:before {
        font-size: 2vw;
      }
    }
  }
`;

const CardGallery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 480px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 1.302vw 1.302vw 2.604vw 6.667vw;
    background-color: #ffffff;
    border-radius: 0px 8px 8px 0px;
  }
`;

const GalleryTitle = styled.h2`
  display: none;
  @media (min-width: 480px) {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    color: #707070;
    font-weight: 300;
    font-size: 1.875vw;
    margin: 0;
    margin-bottom: 1.302vw;
    &:before {
      content: "";
      display: flex;
      width: 1.25vw;
      height: 1.719vw;
      background-image: url(${title});
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
`;

const EnvoyPart = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;

  & > div {
    width: 100%;
  }
  @media (min-width:481px){
    & > div {
    width: 45%;
  }
}
  
`;
