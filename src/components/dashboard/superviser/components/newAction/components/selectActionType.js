import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../../../../general/button";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../../../context/userContext";
import { useFormik } from "formik";
import { selectActionTypeSchema } from "../../../../../schema";
import vote from "../../../../../../assets/vote-light.webp";
import voteAction from "../../../../../../assets/vote-active.webp";
import action from "../../../../../../assets/act-light.webp";
import background from "../../../../../../assets/back-controll.webp";
import voteIcon from "../../../../../../assets/vote.webp";
import symbol from "../../../../../../assets/vote-logo.webp";
import actionsymbol from "../../../../../../assets/action-rate.webp";

export default function SelectActionType() {
  const navigate = useNavigate();
  const [select, setSelect] = useState(1);
  const [check, setCheck] = useState(-1);
  const { state, dispatch } = useUser();

  const voteItems = [
    { title: "کلیات لایحۀ بودجۀ سال ۱۴۰۱", date: "۲۹ اسفند ۱۴۰۰" },
    { title: "کلیات لایحۀ بودجه", date: "۲۹ اسفند ۱۴۰۰" },
    { title: "کلیات لایحه", date: "۲۹ اسفند ۱۴۰۰" },
    { title: "کلیات لایحۀ بودجۀ سال ۱۴۰۰", date: "۲۹ اسفند ۱۴۰۰" },
    { title: "کلیات لایحۀ بودجۀ سال ۱۳۹۹", date: "۲۹ اسفند ۱۴۰۰" },
  ];

  const voteList = voteItems.map((x, i) => {
    return (
      <SelectItem
        key={i}
        className={check === i ? "active" : ""}
        onClick={() => {
          setCheck(i);
          setFieldValue("description", x.title);
        }}
      >
        <div className="symbol"></div>
        <div className="content">
          <p className="titr">رأی‌گیری</p>
          <h2 className="title">{x.title}</h2>
          <p className="date">{x.date}</p>
        </div>
      </SelectItem>
    );
  });
  const checkVoteList = voteItems.map((x, i) => {
    return (
      <SelectItem
        key={i}
        className={x.title === state.typeAction.description ? "active" : ""}
      >
        <div className="symbol"></div>
        <div className="content">
          <p className="titr">رأی‌گیری</p>
          <h2 className="title">{x.title}</h2>
          <p className="date">{x.date}</p>
        </div>
      </SelectItem>
    );
  });

  const actionItems = [
    { title: " خرید خوردو دنا پلاس", date: "۲۹ اسفند ۱۴۰۰" },
    { title: "هدیه خرید جهیزیه از کانادا", date: "۲۹ اسفند ۱۴۰۰" },
    { title: " استفاده از موقعیت اختلاس", date: "۲۹ اسفند ۱۴۰۰" },
  ];

  const actionList = actionItems.map((x, i) => {
    return (
      <ActiveOrder
        key={i}
        className={check === i ? "active" : ""}
        onClick={() => {
          setCheck(i);
          setFieldValue("description", x);
        }}
      >
        <div className="symbol"></div>
        <div className="content">
          <p className="titr">عملکرد ها</p>
          <h2 className="title">{x.title}</h2>
          <p className="date">{x.date}</p>
        </div>
      </ActiveOrder>
    );
  });

  const checkActionList = actionItems.map((x, i) => {
    return (
      <ActiveOrder
        key={i}
        className={x.title === state.typeAction.description ? "active" : ""}
      >
        <div className="symbol"></div>
        <div className="content">
          <p className="titr">عملکرد ها</p>
          <h2 className="title">{x.title}</h2>
          <p className="date">{x.date}</p>
        </div>
      </ActiveOrder>
    );
  });

  const onSubmit = async (values, actions) => {
    dispatch({ type: "SET_TYPE_ACTION", payload: values });
    dispatch({ type: "SET_ADD_ACT_LEVEL", payload: 2 });
    actions.resetForm();
    console.log("submit");
    
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      type: "",
      description: {},
    },
    validationSchema: selectActionTypeSchema,
    onSubmit,
  });

  useEffect(() => {
    if (select === 1) {
      setFieldValue("type", "vote");
    }
    if (select === 2) {
      setFieldValue("type", "action");
    }
  }, [select]);
  console.log(state.typeAction);

  return (
    <>
      {state.addActionLevel === 1 ? (
        <form onSubmit={handleSubmit} autoComplete="off">
          <Container>
            <Title>۱. فعالیت موردنظر خود را انتخاب کنید:</Title>
            <Filtering>
              <input placeholder="جستجو کن..." />
              <Items>
                <Item
                  icon={select == 1 ? voteAction : vote}
                  onClick={() => {
                    setSelect(1);
                  }}
                  className={select == 1 ? "active" : ""}
                >
                  رأی‌گیری‌ها
                </Item>
                <Item
                  icon={action}
                  onClick={() => {
                    setSelect(2);
                  }}
                  className={select == 2 ? "active" : ""}
                >
                  عملکردها
                </Item>
              </Items>
            </Filtering>
            {select === 1 && <Gallery>{voteList}</Gallery>}
            {select === 2 && <Gallery>{actionList}</Gallery>}
            {errors.type && touched.type && (
              <ErrorText>{errors.type}</ErrorText>
            )}
            {errors.description && touched.description && (
              <ErrorText>{errors.description}</ErrorText>
            )}
          </Container>
          <Box>
            <Button
              text="لغو"
              textColor="#095644"
              borderColor="#095644"
              width="35%"
              click={() => {
                navigate(-1);
              }}
            />
            <Button
              text="ثبت"
              textColor="#FFFFFF"
              background="#095644"
              width="62%"
              type="submit"
            />
          </Box>
        </form>
      ) : (
        <Container>
          <Title>۱. فعالیت موردنظر خود را انتخاب کنید:</Title>

          <Filtering>
            <input placeholder="جستجو کن..." />
            <Items>
              <Item
                icon={state.typeAction.type == "vote" ? voteAction : vote}
                className={state.typeAction.type == "vote" ? "active" : ""}
              >
                رأی‌گیری‌ها
              </Item>
              <Item
                icon={action}
                className={state.typeAction.type == "action" ? "active" : ""}
              >
                عملکردها
              </Item>
            </Items>
          </Filtering>
          {state.typeAction.type == "vote" && (
            <Gallery>{checkVoteList}</Gallery>
          )}
          {state.typeAction.type == "action" && (
            <Gallery>{checkActionList}</Gallery>
          )}
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  background: #ffffff;
  border-radius: 4px;
  padding: 14px 10px 11px;
  margin-top: 15px;
`;
const Title = styled.h2`
  padding-right: 36px;
  margin: 0;
  color: #707070;
  font-size: 4.651vw;
  font-weight: 400;
  margin-bottom: 10px;
`;

const Box = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;

const ErrorText = styled.p`
  color: #fc8181;
  font-size: 0.75rem;
  width: 100%;
  text-align: right;
  margin: 0;
  margin-right: 2%;
  margin-top: 2%;
`;

const Filtering = styled.div`
  padding: 19px 19px 12px 21px;
  border-radius: 4px;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  input {
    width: 94%;
    font-size: 3.721vw;
    padding: 9px;
    font-weight: 400;
    margin-bottom: 13px;
    &::placeholder {
      color: #d8d8d8;
    }
  }
`;

const Items = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 50px;
`;
const Item = styled.p`
  color: #dff5f0;
  margin: 0;
  padding: 0;
  font-size: 3.721vw;
  font-weight: 300;
  padding-top: 35px;
  position: relative;
  &.active {
    font-weight: 700;
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: #dff5f0;
      right: 0;
      bottom: -12px;
    }
  }
  &:before {
    content: "";
    display: block;
    position: absolute;
    background-image: url(${(props) => props.icon});
    background-size: contain;
    background-repeat: no-repeat;
    width: 35px;
    height: 35px;
    top: 0;
    right: 15px;
  }
  &:nth-child(2) {
    &:before {
      top: 9px;
    }
  }
`;

const SelectItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 13px 19px 18px 30px;
  &.active {
    background-color: #dff5f0;
    border: 1px solid #6cbba9;
    border-radius: 4px;
  }
  .symbol {
    width: 20.698vw;
    height: 20.698vw;
    background-image: url(${symbol});
    background-size: contain;
    background-repeat: no-repeat;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 7px;
    .titr {
      margin: 0;
      color: #707070;
      font-weight: 100;
      font-size: 3.721vw;
      display: flex;
      align-items: center;
      gap: 5px;
      &:after {
        content: "";
        display: inline-flex;
        background-image: url(${voteIcon});
        background-size: contain;
        background-repeat: no-repeat;
        width: 4.884vw;
        height: 4.884vw;
      }
    }
    .title {
      color: #707070;
      font-weight: 400;
      font-size: 4.651vw;
      margin: 0;
    }
    .date {
      margin: 0;
      font-weight: 700;
      font-size: 2.791vw;
      color: rgba(0, 0, 0, 0.2);
    }
  }
`;

const Gallery = styled.div`
  margin-top: 10px;
`;

const ActiveOrder = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 13px 19px 18px 30px;
  &.active {
    background-color: #dff5f0;
    border: 1px solid #6cbba9;
    border-radius: 4px;
  }
  .symbol {
    width: 20.698vw;
    height: 20.698vw;
    background-image: url(${actionsymbol});
    background-size: contain;
    background-repeat: no-repeat;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 7px;
    .titr {
      margin: 0;
      color: #707070;
      font-weight: 100;
      font-size: 3.721vw;
      display: flex;
      align-items: center;
      gap: 5px;
      &:after {
        content: "";
        display: inline-flex;
        background-image: url(${action});
        background-size: contain;
        background-repeat: no-repeat;
        width: 4.884vw;
        height: 4.884vw;
      }
    }
    .title {
      color: #707070;
      font-weight: 400;
      font-size: 4.651vw;
      margin: 0;
    }
    .date {
      margin: 0;
      font-weight: 700;
      font-size: 2.791vw;
      color: rgba(0, 0, 0, 0.2);
    }
  }
`;
