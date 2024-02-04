import { useState } from "react"
import { authDataSource } from "../../core/datasource/remoteDataSource/auth"
import { UseSelector, useDispatch } from "react-redux"
import { setUser } from "../../core/datasource/localDataSource/user/userSlice"
import local from "../../core/helpers/localStorage"
import { useNavigate } from "react-router-dom"
type Request = {
  email: string,
  username: string,
  password: string
}
const defaultCredentials: Request = {
  email: "",
  username: "",
  password: ""
}
const useLogic = () => {
  const [request, setRequest] = useState<Request>(defaultCredentials)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRequest((prevState) => {
      const key: keyof Request = event.target.id as keyof Request
      return { ...prevState, [key]: event.target.value }
    })
  }
  const signup = async () => {
    setLoading(true)
    try {
      const response = await authDataSource.signup(request)
      setRequest({ ...defaultCredentials })
      setLoading(false)
      dispatch(setUser(response.user))
      local("user", JSON.stringify(response.user))
      setError("")
      navigate('/')
    } catch (error: any) {
      setError(error.message)
      setLoading(false)
    }
  }
  return { changeHandler, signup, error, request }
}
export default useLogic