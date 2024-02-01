import { sendRequest } from "../../helpers/request";

export const authDataSource = {
  signup: async (data: {}) => {
    console.log(data)
    try {
      const response = await sendRequest({
        route: "/api/auth/signup",
        method: "POST",
        body: data
      })
      return response
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}