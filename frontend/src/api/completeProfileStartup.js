import axios from "axios";
import { getCookieValue } from "../services/cookie";

export const completeProfileStartup = async (details) => {
  console.log(getCookieValue("token"));

  console.log(details);
  const token = getCookieValue("token");

  const { data } = await axios.post(
    "http://localhost:8000/api/user/startup/",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
    {
      user: 1,
      name: "Susheel Thapa",
      industry: "Agriculture",
      address: "Kathmandu",
      contact_no: "2o3-24",
      contact_email: "susheel@gmail.com",
      team_size: 4,
      product_status: "Public Beta",
      website_url: "",
      linkedin_url: "",
      description: "fertet",
      pitch_to_investor: "investor",
      is_verified: "False",
      looking_for: "Co-founder",
    }
  );
  console.log(data);
};
