import React, { useEffect } from "react";
import styled from "styled-components";
import CustomInput from "../../general/customInput";
import Button from "../../general/button";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../context/userContext";
import { useFormik } from "formik";
import { contactSchema } from "../../schema";
import axios from "axios";
import { BaseBackURL } from "../../../constant/api";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { settoken } from "../../../redux/slices/setTokenSlice";
import { setuserdata } from "../../../redux/slices/setuserDataSlice";
import { setsigninLevel } from "../../../redux/slices/setSignLevelSlice";


export default function Contacts() {
  const navigate = useNavigate();
  const { state, dispatch } = useUser();

  const dispathRedux = useDispatch();
  const token = useSelector(state => state.token.token);
  const userdata = useSelector(state => state.userdata);
  const signInLevel = useSelector(state => state.signInLevel.signInLevel);
  const refreshTokenstate = useSelector(state => state.refreshTokenstate.refreshTokenstate);



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
    data.append("mobileNumber", values.mobileNumber);
    data.append("email", values.email);
    data.append("address", values.address);
    data.append("telephone", values.phoneNubmer);

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
        dispathRedux(setuserdata(res.data  ));
        // dispatch({ type: "SET_SIGN_LEVEL", payload: 3 });
        dispathRedux(setsigninLevel(3));
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
        if (error.response.data.telephone == "شماره تلفن معتبر نیست.") {
          toast.error("شماره تلفن معتبر نیست.", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        if (error.response.data.email == "Enter a valid email address.") {
          toast.error("لطفا آدرس ایمیل را به درستی وارد کنید", {
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
      mobileNumber: "",
      email: "",
      address: "",
      phoneNubmer: "",
    },
    validationSchema: contactSchema,
    onSubmit,
  });

  // Convert persianNumber to englishNumber
  useEffect(() => {
    setFieldValue(
      "mobileNumber",
      values.mobileNumber
        .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
        .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d))
    );
  }, [values.mobileNumber]);

  // Convert persianNumber to englishNumber
  useEffect(() => {
    setFieldValue(
      "phoneNubmer",
      values.phoneNubmer
        .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
        .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d))
    );
  }, [values.phoneNubmer]);

  return (
    <>
      {signInLevel === 2 ? (
        <form onSubmit={handleSubmit} autoComplete="off">
          <Container>
            <Title>2. اطلاعات تماس خود را بنویسید:</Title>
            <Form>
              <CustomInput
                label="شمارۀ همراه"
                back="#ffffff"
                value={values.mobileNumber}
                onChange={handleChange}
                id="mobileNumber"
              />
              {errors.mobileNumber && touched.mobileNumber && (
                <ErrorText>{errors.mobileNumber}</ErrorText>
              )}
              <CustomInput
                label=" ایمیل"
                back="#ffffff"
                dir="ltr"
                value={values.email}
                onChange={handleChange}
                id="email"
              />
              {errors.email && touched.email && (
                <ErrorText>{errors.email}</ErrorText>
              )}
              <CustomInput
                label=" نشانی"
                back="#ffffff"
                value={values.address}
                onChange={handleChange}
                id="address"
              />
              {errors.address && touched.address && (
                <ErrorText>{errors.address}</ErrorText>
              )}
              <CustomInput
                label=" شمارۀ ثابت"
                back="#ffffff"
                value={values.phoneNubmer}
                onChange={handleChange}
                id="phoneNubmer"
              />
              {errors.phoneNubmer && touched.phoneNubmer && (
                <ErrorText>{errors.phoneNubmer}</ErrorText>
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
          <Title>۲. اطلاعات تماس خود را بنویسید:</Title>
          <Form>
            <CustomInput
              label="شمارۀ همراه"
              back="#ffffff"
              value={state.userName}
            />

            <CustomInput label=" ایمیل" back="#ffffff" value={userdata.email} />

            <CustomInput label=" نشانی" back="#ffffff" value={userdata.address} />

            <CustomInput
              label=" شمارۀ ثابت"
              back="#ffffff"
              value={userdata.telephone}
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
