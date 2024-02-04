import { useSelector, useDispatch } from "react-redux"
import { extractUserSlice } from "../../core/datasource/localDataSource/user/userSlice"
import { useEffect, useRef, useState } from "react";
import { userDataSource } from "../../core/datasource/remoteDataSource/user";
import { setUser } from "../../core/datasource/localDataSource/user/userSlice";
const useLogic = () => {
  const user = useSelector(extractUserSlice)
  const dispatch = useDispatch()
  const defaultCredentials: {
    photoURL: string,
    username: string
  } = {
    photoURL: user.photoURL,
    username: user.username
  }
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [currentFile, setCurrentFile] = useState<File | null>()
  const [credentials, setCredentials] = useState(defaultCredentials)
  const imageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentFile(e.target.files?.[0])
  }
  useEffect(() => {
    console.log(credentials)
  }, [])
  useEffect(() => {
    const { name } = currentFile || {}
    const photoURL = name || ''
    setCredentials({ ...credentials, photoURL })
  }, [currentFile])
  const uploadPhoto = async () => {
    try {
      const formData = new FormData()
      if (currentFile) {
        formData.append("file", currentFile)
        formData.append("test", "Nadim")
        const response = await userDataSource.uploadFile(formData)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const credentialsChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value })
  }
  const updateProfile = async () => {
    try {
      const response = await userDataSource.updateProfile(credentials)
      console.log(response)
      dispatch(setUser({ ...user, ...credentials }))
      await uploadPhoto()
    } catch (error) {
      console.log(error)
    }
  }
  return { user, fileRef, currentFile, credentials, setCurrentFile, imageChangeHandler, updateProfile, credentialsChangeHandler }
}
export default useLogic