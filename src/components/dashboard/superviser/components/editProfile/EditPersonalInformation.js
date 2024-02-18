import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CustomInput from "../../../../general/customInput";
import Button from "../../../../general/button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useUser } from "../../../../../context/userContext";
import { infoSchema } from "../../../../schema";
import CustomDatePicker from "../../../../general/datePicker";
import calendar from "../../../../../assets/calendar.webp";
import axios from "axios";
import { BaseBackURL } from "../../../../../constant/api";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { settoken } from "../../../../../redux/slices/setTokenSlice";
import { setuserdata } from "../../../../../redux/slices/setuserDataSlice";

export default function EditPersonalInformation() {
  const navigate = useNavigate();
  const { state, dispatch } = useUser();
  const [order, setOrder] = useState(false);

  const dispathRedux = useDispatch();
  const token = useSelector(state => state.token.token);
  const userdata = useSelector(state => state.userdata);
  const refreshTokenstate = useSelector(state => state.refreshTokenstate.refreshTokenstate);
  const userId = useSelector(state => {
    return state.userID.id
  } );



  const refreshToken = () => {
    const data = new FormData();
    data.append("refresh", refreshTokenstate);

    let config = {
      method: "post",
      url: `${BaseBackURL}api/token/refresh/`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
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
    data.append("first_name", values.firstName);
    data.append("last_name", values.lastName);
    data.append("birth_place", values.birthPlace);
    data.append("birth_date", values.birthDay);
    data.append("national_code", values.personalCode);

    let config = {
      method: "put",
      url: `${BaseBackURL}api/v1/accounts/profile/update/${userId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    axios(config)
      .then((res) => {
        // console.log(JSON.stringify(res.data));
        // dispatch({ type: "SET_USER_DATA", payload: { ...res.data } });
        dispathRedux(setuserdata(res.data ))
        navigate("/dashboard");
        actions.resetForm();
        toast.success("اصلاح با موفقیت انجام شد!", {
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
      firstName: userdata.first_name,
      lastName: userdata.last_name,
      birthPlace: userdata.birth_place,
      personalCode: userdata.national_code,
      birthDay: userdata.birth_date,
    },
    validationSchema: infoSchema,
    onSubmit,
  });

  // Convert persianNumber to englishNumber
  useEffect(() => {
    setFieldValue(
      "personalCode",
      values.personalCode
        .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
        .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d))
    );
  }, [values.personalCode]);

  return (
    <Wraper>
      <FirstTitle>
        <p className="home">پنل / </p>
        <p className="component"> ویرایش اطلاعات شخصی </p>
      </FirstTitle>

      <form onSubmit={handleSubmit} autoComplete="off">
        <Container>
          <Title> اطلاعات شخصی خود را اصلاح کنید:</Title>
          <Form>
            <CustomInput
              label="نام"
              back="#ffffff"
              value={values.firstName}
              onChange={handleChange}
              id="firstName"
            />
            {errors.firstName && touched.firstName && (
              <ErrorText>{errors.firstName}</ErrorText>
            )}
            <CustomInput
              label="نام خانوادگی"
              back="#ffffff"
              value={values.lastName}
              onChange={handleChange}
              id="lastName"
            />
            {errors.lastName && touched.lastName && (
              <ErrorText>{errors.lastName}</ErrorText>
            )}
            <CustomInput
              label="محل تولد"
              back="#ffffff"
              value={values.birthPlace}
              onChange={handleChange}
              id="birthPlace"
            />
            {errors.birthPlace && touched.birthPlace && (
              <ErrorText>{errors.birthPlace}</ErrorText>
            )}
            <CustomInput
              label="کد ملی"
              back="#ffffff"
              value={values.personalCode}
              onChange={handleChange}
              id="personalCode"
            />
            {errors.personalCode && touched.personalCode && (
              <ErrorText>{errors.personalCode}</ErrorText>
            )}

            <CustomDatePicker
              label=" تاریخ تولد "
              background="#FFFFFF"
              icon={calendar}
              placeholder="انتخاب کنید"
              id="birthDay"
              value={values.birthDay}
              onChange={setFieldValue}
            />
            {errors.birthDay && touched.birthDay && (
              <ErrorText>{errors.birthDay}</ErrorText>
            )}
          </Form>
        </Container>
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
      </form>
    </Wraper>
  );
}

const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
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
  padding: 14px 10px 11px;
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

const ErrorText = styled.p`
  color: #fc8181;
  font-size: 0.75rem;
  width: 100%;
  text-align: right;
  margin: 0;
  margin-right: 2%;
  margin-top: 2%;
`;
