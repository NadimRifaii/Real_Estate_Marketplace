import axios from 'axios'
import local from './localStorage'

type SendRequestRequirements = {
  route: string,
  method?: "GET" | "POST" | "PUT" | "DELETE",
  body?: {}
}
export const sendRequest = async ({ route, method = "GET", body }: SendRequestRequirements) => {
  const token = local("token")
  const baseURL = import.meta.env.VITE_BASE_URL
  try {
    const response = await axios.request({
      url: route,
      data: body,
      method,
      baseURL,
      headers: {
        "Content-Type": "application/json"
      }
    });
    return response.data
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message)
    }
  }
}