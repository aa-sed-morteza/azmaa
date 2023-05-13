import React, { useEffect, useState } from "react";
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
import { BaseBackURL } from "../../../../../../constant/api";
import axios from "axios";

export default function VoteEnvoy() {
  const { state, dispatch } = useUser();
  const navigate = useNavigate();
  const [select, setSelect] = useState(0);
  const [actions, setActions] = useState([]);
  const [votes, setVotes] = useState([
    { name: "positive", text: "موافق" },
    { name: "negative", text: "مخالف" },
    { name: "none", text: "ممتنع" },
    { name: "without_vote", text: "بدون رای" },
    { name: "absent", text: "غایب" },
  ]);

  const getActions = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}api/v1/activity/${state.typeAction.description}`,
    };

    axios(config).then((res) => {
      console.log(res.data);
      setActions([...res.data.activity_choice]);
    });
  };

  useEffect(() => {
    getActions();
  }, [state.typeAction.description]);

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

  const actionsItems = actions.map((item, i) => {
    return (
      <RadioButton
        key={i}
        onClick={() => {
          setFieldValue("vote", item.id);
          setSelect(i + 1);
        }}
      >
        <input
          type="radio"
          name="vote"
          value={values.vote}
          onChange={() => {
            setFieldValue("vote", item.id);
          }}
          checked={values.vote === item.id}
        />
        <label htmlFor="vote">{item.name}</label>
        <img src={select == i + 1 ? activeAgree : agree} />
      </RadioButton>
    );
  });


  const checkActionsItems = actions.map((item, i) => {
    return (
      <RadioButton key={i}>
        <input
          type="radio"
          name="vote"
          value={state.voteEnvoy}
          checked={state.voteEnvoy == item.id}
        />
        <label htmlFor="text">{item.name}</label>
        <img src={state.voteEnvoy == item.id ? activeAgree : agree} />
      </RadioButton>
    );
  });

  const voteItems = votes.map((item, i) => {
    return (
      <RadioButton
        key={i}
        onClick={() => {
          setFieldValue("vote", item.name);
          setSelect(i + 1);
        }}
      >
        <input
          type="radio"
          name="vote"
          value={values.vote}
          onChange={() => {
            setFieldValue("vote", item.name);
          }}
          checked={values.vote == item.name}
        />
        <label htmlFor="vote">{item.text}</label>
        <img src={select == i + 1 ? activeAgree : agree} />
      </RadioButton>
    );
  });

  const checkVoteItems = votes.map((item, i) => {
    return (
      <RadioButton key={i}>
        <input
          type="radio"
          name="vote"
          value={state.voteEnvoy}
          checked={state.voteEnvoy == item.name}
        />
        <label htmlFor="text">{item.text}</label>
        <img src={state.voteEnvoy == item.name ? activeAgree : agree} />
      </RadioButton>
    );
  });

  return (
    <>
      {state.addActionLevel === 3 ? (
        <form onSubmit={handleSubmit} autoComplete="off">
          <Container>
            <Title>۳. عملکرد نماینده را انتخاب کنید:</Title>
            {actionsItems}
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
              simple={true}
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
      ) : (
        <Container>
          <Title>۳. عملکرد نماینده را انتخاب کنید:</Title>
          {checkActionsItems}
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
  @media (min-width: 480px) {
    width: 80%;
    margin: 1.042vw auto;
    input {
      width: 1.563vw;
      height: 1.563vw;
    }
    label {
      font-size: 1.563vw;
    }
    img {
      width: 2.604vw;
      height: 2.604vw;
    }
  }
`;
