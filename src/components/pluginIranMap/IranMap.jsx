import React, { useState, useEffect } from "react";
import iranProvinces from "../data/iranProvinces";
import iranBorder, { caspianD, persianGulfD } from "../data/IranMapData";
import styles from "./IranMap.module.css";
import styled from "styled-components";
import arrow from "../../assets/ggArrow.svg";
import { useFormik } from "formik";
import { provinceSchema } from "../schema/index";
import axios from "axios";
import { BaseBackURL } from "../../constant/api";
import { useUser } from "../context/userContext";

const useMouse = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handle(e) {
      setMousePosition({
        x: e.pageX,
        y: e.pageY,
      });
    }
    const mapEffect = document.querySelector("svg");
    mapEffect.addEventListener("mousemove", handle);
    return () => document.removeEventListener("mousemove", handle);
  }, [setMousePosition]);

  return mousePosition;
};

const IranMap = ({ position, empty }) => {
  const { state, dispatch } = useUser();
  const { x, y } = useMouse();
  const [provinces, setProvinces] = useState(iranProvinces);
  const [data, setData] = useState([]);
  const [change, setChange] = useState(false);
  const [provinceName, setProvinceName] = useState("");
  const [provinceNameOnClick, setProvinceNameOnClick] = useState("");
  const [mapZoom, setMapZoom] = useState(false);
  const [provinceSelected, setProvinceSelected] = useState(false);
  const [cities, setCities] = useState(["تمام ایران"]);
  const [input, setInput] = useState("استان خود را انتخاب کنید");
  const [envoys, setEnvoys] = useState([]);
  const [citeis, setCiteis] = useState([]);
  //get provinces of iran
  const getProvince = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}api/v1/city/`,
    };

    axios(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        setData(response.data);
        selectProvinces();
        setChange(!change);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const selectProvinces = () => {
    let box = [];
    data.map((item) => {
      iranProvinces.map((x) => {
        if (x.name === item.province_name) {
          box.push(x);
        }
      });
    });

    setProvinces([...new Set(box)]);
  };

  const addCities = () => {
    provinces.map((item) => {
      for (let i = 0; i < data.length; i++) {
        if (
          item.name === data[i].province_name &&
          !item.cities.includes(data[i].name)
        ) {
          item.cities.push(data[i].name);
        }
      }
    });
  };

  useEffect(() => {
    getProvince();
  }, []);

  const getEnvoys = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}api/v1/accounts/parliament_member/`,
    };

    axios(config).then((res) => {
      // console.log(res.data);
      if (res.data.length > 0) {
        setEnvoys([...res.data]);
      }
    });
  };

  const getCiteis = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}api/v1/city/`,
    };

    axios(config).then((res) => {
      // console.log(res.data);
      if (res.data.length > 0) {
        setCiteis([...res.data]);
      }
      state.city = citeis;
    });
  };

  useEffect(() => {
    if (provinces.length == 0) {
      selectProvinces();
      setChange(!change);
    } else {
      if (provinces.map((item) => item.cities.length == 0)) {
        addCities();
      }
    }
  }, [change]);

  useEffect(() => {
    if (state.removeCityFilter === true) {
      setProvinceSelected(false);
      setProvinceNameOnClick("");
      setProvinceName("");
      setFieldValue("city", []);
      setFieldValue("province", "");
    }
  }, [state.removeCityFilter]);

  const onSubmit = async (values, actions) => {
    if (values) {
      setProvinceSelected(false);
      // setCities(values.city);
      dispatch({ type: "SET_PROVINCE_SEARCH", payload: values.province });
      dispatch({ type: "SET_CITY_SEARCH", payload: values.city });
      dispatch({ type: "REMOVE_CITY_FILTER", payload: false });
      // setChange(!change)
      // dispatch({ type: "SET_ELECTORAL_DISTRICT", payload: values.password });
      // setProvinceName(values.province);
      // setProvinceNameOnClick(values.province);
    } else {
      dispatch({ type: "SET_CITY", payload: "تمام ایران" });
    }
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
      province: "",
      city: [],
    },
    validationSchema: provinceSchema,
    onSubmit,
  });
  console.log("select_city", values.city);

  return (
    <Container position={position}>
      {values.province == "" && <p className="input">{input}</p>}
      {values.province !== "" && (
        <p className="select">
          ایران <span>{values.province}</span>
          {/* <span>{values.city}</span> */}
        </p>
      )}

      <span className={styles.show_title}>
        {provinceName}
        <style jsx>{`
          span {
            left: ${x + 5 + "px"};
            top: ${y + 5 + "px"};
            /* z-index: 999; */
          }
        `}</style>
      </span>
      {provinceSelected && (
        <div>
          <div
            className={styles.backdrop}
            onClick={() => setProvinceSelected(false)}
          ></div>
          <div className={styles.cities}>
            <p>
              <span className={styles.selected_province}>
                انتخاب شهرستان در{" "}
              </span>
              <span>{provinceNameOnClick}</span>
            </p>
            <form onSubmit={handleSubmit} autoComplete="off">
              {/* For select all */}
              <div>
                <input
                  type="checkbox"
                  name="all"
                  id="all"
                  onChange={() => {
                    if (values.city.length > 0) {
                      setFieldValue("city", []);
                    } else {
                      setFieldValue("city", [...cities]);
                    }
                  }}
                />
                <label htmlFor="all" className={styles.city_label}>
                  انتخاب همه
                </label>
                <br />
              </div>

              {cities.map((city, i) => {
                return (
                  <div key={i}>
                    <input
                      type="checkbox"
                      key={city}
                      value={values.city}
                      name={city}
                      onChange={() => {
                        setFieldValue("city", [...values.city, city]);
                        console.log("setFieldValue" + city);
                        citeis.push(city);
                        console.log("citeis=" + citeis);
                      }}
                      checked={values.city.includes(city)}
                      // defaultChecked={values.city.includes(city)}
                    />
                    <label htmlFor={city} className={styles.city_label}>
                      {city}
                    </label>
                    <br />
                  </div>
                );
              })}

              <div className={styles.select_cities_btns}>
                <button
                  type="button"
                  onClick={() => {
                    dispatch({ type: "SET_PROVICE", payload: "" });
                    dispatch({ type: "SET_CITY_SEARCH", payload: [] });
                    dispatch({ type: "REMOVE_CITY_FILTER", payload: true });
                    // onSubmit();
                  }}
                >
                  بازگشت و حذف فیلتر
                </button>
                <input type="submit" value="تایید" />
              </div>
            </form>
          </div>
        </div>
      )}
      <div className={styles.container}>
        <div className={styles.map}>
          {/* <button
            className={
              mapZoom
                ? styles.zoom_btn + " " + styles.zoom_out
                : styles.zoom_btn + " " + styles.zoom_in
            }
            onClick={() => {
              setMapZoom(!mapZoom);
            }}
          /> */}
          <svg
            className={
              mapZoom ? styles.svg + " " + styles.map_zoom : styles.svg
            }
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="20 0 970 960"
            enableBackground="new 20 0 970 960"
            xmlSpace="preserve"
          >
            <g className={styles.border}>
              <path className={styles.iran} d={iranBorder} />
            </g>
            <g className={styles.province}>
              {provinces.map((province) => (
                <path
                  key={province.id}
                  id={province.id}
                  className={province.className}
                  fill={values.province == province.name ? "#FFAA00" : ""}
                  d={province.d}
                  onMouseOver={() => setProvinceName(province.name)}
                  onMouseLeave={() => setProvinceName("")}
                  onClick={() => {
                    setCities(province.cities);
                    setProvinceSelected(true);
                    setProvinceNameOnClick(province.name);
                    setFieldValue("province", province.name);
                  }}
                />
              ))}
            </g>

            <g className={styles.sea}>
              <path className={styles.caspian} d={caspianD} />
              <path
                className={styles.persian_gulf}
                onMouseOver={() => setProvinceName("جزایر خلیج فارس")}
                onMouseLeave={() => setProvinceName("")}
                d={persianGulfD}
              />
            </g>
            <g className={styles.lake}>
              <path
                className={styles.jazmourian}
                d=" M 735.39 728.39 C 739.32 725.48 744.50 726.12 749.09 726.06 C 748.87 730.23 748.85 734.76 746.25 738.27 C 744.31 740.90 742.24 743.89 739.07 745.09 C 735.82 743.00 735.87 738.59 734.78 735.26 C 734.53 733.01 733.02 729.97 735.39 728.39 Z"
              />
              <path
                className={styles.qom}
                d=" M 392.53 316.41 C 396.15 319.51 400.05 322.33 403.25 325.88 C 405.56 328.37 405.60 331.94 406.17 335.09 C 399.76 335.20 393.56 333.51 387.51 331.56 C 390.12 326.86 392.05 321.79 392.53 316.41 Z"
              />
              <path
                className={styles.urmia}
                d=" M 70.94 100.38 C 76.66 94.04 88.01 97.27 90.48 105.14 C 89.12 111.83 86.35 118.54 87.47 125.50 C 88.30 127.83 90.56 129.30 92.62 130.47 C 95.27 131.90 98.30 130.53 101.12 130.96 C 104.02 131.89 105.83 134.55 107.85 136.66 C 105.87 138.36 103.19 140.92 105.12 143.69 C 109.33 148.80 115.47 152.40 118.27 158.65 C 118.78 159.50 118.71 160.29 118.05 161.03 C 115.60 163.09 112.39 164.01 109.96 166.10 C 109.61 169.05 109.90 172.04 109.99 175.00 C 107.00 174.40 103.25 174.51 101.33 171.69 C 96.74 164.74 92.82 157.11 86.45 151.56 C 83.31 148.97 83.19 144.67 81.91 141.10 C 80.21 136.23 78.11 131.51 76.67 126.55 C 75.23 125.31 73.66 124.19 72.49 122.68 C 71.82 120.64 71.96 118.40 72.41 116.33 C 73.48 112.43 78.57 111.08 79.29 107.06 C 79.94 102.30 74.03 101.97 70.94 100.38 Z"
              />
            </g>
          </svg>
        </div>
      </div>
    </Container>
  );
};

export default IranMap;

const Container = styled.div`
  border: 2px solid #095644;
  border-radius: 8px;
  .input {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    padding-top: 3.488vw;
    color: #095644;
    font-weight: 500;
    font-size: 3.721vw;
    &:after {
      content: "";
      display: inline-flex;
      background-image: url(${arrow});
      background-repeat: no-repeat;
      background-size: contain;
      width: 2.326vw;
      height: 1.163vw;
    }
  }

  .select {
    margin: 0;
    padding-top: 2.093vw;
    padding-right: 11.395vw;
    color: #095644;
    font-weight: 500;
    font-size: 5.581vw;
    display: flex;
    gap: 5px;
    align-items: center;
    span {
      font-weight: 500;
      display: flex;
      align-items: center;
      &:before {
        content: ">";
        display: inline-flex;
        color: #095644;
        font-size: 6.977vw;
        font-weight: 300;
        padding-left: 5px;
      }
    }
  }
  @media (min-width: 481px) {
    position: ${(props) => props.position};
    top: 14%;
    left: 8%;
    width: 46%;
    background-color: rgba(255, 255, 255, 0.5);
    .input {
      font-size: 1.458vw;
      padding-top: 2.24vw;
      &:after {
        width: 0.938vw;
        height: 0.521vw;
      }
    }
    .select {
      padding-top: 2.24vw;
      padding-right: 6.563vw;
      font-size: 1.458vw;
      span {
        &:before {
          font-size: 1.563vw;
        }
      }
    }
  }
`;
