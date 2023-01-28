import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useWidth from "../../../hook/useWidth";
import background from "../../../assets/back-controll.webp";
import upArrow from "../../../assets/arrow.webp";
import data from "../../../data.json";
import VoteCard from "./voteCard";
import HonestEnvoy from "../../envoy/components/honestEnvoy";
import ActionCard from "./actionCard";
import BestEnvoy from "./bestEnvoy";
import tik from "../../../assets/vote.webp";
import ControlCore from "./controlCore";
import SelectArea from "./selectArea";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BaseBackURL } from "../../../constant/api";

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
  @media (min-width: 481px) {
    padding: 20px;
    border-radius: 8px;
    width: 58%;
    margin: auto;
    margin-top: -19%;
  }
  @media (min-width: 769px) {
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
  @media (min-width: 481px) {
    width: 90%;
    border-radius: 4px;
    font-size: 1.2vw;
    font-weight: 400;
    padding: 15px;
    margin-bottom: 15px;
  }
  @media (min-width: 769px) {
    font-size: 1.563vw;
    padding: 25px;
    margin-bottom: 30px;
  }
`;

const TabContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-end;
  @media(min-width:481px){
    
    justify-content: space-evenly;
  }
}
`;

const Tab = styled.div`
  displey: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  &.select,
  &:hover {
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
  @media (min-width: 481px) {
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
  @media (min-width: 481px) {
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
  @media (min-width: 481px) {
    margin-top: 47px;
    font-size: 1.87vw;
    margin-bottom: 24px;
    &:after {
      width: 75%;
    }
    &:before {
      content: "";
      display: inline-block;
      background-image: url(${tik});
      background-size: cover;
      background-repeat: no-repeat;
      width: 3.073vw;
      height: 3.073vw;
      margin-bottom: -1%;
    }
  }
  // @media(max-width:1400px){
  //   &:after{
  //     width:79%;
  //   }
  // }
  // @media(max-width:1000px){
  //   &:after{
  //     width:70%;
  //   }
  // }
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

  @media (min-width: 481px) {
    border: 2px solid #9f9f9f;
    border-radius: 8px;
    width: 31%;
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
  @media (min-width: 481px) {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    // margin-left:-7%;
    // margin-right:-7%;
  }
  @media (min-width: 769px) {
    justify-content: center;
  }
`;

const ActionContainer = styled.div`
  @media (min-width: 481px) {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    // margin-left:-7%;
    // margin-right:-7%;
  }
  @media (min-width: 769px) {
    justify-content: center;
  }
`;

const EnvoyGalley = styled.div`
  padding-top: 2.326vw;
  @media (min-width: 481px) {
    display: flex;
    flex-wrap: wrap;
    gap: 1.042vw;
    width: 103%;
  }
`;

const AreaContainer = styled.div`
  @media (min-width: 481px) {
    display: flex;
    flex-wrap: wrap;
    gap: 1.042vw;
  }
`;

export default function Controller() {
  const [select, setSelect] = useState(0);
  const [bills, setBills] = useState([]);
  const [envoys, setEnvoys] = useState([]);
  const [activities, setActivities] = useState([]);

  const navigate = useNavigate();
  const width = useWidth();

  const getBills = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}api/v1/bill/?name&tag__id&vote__voter&ordering=name, date`,
    };

    axios(config).then((res) => {
      console.log(res.data);
      if (res.data.length > 0) {
        setBills([...res.data]);
      }
    });
  };

  const getEnvoys = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}api/v1/accounts/parliament_member/`,
    };

    axios(config).then((res) => {
      console.log(res.data);
      if (res.data.length > 0) {
        setEnvoys([...res.data]);
      }
    });
  };

  const getActivities = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}api/v1/activity/?ordering=name, date&name&tag__id&vote__voter`,
    };

    axios(config).then((res) => {
      console.log(res.data);
      if (res.data.length > 0) {
        setActivities([...res.data]);
      }
    });
  };

  useEffect(() => {
    getBills();
    getEnvoys();
    getActivities();
  }, []);

  console.log("rezas", bills);

  const newList = envoys.sort((a, b) => a.transparency > b.transparency);

  // const envoys = [
  //   {
  //     name: "مهدی اسماعیلی",
  //     state: "دماوند و فیروزکوه",
  //     commission: " امنیت ملی",
  //     id: "1",
  //     persantage: "99",
  //     img: "../../assets/abol.webp",
  //   },
  //   {
  //     name: "حسن اسماعیلی",
  //     state: " پردیس ",
  //     commission: " امنیت اجتماعی",
  //     id: "2",
  //     persantage: "20",
  //     img: "../../assets/ali.webp",
  //   },
  //   {
  //     name: "حامد هایون",
  //     state: " البرز ",
  //     commission: " امنیت اجتماعی",
  //     id: "3",
  //     persantage: "50",
  //     img: "../../assets/jafi.webp",
  //   },
  // ];

 

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
              {width < 481 ? (
                <>
                  {bills.map((item, i) => {
                    return <VoteCard bill={item} key={i} />;
                  })}
                </>
              ) : (
                <>
                  {bills.map((item, i) => {
                    return <VoteCard bill={item} key={i} />;
                  })}
                </>
              )}
            </VoterContainer>

            <ShowMore>
              <p>نمایش بیشتر</p>{" "}
            </ShowMore>
          </LastVotes>

          {width < 481 ? (
            <>
              <LastActions>
                <Title> آخرین عملکردها</Title>
                {/* <ActionCard /> */}
                {activities.map((item, i) => {
                  return <ActionCard activity={item} key={i} />;
                })}
                <ShowMore>
                  <p>نمایش بیشتر</p>{" "}
                </ShowMore>
              </LastActions>

              <BestEnvoyContainer>
                <Title>شفاف‌ترین نمایندگان</Title>
                {newList.map((item, i) => {
                  return <BestEnvoy envoy={item} key={i} />;
                })}

                {/* {envoys.length > 0 && <HonestEnvoy envoys={envoys} />} */}
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
                  {width < 481 ? (
                    <>
                      {activities.map((item, i) => {
                        return <ActionCard activity={item} key={i} />;
                      })}
                    </>
                  ) : (
                    <>
                      {activities.map((item, i) => {
                        return <ActionCard activity={item} key={i} />;
                      })}
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
        <>
          <EnvoyGalley>
            {newList.map((item, i) => {
              return <BestEnvoy envoy={item} key={i} click={()=>{navigate(`/envoy/${item.id}`)}}/>;
            })}
            {/* <BestEnvoy
              onClick={() => {
                navigate("/envoy/علیرضا پاکفطرت");
              }}
            />
            <BestEnvoy />
            <BestEnvoy />
            <BestEnvoy />
            <BestEnvoy /> */}
          </EnvoyGalley>
          <ShowMore style={{ marginTop: "20px" }}>
            <p>نمایش بیشتر</p>{" "}
          </ShowMore>
        </>
      )}

      {/* just state */}
      {select == 2 && (
        <AreaContainer>
          <SelectArea area="تهران، ری و شمیرانات" envoys={envoys} />
          <SelectArea area="فیروزکوه و دماوند" envoys={envoys} />
          <SelectArea area="فیروزکوه و دماوند" envoys={envoys} />
        </AreaContainer>
      )}

      {/* just vote */}
      {select == 3 && (
        <LastVotes>
          <Title>آخرین رأی‌گیری‌ها</Title>
          <VoterContainer>
            {width < 481 ? (
              <>
                {bills.map((item, i) => {
                  return <VoteCard bill={item} key={i} />;
                })}
              </>
            ) : (
              <>
                {bills.map((item, i) => {
                  return <VoteCard bill={item} key={i} />;
                })}
              </>
            )}
          </VoterContainer>

          <ShowMore>
            <p>نمایش بیشتر</p>{" "}
          </ShowMore>
        </LastVotes>
      )}

      {/* just actions */}
      {select == 4 && (
        <LastActions>
          <Title> آخرین عملکردها</Title>
          <ActionContainer>
            {width < 481 ? (
              <>
                {activities.map((item, i) => {
                  return <ActionCard activity={item} key={i} />;
                })}
              </>
            ) : (
              <>
                {activities.map((item, i) => {
                  return <ActionCard activity={item} key={i} />;
                })}
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
