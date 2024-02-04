import axios from "axios";
import local from "./localStorage";
type RequestPropsType = {
  route: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  data?: {}
}
export const sendRequest = async ({ route, method = "GET", data }: RequestPropsType) => {
  const baseURL = import.meta.env.VITE_BASE_URL
  const token = local('access_token')
  try {
    const response = await axios.request({
      url: route,
      data,
      method,
      baseURL,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data
  } catch (error: any) {
    if (error.response)
      throw new Error(error.response.data.error)
    else if (error.request) {
      throw new Error("Network error")
    }

  }
}