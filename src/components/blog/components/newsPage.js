import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import pic from "../../../assets/poster.webp";
import profile from "../../../assets/profile.webp";
import like from "../../../assets/like1.webp";
import dislike from "../../../assets/dislike1.webp";
import data from "../../../data.json";
import user from "../../../assets/profile.webp";
import note from "../../../assets/text.webp";
import news from "../../../assets/news.webp";
import report from "../../../assets/report.webp";
import article from "../../../assets/report.webp";
import Text from "../../../assets/text.webp";
import useWidth from "../../../hook/useWidth";
import upArrow from "../../../assets/arrow.webp";
import ShareButton from "../../general/shareButton";
import axios from "axios";
import { BaseBackURL } from "../../../constant/api";
import { convertDateToFarsi } from "../../../utils";

export default function NewsPage() {
  const { title } = useParams();
  const width = useWidth();
  const [post, setPost] = useState({});
  const [showMore, setShowMore] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[title])

  const getPosts = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}api/v1/blog/?writer__id&tag__id&is_suggested=True, False&ordering=created`,
    };

    axios(config).then((res) => {
      // console.log(res);
      if (res.data.length > 0) {
        setAllPosts([...res.data]);
      }
    });
  };

  const getPost = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${BaseBackURL}api/v1/blog/${title}`,
    };

    axios(config)
      .then(function (response) {
        setPost({ ...response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getPost();
    getPosts();
  }, [title]);

  useEffect(() => {
    if (
      post &&
      post.tag &&
      post.tag.length > 0 &&
      allPosts.filter(
        (x) => x.tag.length > 0 && x.tag[0].name == post.tag[0].name
      )
    ) {
      setRelatedPosts(
        allPosts.filter(
          (x) => x.tag.length > 0 && x.tag[0].name == post.tag[0].name
          // && x.title !== post.title
        )
      );
    }
  }, [post]);

  const magPaper = allPosts.map((x, i) => {
    return (
      <Paper
        key={i}
        icon={x.type}
        onClick={() => {
          navigate(`/blog/${x.id}`);
        }}
      >
        <div className="cover">
          <img src={x.main_image} alt={x.title} />
        </div>

        <p className="user">
          {x.type == "note" && "یادداشت"}
          {x.type == "news" && "خبر"}
          {x.type == "report" && "گزارش"}
          {x.type == "article" && "مقاله"}
        </p>

        <h5 className="Ttitle">{x.title}</h5>

        <p className="content">{x.description.slice(0, 100) + " ..."}</p>
        <p
          className="ReadMore"
          onClick={() => {
            navigate(`/blog/${x.id}`);
          }}
        >
          ادامه مطلب
        </p>

        <p className="date">{x.created && convertDateToFarsi(x.created)}</p>
      </Paper>
    );
  });

  const relatedPaper = relatedPosts.map((x, i) => {
    return (
      <Paper
        key={i}
        icon={x.type}
        onClick={() => {
          navigate(`/blog/${x.id}`);
        }}
      >
        <div className="cover">
          <img src={x.main_image} alt={x.title} />
        </div>

        <p className="user">
          {x.type == "note" && "یادداشت"}
          {x.type == "news" && "خبر"}
          {x.type == "report" && "گزارش"}
          {x.type == "article" && "مقاله"}
        </p>

        <h5 className="Ttitle">{x.title}</h5>

        <p className="content">{x.description.slice(0, 100) + " ..."}</p>
        <p
          className="ReadMore"
          onClick={() => {
            navigate(`/blog/${x.id}`);
          }}
        >
          ادامه مطلب
        </p>

        <p className="date">{x.created && convertDateToFarsi(x.created)}</p>
      </Paper>
    );
  });

  return (
    <Container>
      <Title>
        <p className="home" onClick={()=>{navigate("/blog")}} >خانه / بلاگ /</p>
        <p className="component"> {post && post.title} </p>
      </Title>
      {width < 481 ? (
        <>
          <NewsContainer>
            <Picture>
              <img src={post && post.main_image} alt="news-cover" />
            </Picture>
            <Content>
              <HeadContent>
                <Type icon={post.type}>
                  {post && post.type == "note" && "یادداشت"}
                  {post && post.type == "news" && "خبر"}
                  {post && post.type == "report" && "گزارش"}
                  {post && post.type == "atricle" && "مقاله"}
                </Type>
                <Date>{post.created && convertDateToFarsi(post.created)}</Date>
              </HeadContent>
              <SubTitle>{post && post.title}</SubTitle>

              <Paragraph>{post && post.description}</Paragraph>
              {post.image ? (
                    <Picture>
                      <img src={post && post.image} alt="news-cover" />
                    </Picture>
                  ) : (
                    ""
                  )}

                  <Writer icon="user"> نویسنده :  {post.writer}</Writer>

              <Feedback>
                {/* <Button color="#6CBBA9" icon={like}>
                  ۵۴
                </Button>
                <Button color="#FFA5A5" icon={dislike}>
                  ۱۰
                </Button> */}
                {/* <Share>
                  <p className="text">بازنشر</p>
                </Share> */}
                <ShareButton
                  right={true}
                  text={post.description}
                  title={post.title}
                />
              </Feedback>
            </Content>
          </NewsContainer>

          <Related>
            <Header>مطالب مرتبط</Header>
            <CardContainer>{relatedPaper}</CardContainer>
          </Related>
        </>
      ) : (
        <>
          <DesktopContainer>
            <News>
              <NewsContainer>
                <Picture>
                  <img src={post && post.main_image} alt="news-cover" />
                </Picture>
                <Content>
                  <HeadContent>
                    <Type icon={post.type}>
                      {post && post.type == "note" && "یادداشت"}
                      {post && post.type == "news" && "خبر"}
                      {post && post.type == "report" && "گزارش"}
                      {post && post.type == "atricle" && "مقاله"}
                    </Type>
                    <Date>
                      {post.created && convertDateToFarsi(post.created)}
                    </Date>
                  </HeadContent>
                  <SubTitle>{post && post.title}</SubTitle>

                  <Paragraph>{post && post.description}</Paragraph>
                  {post.image ? (
                    <Picture>
                      <img src={post && post.image} alt="news-cover" />
                    </Picture>
                  ) : (
                    ""
                  )}

                  <Writer icon="user"> نویسنده :  {post.writer}</Writer>

                  <Feedback>
                    {/* <Button color="#6CBBA9" icon={like}>
                      ۵۴
                    </Button> */}
                    {/* <Button color="#FFA5A5" icon={dislike}>
                      ۱۰
                    </Button> */}
                    {/* <Share>
                      <p className="text">بازنشر</p>
                    </Share> */}
                    <ShareButton
                      right={true}
                      text={post.description}
                      title={post.title}
                    />
                  </Feedback>
                </Content>
              </NewsContainer>
            </News>
            <RelatedContainer>
              <h3>مطالب مرتبط</h3>
              {relatedPaper}
            </RelatedContainer>
          </DesktopContainer>
          <Related>
            <Header> آخرین مطالب</Header>
            <CardContainer hide={showMore}>{magPaper}</CardContainer>

            <ShowMore
              arrow={showMore}
              onClick={() => {
                setShowMore(!showMore);
              }}
            >
              <p>{showMore ? "نمایش کمتر" : "نمایش بیشتر "}</p>
            </ShowMore>
          </Related>
        </>
      )}
    </Container>
  );
}

const DesktopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  // min-height: 1700px;
  // max-height: 1700px;
  overflow: hidden;
`;

const News = styled.div`
  padding: 40px;
  background-color: #f3f3f3;
  border-radius: 8px 0px 0px 8px;
  width: 55%;
  @media (min-width: 769px) {
    width: 54%;
    padding: 49px 200px 42px 54px;
  }
`;

const RelatedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0;
  padding: 0;
  height: 100%;
  padding-inline: 28px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10%;
  h3 {
    display: flex;
    align-items: center;
    gap: 7px;
    font-weight: 300;
    font-size: 1.875vw;
    color: #707070;
    margin: 0;

    &:before {
      content: "";
      display: inline-flex;
      background-image: url(${Text});
      background-size: cover;
      background-repeat: no-repeat;
      width: 15px;
      height: 18px;
    }
  }
  @media (min-width: 769px) {
    h3 {
      &:before {
        width: 1.563vw;
        height: 1.823vw;
      }
    }
  }
`;

const Container = styled.section`
  padding: 10px 20px;
  @media (min-width: 481px) {
    padding: 25px 0;
    background-color: #ffffff;
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
    white-space: nowrap;
  }
  .component {
    font-size: 3.721vw;
    font-weight: 700;
    margin: 0;
    padding-right: 5px;
    color: rgba(112, 112, 112, 1);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media (min-width: 481px) {
    margin-bottom: 25px;
    padding-right: 10%;
    .home,
    .component {
      font-size: 1.25vw;
    }
  }
`;

const NewsContainer = styled.div`
  background: #ffffff;
  border-radius: 4px;
  margin-bottom: 12px;
  @media (min-width: 481px) {
    border-radius: 8px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;
const Picture = styled.div`
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 12px 12px 0 0;
  }
`;

const Content = styled.div`
  padding: 8px 22px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 481px) {
    padding: 20px 40px 36px;
    gap: 20px;
    height: 100%;
  }
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
  /* padding-right: 20px; */
  &:before {
    content: "";
    display: inline-flex;
    background-image: ${(props) => props.icon == "note" && `url(${note})`};
    background-image: ${(props) => props.icon == "user" && `url(${user})`};
    background-image: ${(props) => props.icon == "news" && `url(${news})`};
    background-image: ${(props) => props.icon == "report" && `url(${report})`};
    background-image: ${(props) =>
      props.icon == "article" && `url(${article})`};
    background-size: contain;
    background-repeat: no-repeat;
    width: 14px;
    height: 17px;
  }
  @media (min-width: 481px) {
    font-size: 1.25vw;
    /* padding-right: 40px; */
    &:before {
      width: 30px;
      height: 30px;
    }
  }
`;

const Writer =styled(Type)`
`
const Date = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 3.256vw;
  color: rgba(0, 0, 0, 0.2);
  @media (min-width: 481px) {
    font-size: 1.042vw;
  }
`;

const SubTitle = styled.h1`
  margin: 0;
  color: #707070;
  font-weight: 400;
  font-size: 4.651vw;
  line-height: 8.14vw;
  @media (min-width: 481px) {
    font-size: 1.875vw;
    line-height: 3.229vw;
  }
`;

const Paragraph = styled.p`
  margin: 0;
  color: #707070;
  font-size: 3.721vw;
  line-height: 6.512vw;
  font-weight: 300;
  color: #707070;
  text-align: justify;
  @media (min-width: 481px) {
    font-size: 1.25vw;
    line-height: 2.135vw;
    font-weight: 400;
  }
`;

const Feedback = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  padding: 10px 13px;
  background-color: #f3f3f3;
  border-radius: 4px;
  margin-top: 15px;
  @media (min-width: 481px) {
    padding: 20px 30px;
    margin-top: auto;
  }
`;

const Button = styled.div`
  color: ${(props) => props.color};
  font-weight: 300;
  font-size: 4.65vw;
  padding-right: 45px;
  position: relative;

  &:before {
    content: "";
    display: block;
    position: absolute;
    background-image: url(${(props) => props.icon});
    background-size: cover;
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;
    right: 0;
    top: -7px;
  }

  @media (min-width: 481px) {
    font-size: 1.042vw;
  }
`;

const Share = styled(ShareButton)`
  // padding: 6px 15px;
  // border: 1px solid #095644;
  // border-radius: 4px;
  // margin-right: auto;
  // .text {
  //   color: #095644;
  //   font-size: 4.65vw;
  //   font-weight: 300;
  //   margin: 0;
  // }
  // @media (min-width: 481px) {
  //   width: 200px;
  //   .text {
  //     font-size: 1.042vw;
  //     text-align: center;
  //   }
  // }
  & > * {
    margin-right: auto;
  }
`;

const Related = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 13px 10px 17px;
  @media (min-width: 481px) {
    padding: 20px 10%;
  }
`;

const Header = styled.h2`
  color: #9f9f9f;
  font-size: 4.65vw;
  font-weight: 300;
  overflow: hidden;
  text-align: center;
  margin-bottom: 10px;
  margin-top: 0;
  &:after {
    background-color: #9f9f9f;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 59%;
  }
  @media (min-width: 481px) {
    margin-top: 47px;
    font-size: 1.87vw;
    margin-bottom: 24px;
    color: #707070;
    &:after {
      background-color: #707070;
      height: 2px;
      width: 88%;
    }
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  @media (min-width: 481px) {
    justify-content: flex-start;
    & > :nth-of-type(1n + 5) {
      display: ${(props) => (!props.hide ? "none" : "")};
    }
  }
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
  .user {
    margin: 0;
    color: #707070;
    font-weight: 300;
    font-size: 3.72vw;
    /* padding-right: 20px; */
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    &:before {
      content: "";
      display: inline-flex;
      background-image: ${(props) => props.icon == "note" && `url(${note})`};
      background-image: ${(props) => props.icon == "news" && `url(${news})`};
      background-image: ${(props) =>
        props.icon == "report" && `url(${report})`};
      background-image: ${(props) =>
        props.icon == "article" && `url(${article})`};
      background-size: contain;
      background-repeat: no-repeat;
      width: 15px;
      height: 15px;
    }
  }
  .content {
    color: #707070;
    font-size: 3.72vw;
    font-weight: 400;
    margin: 0;
    margin-bottom: 10px;
    max-width: 160px;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 5;
  }

  .date {
    color: rgba(0, 0, 0, 0.2);
    font-size: 3.25vw;
    font-weight: bold;
    margin: 0;
  }
  .ReadMore {
    color: #fab732;
    font-size: 14px;
    font-weight: bold;
    text-decoration: underline;
  }

  &:nth-child(5) {
    display: none;
  }

  @media (min-width: 481px) {
    padding: 20px 19px 25px 19px;
    box-shadow: 0px 0px 30px -5px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    .cover {
      width: 17.188vw;
      height: 13.177vw;
      border-radius: 4px;
      margin-bottom: 18px;
    }
    .user {
      font-size: 1.042vw;
      margin-bottom: 36px;
    }
    .content {
      font-size: 1.25vw;
      margin-bottom: 36px;
      max-width: 15.938vw;
    }
    .date {
      font-size: 1.042vw;
      font-weight: 500;
    }
  }
  @media (min-width: 1600px) {
    .cover {
      width: 16vw;
    }
  }
  @media (min-width: 1200px) {
    .cover {
      width: 15vw;
    }
    .content {
      max-width: 14vw;
    }
  }
`;

const ShowMore = styled.div`
  border: 2px solid #9f9f9f;
  border-radius: 8px;
  width: 50%;
  display: flex;
  padding: 8px;
  background-color: #ffffff;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 13px;
  margin-top: 45px;
  cursor: pointer;
  p {
    margin: auto;
    color: #9f9f9f;
    font-size: 1.25vw;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 20px;
    &:after {
      content: "";
      display: inline-flex;
      background-image: url(${upArrow});
      transform: ${(props) => (props.arrow ? `rotate(180deg)` : "")};
      background-size: cover;
      background-repeat: no-repeat;
      width: 15px;
      height: 8px;
      left: -37px;
    }
  }
`;
