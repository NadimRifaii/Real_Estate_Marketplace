import { useEffect, useState } from "react"
import { authDataSource } from "../../core/datasource/remoteDataSource/auth"

type Request = {
  email: string,
  username: string,
  password: string
}
const useLogic = () => {
  const [request, setRequest] = useState<Request>({} as Request)
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRequest((prevState) => {
      const key: keyof Request = event.target.id as keyof Request
      return { ...prevState, [key]: event.target.value }
    })
  }
  const signup = async () => {
    try {
      const response = await authDataSource.signup(request)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  return { changeHandler,signup }
}
export default useLogic