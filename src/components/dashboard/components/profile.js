import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useUser } from "../../../context/userContext";
import remove from "../../../assets/remove.svg";
import camera from "../../../assets/camera.svg";
import gallery from "../../../assets/gallery.svg";
import Button from "../../general/button";
import Modal from "../../general/modal";
import useModal from "../../../hook/useModal";
import axios from "axios";
import { BaseBackURL } from "../../../constant/api";
import DefaultAvatar from "../../../assets/default-avatar.png";
import { setUserType } from "../../../redux/slices/userTypeSlice";

import { useDispatch, useSelector } from "react-redux";
import { settoken } from "../../../redux/slices/setTokenSlice";
import { setimage } from "../../../redux/slices/setImageSlice";


export default function Profile() {
  const { state, dispatch } = useUser();
  const { isShowing, toggle } = useModal();
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  const userType = useSelector((state) => state.userType.userType);
  

  const dispathRedux = useDispatch();

  const token = useSelector(state => state.token.token);
  const userdata = useSelector(state => state.userdata);
  const image = useSelector(state => state.image.image);
  const userId = useSelector(state => {
    return state.userID.id
  } );


  const refreshTokenstate = useSelector(state => state.refreshTokenstate.refreshTokenstate);

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
        // console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
        if (error.response.status == 401) {
          // refreshToken();
        }
      });
  };
  // const deletePicture = () => {
  //   const data = new FormData();
  //   data.append("image", selectedFile);
  //   let config = {
  //     method: "put",
  //     url: `${BaseBackURL}api/v1/accounts/profile/update/${userId}`,
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //     data: data,
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       // console.log(JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       if (error.response.status == 401) {
  //         // refreshToken();
  //       }
  //     });
  // };
  // *************


  return (
    <Container>
      <Content>
        <Image show={userType} onClick={toggle}>
          {selectedFile ? (
            <img src={preview} alt="profile-picture" />
          ) : (
            <img
              src={image ? image : DefaultAvatar}
              alt="profile-picture"
            />
          )}
        </Image>
        <Label color={userType}>
          <p className="title">
            {userType === "parliament_member"
              ? "نامزد انتخابات مجلس"
              : " همیار نامزد ها"}{" "}
          </p>
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
        <div onClick={() => {
          // dispathRedux(setimage(""));
          // deletePicture();
        }}>
          <Input icon={remove} >
            <p className="text">حذف عکس</p>
            <span></span>
          </Input>
        </div>

        <Box>
          <Button
            type="button"
            text="لغو"
            textColor="#095644"
            borderColor="#095644"
            width="35%"
            simple={true}
            click={toggle}
          />
          <Button
            text="ثبت"
            textColor="#FFFFFF"
            background="#095644"
            width="62%"
            click={() => {
              toggle();
              changePicture();
            }}
          />
        </Box>
      </Modal>
    </Container>
  );
}

const Container = styled.div`
  background: #f3f3f3;
  margin-inline: -30%;
  margin-top: -19%;
  padding: 18px;
  @media (min-width: 480px) {
    margin: 0;
    background: inherit;
    margin-top: 5px;
    padding: 2.083vw 1.563vw;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  @media (min-width: 480px) {
    justify-content: flex-start;
    gap: 20px;
  }
`;

const Image = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 4px solid #095644;
  box-shadow: 0px 6px 5px -3px rgba(0, 0, 0, 0.25);
  position: relative;
  &:after {
    content: "";
    display: ${(props) => (props.show == "envoy" ? "block" : "none")};
    position: absolute;
    width: 2.326vw;
    height: 2.326vw;
    border-radius: 2.326vw;
    background-color: #ff5a5a;
    top: -0.698vw;
    left: -1.837vw;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    object-fit: contain;
  }
  @media (min-width: 480px) {
    width: 90px;
    /* height: auto; */
    padding: 4px;
    &:after {
      width: 1.042vw;
      height: 1.042vw;
      left: -0.837vw;
    }
    img {
      object-fit: cover;
    }
  }
`;

const Label = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  .title {
    margin: 0;
    font-size: 2.791vw;
    font-weight: 300;
  }
  .name {
    margin: 0;
    font-weight: 700;
    font-size: 5.581vw;
  }
  .title,
  .name {
    color: ${(props) => (props.color == "envoy" ? "#095644" : "#707070")};
  }
  .edit {
    display: none;
  }
  @media (min-width: 480px) {
    .title {
      font-size: 1.042vw;
      color: #095644;
    }
    .name {
      font-size: 1.667vw;
    }
    .edit {
      display: block;
      color: #ffaa00;
      font-weight: 400;
      font-size: 1.25vw;
      margin: 0;
      cursor: pointer;
    }
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
