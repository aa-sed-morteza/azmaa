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

export default function SelectEnvoys() {
  const navigate = useNavigate();
  const [select, setSelect] = useState(0);
  const [check, setCheck] = useState(-1);
  const { state, dispatch } = useUser();

  const envoys = [
    {
      name: "علیرضا پاکفطرت",
      state: "دماوند و فیروزکوه",
      commission: "امنیت ملی",
      img: "../../assets/ali.webp",
      persantage: "75",
      id: "1",
    },
    {
      name: "یوسف داوودی سراب",
      state: "دماوند و فیروزکوه",
      commission: "امنیت ملی",
      img: "../../assets/jafi.webp",
      persantage: "25",
      id: "2",
    },
    {
      name: "مهدی اسماعیلی",
      state: "دماوند و فیروزکوه",
      commission: "امنیت ملی",
      img: "../../assets/abol.webp",
      persantage: "95",
      id: "3",
    },
    {
      name: "جعفر قادری",
      state: "دماوند و فیروزکوه",
      commission: "امنیت ملی",
      img: "../../assets/jafi.webp",
      persantage: "15",
      id: "4",
    },
    {
      name: "احمد محرم‌زاده یخ‌فروزان ",
      state: "دماوند و فیروزکوه",
      commission: "امنیت ملی",
      img: "../../assets/abol.webp",
      persantage: "85",
      id: "5",
    },
  ];

  const envoyList = envoys.map((x, i) => {
    return (
      <SelectItem
        key={i}
        className={check === i ? "active" : ""}
        onClick={() => {
          setCheck(i);
          setFieldValue("envoy", x.name);
        }}
      >
        <EnvoyCard
          key={i}
          name={x.name}
          state={x.state}
          commission={x.commission}
          img={x.img}
          persantage={x.persantage}
          id={x.id}
        />
      </SelectItem>
    );
  });
  const checkEnvoyList = envoys.map((x, i) => {
    return (
      <SelectItem
        key={i}
        className={x.name === state.selectEnvoy.envoy ? "active" : ""}
      >
        <EnvoyCard
          key={i}
          name={x.name}
          state={x.state}
          commission={x.commission}
          img={x.img}
          persantage={x.persantage}
          id={x.id}
        />
      </SelectItem>
    );
  });

  const states = [
    { city: "دماوند وفیروزکوه", province: "تهران" },
    { city: " شهرری", province: "تهران" },
    { city: "پردیس و بومهن", province: "تهران" },
  ];

  const stateList = states.map((x, i) => {
    return (
      <ActiveOrder
        key={i}
        className={check === i ? "active" : ""}
        onClick={() => {
          setCheck(i);
          setFieldValue("envoy", x.city);
        }}
      >
        <div className="symbol"></div>
        <div className="content">
          <h2 className="title">{x.city}</h2>
          <p className="date">{x.province}</p>
        </div>
      </ActiveOrder>
    );
  });

  const checkStateList = states.map((x, i) => {
    return (
      <ActiveOrder
        key={i}
        className={x.city === state.selectEnvoy.envoy ? "active" : ""}
      >
        <div className="symbol"></div>
        <div className="content">
          <h2 className="title">{x.city}</h2>
          <p className="date">{x.province}</p>
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
              click={() => {
                navigate("/");
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
      right: 4px;
    }
  }
`;

const SelectItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

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
  .symbol{
    background-image: url(${symbol});
    background-size: contain;
    background-repeat: no-repeat;
    width: 16.279vw;
    height: 18.372vw;
    
  }
  .content{
    display:flex;
    flex-direction:column;
    .title{
        color:#707070;
        margin:0;
        font-weight400;
        font-size:4.651vw;
    }
    .date{
        color:#707070;
        margin:0;
        font-700;
        font-size:3.256vw;
    }
}

`;
