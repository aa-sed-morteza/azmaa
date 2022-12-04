import React, { useState } from "react";
import styled from "styled-components";
import useWidth from "../../../hook/useWidth";
import background from "../../../assets/back-controll.webp";
import upArrow from "../../../assets/arrow.webp";
import data from "../../../data.json";
import VoteCard from "./voteCard";
import ActionCard from "./actionCard";
import BestEnvoy from "./bestEnvoy";
import tik from "../../../assets/vote.webp";
import ControlCore from "./controlCore";
import SelectArea from "./selectArea";

const ControllContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const FilterContainer = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 19px;
  border-radius: 2px;
  margin-top: 10px;
  @media (min-width: 480px) {
    padding: 44px 50px 19px;
    border-radius: 8px;

    width: 58%;
    margin: auto;
    margin-top: -19%;
  }
`;

const SearchInput = styled.input`
  width: 96%;
  padding: 7px 8px;
  border-radius: 2px;
  border: none;
  font-size: 3.72vw;
  margin-bottom: 19px;
  font-family: FontAwesome;
  &:placeholder {
    // color:#D8D8D8;
  }
  @media (min-width: 480px) {
    border-radius: 4px;
    font-size: 1.563vw;
    font-weight: 400;
    padding: 25px;
    margin-bottom: 30px;
  }
`;

const TabContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-end;
  @media(min-width:480px){
    
    justify-content: space-evenly;
  }
}
`;

const Tab = styled.div`
  displey: flex;
  flex-direction: column;
  position: relative;
  &.select {
    &:before {
      content: "";
      display: flex;
      position: absolute;
      right: 0;
      width: 100%;
      bottom: -20px;
      height: 5px;
      background: white;
    }
    p {
      font-weight: bold;
    }
  }

  div {
    width: 28px;
    height: 28px;
    margin: auto;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  p {
    margin: 0;
    color: #dff5f0;
    font-size: 3.72vw;
    font-weight: 300;
  }

  &:nth-child(3) {
    div {
      width: 25px;
      height: 25px;
    }
  }
  &:nth-child(5) {
    div {
      width: 37px;
    }
  }
  @media (min-width: 480px) {
    p {
      font-size: 1.458vw;
      font-weight: 300;
    }
    div {
      width: 35px;
      height: 35px;
    }
    &:nth-child(3) {
      div {
        width: 35px;
        height: 33px;
      }
    }
    &:nth-child(5) {
      div {
        width: 44px;
        height: 39px;
      }
    }
  }
`;

const LastVotes = styled.div`
  @media (min-width: 480px) {
    margin-bottom: 90px;
  }
`;

const Title = styled.h1`
  color: #9f9f9f;
  font-size: 4.65vw;
  font-weight: 300;
  overflow: hidden;
  text-align: center;
  margin-bottom: 10px;
  &:after {
    background-color: #9f9f9f;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    // vertical-align: middle;
    width: 58%;
  }
  @media (min-width: 480px) {
    margin-top: 47px;
    font-size: 1.87vw;
    margin-bottom: 24px;
    &:after {
      width: 81%;
    }
    &:before {
      content: "";
      display: inline-block;
      background-image: url(${tik});
      background-size: cover;
      background-repeat: no-repeat;
      width: 59px;
      height: 59px;
      margin-bottom: -1%;
    }
  }
`;

const ShowMore = styled.div`
  border: 1px solid #9f9f9f;
  border-radius: 4px;
  display: flex;
  padding: 8px;
  p {
    margin: auto;
    color: #9f9f9f;
    font-size: 4.65vw;
    position: relative;
    font-weight: 300;
    &:after {
      content: "";
      display: flex;
      position: absolute;
      left: -25px;
      bottom: 8px;
      background-image: url(${upArrow});
      background-size: cover;
      background-repeat: no-repeat;
      width: 9px;
      height: 5px;
    }
  }

  @media (min-width: 480px) {
    border: 2px solid #9f9f9f;
    border-radius: 8px;
    max-width: 500px;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 13px;
    p {
      font-size: 1.25vw;
      font-weight: 400;
      &:after {
        width: 15px;
        height: 8px;
        left: -37px;
      }
    }
  }
`;

const LastActions = styled.div``;

const BestEnvoyContainer = styled.div``;

const VoterContainer = styled.div`
  @media (min-width: 480px) {
    display: flex;
    gap: 20px;
  }
`;

const ActionContainer = styled.div`
  @media (min-width: 480px) {
    display: flex;
    gap: 20px;
  }
`;

const EnvoyGalley = styled.div`
  padding-top: 2.326vw;
`;

export default function Controller() {
  const [select, setSelect] = useState(0);
  const width = useWidth();

  const envoys = [
    {
      name: "مهدی اسماعیلی",
      state: "دماوند و فیروزکوه",
      commission: " امنیت ملی",
      id: "1",
      persantage: "99",
      img: "../../assets/abol.webp",
    },
    {
      name: "حسن اسماعیلی",
      state: " پردیس ",
      commission: " امنیت اجتماعی",
      id: "2",
      persantage: "20",
      img: "../../assets/ali.webp",
    },
    {
      name: "حامد هایون",
      state: " البرز ",
      commission: " امنیت اجتماعی",
      id: "3",
      persantage: "50",
      img: "../../assets/jafi.webp",
    },
  ];

  const controllItem = data.controlPanel.map((x, i) => {
    return (
      <Tab
        key={i}
        onClick={() => setSelect(i)}
        className={select === i ? "select" : ""}
      >
        {x.icon ? (
          <div>
            <img src={x.icon} />
          </div>
        ) : (
          ""
        )}

        <p>{x.name}</p>
      </Tab>
    );
  });
  return (
    <ControllContainer>
      <FilterContainer>
        <SearchInput type="text" placeholder="&#xF002; جستجو کن..." />
        <TabContainer>{controllItem}</TabContainer>
      </FilterContainer>

      {/* all */}
      {select == 0 && (
        <>
          <LastVotes>
            <Title>آخرین رأی‌گیری‌ها</Title>
            <VoterContainer>
              {width < 480 ? (
                <VoteCard />
              ) : (
                <>
                  {" "}
                  <VoteCard />
                  <VoteCard />
                  <VoteCard />
                </>
              )}
            </VoterContainer>

            <ShowMore>
              <p>نمایش بیشتر</p>{" "}
            </ShowMore>
          </LastVotes>

          {width < 480 ? (
            <>
              <LastActions>
                <Title> آخرین عملکردها</Title>
                <ActionCard />
                <ShowMore>
                  <p>نمایش بیشتر</p>{" "}
                </ShowMore>
              </LastActions>

              <BestEnvoyContainer>
                <Title>شفاف‌ترین نمایندگان</Title>
                <BestEnvoy />
                <ShowMore>
                  <p>نمایش بیشتر</p>{" "}
                </ShowMore>
              </BestEnvoyContainer>
            </>
          ) : (
            <>
              <ControlCore />

              <LastActions>
                <Title> آخرین عملکردها</Title>
                <ActionContainer>
                  {width < 480 ? (
                    <ActionCard />
                  ) : (
                    <>
                      {" "}
                      <ActionCard />
                      <ActionCard />
                      <ActionCard />
                    </>
                  )}
                </ActionContainer>

                <ShowMore>
                  <p>نمایش بیشتر</p>{" "}
                </ShowMore>
              </LastActions>
            </>
          )}
        </>
      )}

      {/* just envoys */}
      {select == 1 && (
        <EnvoyGalley>
          <BestEnvoy />
          <BestEnvoy />
          <BestEnvoy />
          <BestEnvoy />
          <BestEnvoy />
          <ShowMore>
            <p>نمایش بیشتر</p>{" "}
          </ShowMore>
        </EnvoyGalley>
      )}

      {/* just state */}
      {select==2 && (
        <>
        <SelectArea area="تهران، ری و شمیرانات" envoys={envoys}/>
        <SelectArea area="فیروزکوه و دماوند" envoys={envoys}/>
        </>
      )}

      {/* just vote */}
      {select ==3 && (
         <LastVotes>
         <Title>آخرین رأی‌گیری‌ها</Title>
         <VoterContainer>
           {width < 480 ? (
             <VoteCard />
           ) : (
             <>
               {" "}
               <VoteCard />
               <VoteCard />
               <VoteCard />
             </>
           )}
         </VoterContainer>

         <ShowMore>
           <p>نمایش بیشتر</p>{" "}
         </ShowMore>
       </LastVotes>
      )}

      {/* just actions */}
      {select==4 && (
         <LastActions>
         <Title> آخرین عملکردها</Title>
         <ActionContainer>
           {width < 480 ? (
             <ActionCard />
           ) : (
             <>
               {" "}
               <ActionCard />
               <ActionCard />
               <ActionCard />
             </>
           )}
         </ActionContainer>

         <ShowMore>
           <p>نمایش بیشتر</p>{" "}
         </ShowMore>
       </LastActions>
      )}

      
    </ControllContainer>
  );
}
