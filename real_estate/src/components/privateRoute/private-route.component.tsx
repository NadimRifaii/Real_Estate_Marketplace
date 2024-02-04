import { useSelector } from "react-redux"
import { extractUserSlice } from "../../core/datasource/localDataSource/user/userSlice"
import { Outlet, Navigate, useNavigate } from "react-router-dom"
import { useEffect } from "react"
const PrivateRoute = () => {
  const user = useSelector(extractUserSlice)
  const navigate = useNavigate()
  useEffect(() => {
    if (user.email)
      navigate('/profile')
  }, [user])
  return user.email ? <Outlet /> : <Navigate to={'/sign-in'} />
}
export default PrivateRoute 