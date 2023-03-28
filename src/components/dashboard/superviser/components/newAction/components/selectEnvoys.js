import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../../../../general/button";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../../../context/userContext";
import { useFormik } from "formik";
import { selectEnvoyTypeSchema } from "../../../../../schema";
import profile from "../../../../../../assets/profile.webp";
import profileActive from "../../../../../../assets/profile.svg";
import location from "../../../../../../assets/location.svg";
import locationActive from "../../../../../../assets/location-active.svg";

import background from "../../../../../../assets/back-controll.webp";
import symbol from "../../../../../../assets/state.svg";
import EnvoyCard from "../../../../../general/envoyCard";
import SelectArea from "../../../../../home/components/selectArea";
import axios from "axios";
import { BaseBackURL } from "../../../../../../constant/api";

export default function SelectEnvoys() {
  const navigate = useNavigate();
  const [select, setSelect] = useState(1);
  const [check, setCheck] = useState(-1);
  const { state, dispatch } = useUser();
  const [envoys, setEnvoys] = useState([]);
  const [states, setStates] = useState([]);

  const getEnvoys = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}api/v1/accounts/parliament_member/?super_visor__id=${state.id}`,
    };

    axios(config).then((res) => {
      // console.log(res.data);
      if (res.data.length > 0) {
        setEnvoys([...res.data]);
      }
    });
  };

  useEffect(() => {
    getEnvoys();
  }, []);

  const envoyList = envoys.map((x, i) => {
    return (
      <SelectItem
        key={i}
        className={check === i ? "active" : ""}
        onClick={() => {
          setCheck(i);
          setFieldValue("envoy", x.id);
        }}
      >
        <EnvoyCard
          key={i}
          name={x.first_name + "" + x.last_name}
          state={x.electoral_district_name}
          commission={x.fraction_name}
          img={x.image}
          persantage={x.transparency}
          id={x.id}
        />
      </SelectItem>
    );
  });
  const checkEnvoyList = envoys.map((x, i) => {
    return (
      <SelectItem
        key={i}
        className={x.id === state.selectEnvoy.envoy ? "active" : ""}
      >
        <EnvoyCard
          key={i}
          name={x.first_name + "" + x.last_name}
          state={x.electoral_district_name}
          commission={x.fraction_name}
          img={x.image}
          persantage={x.transparency}
          id={x.id}
        />
      </SelectItem>
    );
  });

  const getElectoralDistrict = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}api/v1/electoral_district/?city__id&city__province__id`,
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setStates([...response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getElectoralDistrict();
  }, []);

  const stateList = states.map((x, i) => {
    return (
      // <SelectArea area={x.name} envoys={x.agent} key={i} />

      <ActiveOrder
        key={i}
        className={check === i ? "active" : ""}
        onClick={() => {
          setCheck(i);
          setFieldValue("envoy", x.id);
        }}
      >
        <div className="symbol"></div>
        <div className="content">
          {x.name && <h2 className="title">{x.name}</h2>}
          {x.city_name.length > 0 && (
            <p className="date">{x.city_name[0].name}</p>
          )}
        </div>
      </ActiveOrder>
    );
  });

  const checkStateList = states.map((x, i) => {
    return (
      <ActiveOrder
        key={i}
        className={x.id === state.selectEnvoy.envoy ? "active" : ""}
      >
        <div className="symbol"></div>
        <div className="content">
          <h2 className="title">{x.name}</h2>
          {x.city_name.length > 0 && (
            <p className="date">{x.city_name[0].name}</p>
          )}
        </div>
      </ActiveOrder>
    );
  });

  const onSubmit = async (values, actions) => {
    dispatch({ type: "SET_SELECT_ENVOUY", payload: values });
    dispatch({ type: "SET_ADD_ACT_LEVEL", payload: 3 });
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
      envoy: "",
    },
    validationSchema: selectEnvoyTypeSchema,
    onSubmit,
  });

  useEffect(() => {
    if (select === 1) {
      setFieldValue("type", "envoy");
    }
    if (select === 2) {
      setFieldValue("type", "state");
    }
  }, [select]);

  return (
    <>
      {state.addActionLevel === 2 ? (
        <form onSubmit={handleSubmit} autoComplete="off">
          <Container>
            <Title>۲. نمایندگان خود را انتخاب کنید:</Title>
            <Filtering>
              <input placeholder="جستجو کن..." />
              <Items>
                <Item
                  icon={select == 1 ? profileActive : profile}
                  onClick={() => {
                    setSelect(1);
                  }}
                  className={select == 1 ? "active" : ""}
                >
                  نمایندگان
                </Item>
                <Item
                  icon={select == 2 ? locationActive : location}
                  onClick={() => {
                    setSelect(2);
                  }}
                  className={select == 2 ? "active" : ""}
                >
                  حوزه‌ها
                </Item>
              </Items>
            </Filtering>
            {select === 1 && <Gallery>{envoyList}</Gallery>}
            {select === 2 && <Gallery>{stateList}</Gallery>}
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
              simple={true}
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
          <Title>۲. نمایندگان خود را انتخاب کنید:</Title>

          <Filtering>
            <input placeholder="جستجو کن..." />
            <Items>
              <Item
                icon={
                  state.selectEnvoy.type == "envoy" ? profileActive : profile
                }
                className={state.selectEnvoy.type == "envoy" ? "active" : ""}
              >
                نمایندگان
              </Item>
              <Item
                icon={
                  state.selectEnvoy.type == "state" ? locationActive : location
                }
                className={state.selectEnvoy.type == "state" ? "active" : ""}
              >
                حوزه‌ها
              </Item>
            </Items>
          </Filtering>
          {state.selectEnvoy.type == "envoy" && (
            <Gallery>{checkEnvoyList}</Gallery>
          )}
          {state.selectEnvoy.type == "state" && (
            <Gallery>{checkStateList}</Gallery>
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
  padding-top: 35px;
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
    position: absolute;
    background-image: url(${(props) => props.icon});
    background-size: contain;
    background-repeat: no-repeat;
    width: 35px;
    height: 35px;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0%);
  }
  &:nth-child(2) {
    &:before {
      /* right: 4px; */
    }
  }
  @media (min-width: 480px) {
    font-size: 1.458vw;
    &:after {
      height: 5px !important;
      bottom: -0.885vw !important;
    }
    &:before {
      /* right: 35px; */
    }
  }
`;

const SelectItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  &.active {
    border: 1px solid #6cbba9;
    border-radius: 4px;
    & > * {
      background-color: #dff5f0;
    }
  }
  & > * {
    width: 100%;
    box-shadow: none;
    min-width: initial;
  }
`;

const Gallery = styled.div`
  margin-top: 10px;
  /* & > * {
    width: 100%;
   
  } */
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
  &.active {
    background-color: #dff5f0;
    border: 1px solid #6cbba9;
    border-radius: 4px;
  }
  .symbol {
    background-image: url(${symbol});
    background-size: contain;
    background-repeat: no-repeat;
    width: 16.279vw;
    height: 18.372vw;
  }
  .content {
    display: flex;
    flex-direction: column;
    .title {
      color: #707070;
      margin: 0;
      font-weight: 400;
      font-size: 4.651vw;
    }
    .date {
      color: #707070;
      margin: 0;
      font-weight: 700;
      font-size: 3.256vw;
    }
  }

  @media (min-width: 480px) {
    .symbol {
      width: 6.771vw;
      height: 6.771vw;
    }
    .content {
      .title {
        font-size: 1.458vw;
      }
      .date {
        font-size: 1.25vw;
      }
    }
  }
`;
