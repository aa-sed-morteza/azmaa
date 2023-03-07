import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import pic from "../../../assets/poster.webp";
import icon from "../../../assets/text.webp";
import more from "../../../assets/more.webp";
import { convertDateToFarsi } from "../../../utils";

const Container = styled.div`
  background: #ffffff;
  border-radius: 4px;
  margin-bottom: 15px;
`;

const Picture = styled.div`
  width: 100%;
  height: auto;
  img {
    border-radius: 4px 4px 0 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Content = styled.div`
  padding: 8px 22px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const HeadContent = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Type = styled.p`
  color: #707070;
  font-weight: 300;
  font-size: 3.721vw;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 7px;
  &:before {
    content: "";
    display: inline-flex;
    background-image: url(${icon});
    background-size: cover;
    background-repeat: no-repeat;
    width: 14px;
    height: 17px;
  }
`;

const Date = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 3.256vw;
  color: rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  margin: 0;
  color: #707070;
  font-weight: 400;
  font-size: 4.651vw;
  line-height: 8.14vw;
`;

const Paragraph = styled.p`
  margin: 0;
  color: #707070;
  font-size: 3.721vw;
  line-height: 6.512vw;
  font-weight: 300;
  color: #707070;
  text-align: justify;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 3;
`;

const ShowMore = styled.p`
  width: fit-content;
  margin: 0;
  font-weight: 700;
  font-size: 3.721vw;
  color: #ffaa00;
  display: flex;
  align-items: center;
  gap: 7px;
  margin-top: 5px;
  cursor: pointer;
  &:after {
    content: "";
    display: inline-flex;
    background-image: url(${more});
    background-size: cover;
    background-repeat: no-repeat;

    width: 5px;
    height: 10px;
  }
`;

export default function Poster({ posts }) {
  const navigate = useNavigate();
  const [post, setPost] = useState({});

  // const report = {
  //   img: posts[0].main_image,
  //   type: posts[0]?.type,
  //   user: posts[0]?.writer,
  //   date: posts[0]?.created,
  //   title: posts[0]?.title,
  //   expand: posts[0]?.description,
  // };

  useEffect(() => {
    setPost(posts[0]);
  }, [posts]);

  const checkPost = () => {
    setPost(posts[0]);
  };

  const checkType = (type) => {
    let text;
    if (type == "note") {
      text = "یادداشت";
    } else if (type == "article") {
      text = "مقاله";
    } else if ("news") {
      text = "خبر";
    } else {
      text = "گزارش ";
    }

    return text;
  };

  return (
    <>
      {post && (
        <Container>
          <Picture>
            <img src={post.main_image} alt="post-picture" />
          </Picture>
          <Content>
            <HeadContent>
              <Type>{checkType(post.type)}</Type>
              <Date>{post.created &&  convertDateToFarsi(post.created)}</Date>
            </HeadContent>
            <Title>{post.title?.slice(0, 50) + " ..."}</Title>
            <Paragraph>{post.description?.slice(0, 250) + " ..."}</Paragraph>
            <ShowMore
              onClick={() => {
                navigate(`/blog/${post.id}`);
              }}
            >
              ادامۀ مطلب
            </ShowMore>
          </Content>
        </Container>
      )}
    </>
  );
}
