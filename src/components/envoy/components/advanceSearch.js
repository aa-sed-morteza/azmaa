import React, { useEffect, useState } from "react";
import styled from "styled-components";
import icon from "../../../assets/down.webp";
import arrow from "../../../assets/arrowUp.webp";
import axios from "axios";
import { BaseBackURL } from "../../../constant/api";

export default function AdvanceSearch({setEnvoys}) {
  const [open, setOpen] = useState(false);
  const [commission, setCommission] = useState(false);
  const [commissionText, setCommissionText] = useState("همۀ کمیسیون‌ها");
  const [area, setArea] = useState(false);
  const [areaText, setAreaText] = useState("همۀ حوزه‌ها");
  const [district, setDistrict] = useState([]);
  const [sex, setSex] = useState(false);
  const [sexText, setSexText] = useState("مرد و زن");
  const [allEnvoys,setAllEnvoys]=useState([]);

  const getEnvoys = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}api/v1/accounts/parliament_member/`,
    };

    axios(config).then((res) => {
      // console.log(res.data);
      if (res.data.length > 0) {
        setAllEnvoys([...res.data]);
      }
    });
  };

  const getDistrict = () => {
    var config = {
      method: "get",
      url: `${BaseBackURL}api/v1/electoral_district/?city__id=&city__province__id`,
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setDistrict([...response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(()=>{
    getDistrict();
    getEnvoys();
  },[])

 

  const districtItems = district.map((item,i)=>{
    return(
      <Item key={i} onClick={()=>{setAreaText(item.name);  setArea(false)}}>{item.name}</Item>
    )
  })

 

  useEffect(()=>{
    if(allEnvoys.find(x=>x.electoral_district_name == areaText)){
      setEnvoys([allEnvoys.find(x=>x.electoral_district_name == areaText)])
    }else{
      setEnvoys(allEnvoys)
    }
  },[areaText])

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const checkCommission = (e) => {
    setCommissionText(e.target.innerHTML);
    setCommission(false);
  };

  const checkArea = (e) => {
    setAreaText(e.target.innerHTML);
    setArea(false);
  };

  const checkSex = (e) => {
    setSexText(e.target.innerHTML);
    setSex(false);
  };

  return (
    <Container open={open}>
      <SearchButton onClick={handleOpen} icon={open}>
        <p className="label">{!open ? " جستجوی پیشرفته " : "جستجوی ساده"}</p>
      </SearchButton>

      {open ? (
        <>
          <Items style={{ marginTop: "10px" }}>
            <DropDown
              icon={commission}
              onClick={() => {
                setCommission(!commission);
              }}
            >
              <p className="label">{commissionText}</p>
            </DropDown>
            {commission && (
              <>
                <Item onClick={checkCommission}>ورزش</Item>
                <Item onClick={checkCommission}>سلامت وبهداشت</Item>
                <Item onClick={checkCommission}>امنیت ملی</Item>
              </>
            )}
          </Items>
          <Items>
            <DropDown
              icon={area}
              onClick={() => {
                setArea(!area);
              }}
            >
              <p className="label">{areaText} </p>
            </DropDown>
            {area && (
              <>
                {/* <Item onClick={checkArea}>غرب</Item>
                <Item onClick={checkArea}>شرق</Item>
                <Item onClick={checkArea}>شمال</Item> */}
                {districtItems}
              </>
            )}
          </Items>
          <Items>
            <DropDown
              icon={sex}
              onClick={() => {
                setSex(!sex);
              }}
            >
              <p className="label">{sexText} </p>
            </DropDown>
            {sex && (
              <>
                <Item onClick={checkSex}>مرد</Item>
                <Item onClick={checkSex}>زن</Item>
              </>
            )}
          </Items>
        </>
      ) : (
        ""
      )}
    </Container>
  );
}

const Container = styled.section`
  border: 1px solid #cbcbcb;
  border-radius: 4px;
  padding: 10px;
  margin-top: 10px;
cursor: pointer;
  @media (min-width: 481px) {
    width: 50.5%;
    margin: auto;
    margin-top: 25px;
    padding: 14px;
    border-radius: 8px;
  }
`;

const SearchButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.521vw;
  &:after {
    content: "";
    width: 9px;
    height: 5px;
    display: inline-flex;
    background-image: url(${(props) => (props.icon ? arrow : icon)});
    background-size: cover;
    background-repeat: no-repeat;
  }
  .label {
    font-size: 3.72vw;
    text-align: center;
    margin: 0;
    color: #9f9f9f;
  }
  @media (min-width: 481px) {
    &:after {
      width: 15px;
      height: 9px;
    }

    .label {
      font-size: 1.25vw;
    }
  }
`;

const DropDown = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
 
  &:after {
    content: "";
    width: 9px;
    height: 5px;
    display: inline-flex;
    background-image: url(${(props) => (props.icon ? arrow : icon)});
    background-size: cover;
    background-repeat: no-repeat;
    margin-right: auto;
  }
  .label {
    color: #707070;
    margin: 0;
    margin-right: auto;
  }
  @media (min-width: 481px) {
    padding: 15px;
    border-radius: 4px;
    &:after {
      width: 15px;
      height: 9px;
    }
  }
`;

const Items = styled.div`
  border: 1px solid #707070;
  border-radius: 2px;
  padding: 5px 15px;
  margin-bottom: 10px;
  max-height: 200px;
  overflow-y: auto;
`;

const Item = styled.div`
  border: 1px solid #707070;
  border-radius: 2px;
  padding: 5px 15px;
  margin-bottom: 10px;
  text-align: center;
  
`;
