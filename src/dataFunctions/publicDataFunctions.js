import axios from "axios";
import { BaseBackURL } from "../constant/api";
import { store } from "../redux/store";
import { setAllEnvoys } from "../redux/slices/envoySlice";

export function getAllEnvoysData() {
  let config = {
    method: "get",
    url: `${BaseBackURL}api/v1/accounts/parliament_member/`,
  };

  axios(config).then((res) => {
    console.log(res.data);
    if (res.data.length > 0) {
      store.dispatch(setAllEnvoys(res.data));
    }
  });
}
