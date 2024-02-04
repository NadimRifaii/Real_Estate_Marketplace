import { useSelector } from "react-redux"
import { extractUserSlice } from "../../core/datasource/localDataSource/user/userSlice"
import { useRef, useState } from "react";

const useLogic = () => {
  const user = useSelector(extractUserSlice)
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [currentFile, setCurrentFile] = useState<File | null>()
  const imageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentFile(e.target.files?.[0])
  }
  return { user, fileRef, currentFile, setCurrentFile, imageChangeHandler }
}
export default useLogic