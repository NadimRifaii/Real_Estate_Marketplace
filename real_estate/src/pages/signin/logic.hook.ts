import { useEffect, useState } from "react"
import { authDataSource } from "../../core/datasource/remoteDataSource/auth"

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
  useEffect(() => {
    console.log(error)
  }, [error])
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRequest((prevState) => {
      const key: keyof Request = event.target.id as keyof Request
      return { ...prevState, [key]: event.target.value }
    })
  }
  const signup = async () => {
    setLoading(true)
    try {
      const response = await authDataSource.signin(request)
      console.log(response)
      setRequest({ ...defaultCredentials })
      setLoading(false)
    } catch (error: any) {
      setError(error.message)
      setLoading(false)
    }
  }
  return { changeHandler, signup, error, request }
}
export default useLogic