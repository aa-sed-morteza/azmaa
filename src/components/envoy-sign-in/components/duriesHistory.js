import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CustomInput from "../../general/customInput";
import Button from "../../general/button";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/userContext";
import { useFormik } from "formik";
import { contactSchema } from "../../schema";
import { dutieHistoryAreaSchema } from "../../schema";
import DutieForm from "./dutieForm";
import { BaseBackURL } from "../../../constant/api";
import axios from "axios";
import { toast } from "react-toastify";

export default function DutiesHistory() {
  const navigate = useNavigate();
  const { state, dispatch } = useUser();
  const [count, setCount] = useState(1);
  const [check, setCkeck] = useState(false);

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
    data.append("refresh", state.refreshToken);

    let config = {
      method: "post",
      url: `${BaseBackURL}api/token/refresh/`,
      headers: {
        Authorization: `Bearer ${state.token}`,
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        dispatch({ type: "SET_TOKEN", payload: response.data.access });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmit = async (values, actions) => {
    var data = new FormData();
    data.append("title", values.dutie);
    data.append("from_date", values.dateFrom);
    data.append("to_date", values.dateTo);

    var config = {
      method: "post",
      url: `${BaseBackURL}api/v1/accounts/experiences/`,
      headers: {
        Authorization: `Bearer ${state.token}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        dispatch({ type: "SET_SIGN_LEVEL", payload: 1 });
        dispatch({ type: "SET_LOGGED_IN", payload: true });
        actions.resetForm();
        navigate("/dashboard");
      })
      .catch(function (error) {
        console.log(error);
        if (error.response.status == 401) {
          refreshToken();
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
      dutie: "",
      dateFrom: "",
      dateTo: "",
    },
    validationSchema: dutieHistoryAreaSchema,
    onSubmit,
  });

  return (
    <>
      {state.signInLevel === 4 ? (
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
              <AddHistory onClick={checkAddHistory}>
                <p className="text">افزودن سابقه</p>
              </AddHistory>
            </Form>
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
              text={state.signInLevel === 5 ? "تبت نام" : "ثبت"}
              textColor="#FFFFFF"
              background="#095644"
              width="62%"
              type="submit"
            />
          </Box>
        </form>
      ) : (
        <Container></Container>
      )}
    </>
  );
}

const Container = styled.div`
  background: #ffffff;
  border-radius: 4px;
  padding: 14px 10px 11px;
  margin-top: 15px;
  @media (min-width: 480px) {
    padding: 2.604vw;
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
    font-size: 1.458vw;
    margin-bottom: 1.302vw;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (min-width: 480px) {
    width: 65%;
    gap: 1.302vw;
  }
`;

const Box = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  width: 65%;
  gap: 1.042vw;
  margin: 1.042vw auto;
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
  @media (min-width: 480px) {
    .text {
      font-size: 1.25vw;
      &:before {
        font-size: 1.563vw;
      }
    }
  }
`;
