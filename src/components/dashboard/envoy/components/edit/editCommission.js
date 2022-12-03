import React from "react";
import styled from "styled-components";
import CustomInput from "../../../../general/customInput";
import Button from "../../../../general/button";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../../context/userContext";
import { useFormik } from "formik";
import { commissionSchema } from "../../../../schema";

export default function EditCommission() {
  const navigate = useNavigate();
  const { state, dispatch } = useUser();

  const onSubmit = async (values, actions) => {
    dispatch({ type: "SET_COMMISSION", payload: values.commission });
    navigate("/dashboard");

    actions.resetForm();
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
      commission: state.commission,
    },
    validationSchema: commissionSchema,
    onSubmit,
  });

  return (
    <Wraper>
      <FirstTitle>
        <p className="home">پنل / </p>
        <p className="component"> ویرایش کمیسیون </p>
      </FirstTitle>

      <form onSubmit={handleSubmit} autoComplete="off">
        <Container>
          <Title>۱. کمیسیون خود را تعیین کنید:</Title>
          <Form>
            <CustomInput
              label="کمیسیون"
              back="#ffffff"
              value={values.commission}
              onChange={handleChange}
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
`;
const Title = styled.h2`
  padding-right: 36px;
  margin: 0;
  color: #9f9f9f;
  font-size: 4.651vw;
  font-weight: 300;
  margin-bottom: 10px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
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
