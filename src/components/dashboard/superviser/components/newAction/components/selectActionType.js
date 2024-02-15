import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../../../../general/button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "../../../../../../context/userContext";
import { useFormik } from "formik";
import { selectActionTypeSchema } from "../../../../../schema";
import vote from "../../../../../../assets/vote-light.webp";
import voteAction from "../../../../../../assets/vote-active.webp";
import action from "../../../../../../assets/act-light.webp";
import background from "../../../../../../assets/back-controll.webp";
import voteIcon from "../../../../../../assets/vote.webp";
import symbol from "../../../../../../assets/vote-logo.webp";
import actionsymbol from "../../../../../../assets/action-rate.webp";
import axios from "axios";
import { BaseBackURL } from "../../../../../../constant/api";
import { convertDateToFarsi } from "../../../../../../utils";
import { setActivity } from "../../../../../../redux/slices/activity-choiceSlice";
import { useDispatch, useSelector } from "react-redux";
import { setactionlevel } from "../../../../../../redux/slices/addActionLevelSlice";
export default function SelectActionType() {
  const navigate = useNavigate();
  const [select, setSelect] = useState(1);
  const [check, setCheck] = useState(-1);
  const { state, dispatch } = useUser();
  const [voteItems, setVoteItems] = useState([]);
  const [actionItems, setActionItems] = useState([]);
  const [searchparams, setsearchparams] = useSearchParams();
  const activityChoice = useSelector((state) => state.userActivity.activity);
  const dispathRedux = useDispatch();
  const addActionLevel = useSelector(state => state.addActionLevel.addActionLevel);


  const getVoteItems = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}api/v1/bill/?ordering=name, date&name&tag__id&vote__voter`,
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setVoteItems([...response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getActionsItems = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}api/v1/activity/?ordering=name, date&name&tag__id&vote__voter=`,
    };
    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setActionItems([...response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getVoteItems();
    getActionsItems();
  }, []);

  const voteList = voteItems.map((x, i) => {
    return (
      <SelectItem
        key={i}
        className={check === i ? "active" : ""}
        onClick={() => {
          setCheck(i);
          setFieldValue("description", x.id);
        }}
      >
        <div className="symbol"></div>
        <div className="content">
          <p className="titr">رأی‌گیری</p>
          <h2 className="title">{x.name}</h2>
          <p className="date">{convertDateToFarsi(x.date)}</p>
        </div>
      </SelectItem>
    );
  });
  const checkVoteList = voteItems.map((x, i) => {
    return (
      <SelectItem
        key={i}
        className={x.id === state.typeAction.description ? "active" : ""}
      >
        <div className="symbol"></div>
        <div className="content">
          <p className="titr">رأی‌گیری</p>
          <h2 className="title">{x.name}</h2>
          <p className="date">{x.date}</p>
        </div>
      </SelectItem>
    );
  });

  var isDescending = true; //set to false for ascending
  const sortActsByDate = actionItems.sort((a, b) =>
    isDescending
      ? new Date(b.date).getTime() - new Date(a.date).getTime()
      : new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const actionList = sortActsByDate
    .filter((item) => {
      let filter = searchparams.get("filter");
      if (!filter) return true;
      let name = item.name + item.date;
      return name.includes(filter);
    })
    .map((x, i) => {
      return (
        <ActiveOrder
          key={i}
          className={check === i ? "active" : ""}
          onClick={() => {
            setCheck(i);
            setFieldValue("description", x.id);
            // dispatch({
            //   type: "SET_ACTIVITY_CHOICE",
            //   payload: x.activity_choice,
            // });
            dispathRedux(setActivity(x.activity_choice));
          }}
        >
          <div className="symbol"></div>
          <div className="content">
            <p className="titr">دیدگاه ها</p>
            <h2 className="title">{x.name}</h2>
            <p className="date">{convertDateToFarsi(x.date)}</p>
          </div>
        </ActiveOrder>
      );
    });

  const checkActionList = actionItems.map((x, i) => {
    return (
      <ActiveOrder
        key={i}
        className={x.id === state.typeAction.description ? "active" : ""}
      >
        <div className="symbol"></div>
        <div className="content">
          <p className="titr">دیدگاه ها</p>
          <h2 className="title">{x.name}</h2>
          <p className="date">{convertDateToFarsi(x.date)}</p>
        </div>
      </ActiveOrder>
    );
  });

  const onSubmit = async (values, actions) => {
    dispatch({ type: "SET_TYPE_ACTION", payload: values });
    // dispatch({ type: "SET_ADD_ACT_LEVEL", payload: 2 });
    dispathRedux(setactionlevel(2));
    actions.resetForm();
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
      description: "",
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

  return (
    <>
      {addActionLevel === 1 ? (
        <form onSubmit={handleSubmit} autoComplete="off">
          <Container>
            <Title>۱. فعالیت موردنظر خود را انتخاب کنید:</Title>
            <Filtering>
              <input
                value={searchparams.get("filter") || ""}
                onChange={(event) => {
                  let filter = event.target.value;
                  if (filter) {
                    setsearchparams({ filter: filter });
                  } else {
                    setsearchparams({});
                  }
                }}
                placeholder="جستجو کن..."
              />
            </Filtering>
            <Gallery>{actionList}</Gallery>
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
          </Filtering>
          <Gallery>{checkActionList}</Gallery>
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
  @media (min-width: 480px) {
    font-size: 1.458vw;
    margin-bottom: 1.458vw;
  }
`;

const Box = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  @media (min-width: 480px) {
    width: 100%;
    justify-content: center;
    margin: 1.302vw auto;
  }
`;

const ErrorText = styled.p`
  color: #fc8181;
  font-size: 0.75rem;
  width: 100%;
  text-align: right;
  margin: 0;
  margin-right: 2%;
  margin-top: 2%;
  @media (min-width: 480px) {
    margin-top: 0;
    font-size: 1.042vw;
  }
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
  @media (min-width: 480px) {
    width: 74%;
    padding: 2.292vw 2.604vw 0.885vw;
    margin: auto;
    input {
      width: 97%;
      font-size: 1.563vw;
      margin-bottom: 1.563vw;
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
  /* padding-top: 35px; */
  display: flex;
  align-items: center;
  flex-direction: column;
  /* gap:10px; */
  position: relative;
  cursor: pointer;
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
    display: inline-flex;
    background-image: url(${(props) => props.icon});
    background-size: contain;
    background-repeat: no-repeat;
    width: 35px;
    height: 35px;
    /* top: 0;
    right: 15px; */
  }
  &:nth-child(2) {
    &:before {
      top: 9px;
    }
  }
  @media (min-width: 480px) {
    font-size: 1.458vw;
    &:after {
      height: 5px !important;
      bottom: -0.885vw !important;
    }
    &:before {
      right: 35px;
    }
  }
`;

const SelectItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 13px 19px 18px 30px;
  cursor: pointer;
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
  @media (min-width: 480px) {
    .symbol {
      width: 6.771vw;
      height: 6.771vw;
    }
    .content {
      .titr {
        font-size: 1.25vw;
        &:after {
          width: 1.563vw;
          height: 1.563vw;
        }
      }
      .title {
        font-size: 1.458vw;
      }
      .date {
        font-size: 1.25vw;
      }
    }
  }
`;

const Gallery = styled.div`
  margin-top: 10px;
  @media (min-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 1.302vw;
    width: 84%;
    margin: 1.302vw auto;
  }
`;

const ActiveOrder = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 13px 19px 18px 30px;
  cursor: pointer;
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
  @media (min-width: 480px) {
    .symbol {
      width: 6.771vw;
      height: 6.771vw;
    }
    .content {
      .titr {
        font-size: 1.25vw;
        &:after {
          width: 1.563vw;
          height: 1.563vw;
        }
      }
      .title {
        font-size: 1.458vw;
      }
      .date {
        font-size: 1.25vw;
      }
    }
  }
`;
