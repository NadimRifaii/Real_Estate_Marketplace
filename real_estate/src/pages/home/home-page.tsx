import { UseSelector, useSelector } from "react-redux"
import { extractUserSlice } from "../../core/datasource/localDataSource/user/userSlice"
import { useEffect } from "react"
const Home = () => {
  const user = useSelector(extractUserSlice)
  useEffect(() => {
    console.log(user)
  }, [user])
  return (
    <h1>Home</h1>
  )
}
export default Home 