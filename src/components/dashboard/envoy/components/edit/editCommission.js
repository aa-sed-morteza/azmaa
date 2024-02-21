import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CustomInput from "../../../../general/customInput";
import Button from "../../../../general/button";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../../../context/userContext";
import { useFormik } from "formik";
import { commissionSchema } from "../../../../schema";
import axios from "axios";
import { BaseBackURL } from "../../../../../constant/api";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { settoken } from "../../../../../redux/slices/setTokenSlice";
import { setuserdata } from "../../../../../redux/slices/setuserDataSlice";
import Select from "react-select"

export default function EditCommission() {
  const navigate = useNavigate();
  const { state, dispatch } = useUser();
  const[commision,setCommision] = useState()
  const [selectedOption , setSelectedOption] = useState(null);

  const dispathRedux = useDispatch();
  const token = useSelector(state => state.token.token);
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
  useEffect(() => {
    let config = {
      method: "get",
      url: `${BaseBackURL}api/v1/fraction/`,
      headers: {
        Authorization: `Bearer ${token}`,
      }
    };
    axios(config)
    .then((res) => {
      console.log(res.data)
      let options = []
      for(const item of res.data) {
        options.push({value : res.data.indexOf(item) , label: item.name} )
      }
      // console.log(JSON.stringify(response.data));
      setCommision([
        ...options
      ])
    })
    .catch((error) => {
      console.log("Error", error);
      if (error.response.status == 401) {
  
      }
    });
  }, [])
  console.log(commision)

  const onSubmit = async (values, actions) => {
    const data = new FormData();
    data.append("fraction", values.commission + 2);

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
        console.log(res.data)
        // console.log(JSON.stringify(res.data));
        // dispatch({ type: "SET_USER_DATA", payload: { ...res.data } });
        
        dispathRedux(setuserdata(res.data  ));
        navigate("/dashboard");
        actions.resetForm();
        toast.success(" اصلاح با موفقیت انجام شد!", {
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
  const handleChangeItem = (selectedOption) => {
    setSelectedOption(selectedOption);
  }
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue
  } = useFormik({
    initialValues: {
      commission: "",
    },
    validationSchema: commissionSchema,
    onSubmit,
  });
  

  return (
    <Wraper>
      <FirstTitle>
        <p className="home">پنل / </p>
        <p className="component"> ویرایش کمیسیون مورد نظر </p>
      </FirstTitle>

      <form onSubmit={handleSubmit} autoComplete="off">
        <Container>
          <Title>۱. کمیسیون مورد نظر خود را تعیین کنید:</Title>
          <Form>
            {/* <CustomInput
              label="کمیسیون مورد نظر"
              back="#ffffff"
              value={values.commission}
              onChange={handleChange}
              id="commission"
            /> */}
             <Select 
            id="commission"
            value={selectedOption}
            onChange={(e) => {
              // handleChange();
              setFieldValue("commission" , e.value)
              handleChangeItem();
            }}
            options={commision}
            isSearchable={true}
            placeholder={"select"}
            
            />
            {errors.commission && touched.commission && (
              <ErrorText>{errors.commission}</ErrorText>
            )}
          </Form>
          <Box>
            <Button
              type="button"
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

const ErrorText = styled.p`
  color: #fc8181;
  font-size: 0.75rem;
  width: 100%;
  text-align: right;
  margin: 0;
  margin-right: 2%;
  margin-top: 2%;
`;
