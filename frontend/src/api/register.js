import axios from "axios";

import _ from "lodash"

import Cookies from "js-cookie";

export const register = async (register_credential) => {

    console.log(register_credential)
    const { data } = await axios.post("http://localhost:8000/api/user/", register_credential);

    const filteredData = {
        token: _.get(data, 'token.access'),
        name: data.name,
        email: data.email
    };

    Cookies.set("data", filteredData);
}