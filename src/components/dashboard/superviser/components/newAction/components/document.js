import React, { useState } from "react";
import styled from "styled-components";
import { documentSchema } from "../../../../../schema/index";
import Button from "../../../../../general/button";
import { useUser } from "../../../../../../context/userContext";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import FileUploadInput from "../../../../../general/fileUploadInput";
import CustomInput from "../../../../../general/customInput";
import axios from "axios";
import { BaseBackURL } from "../../../../../../constant/api";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { settoken } from "../../../../../../redux/slices/setTokenSlice";
import { setactionlevel } from "../../../../../../redux/slices/addActionLevelSlice";


export default function Document() {
  const { state, dispatch } = useUser();
  const navigate = useNavigate();

  const dispathRedux = useDispatch();
  const token = useSelector(state => state.token.token);
  const refreshTokenstate = useSelector(state => state.refreshTokenstate.refreshTokenstate);
  const selectEnvoy = useSelector(state => state.selectEnvoy.selectEnvoy);
  const voteEnvoy = useSelector(state => state.voteEnvoy.voteEnvoy);
  const userType = useSelector((state) => state.userType.userType);




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
    if (userType === "superviser") {
      const data = new FormData();
      data.append("activity_id", state.typeAction.description);
      data.append("activity_choice_id", voteEnvoy);
      data.append("voter_id", selectEnvoy.envoy);

      let config = {
        method: "post",
        url: `${BaseBackURL}api/v1/vote/activity/`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          toast.success(" فعالیت با موفقیت ثبت شد!", {
            position: toast.POSITION.TOP_RIGHT,
          });
          // dispatch({ type: "SET_ADD_ACT_LEVEL", payload: 1 });
          dispathRedux(setactionlevel(1));
          navigate("/dashboard/myActions");
          actions.resetForm();
        })
        .catch(function (error) {
          console.log(error);
          if (error.response.status === 401) {
            // refreshToken();
            toast.error("لطفا مجدد تلاش کنید", {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        });
    } else {
      const data = new FormData();
      data.append("activity_id", state.typeAction.description);
      // data.append("activity_choice_id", state.voteEnvoy);
      data.append("activity_choice_id", 1);

      let config = {
        method: "post",
        url: `${BaseBackURL}api/v1/vote/activity/`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          toast.success(" فعالیت با موفقیت ثبت شد!", {
            position: toast.POSITION.TOP_RIGHT,
          });
          // dispatch({ type: "SET_ADD_ACT_LEVEL", payload: 1 });
          dispathRedux(setactionlevel(1));
          navigate("/dashboard/myActions");
          actions.resetForm();
        })
        .catch(function (error) {
          console.log(error);
          if (error.response.status == 401) {
            // refreshToken();
            toast.error("لطفا مجدد تلاش کنید", {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        });
    }
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
      document: null,
      expand: "",
    },
    validationSchema: documentSchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Container>
        <Title>۴. سند درخواست خود را بارگذاری کنید:</Title>
        <Form>
          <FileUploadInput
            placeholder="بارگذاری سند"
            id="document"
            onChange={(event) => {
              setFieldValue("document", event.currentTarget.files[0]);
            }}
          />

          <CustomInput
            label="درج توضیحات (اختیاری)"
            value={values.expand}
            onChange={handleChange}
            id="expand"
            type="textarea"
            back="#FFFFFF"
          />
        </Form>
        {errors.document && touched.document && (
          <ErrorText>{errors.document}</ErrorText>
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
          text="ثبت فعالیت"
          textColor="#FFFFFF"
          background="#095644"
          width="62%"
          type="submit"
        />
      </Box>
    </form>
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

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (min-width: 480px) {
    width: 84%;
    margin: auto;
    gap: 1.302vw;
  }
`;
