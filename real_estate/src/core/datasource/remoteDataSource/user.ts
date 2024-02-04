import { sendFileRequest, sendRequest } from "../../helpers/request";
export const userDataSource = {
  uploadFile: async (data: {}) => {
    try {
      const response = await sendFileRequest({
        route: "/user/pictureURL",
        method: "PUT",
        data
      })
      return response
    } catch (error: any) {
      throw new Error(error)
    }
  },
  updateProfile: async (data: {}) => {
    try {
      const response=await sendRequest({
        route:"/user/profile",
        method:"PUT",
        data
      })
      return response
    } catch (error: any) {
      throw new Error(error)
    }
  }
}