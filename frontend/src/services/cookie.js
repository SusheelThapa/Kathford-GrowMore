import Cookies from "js-cookie";

export const setCookieValue = (key, value) => {

    Cookies.set(key, value)
}

export const getCookieValue = (key) => {
    return Cookies.get(key)
}