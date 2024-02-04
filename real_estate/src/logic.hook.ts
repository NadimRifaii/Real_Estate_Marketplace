import { useDispatch, useSelector } from "react-redux"
import { extractUserSlice, setUser } from "./core/datasource/localDataSource/user/userSlice"
import { useEffect } from "react"
import local from "./core/helpers/localStorage"
const useLogic = () => {
  const user = useSelector(extractUserSlice)
  const dispatch = useDispatch()
  useEffect(() => {
    if (local("user")) {
      const user = local("user")
      if (typeof user == "string") {
        dispatch(setUser(JSON.parse(user)))
      }
    }
    else
      console.log("No user")
  }, [])
  return { user }
}
export default useLogic