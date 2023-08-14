import axios from "axios";
import { BaseBackURL } from "../constant/api";
import { store } from "../redux/store";
import { setAllEnvoys, setEnvoyToShow } from "../redux/slices/envoySlice";
import { setAllVotes } from "../redux/slices/voteSlice";
import { setAllActivity } from "../redux/slices/activitySlice";
import { setAllCities, setAllDistricts } from "../redux/slices/citySlice";
import { setAllPosts } from "../redux/slices/blogSlice";

export function getAllEnvoysData() {
  let config = {
    method: "get",
    url: `${BaseBackURL}api/v1/accounts/parliament_member/`,
  };

  axios(config).then((res) => {
    console.log(res.data);
    if (res.data.length > 0) {
      store.dispatch(setAllEnvoys(res.data));
      store.dispatch(setEnvoyToShow(res.data));
    }
  });
}

export function getAllActivityData() {
  let config = {
    method: "get",
    url: `${BaseBackURL}api/v1/activity/?ordering=name, date&name&tag__id&vote__voter`,
  };

  axios(config).then((res) => {
    if (res.data.length > 0) {
      store.dispatch(setAllActivity(res.data));
    }
  });
}

export function getAllVotesData() {
  let config = {
    method: "get",
    url: `${BaseBackURL}api/v1/bill/?name&tag__id&vote__voter&ordering=name, date`,
  };

  axios(config).then((res) => {
    // console.log(res.data);
    if (res.data.length > 0) {
      store.dispatch(setAllVotes(res.data));
    }
  });
}

export function getAllCities() {
  let config = {
    method: "get",
    url: `${BaseBackURL}api/v1/city/`,
  };

  axios(config).then((res) => {
    // console.log(res.data);
    if (res.data.length > 0) {
      store.dispatch(setAllCities(res.data));
    }
  });
}

export function getAllDistricts() {
  let config = {
    method: "get",
    url: `${BaseBackURL}api/v1/electoral_district/?city__id&city__province__id`,
  };

  axios(config)
    .then(function (res) {
      // console.log(JSON.stringify(response.data));
      store.dispatch(setAllDistricts(res.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function getAllBlogPosts() {
  let config = {
    method: "get",
    url: `${BaseBackURL}api/v1/blog/?writer__id&tag__id&is_suggested=True, False&ordering=created`,
  };

  axios(config).then((res) => {
    // console.log(res);
    if (res.data.length > 0) {
      store.dispatch(setAllPosts(res.data));
    }
  });
}

export function getAllInitialData() {
  getAllEnvoysData();
  getAllVotesData();
  getAllActivityData();
  getAllCities();
  getAllBlogPosts();
}

export function filterDataByCity(cityList) {
  const allEnvoys = store.getState().envoy.envoyList;
  const filteredList = [];
  for (const item of cityList) {
    for (const envoy of allEnvoys) {
      if (envoy.electoral_district_name.includes(item)) {
        if (!filteredList.includes(envoy)) {
          filteredList.push(envoy);
        }
      }
    }
  }
  store.dispatch(setEnvoyToShow([...filteredList]));
}
