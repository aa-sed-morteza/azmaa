import React from "react";
import styled from "styled-components";
import mag from "../../../assets/mag.png";
import leftArrow from "../../../assets/leftArrow.png";
import user from "../../../assets/profile.png";
import data from "../../../data.json";

const MagazineContainer = styled.section`
  background-color: #ffaa00;
  padding: 13px 0;
  margin-top: 15px;
  margin-right: -20px;
  margin-left: -20px;
  display: flex;
`;

const Ttitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100px;
  margin-right: 40px;
  position: relative;
  span {
    background-image: url(${mag});
    background-size: contain;
    background-repeat: no-repeat;
    width: 64px;
    height: 64px;
  }
  h1 {
    color: #095644;
    font-size: 4.65vw;
    font-weight: 300;
    text-align: center;
  }
  &:after {
    content: "";
    display: flex;
    position: absolute;
    background-image: url(${leftArrow});
    background-size: cover;
    background-repeat: no-repeat;
    width: 5px;
    height: 10px;
    left: -8px;
  }
`;

const Wraper = styled.div`
  display: flex;
  overflow-x: scroll;
  gap:10px;
  padding-right:50px;
`;

const Paper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 14px 10px;
  background: #ffffff;
  box-shadow: 0px 0px 25px -5px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  .cover {
    width: 160px;
    height: 120px;
    border-radius: 2px;
    margin-bottom: 5px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .user{
    margin:0;
    color:#707070;
    font-weight:300;
    font-size:3.72vw;
    padding-right:20px;
    position:relative;
    margin-bottom:10px;
    &:before {
        content: "";
        display: flex;
        position: absolute;
        background-image: url(${user});
        background-size: cover;
        background-repeat: no-repeat;
        width: 15px;
        height: 15px;
        right: 2px;
        top: 5px;
      }
  }
  .content{
    color:#707070;
    font-size:3.72vw;
    font-weight:400;
    margin:0;
    margin-bottom:10px;
  }

  .date{
    color:rgba(0, 0, 0, 0.2);
    font-size:3.25vw;
    font-weight:bold;
    margin:0;
  }
`;

export default function () {
  const magPaper = data.magazine.map((x, i) => {
    return (
      <Paper>
        <div className="cover">
          <img src={x.img} alt={x.date} />
        </div>

        <p className="user">{x.name}</p>

        <p className="content">{x.content}</p>

        <p className="date">{x.date}</p>
      </Paper>
    );
  });

  return (
    <MagazineContainer>
      <Ttitle>
        <span></span>
        <h1>جدیدترین مطالب</h1>
      </Ttitle>
      <Wraper>{magPaper}</Wraper>
    </MagazineContainer>
  );
}
