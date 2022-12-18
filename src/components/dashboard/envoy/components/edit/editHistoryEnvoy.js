import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../../../general/button";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../../context/userContext";
import { useFormik } from "formik";
import { dutieHistoryAreaSchema } from "../../../../schema";
import DutieForm from "../../../../envoy-sign-in/components/dutieForm";

export default function EditHistoryEnvoy() {
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

  const ddd = ()=>{
    return <DutieForm id={count} key={count}/>;
  }

  useEffect(() => {
    abs();
  }, [count]);

  const onSubmit = async (values, actions) => {
    dispatch({ type: "SET_DUTIE_HISTORY", payload: values });
    actions.resetForm();
    navigate("/dashboard");
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
              <DutieForm id={1} value={values} onChange={handleChange} errors={errors} touched={touched} setDate={setFieldValue} />
              {/* {ddd()} */}
            
             
            </Form>
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
  @media(min-width:480px){
    padding:2.083vw 2.604vw;
  }
`;
const Title = styled.h2`
  padding-right: 36px;
  margin: 0;
  color: #9f9f9f;
  font-size: 4.651vw;
  font-weight: 300;
  margin-bottom: 10px;
  @media(min-width:480px){
    font-size:1.250vw;
    margin-bottom:1.042vw;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media(min-width:480px){
    width:90%;
    gap:1.302vw;
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
