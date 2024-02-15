import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import useWidth from "../../../hook/useWidth";
import background from "../../../assets/back-controll.webp";
import upArrow from "../../../assets/arrow.webp";
import data from "../../../data.json";
import VoteCard from "./voteCard";
import EnvoyvoteCard from "./EnvoyvoteCard";
import HonestEnvoy from "../../envoy/components/honestEnvoy";
import ActionCard from "./actionCard";
import BestEnvoy from "./bestEnvoyCard";
import tik from "../../../assets/vote.webp";
import ControlCore from "./controlCore";
import SelectArea from "./selectArea";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { BaseBackURL } from "../../../constant/api";
import { useUser } from "../../../context/userContext";
import { contentSchema } from "../../schema";
import { useSelector } from "react-redux";
import FilterBox from "../../general/filterBox";

export default function NormalController({ vote_voter }) {
  const { envoyListToShow } = useSelector((state) => state.envoy);
  const { voteListToShow } = useSelector((state) => state.vote);
  const { activityListToShow } = useSelector((state) => state.activity);
  const { districtListToShow } = useSelector((state) => state.city);
  const { voteList } = useSelector((state) => state.vote);
  const { activityList } = useSelector((state) => state.activity);

  const [select, setSelect] = useState(0);
  const [bills, setBills] = useState([]);
  const [envoys, setEnvoys] = useState([]);
  const [votes, setVotes] = useState([]);
  const [activities, setActivities] = useState([]);
  const [areas, setAreas] = useState([]);
  const [envoyLimit, setEnvoyLimit] = useState(3);
  const [areaLimit, setAreaLimit] = useState(3);
  const [thirdHide, setThirdHide] = useState(false);
  const [voteCardLimit, setVoteCardLimit] = useState(3);
  const [actionCardLimit, setActionCardLimit] = useState(3);
  const [searchparams, setsearchparams] = useSearchParams();
  const navigate = useNavigate();
  const width = useWidth();

  const voterContainerRef = useRef(null);
  const actionContainerRef = useRef(null);
  const mobileActionContainerRef = useRef(null);
  const envoyRef = useRef(null);
  const areaRef = useRef(null);

  const [filterCities, setFilterCities] = useState([]);
  const [filterAreas, setFilterAreas] = useState([]);

  useEffect(() => {
    if (vote_voter) {
      handleEnvoyActivity();
      handleEnvoyVotes();
    }
  }, [vote_voter]);

  const handleEnvoyVotes = () => {
    const list = [];
    for (const vote of voteList) {
      for (const item of vote.negative_vote) {
        if (item.voter.id === +vote_voter) list.push(vote);
      }
      console.log(vote.positive_vote);
      for (const item of vote.positive_vote) {
        if (item.voter.id === +vote_voter) list.push(vote);
      }
      for (const item of vote.none_vote) {
        if (item.voter.id === +vote_voter) list.push(vote);
      }
    }
    console.log(list);
    setVotes([...list]);
  };

  const handleEnvoyActivity = () => {
    console.log(activityList);
    const list = [];
    for (const activity of activityList) {
      for (const item of activity.verified_vote) {
        if (item.voter.id === +vote_voter) {
          list.push(activity);
        }
      }
    }
    console.log(list);
    setActivities([...list]);
  };

  // const getBills = () => {
  //   let config;
  //   if (vote_voter > 0) {
  //     config = {
  //       method: "get",
  //       url: `${BaseBackURL}api/v1/bill/?name&tag__id&vote__voter=${vote_voter}&ordering=name, date`,
  //     };
  //   } else {
  //     config = {
  //       method: "get",
  //       url: `${BaseBackURL}api/v1/bill/?name&tag__id&vote__voter&ordering=name, date`,
  //     };
  //   }

  //   axios(config).then((res) => {
  //     // console.log(res.data);
  //     if (res.data.length > 0) {
  //       setBills([...res.data]);
  //     }
  //   });
  // };

  // const getDistrict = (id) => {
  //   var config = {
  //     method: "get",
  //     url: `${BaseBackURL}api/v1/electoral_district/?city__id=${id}&city__province__id`,
  //   };
  //   axios(config)
  //     .then(function (response) {
  //       setFilterCities([...response.data[0].agent]);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  // const getCiteis = () => {
  //   let config = {
  //     method: "get",
  //     url: `${BaseBackURL}api/v1/city/`,
  //   };

  //   axios(config).then((res) => {
  //     // console.log(res.data);
  //     if (res.data.length > 0) {
  //       setCiteis([...res.data]);
  //     }
  //   });
  // };

  // const getEnvoys = () => {
  //   let config = {
  //     method: "get",
  //     url: `${BaseBackURL}api/v1/accounts/parliament_member/`,
  //   };

  //   axios(config).then((res) => {
  //     // console.log(res.data);
  //     if (res.data.length > 0) {
  //       setEnvoys([...res.data]);
  //     }
  //   });
  // };

  // const getActivities = () => {
  //   let config;
  //   // console.log("vote_voter="+vote_voter);
  //   if (vote_voter > 0) {
  //     config = {
  //       method: "get",
  //       url: `${BaseBackURL}api/v1/activity/?ordering=name, date&name&tag__id&vote__voter=${vote_voter}`,
  //     };
  //   } else {
  //     config = {
  //       method: "get",
  //       url: `${BaseBackURL}api/v1/activity/?ordering=name, date&name&tag__id&vote__voter`,
  //     };
  //   }

  //   axios(config).then((res) => {
  //     // console.log(res.data);
  //     if (res.data.length > 0) {
  //       setActivities([...res.data]);
  //     }
  //   });
  // };

  // const getElectoralDistrict = () => {
  //   let config = {
  //     method: "get",
  //     url: `${BaseBackURL}api/v1/electoral_district/?city__id&city__province__id`,
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       // console.log(JSON.stringify(response.data));
  //       setAreas([...response.data]);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   getBills();
  //   getActivities();
  //   getElectoralDistrict();
  //   getCiteis();
  //   getEnvoys();
  // }, []);

  // const filterEnvoyByCity = () => {
  //   const result = envoys.filter((obj1) => {
  //     return state.citySearch.some((obj2) => {
  //       return obj1.electoral_district_name === obj2;
  //     });
  //   });

  //   setFilterCities(result);
  //   getDistrict(result.map((x) => x.id));
  // };

  // const filterAreaByCity = () => {
  //   const district = areas.filter((obj1) => {
  //     return state.citySearch.some((obj2) => {
  //       return obj1.name === obj2;
  //     });
  //   });

  //   if (district && state.citySearch.length > 0) {
  //     setFilterAreas(district);
  //   } else {
  //     setFilterCities(envoys);
  //   }
  // };

  // useEffect(() => {
  //   filterEnvoyByCity();
  //   filterAreaByCity();
  //   if (state.citySearch.length > 0) {
  //     setsearchparams({ filter: state.citySearch.map((x) => x) });
  //   } else {
  //     setsearchparams({});
  //   }
  // }, [state.citySearch]);

  const newList = envoys.sort((a, b) => b.transparency - a.transparency);
  // const envoyListToShow = newList.filter((item) => {
  //   let filter = searchparams.get("filter");
  //   if (!filter) return true;
  //   // let name= item.writer + item.description ;
  //   let name = item.first_name + item.last_name + item.electoral_district_name;
  //   // console.log(item);
  //   return name.includes(filter);
  // });

  // const controllItem = data.controlPanel.map((x, i) => {
  //   return (
  //     <>
  //       {vote_voter > 0 && (i === 1 || i === 2) ? (
  //         ""
  //       ) : (
  //         <Tab
  //           key={x.name + i}
  //           onClick={() => setSelect(i)}
  //           className={select === i ? "select" : ""}
  //         >
  //           {x.icon ? (
  //             <div>
  //               <img src={x.icon} />
  //             </div>
  //           ) : (
  //             ""
  //           )}

  //           <p>{x.name}</p>
  //         </Tab>
  //       )}
  //     </>
  //   );
  // });

  // const filteredAreas = areas.filter((item) => {
  //   let filter = searchparams.get("filter");
  //   if (!filter) return true;
  //   // let name= item.writer + item.description ;
  //   let name = item.name;
  //   return name.includes(filter);
  // });

  // var isDescending = true; //set to false for ascending
  // const sortBillsByDate = bills.sort((a, b) =>
  //   isDescending
  //     ? new Date(b.date).getTime() - new Date(a.date).getTime()
  //     : new Date(a.date).getTime() - new Date(b.date).getTime()
  // );

  // const filteredBills = sortBillsByDate.filter((item) => {
  //   let filter = searchparams.get("filter");
  //   if (!filter) return true;
  //   // let name= item.writer + item.description ;
  //   let name = item.name;
  //   // console.log(item);
  //   return name.includes(filter);
  // });

  // var istDescending = true; //set to false for ascending
  // const sortActivitiesByDate = activities.sort((a, b) =>
  //   istDescending
  //     ? new Date(b.date).getTime() - new Date(a.date).getTime()
  //     : new Date(a.date).getTime() - new Date(b.date).getTime()
  // );

  // const activityListToShow = sortActivitiesByDate.filter((item) => {
  //   let filter = searchparams.get("filter");
  //   if (!filter) return true;
  //   // let name= item.writer + item.description ;
  //   let name = item.name;
  //   return name.includes(filter);
  // });

  return (
    <ControllContainer>
      <FilterBox />

      <>
        {/* {(select === 0 || select === 3) && (
          <LastVotes ref={voterContainerRef}>
            <Title>آخرین رأی‌گیری‌ها</Title>
            <VoterContainer>
              {votes.slice(0, voteCardLimit).map((item, i) => {
                if (vote_voter > 0)
                  return (
                    <EnvoyvoteCard
                      bill={item}
                      vote_voter={vote_voter}
                      key={"vote" + i}
                    />
                  );
                else return <VoteCard bill={item} key={i} />;
              })}
            </VoterContainer>

            <ShowMore
              onClick={() => {
                if (voteCardLimit < votes.length) {
                  setVoteCardLimit(voteCardLimit + 10);
                } else {
                  setVoteCardLimit(3);
                  voterContainerRef.current.scrollIntoView();
                }
              }}
              arrow={voteCardLimit >= votes.length}
            >
              <p>
                {voteCardLimit < votes.length ? "نمایش بیشتر" : "نمایش کمتر "}
              </p>{" "}
            </ShowMore>
          </LastVotes>
        )} */}
        {(select === 0 || select === 4) &&
          (width < 481 ? (
            <>
              <LastActions ref={mobileActionContainerRef}>
                <Title> آخرین دیدگاه ها</Title>
                <Album>
                  {activities.slice(0, actionCardLimit).map((item, i) => {
                    return <ActionCard activity={item} key={"activity" + i} />;
                  })}
                </Album>
                <ShowMore
                  arrow={actionCardLimit >= activities.length}
                  onClick={() => {
                    if (voteCardLimit < activities.length) {
                      setActionCardLimit(voteCardLimit + 10);
                    } else {
                      setActionCardLimit(3);
                      mobileActionContainerRef.current.scrollIntoView();
                    }
                  }}
                >
                  {actionCardLimit < activities.length
                    ? "نمایش بیشتر"
                    : "نمایش کمتر "}
                </ShowMore>
              </LastActions>
              {vote_voter > 0 && envoys.length > 10 && select === 4 ? (
                <hr />
              ) : (
                <BestEnvoyContainer>
                  <Title>شفاف‌ترین نامزد ها</Title>
                  <SecondAlbum hide={thirdHide}>
                    {envoyListToShow
                      .filter((item) => {
                        let filter = searchparams.get("filter");
                        if (!filter) return true;
                        // let name= item.writer + item.description ;
                        let name =
                          item.first_name +
                          item.last_name +
                          item.electoral_district_name;
                        // console.log(item);
                        return name.includes(filter);
                      })
                      .map((item, i) => {
                        return (
                          <BestEnvoy
                            envoy={item}
                            key={"transparentEnvoy" + i}
                            click={() => {
                              navigate(`/envoy/${item.id}`);
                            }}
                          />
                        );
                      })}
                  </SecondAlbum>

                  <ShowMore
                    arrow={thirdHide}
                    onClick={() => {
                      setThirdHide(!thirdHide);
                    }}
                  >
                    <p>{thirdHide ? "نمایش کمتر" : "نمایش بیشتر "}</p>{" "}
                  </ShowMore>
                </BestEnvoyContainer>
              )}
            </>
          ) : (
            <>
              {vote_voter > 0 || areas.length < 2 || select === 4 ? (
                <hr />
              ) : (
                <ControlCore
                  envoys={filterCities.length > 0 ? filterCities : envoys}
                  areas={filterAreas.length > 0 ? filterAreas : areas}
                />
              )}

              <LastActions ref={actionContainerRef}>
                <Title> آخرین دیدگاه ها</Title>
                <ActionContainer>
                  {activities.slice(0, actionCardLimit).map((item, i) => {
                    return (
                      <ActionCard activity={item} key={"lastAction" + i} />
                    );
                  })}
                </ActionContainer>

                <ShowMore
                  arrow={actionCardLimit >= activities.length}
                  onClick={() => {
                    if (actionCardLimit < activities.length) {
                      setActionCardLimit(actionCardLimit + 10);
                    } else {
                      setActionCardLimit(3);
                      actionContainerRef.current.scrollIntoView();
                    }
                  }}
                >
                  <p>
                    {actionCardLimit < activities.length
                      ? "نمایش بیشتر"
                      : "نمایش کمتر"}
                  </p>
                </ShowMore>
              </LastActions>
            </>
          ))}
      </>

      {/* just envoys */}
      {select === 1 && (
        <>
          <EnvoyGalley ref={envoyRef}>
            {envoyListToShow.slice(0, envoyLimit).map((item, i) => {
              return (
                <BestEnvoy
                  envoy={item}
                  key={"envoyGallery" + i}
                  click={() => {
                    navigate(`/envoy/${item.id}`);
                  }}
                />
              );
            })}
          </EnvoyGalley>
          <ShowMore
            arrow={envoyLimit >= envoyListToShow.length}
            onClick={() => {
              if (envoyLimit < envoyListToShow.length) {
                setEnvoyLimit(envoyLimit + 10);
              } else {
                setEnvoyLimit(3);
                envoyRef.current.scrollIntoView();
              }
            }}
            style={{ marginTop: "20px" }}
          >
            <p>
              {envoyLimit >= envoyListToShow.length
                ? "نمایش کمتر"
                : "نمایش بیشتر "}
            </p>{" "}
          </ShowMore>
        </>
      )}

      {/* just state */}
      {select === 2 && (
        <>
          <AreaContainer ref={areaRef}>
            {districtListToShow.slice(0, areaLimit).map((item, i) => {
              return (
                <SelectArea
                  area={item.name}
                  envoys={item.agent}
                  key={"areaSelect" + i}
                />
              );
            })}
          </AreaContainer>
          <ShowMore
            arrow={areaLimit >= districtListToShow.length}
            onClick={() => {
              if (areaLimit < districtListToShow.length) {
                setAreaLimit(areaLimit + 10);
              } else {
                setAreaLimit(3);
                areaRef.current.scrollIntoView();
              }
            }}
            style={{ marginTop: "20px" }}
          >
            <p>
              {areaLimit >= districtListToShow.length
                ? "نمایش کمتر"
                : "نمایش بیشتر "}
            </p>{" "}
          </ShowMore>
        </>
      )}

      {/* just vote */}
      {/* {select == 3 && (
        <LastVotes>
          <Title>آخرین رأی‌گیری‌ها</Title>
          <VoterContainer hide={firstHide}>
            {bills
              .filter((item) => {
                let filter = searchparams.get("filter");
                if (!filter) return true;
                // let name= item.writer + item.description ;
                let name = item.name;
                // console.log(item);
                return name.includes(filter);
              })
              .map((item, i) => {
                if (vote_voter > 0)
                  return (
                    <EnvoyvoteCard
                      bill={item}
                      vote_voter={vote_voter}
                      key={i}
                    />
                  );
                else return <VoteCard bill={item} key={i} />;
              })}
          </VoterContainer>

          <ShowMore
            arrow={firstHide}
            onClick={() => {
              setFirstHide(!firstHide);
            }}
          >
            <p>{firstHide ? "نمایش کمتر" : "نمایش بیشتر "} </p>{" "}
          </ShowMore>
        </LastVotes>
      )} */}

      {/* just actions */}
      {/* {select == 4 && (
        <LastActions>
          <Title> آخرین دیدگاه ها</Title>
          <ActionContainer hide={secondHide}>
            {activities
              .filter((item) => {
                let filter = searchparams.get("filter");
                if (!filter) return true;
                // let name= item.writer + item.description ;
                let name = item.name;
                return name.includes(filter);
              })
              .map((item, i) => {
                return <ActionCard activity={item} key={i} />;
              })}
          </ActionContainer>

          <ShowMore
            arrow={secondHide}
            onClick={() => {
              setSecondHide(!secondHide);
            }}
          >
            <p> {secondHide ? "نمایش کمتر" : "نمایش بیشتر "} </p>{" "}
          </ShowMore>
        </LastActions>
      )} */}
    </ControllContainer>
  );
}

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
  font-family: FontAwesome !important;
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
  align-items: flex-end;
  justify-content: space-between;
  @media (min-width: 481px) {
    justify-content: space-evenly;
  }
`;

const Tab = styled.div`
  display: flex;
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

const RemoveCitySearch = styled.div`
  position: absolute;
  top: -15px;
  right: 10%;
  background: #ffaa00;
  border-radius: 4px;
  padding: 10px;
  font-size: 10px;
  font-weight: 400;
  color: #ffffff;
  cursor: pointer;
  @media (min-width: 481px) {
    font-size: 14px;
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
      width: 70%;
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
  cursor: pointer;
  p {
    margin: auto;
    color: #9f9f9f;
    font-size: 4.65vw;
    display: flex;
    align-items: center;
    gap: 20px;
    font-weight: 300;
    &:after {
      content: "";
      display: inline-flex;
      background-image: url(${upArrow});
      transform: ${(props) => (props.arrow ? `rotate(180deg)` : "")};
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
  /* & > :nth-of-type(1n + 2) {
    display: ${(props) => (!props.hide ? "none" : "")};
  } */
  @media (min-width: 481px) {
    display: grid;
    grid-template-columns: repeat(2, 37%);
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    // margin-left:-7%;
    // margin-right:-7%;
    & > :nth-of-type(1n + 2) {
      display: flex;
    }
    /* & > :nth-of-type(1n + 4) {
      display: ${(props) => (!props.hide ? "none" : "")};
    } */
  }
  @media (min-width: 769px) {
    justify-content: center;
  }
`;

const Album = styled.div``;

const SecondAlbum = styled.div`
  & > :nth-of-type(1n + 4) {
    display: ${(props) => (!props.hide ? "none" : "")};
  }
`;

const ActionContainer = styled.div`
  @media (min-width: 481px) {
    display: grid;
    grid-template-columns: repeat(2, 37%);
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    // margin-left:-7%;
    // margin-right:-7%;
    & > :nth-of-type(1n + 2) {
      display: flex;
    }
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

    & > :nth-of-type(1n + 4) {
      display: flex;
    }
  }
`;

const AreaContainer = styled.div`
  @media (min-width: 481px) {
    display: flex;
    flex-wrap: wrap;
    gap: 1.042vw;
    & > :nth-of-type(1n + 4) {
      display: flex;
    }
  }
`;
