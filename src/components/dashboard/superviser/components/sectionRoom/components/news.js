import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import source from "../../../../../../data.json";
import user from "../../../../../../assets/text.png";
import AddSection from "./addSection";
import { useUser } from "../../../../../context/userContext";

export default function News() {
  const {state,dispatch}=useUser();
  const { title } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    if (title === "مطلب جدید") {
      setData({});
    } else if(source.news.find((x) => x.title == title)){
      setData(source.news.find((x) => x.title == title));
    }else{
      setData({
        img:state.imageArticle.picOne.file,
        user:state.firstName,
        date:"1401/08/30",
        title:state.contentArticle.title,
        expand:state.contentArticle.expand,
      })
    }
  }, []);

  return (
    <Container>
      <Title>
        <p className="home">پنل / مطالب من/</p>
        <p className="component"> {title} </p>
      </Title>
      {title === "مطلب جدید" ? (
        <AddSection/>
      ) : (
        <NewsWraper>
          <Cover>
            <img src={data.img} alt="cover" />
          </Cover>
          <Header>
            <p className="user">{data.user}</p>
            <p className="date">{data.date}</p>
          </Header>
          <Titr>{data.title}</Titr>
          <Content>{data.expand}</Content>
          <Edit>
            <p className="text">ویرایش مطلب</p>
          </Edit>
        </NewsWraper>
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 10px 20px;
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
    overflow: hidden;
    text-overflow: ellipsis;
    width: 53%;
    white-space: nowrap;
  }
  @media (min-width: 480px) {
    margin-bottom: 25px;
    .home,
    .component {
      font-size: 1.25vw;
    }
  }
`;

const NewsWraper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 4px;
`;

const Cover = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  border-radius: 4px 4px 0px 0px;
  margin-bottom: 8px;
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 4px 4px 0px 0px;
  }
`;

const Header = styled.div`
display:flex;
justify-content:space-between;
padding:0px 22px;
margin-bottom:15px;
.user{
  margin:0;
  color:#707070;
  font-weight:300;
  font-size:3.721vw;
  display:flex;
  gap:6px;
  align-items:center;
  &:before{
    content:"";
    display:inline-flex;
    align-items:center;
    width:14px;
    height:17px;
    background-image: url(${user});
    background-size: contain;
    background-repeat: no-repeat;
}
  }
  .date{
    margin:0;
    color:#707070;
    font-weight:700;
    font-size:3.256vw;
    color:rgba(0, 0, 0, 0.2);
  }
}
`;

const Titr = styled.h1`
  color: #707070;
  margin: 0;
  padding: 0px 22px;
  margin-bottom: 15px;
  font-size: 4.651vw;
  font-weight: 400;
  line-height: 8.14vw;
`;

const Content = styled.p`
  padding: 0px 22px;
  margin: 0;
  color: #707070;
  font-weight: 300;
  font-size: 3.721vw;
  margin-bottom: 30px;
  text-align: justify;
`;

const Edit = styled.div`
  border: 1px solid #095644;
  margin: 0px 22px;
  border-radius: 4px;
  padding: 7px;
  margin-bottom: 10px;
  .text {
    color: #095644;
    font-weight: 400;
    font-size: 3.721vw;
    text-align: center;
    margin: 0;
  }
`;
