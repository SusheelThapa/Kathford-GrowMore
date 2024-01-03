import axios from "axios";
import { getCookieValue, setCookieValue } from "../services/cookie";

import _ from "lodash";
export const completeProfileStartup = async (details) => {
  console.log(getCookieValue("token"));

  const { data } = await axios.post(
    "http://localhost:8000/api/user/startup/",
    details,
    {
      headers: {
        Authorization: `Bearer ${getCookieValue("token")}`,
        "Content-Type": "application/json",
      },
    }
  );

  setCookieValue("industry", _.get(data, "industry"));
  setCookieValue("address", _.get(data, "address"));
  setCookieValue("contact_no", _.get(data, "contact_no"));
  setCookieValue("team_size", _.get(data, "team_size"));
  setCookieValue("product_status", _.get(data, "product_status"));
  setCookieValue("description", _.get(data, "description"));
  setCookieValue("pitch_to_investor", _.get(data, "pitch_to_investor"));
  setCookieValue("is_verified", _.get(data, "is_verified"));
};
