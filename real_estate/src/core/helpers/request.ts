import axios from 'axios'

type SendRequestRequirements = {
  route: string,
  method?: "GET" | "POST" | "PUT" | "DELETE",
  body?: {}
}
export const sendRequest = async ({ route, method = "GET", body }: SendRequestRequirements) => {
  const token = local("token")
  const baseURL = "http://localhost:5000"
  try {
    const response = await axios.request({
      url: route,
      data: body,
      method,
      baseURL,
      headers: {
      }
    });
    return response.data
  } catch (error: any) {
    console.log(error)
  }
}