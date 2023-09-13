import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../../../general/button";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../../../context/userContext";
import { useFormik } from "formik";
import { AreaSchema } from "../../../../schema";
import Select from "../../../../general/select";
import SelectNumber from "../../../../general/selectNumber";
import axios from "axios";
import { BaseBackURL } from "../../../../../constant/api";
import { toast } from "react-toastify";

export default function EditEnvoyState() {
  const navigate = useNavigate();
  const { state, dispatch } = useUser();
  const [areaName, setAreaName] = useState([]);

  const getElectoralDistrict = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}api/v1/electoral_district/?city__id&city__province__id`,
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        response.data.map((x) => {
          setAreaName([...areaName, x.name]);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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

  const onSubmit = async (values, actions) => {
    const data = new FormData();
    data.append("electoral_district.name", values.areaName);
    data.append("vote_number", values.voteNumber);

    let config = {
      method: "put",
      url: `${BaseBackURL}api/v1/accounts/profile/update/${state.id}`,
      headers: {
        Authorization: `Bearer ${state.token}`,
      },
      data: data,
    };

    axios(config)
      .then((res) => {
        // console.log(JSON.stringify(res.data));
        dispatch({ type: "SET_USER_DATA", payload: { ...res.data } });
        navigate("/dashboard");
        actions.resetForm();
        toast.success(" اصلاحات با موفقیت انجام شد!", {
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
      areaName: state.electoral_district_name,
      voteNumber: state.vote_number,
    },
    validationSchema: AreaSchema,
    onSubmit,
  });

  useEffect(() => {
    getElectoralDistrict();
  }, []);

  // Convert persianNumber to englishNumber
  //   useEffect(() => {
  //     setFieldValue(
  //       "voteNumber",
  //       values.voteNumber
  //         .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
  //         .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d))
  //     );

  // }, [values.voteNumber]);

  return (
    <Wraper>
      <FirstTitle>
        <p className="home">پنل / </p>
        <p className="component"> ویرایش حوزه وآرا </p>
      </FirstTitle>

      <form onSubmit={handleSubmit} autoComplete="off">
        <Container>
          <Title>۱. اطلاعات حوزۀ انتخابیه را وارد کنید:</Title>
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
  height: 100vh;
`;

const FirstTitle = styled.div`
  display: flex;
  margin-bottom: 12px;
  .home {
    font-size: 3.721vw;
    font-weight: 700;
    margin: 0;
    color: rgba(0, 0, 0, 0.2);
    padding-left: 7px;

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

const ErrorText = styled.p`
  color: #fc8181;
  font-size: 0.75rem;
  width: 100%;
  text-align: right;
  margin: 0;
  margin-right: 2%;
  margin-top: 2%;
`;
