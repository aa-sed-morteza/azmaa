import React, { useState } from "react";
import styled from "styled-components";
import { voteSchema } from "../../../../../schema/index";
import Button from "../../../../../general/button";
import { useUser } from "../../../../../context/userContext";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import activeAgree from "../../../../../../assets/agree.svg";
import agree from "../../../../../../assets/agree1.svg";
import activeDisagree from "../../../../../../assets/disagree1.svg";
import disagree from "../../../../../../assets/disagree.svg";
import not from "../../../../../../assets/not.svg";
import activeNot from "../../../../../../assets/not1.svg";




export default function VoteEnvoy() {
  const { state, dispatch } = useUser();
  const navigate = useNavigate();
  const [select, setSelect] = useState(0);

  const onSubmit = async (values, actions) => {
    dispatch({ type: "SET_VOTE_ENVOY", payload: values.vote });
    dispatch({ type: "SET_ADD_ACT_LEVEL", payload: 4 });
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
    setFieldValue,
  } = useFormik({
    initialValues: {
      vote: "",
    },
    validationSchema: voteSchema,
    onSubmit,
  });

  console.log('value',values)

  return (
    <>
      {state.addActionLevel === 3 ? (
        <form onSubmit={handleSubmit} autoComplete="off">
          <Container>
            <Title>۳. رأی نماینده را انتخاب کنید:</Title>
            <RadioButton
              onClick={() => {
                setFieldValue("vote", "موافق");
                setSelect(1);
              }}
            >
              <input
                type="radio"
                name="vote"
                value={values.vote}
                onChange={() => {
                  setFieldValue("vote", "موافق");
                }}
                checked={values.vote == "موافق"}
              />
              <label htmlFor="vote">موافق</label>
              <img src={select == 1 ? activeAgree : agree} />
            </RadioButton>
            <RadioButton
              onClick={() => {
                setFieldValue("vote", "مخالف");
                setSelect(2);
              }}
            >
              <input
                type="radio"
                name="vote"
                value={values.vote}
                onChange={() => {
                  setFieldValue("vote", "مخالف");
                }}
                checked={values.vote == "مخالف"}
              />
              <label htmlFor="vote">مخالف</label>
              <img src={select == 2 ? activeDisagree : disagree} />
            </RadioButton>

            <RadioButton
              onClick={() => {
                setFieldValue("vote", "ممتنع");
                setSelect(3);
              }}
            >
              <input
                type="radio"
                name="vote"
                value={values.vote}
                onChange={() => {
                  setFieldValue("vote", "ممتنع");
                }}
                checked={values.vote == "ممتنع"}
              />
              <label htmlFor="vote">ممتنع</label>
              <img src={select == 3 ? activeNot : not} />
            </RadioButton>

            <RadioButton
              onClick={() => {
                setFieldValue("vote", "نامشخص");
                setSelect(4);
              }}
            >
              <input
                type="radio"
                name="vote"
                value={values.vote}
                onChange={() => {
                  setFieldValue("vote", "نامشخص");
                }}
                checked={values.vote == "نامشخص"}
              />
              <label htmlFor="vote">نامشخص</label>
            </RadioButton>

            {errors.vote && touched.vote && (
              <ErrorText>{errors.vote}</ErrorText>
            )}
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
          <Title>۳. رأی نماینده را انتخاب کنید:</Title>

          <RadioButton>
            <input
              type="radio"
              name="vote"
              value={state.voteEnvoy}
              checked={state.voteEnvoy == "موافق"}
            />
            <label htmlFor="text">یادداشت</label>
            <img src={state.voteEnvoy == "موافق" ? activeAgree : agree} />
          </RadioButton>

          <RadioButton>
            <input
              type="radio"
              name="vote"
              value={state.voteEnvoy}
              checked={state.voteEnvoy == "مخالف"}
            />
            <label htmlFor="text">مخالف</label>
            <img src={state.voteEnvoy == "مخالف" ? activeDisagree : disagree} />
          </RadioButton>

          <RadioButton>
            <input
              type="radio"
              name="vote"
              value={state.voteEnvoy}
              checked={state.voteEnvoy == "ممتنع"}
            />
            <label htmlFor="text">ممتنع</label>
            <img src={state.voteEnvoy == "ممتنع" ? activeNot : not} />
          </RadioButton>

          <RadioButton>
            <input
              type="radio"
              name="vote"
              value={state.voteEnvoy}
              checked={state.voteEnvoy == "نامشخص"}
            />
            <label htmlFor="text">نامشخص</label>
          </RadioButton>
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
`;
const Title = styled.h2`
  padding-right: 36px;
  margin: 0;
  color: #707070;
  font-size: 4.651vw;
  font-weight: 400;
  margin-bottom: 10px;
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

const RadioButton = styled.div`
  padding: 15px;
  display: flex;
  gap: 10px;
  align-items: center;
  background-color: #eaeaea;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  margin-bottom: 10px;
  input {
    width: 28px;
    height: 28px;
    color: 9F9F9F;
    accent-color: cadetblue;
  }
  label {
    color: #9f9f9f;
    font-size: 4.651vw;
    font-weight: 300;
  }
  img {
    width: 25px;
    heright: 30px;
    margin-right: auto;
  }
  &:has(input[type="radio"]:checked) {
    background-color: #dff5f0;
    border: 1px solid #6cbba9;
    label {
      color: #095644;
      font-weight: 400;
    }
  }
`;
