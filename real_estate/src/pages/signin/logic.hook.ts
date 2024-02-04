import { useEffect, useState } from "react"
import { authDataSource } from "../../core/datasource/remoteDataSource/auth"
import { UseDispatch, useDispatch } from "react-redux"
import { setUser } from "../../core/datasource/localDataSource/user/userSlice"
type Request = {
  email: string,
  password: string
}
const defaultCredentials: Request = {
  email: "",
  password: ""
}
const useLogic = () => {
  const [request, setRequest] = useState<Request>(defaultCredentials)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRequest((prevState) => {
      const key: keyof Request = event.target.id as keyof Request
      return { ...prevState, [key]: event.target.value }
    })
  }
  const signin = async () => {
    setLoading(true)
    try {
      const response = await authDataSource.login(request)
      setRequest({ ...defaultCredentials })
      setLoading(false)
      setError("")
      dispatch(setUser(response.user))
    } catch (error: any) {
      setError(error.message)
      setLoading(false)
    }
  }
  return { changeHandler, signin, error, request }
}
export default useLogic