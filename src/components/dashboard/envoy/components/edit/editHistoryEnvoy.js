import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../../../general/button";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../../../context/userContext";
import { useFormik } from "formik";
import { dutieHistoryAreaSchema } from "../../../../schema";
import DutieForm from "../../../../envoy-sign-in/components/dutieForm";
import axios from "axios";
import { BaseBackURL } from "../../../../../constant/api";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { settoken } from "../../../../../redux/slices/setTokenSlice";

export default function EditHistoryEnvoy() {
  const navigate = useNavigate();
  const { state, dispatch } = useUser();
  const [count, setCount] = useState(1);
  const [check, setCkeck] = useState(false);

  const dispathRedux = useDispatch();
  const token = useSelector(state => state.token.token);

  const refreshTokenstate = useSelector(state => state.refreshTokenstate.refreshTokenstate);


  const checkAddHistory = () => {
    setCkeck(true);
    setCount(count + 1);
  };

  const abs = () => {
    setCkeck(false);
  };

  const ddd = () => {
    return <DutieForm id={count} key={count} />;
  };

  useEffect(() => {
    abs();
  }, [count]);

  const refreshToken = () => {
    const data = new FormData();
    data.append("refresh", refreshTokenstate);

    let config = {
      method: "post",
      url: `${BaseBackURL}api/token/refresh/`,
      // headers: {
      //   Authorization: `Bearer ${state.token}`,
      // },
      data: data,
    };

    axios(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        // dispatch({ type: "SET_TOKEN", payload: response.data.access });
        dispathRedux(settoken(response.data.access));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmit = async (values, actions) => {
    const data = new FormData();
    data.append("title", values.dutie);
    data.append("from_date", values.dateFrom);
    data.append("to_date", values.dateTo);

    let config = {
      method: "post",
      url: `${BaseBackURL}api/v1/accounts/experiences/`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    axios(config)
      .then((res) => {
        // console.log(JSON.stringify(res.data));
        dispatch({ type: "SET_USER_DATA", payload: { ...res.data } });
        navigate("/dashboard");
        actions.resetForm();
        toast.success(" ایجاد سابقه با موفقیت انجام شد!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((error) => {
        console.log("Error", error);
        if (error.response.status == 401) {
          // refreshToken();
          toast.error("لطفا مجدد تلاش کنید", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      });
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
      dutie: state.dutieHistory.dutie,
      dateFrom: state.dutieHistory.dateFrom,
      dateTo: state.dutieHistory.dateTo,
    },
    validationSchema: dutieHistoryAreaSchema,
    onSubmit,
  });

  return (
    <Wraper>
      <FirstTitle>
        <p className="home">پنل / </p>
        <p className="component"> ویرایش سابقه </p>
      </FirstTitle>

      <form onSubmit={handleSubmit} autoComplete="off">
        <Container>
          <Title>۵. سوابق و مسئولیت‌های پیشین خود را بنویسید:</Title>
          <Form>
            <DutieForm
              id={1}
              value={values}
              onChange={handleChange}
              errors={errors}
              touched={touched}
              setDate={setFieldValue}
            />
            {/* {ddd()} */}
          </Form>
          <Box>
            <Button
              text="لغو"
              textColor="#095644"
              borderColor="#095644"
              simple={true}
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
        </Container>
      </form>
    </Wraper>
  );
}

const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 21vw 20px 0;
  height: 100vh;
  @media (min-width: 480px) {
    padding: 10px 0;
  }
`;

const FirstTitle = styled.div`
  display: flex;
  margin-bottom: 12px;
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
  }
  @media (min-width: 480px) {
    margin-bottom: 25px;
    padding-right: 10%;
    .home,
    .component {
      font-size: 1.25vw;
    }
  }
`;

const Container = styled.div`
  background: #ffffff;
  border-radius: 4px;
  padding: 14px 10px 14px;
  margin-top: 15px;
  @media (min-width: 480px) {
    padding: 2.083vw 2.604vw;
  }
`;
const Title = styled.h2`
  padding-right: 36px;
  margin: 0;
  color: #9f9f9f;
  font-size: 4.651vw;
  font-weight: 300;
  margin-bottom: 10px;
  @media (min-width: 480px) {
    font-size: 1.25vw;
    margin-bottom: 1.042vw;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (min-width: 480px) {
    width: 90%;
    gap: 1.302vw;
  }
`;

const Box = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;

const AddHistory = styled.div`
  border: 1px solid #9f9f9f;
  border-radius: 4px;
  padding: 6px;
  .text {
    color: #9f9f9f;
    font-size: 3.721vw;
    font-weight: 300;
    margin: 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    &:before {
      content: "+";
      display: inline-flex;
      justify-items: center;
      color: #9f9f9f;
      font-size: 3.721vw;
      font-weight: 300;
    }
  }
`;
