import local from "../../helpers/localStorage";
import { sendRequest } from "../../helpers/request";

export const authDataSource = {
  signup: async (data: {}) => {
    try {
      const response = await sendRequest({
        route: '/auth/signup',
        method: "POST",
        data
      })
      local('access_token', response.token)
      return response
    } catch (error: any) {
      throw new Error(error)
    }
  },
  login: async (data: {}) => {
    try {
      const response = await sendRequest({
        route: "/auth/login",
        method: "POST",
        data
      })
      local("access_token", response.token)
      return response
    } catch (error: any) {
      throw new Error(error)
    }
  }
}