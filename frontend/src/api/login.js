import axios from "axios";

import _ from "lodash"

import Cookies from "js-cookie";

export const login = async (login_credential) => {

    console.log(login_credential)
    const { data } = await axios.post("http://localhost:8000/api/login/", login_credential);

    const filteredData = {
        token: _.get(data, 'token.access'),
        password: data.password,
        email: data.email
    };

    Cookies.set("data", filteredData);
}