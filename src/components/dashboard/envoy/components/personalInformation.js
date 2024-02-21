import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useUser } from "../../../../context/userContext";
import ContactInfo from "../../superviser/components/contactInfo";
import LogInInfo from "../../superviser/components/logInInfo";
import PersonalInfo from "../../superviser/components/personalInfo";
import CommissinInfo from "./commissonInfo";
import EnvoyState from "./envoyState";
import HistoryEnvoy from "./history";
import remove from "../../../../assets/remove.svg";
import camera from "../../../../assets/camera.svg";
import gallery from "../../../../assets/gallery.svg";
import Button from "../../../general/button";
import Modal from "../../../general/modal";
import useModal from "../../../../hook/useModal";
import { Navigate, useNavigate } from "react-router-dom";
import DefaultAvatar from "../../../../assets/default-avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { BaseBackURL } from "../../../../constant/api";
import axios from "axios";

export default function PersonalInformation() {
  const { state, dispatch } = useUser();
  const { isShowing, toggle } = useModal();
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const inputRef = useRef();
  const navigate = useNavigate();

  const userType = useSelector((state) => state.userType.userType);

  const dispathRedux = useDispatch();

  const token = useSelector((state) => state.token.token);
  const userdata = useSelector((state) => state.userdata);
  const image = useSelector((state) => state.image.image);
  const userId = useSelector((state) => {
    return state.userID.id;
  });

  const changePicture = () => {
    const data = new FormData();
    data.append("image", selectedFile);
    let config = {
      method: "put",
      url: `${BaseBackURL}api/v1/accounts/profile/update/${userId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response);
        // console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
        if (error.response.status == 401) {
          // refreshToken();
        }
      });
  };

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
          {selectedFile ? (
            <img src={preview} alt="profile-picture" />
          ) : (
            <img src={image ? image : DefaultAvatar} alt="profile-picture" />
          )}
        </Image>
        <Label>
          <p className="title">نامزد انتخابات مجلس</p>
          <p className="name">{`${userdata.first_name}   ${userdata.last_name}`}</p>
          <p className="edit" onClick={toggle}>
            ویرایش تصویر
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
            type="button"
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
            click={() => {
              // toggle
              changePicture();
              toggle();
            }}
          />
        </Box>
      </Modal>
      <PersonalInfo />
      <LogInInfo />
      <ContactInfo />
      <EnvoyState />
      <CommissinInfo />
      <HistoryEnvoy />
      <Edit
        onClick={() => {
          navigate("edit");
        }}
      >
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
