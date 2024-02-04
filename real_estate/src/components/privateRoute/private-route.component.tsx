import { useSelector } from "react-redux"
import { extractUserSlice } from "../../core/datasource/localDataSource/user/userSlice"
import { Outlet, Navigate } from "react-router-dom"
const PrivateRoute = () => {
  const user = useSelector(extractUserSlice)
  return user.email ? <Outlet /> : <Navigate to={'/sign-in'} />
}
export default PrivateRoute 