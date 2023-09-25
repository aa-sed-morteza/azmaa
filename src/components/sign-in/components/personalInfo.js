import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CustomInput from "../../general/customInput";
import Button from "../../general/button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useUser } from "../../../context/userContext";
import { infoSchema } from "../../schema";
import CustomDatePicker from "../../general/datePicker";
import calendar from "../../../assets/calendar.webp";
import { toast } from "react-toastify";
import axios from "axios";
import { BaseBackURL } from "../../../constant/api";

import { useDispatch, useSelector } from "react-redux";
import { settoken } from "../../../redux/slices/setTokenSlice";
import { setuserdata } from "../../../redux/slices/setuserDataSlice";
import { setsigninLevel } from "../../../redux/slices/setSignLevelSlice";


export default function PersonalInformation() {
  const navigate = useNavigate();
  const { state, dispatch } = useUser();
  const [order, setOrder] = useState(false);

  const dispathRedux = useDispatch();
  const token = useSelector(state => state.token.token);
  const userdata = useSelector(state => state.userdata);
  const signInLevel = useSelector(state => state.signInLevel.signInLevel);
  const refreshTokenstate = useSelector(state => state.refreshTokenstate.refreshTokenstate);


  console.log(userdata);


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
        dispathRedux(settoken(response.data.access))
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
      url: `${BaseBackURL}api/v1/accounts/profile/update/${state.userId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    axios(config)
      .then((res) => {
        // console.log(JSON.stringify(res.data));
        // dispatch({ type: "SET_USER_DATA", payload: { ...res.data } });
        dispathRedux(setuserdata(res.data ));
        // dispatch({ type: "SET_SIGN_LEVEL", payload: 2 });
        dispathRedux(setsigninLevel(2));
        actions.resetForm();
        toast.success("ثبت با موفقیت انجام شد!", {
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
        if (error.response.data.national_code == "کد ملی معتبر نیست.") {
          toast.error("کد ملی معتبر نیست.", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        if (error.response.data.national_code == "کد ملی باید 10 رقمی باشد.") {
          toast.error("کد ملی باید 10 رقمی باشد.", {
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
      firstName: "",
      lastName: "",
      birthPlace: "",
      personalCode: "",
      birthDay: "",
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
    <>
      {signInLevel === 1 ? (
        <form onSubmit={handleSubmit} autoComplete="off">
          <Container>
            <Title>۱. اطلاعات شخصی خود را بنویسید:</Title>
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
                label="تاریخ تولد"
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
          <Title>۱. اطلاعات شخصی خود را بنویسید:</Title>
          <Form>
            <CustomInput
              label="نام"
              back="#ffffff"
              value={userdata.first_name}
              id="firstName"
            />

            <CustomInput
              label="نام خانوادگی"
              back="#ffffff"
              value={userdata.last_name}
              id="lastName"
            />

            <CustomInput
              label="محل تولد"
              back="#ffffff"
              value={userdata.birth_place}
              id="birthPlace"
            />

            <CustomInput
              label="کد ملی"
              back="#ffffff"
              value={userdata.national_code}
              id="personalCode"
            />

            <CustomInput
              label="تاریخ تولد"
              back="#ffffff"
              value={userdata.birth_date}
              id="birthDay"
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
