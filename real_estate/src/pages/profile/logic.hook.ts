import { useSelector } from "react-redux"
import { extractUserSlice } from "../../core/datasource/localDataSource/user/userSlice"
import { useRef, useState } from "react";
import { userDataSource } from "../../core/datasource/remoteDataSource/user";

const useLogic = () => {
  const user = useSelector(extractUserSlice)
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [currentFile, setCurrentFile] = useState<File | null>()
  const imageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentFile(e.target.files?.[0])
  }
  const uploadPhoto = async () => {
    try {
      const formData = new FormData()
      if (currentFile) {
        formData.append("profilePicture", currentFile)
        const response = await userDataSource.uploadFile({ formData })
        console.log(response)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const updateProfile = async () => {
    await uploadPhoto()
  }
  return { user, fileRef, currentFile, setCurrentFile, imageChangeHandler, updateProfile }
}
export default useLogic