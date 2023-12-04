import axios from "axios";
import { BaseBackURL } from "../constant/api";
import { store } from "../redux/store";
import {
  setAllEnvoys,
  setEnvoyIsLoaded,
  setEnvoyToShow,
} from "../redux/slices/envoySlice";
import {
  setAllVotes,
  setVoteIsLoaded,
  setVoteToShow,
} from "../redux/slices/voteSlice";
import {
  setActivityIsLoaded,
  setActivityToShow,
  setAllActivity,
} from "../redux/slices/activitySlice";
import {
  setAllCities,
  setAllDistricts,
  setCityIsLoaded,
  setDistrictIsLoaded,
} from "../redux/slices/citySlice";
import { setAllPosts, setBlogIsLoaded } from "../redux/slices/blogSlice";
import {
  setFilteredCities,
  setFilteredProvince,
  setIsFilterActive,
} from "../redux/slices/filterSlice";

export async function getAllEnvoysData() {
  let config = {
    method: "get",
    url: `${BaseBackURL}api/v1/accounts/parliament_member/`,
  };

  return axios(config)
    .then((res) => {
      console.log("hello");
      if (res.data.length > 0) {
        store.dispatch(setAllEnvoys(res.data));
        store.dispatch(setEnvoyToShow(res.data));
        store.dispatch(setEnvoyIsLoaded(true));
      }
    })
    .catch((err) => {
      console.log(err);
      store.dispatch(setEnvoyIsLoaded(true));
    });
}

export async function getAllActivityData() {
  let config = {
    method: "get",
    url: `${BaseBackURL}api/v1/activity/?ordering=name, date&name&tag__id&vote__voter`,
  };

  return axios(config)
    .then((res) => {
      if (res.data.length > 0) {
        store.dispatch(setAllActivity(res.data));
        store.dispatch(setActivityToShow(res.data));
        store.dispatch(setActivityIsLoaded(true));
      }
    })
    .catch((err) => {
      console.log(err);
      store.dispatch(setActivityIsLoaded(true));
    });
}

export async function getAllVotesData() {
  let config = {
    method: "get",
    url: `${BaseBackURL}api/v1/bill/?name&tag__id&vote__voter&ordering=name, date`,
  };

  return axios(config)
    .then((res) => {
      // console.log(res.data);
      if (res.data.length > 0) {
        store.dispatch(setAllVotes(res.data));
        store.dispatch(setVoteToShow(res.data));
        store.dispatch(setVoteIsLoaded(true));
      }
    })
    .catch((err) => {
      console.log(err);
      store.dispatch(setVoteIsLoaded(true));
    });
}

export async function getAllCities() {
  let config = {
    method: "get",
    url: `${BaseBackURL}api/v1/city/`,
  };

  return axios(config)
    .then((res) => {
      // console.log(res.data);
      if (res.data.length > 0) {
        store.dispatch(setAllCities(res.data));
        store.dispatch(setCityIsLoaded(true));
      }
    })
    .catch((err) => {
      console.log(err);
      store.dispatch(setCityIsLoaded(true));
    });
}

export async function getAllDistricts() {
  let config = {
    method: "get",
    url: `${BaseBackURL}api/v1/electoral_district/?city__id&city__province__id`,
  };

  return axios(config)
    .then(function (res) {
      // console.log(JSON.stringify(response.data));
      if (res.data.length > 0) {
        store.dispatch(setAllDistricts(res.data));
        store.dispatch(setDistrictIsLoaded(true));
      }
    })
    .catch(function (error) {
      console.log(error);
      store.dispatch(setDistrictIsLoaded(true));
    });
}

export async function getAllBlogPosts() {
  let config = {
    method: "get",
    url: `${BaseBackURL}api/v1/blog/?writer__id&tag__id&is_suggested=True, False&ordering=created`,
  };

  return axios(config)
    .then((res) => {
      // console.log(res);
      if (res.data.length > 0) {
        store.dispatch(setAllPosts(res.data));
        store.dispatch(setBlogIsLoaded(true));
      }
    })
    .catch(function (error) {
      console.log(error);
      store.dispatch(setBlogIsLoaded(true));
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
  const allActivities = store.getState().activity.activityList;
  const allVotes = store.getState().vote.voteList;
  const filteredEnvoyList = [];
  const filteredVoteList = [];
  const filteredActivitiesList = [];

  for (const item of cityList) {
    for (const envoy of allEnvoys) {
      console.log(envoy);
      if (envoy.electoral_district_name?.includes(item)) {
        if (!filteredEnvoyList.includes(envoy)) {
          filteredEnvoyList.push(envoy);
        }
      }
    }
    // for (const vote of allVotes) {
    //   if (vote.electoral_district_name.includes(item)) {
    //     if (!filteredVoteList.includes(vote)) {
    //       filteredVoteList.push(vote);
    //     }
    //   }
    // }
    for (const activity of allActivities) {
      for (const vote of activity.verified_vote) {
        console.log(vote);
        if (vote.voter.electoral_district_name?.includes(item)) {
          if (!filteredActivitiesList.includes(activity)) {
            filteredActivitiesList.push(activity);
          }
        }
      }
    }
  }

  store.dispatch(setEnvoyToShow([...filteredEnvoyList]));
  // store.dispatch(setVoteToShow([...filteredVoteList]));
  store.dispatch(setActivityToShow([...filteredActivitiesList]));
  store.dispatch(setIsFilterActive(true));
}

export function clearFilterForAnyData() {
  const allEnvoys = store.getState().envoy.envoyList;
  const allActivities = store.getState().activity.activityList;
  const allVotes = store.getState().vote.voteList;

  store.dispatch(setEnvoyToShow([...allEnvoys]));
  store.dispatch(setVoteToShow([...allVotes]));
  store.dispatch(setActivityToShow([...allActivities]));
  store.dispatch(setIsFilterActive(false));
  store.dispatch(setFilteredProvince([]));
  store.dispatch(setFilteredCities([]));
}

export function setFilteredCitiesData(provinces, cities) {
  console.log(provinces);
  store.dispatch(setFilteredProvince(provinces));
  store.dispatch(setFilteredCities(cities));
}
