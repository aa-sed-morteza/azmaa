import styled from "styled-components";
import BestEnvoyCard from "./bestEnvoyCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import upArrow from "../../../assets/arrow.webp";
import tik from "../../../assets/vote.webp";
import { useIsVisible } from "../../../hook/useIsVisible";
import { useTrail, animated } from "react-spring";

export default function BestEnvoys({ searchPhrase }) {
  const envoyContainerRef = useRef(null);
  const navigate = useNavigate();
  const envoyList = useSelector((state) => state.envoy.envoyListToShow);
  const [envoyListToShow, setEnvoyListToShow] = useState([...envoyList]);
  const [showLimit, setShowLimit] = useState(3);
  



  const isVisible = useIsVisible(envoyContainerRef);
  const [isseen , setIsseen] = useState(false);
  useEffect( 
  () => {
    if(isVisible) {
      setIsseen(true);
    }
  }
  , [isVisible])

  const trails = useTrail(8, {
    from: { opacity: 0 },
    to: { opacity: isseen ? 1 : 0 },
    config: { duration: 300 },
    delay: 100,
  });


  useEffect(() => {
    if (searchPhrase.length > 0) {
      let newFilteredList = [];
      for (const item of envoyList) {
        const name = item.first_name + " " + item.last_name;
        if (name.includes(searchPhrase)) {
          newFilteredList.push(item);
        }
      }
      setEnvoyListToShow([...newFilteredList]);
    } else {
      setEnvoyListToShow([...envoyList]);
    }
  }, [searchPhrase]);

  useEffect(() => {
    setEnvoyListToShow([...envoyList]);
  }, [envoyList]);

  return (
    <Section ref={envoyContainerRef}>
      <animated.div style={trails[3]}>
        <Title>شفاف‌ترین نمایندگان</Title>
        <SecondAlbum>
          {envoyListToShow.slice(0, showLimit).map((item, i) => {
            return (
              <BestEnvoyCard
                envoy={item}
                key={"transparentEnvoy" + i}
                click={() => {
                  navigate(`/envoy/${item.id}`);
                }}
              />
            );
          })}
        </SecondAlbum>
      </animated.div>

      <ShowMore
        arrow={showLimit >= envoyListToShow.length}
        onClick={() => {
          if (showLimit < envoyListToShow.length) {
            setShowLimit(showLimit + 10);
          } else {
            setShowLimit(3);
            envoyContainerRef.current.scrollIntoView();
          }
        }}
      >
        <p>
          {showLimit < envoyListToShow.length ? "نمایش بیشتر" : "نمایش کمتر "}
        </p>{" "}
      </ShowMore>
    </Section>
  );
}

const Section = styled.div``;

const Title = styled.h1`
  color: #9f9f9f;
  font-size: 4vw;
  font-weight: 300;
  overflow: hidden;
  text-align: center;
  margin-bottom: 10px;
  margin-top: 30px;
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

const SecondAlbum = styled.div`
  @media (min-width: 481px) {
    display: grid;
    grid-template-columns: repeat(3, 29%);
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 30px;
    /* padding: 0 40px; */
  }
`;
