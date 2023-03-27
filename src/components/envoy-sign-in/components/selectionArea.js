import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CustomInput from "../../general/customInput";
import Button from "../../general/button";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/userContext";
import { useFormik } from "formik";
import { selectAreaSchema } from "../../schema";
import Select from "../../general/select";
import SelectNumber from "../../general/selectNumber";
import axios from "axios";
import { BaseBackURL } from "../../../constant/api";
import { toast } from "react-toastify";

export default function SelectionArea() {
  const navigate = useNavigate();
  const { state, dispatch } = useUser();
  const [areaName, setAreaName] = useState([]);
  const commission = ["امنیت ملی", "سلامت", "ورزش", "عمران"];

  const refreshToken = () => {
    const data = new FormData();
    data.append("refresh", state.refreshToken);

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
        dispatch({ type: "SET_TOKEN", payload: response.data.access });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getDistrict = () => {
    var config = {
      method: "get",
      url: `${BaseBackURL}api/v1/electoral_district/?city__id&city__province__id`,
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setAreaName([...response.data.map((x) => x.name)]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getDistrict();
  }, []);

  const onSubmit = async (values, actions) => {
    const data = new FormData();
    data.append("electoral_district", 1);
    data.append("fraction", 1);
    data.append("vote_number", values.voteNumber);

    let config = {
      method: "put",
      url: `${BaseBackURL}api/v1/accounts/profile/update/${state.userId}`,
      headers: {
        Authorization: `Bearer ${state.token}`,
      },
      data: data,
    };

    axios(config)
      .then((res) => {
        // console.log(JSON.stringify(res.data));
        dispatch({ type: "SET_USER_DATA", payload: { ...res.data } });
        dispatch({ type: "SET_SIGN_LEVEL", payload: 4 });
        actions.resetForm();
        toast.success(" ثبت با موفقیت انجام شد!", {
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
        // if (error.response.data.telephone == "شماره تلفن معتبر نیست.") {
        //   toast.error("شماره تلفن معتبر نیست.", {
        //     position: toast.POSITION.TOP_RIGHT,
        //   });
        // }
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
  } = useFormik({
    initialValues: {
      areaName: "",
      voteNumber: 0,
      commission: "",
    },
    validationSchema: selectAreaSchema,
    onSubmit,
  });

  return (
    <>
      {state.signInLevel === 3 ? (
        <form onSubmit={handleSubmit} autoComplete="off">
          <Container>
            <Title>۳. اطلاعات حوزۀ انتخابیه را وارد کنید:</Title>
            <Form>
              <Select
                label="نام حوزه"
                background="#FFFFFF"
                value={values.areaName}
                onChange={handleChange}
                options={areaName}
                id="areaName"
              />
              {errors.areaName && touched.areaName && (
                <ErrorText>{errors.areaName}</ErrorText>
              )}

              <SelectNumber
                label="تعداد آراء"
                background="#FFFFFF"
                id="voteNumber"
                name="voteNumber"
                value={values.voteNumber}
                onChange={handleChange}
              />
              {errors.voteNumber && touched.voteNumber && (
                <ErrorText>{errors.voteNumber}</ErrorText>
              )}

              <Select
                label="نام کمیسیون"
                background="#FFFFFF"
                value={values.commission}
                onChange={handleChange}
                options={commission}
                id="commission"
              />
              {errors.commission && touched.commission && (
                <ErrorText>{errors.commission}</ErrorText>
              )}
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
          <Title>۳. اطلاعات حوزۀ انتخابیه را وارد کنید:</Title>
          <Form>
            <Select
              label="نام حوزه"
              background="#FFFFFF"
              value={state.electoral_district}
              options={areaName}
            />

            <SelectNumber
              label="تعداد آراء"
              background="#FFFFFF"
              value={state.vote_number}
            />

            <Select
              label="نام کمیسیون"
              background="#FFFFFF"
              value={state.fraction.name}
              options={commission}
            />
          </Form>
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
  @media (min-width: 480px) {
    width: 65%;
    gap: 1.042vw;
    margin: 1.042vw auto;
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
