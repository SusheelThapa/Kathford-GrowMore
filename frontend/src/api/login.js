import axios from "axios";

import _ from "lodash";

import { setCookieValue } from "../services/cookie";

export const login = async (login_credential) => {
  console.log(login_credential);
  const { data } = await axios.post(
    "http://localhost:8000/api/login/",
    login_credential
  );

  setCookieValue("token", _.get(data, "token.access"));
  setCookieValue("name", _.get(data, "info.name"));
  setCookieValue("email", _.get(data, "info.email"));
  setCookieValue("user_type", _.get(data, "info.user_type"));
  setCookieValue("id", _.get(data, "info.id"));
};
