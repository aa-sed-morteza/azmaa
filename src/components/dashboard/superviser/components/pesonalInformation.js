import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useModal from "../../../../hook/useModal";
import { useUser } from "../../../context/userContext";
import Modal from "../../../general/modal";
import ContactInfo from "./contactInfo";
import LogInInfo from "./logInInfo";
import PersonalInfo from "./personalInfo";
import remove from "../../../../assets/remove.svg";
import camera from "../../../../assets/camera.svg";
import gallery from "../../../../assets/gallery.svg";
import Button from "../../../general/button";

export default function PersonalInformation() {
  const { state, dispatch } = useUser();
  const { isShowing, toggle } = useModal();
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const inputRef = useRef();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    // dispatch({ type: "SET_IMAGE", payload: preview });

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  return (
    <Container>
      <Content>
        <Image onClick={toggle}>
          {selectedFile && <img src={preview} alt="profile-picture" />}
        </Image>
        <Label>
          <p className="title">ناظر نمایندگان</p>
          <p className="name">{`${state.firstName}   ${state.lastName}`}</p>
          <p className="edit" onClick={toggle}>
            ویرایش تصویر{" "}
          </p>
        </Label>
      </Content>
      <Modal isShowing={isShowing} hide={toggle} title="انتخاب عکس پروفایل ">
        <Input icon={gallery} text="انتخاب از گالری">
          <input type="file" onChange={onSelectFile} />
          <span></span>
        </Input>
        <Input icon={camera} text="عکاسی با دوربین">
          <input type="file" onChange={onSelectFile} />
          <span></span>
        </Input>
        <Input icon={remove}>
          <p className="text">حذف عکس</p>
          <span></span>
        </Input>

        <Box>
          <Button
            text="لغو"
            textColor="#095644"
            borderColor="#095644"
            width="35%"
            click={toggle}
          />
          <Button
            text="ثبت"
            textColor="#FFFFFF"
            background="#095644"
            width="62%"
            click={toggle}
          />
        </Box>
      </Modal>
      <PersonalInfo />
      <LogInInfo />
      <ContactInfo />
      <Edit>
        <p className="text">ویرایش حساب کاربری</p>
      </Edit>
    </Container>
  );
}

const Container = styled.div`
  background: #ffffff;
  border-radius: 4px;
  padding: 24px 10px 16px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (min-width: 480px) {
    padding: 0;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-right: 10px;
  @media (min-width: 480px) {
    display: none;
  }
`;

const Image = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 90px;
  border: 4px solid #707070;
  box-shadow: 0px 6px 5px -3px rgba(0, 0, 0, 0.25);
  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    object-fit: contain;
  }
  .not-image {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background-color: #f3f3f3;
  }
`;

const Label = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  .title {
    margin: 0;
    color: #707070;
    font-size: 2.791vw;
    font-weight: 300;
  }
  .name {
    margin: 0;
    color: #707070;
    font-weight: 700;
    font-size: 5.581vw;
  }
  .edit {
    margin: 0;
    color: #ffaa00;
    font-weight: 400;
    font-size: 3.256vw;
  }
`;

const Edit = styled.div`
  border: 1px solid #095644;
  border-radius: 4px;
  padding: 7px;
  .text {
    text-align: center;
    margin: 0;
    font-weight: 300;
    font-size: 3.721vw;
    color: #095644;
  }
  @media (min-width: 480px) {
    display: none;
  }
`;

const Input = styled.div`
  background: #eaeaea;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4.651vw;
  margin-bottom: 2.326vw;
  input {
    &::-webkit-file-upload-button {
      visibility: hidden;
    }
    &:before {
      content: "${(props) => props.text}";
      display: inline-block;
      color: #9f9f9f;
      text-align: center;
      outline: none;
      white-space: nowrap;
      -webkit-user-select: none;
      cursor: pointer;
      font-weight: 300;
      font-size: 4.651vw;
    }
  }
  input[type="file"] {
    color: rgba(0, 0, 0, 0);
    width: 100%;
  }

  .text {
    margin: 0;
    color: #9f9f9f;
    font-weight: 300;
    font-size: 4.651vw;
  }
  span {
    width: 6.977vw;
    height: 6.977vw;
    background-image: url(${(props) => props.icon});
    background-size: contain;
    background-repeat: no-repeat;
  }
  @media (min-width: 480px) {
    padding: 1.302vw;
    margin-bottom: 1.302vw;
    input {
      &:before {
        font-size: 1.458vw;
      }
    }
    .text {
      font-size: 1.458vw;
    }
    span {
      width: 1.823vw;
      height: 1.823vw;
    }
  }
`;

const Box = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  @media (min-width: 480px) {
    justify-content: center;
    gap: 1.563vw;
  }
`;
