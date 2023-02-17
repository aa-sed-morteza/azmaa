import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import pic from "../../../assets/poster.webp";
import profile from "../../../assets/profile.webp";
import like from "../../../assets/like1.webp";
import dislike from "../../../assets/dislike1.webp";
import data from "../../../data.json";
import user from "../../../assets/profile.webp";
import Text from "../../../assets/text.webp";
import useWidth from "../../../hook/useWidth";
import upArrow from "../../../assets/arrow.webp";
import ShareButton from "../../general/shareButton";

export default function NewsPage() {
  const { title } = useParams();
  const width = useWidth();

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
    <Container>
      <Title>
        <p className="home">خانه / بلاگ /</p>
        <p className="component"> {title} </p>
      </Title>

      {width < 481 ? (
        <>
          <NewsContainer>
            <Picture>
              <img src={pic} alt="news-cover" />
            </Picture>
            <Content>
              <HeadContent>
                <Type>سهیل داناچیان</Type>
                <Date>۲۹ اسفند ۱۴۰۰</Date>
              </HeadContent>
              <SubTitle>
                مصوبۀ شفافیت صورت‌های مالیاتی شرکت‌های بزرگ به سود کدام
                شرکت‌هاست؟
              </SubTitle>

              <Paragraph>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </Paragraph>

              <Feedback>
                <Button color="#6CBBA9" icon={like}>
                  ۵۴
                </Button>
                <Button color="#FFA5A5" icon={dislike}>
                  ۱۰
                </Button>
                {/* <Share>
                  <p className="text">بازنشر</p>
                </Share> */}
                <ShareButton
                  right={true}
                  text="  مصوبۀ شفافیت صورت‌های مالیاتی شرکت‌های بزرگ به سود ک "
                  title="اطلاع رسانی نماینده"
                />
              </Feedback>
            </Content>
          </NewsContainer>

          <Related>
            <Header>مطالب مرتبط</Header>
            <CardContainer>{magPaper}</CardContainer>
          </Related>
        </>
      ) : (
        <>
          <DesktopContainer>
            <News>
              <NewsContainer>
                <Picture>
                  <img src={pic} alt="news-cover" />
                </Picture>
                <Content>
                  <HeadContent>
                    <Type>سهیل داناچیان</Type>
                    <Date>۲۹ اسفند ۱۴۰۰</Date>
                  </HeadContent>
                  <SubTitle>
                    مصوبۀ شفافیت صورت‌های مالیاتی شرکت‌های بزرگ به سود کدام
                    شرکت‌هاست؟
                  </SubTitle>

                  <Paragraph>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                    افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                    طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                    صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                    راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز
                    شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
                    دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                  </Paragraph>

                  <Feedback>
                    <Button color="#6CBBA9" icon={like}>
                      ۵۴
                    </Button>
                    <Button color="#FFA5A5" icon={dislike}>
                      ۱۰
                    </Button>
                    {/* <Share>
                      <p className="text">بازنشر</p>
                    </Share> */}
                    <ShareButton
                      right={true}
                      text="  مصوبۀ شفافیت صورت‌های مالیاتی شرکت‌های بزرگ به سود ک "
                      title="اطلاع رسانی نماینده"
                    />
                  </Feedback>
                </Content>
              </NewsContainer>
            </News>
            <RelatedContainer>
              <h3>مطالب مرتبط</h3>
              {magPaper}
            </RelatedContainer>
          </DesktopContainer>
          <Related>
            <Header> آخرین مطالب</Header>
            <CardContainer>{magPaper}</CardContainer>

            <ShowMore>
              <p>نمایش بیشتر</p>
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
  position: relative;
  padding-right: 20px;
  &:before {
    content: "";
    display: block;
    background-image: url(${profile});
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    width: 14px;
    height: 17px;
    right: 0;
    top: 2px;
  }
  @media (min-width: 481px) {
    font-size: 1.25vw;
    padding-right: 40px;
    &:before {
      width: 30px;
      height: 30px;
    }
  }
`;
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
    padding-right: 20px;
    position: relative;
    margin-bottom: 10px;
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
  .content {
    color: #707070;
    font-size: 3.72vw;
    font-weight: 400;
    margin: 0;
    margin-bottom: 10px;
    max-width: 160px;
  }

  .date {
    color: rgba(0, 0, 0, 0.2);
    font-size: 3.25vw;
    font-weight: bold;
    margin: 0;
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
      padding-right: 30px;
      &:before {
        width: 20px;
        height: 20px;
      }
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
  @media (max-width: 1600px) {
    .cover {
      width: 16vw;
    }
  }
  @media (max-width: 1200px) {
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
  max-width: 500px;
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
    position: relative;
    &:after {
      content: "";
      display: flex;
      position: absolute;
      left: -25px;
      bottom: 8px;
      background-image: url(${upArrow});
      background-size: cover;
      background-repeat: no-repeat;
      width: 15px;
      height: 8px;
      left: -37px;
    }
  }
`;
