import { useDispatch } from "react-redux"
import { authDataSource } from "../../core/datasource/remoteDataSource/auth"
import { signInWithGooglePopup } from "../../core/datasource/remoteDataSource/firebase"
import { setUser } from "../../core/datasource/localDataSource/user/userSlice"
import local from "../../core/helpers/localStorage"
import { useNavigate } from "react-router-dom"
const Oauth = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleGoogleClick = async () => {
    try {
      let response = await signInWithGooglePopup()
      const { email, displayName: username, photoURL } = response.user
      response = await authDataSource.google({ email, username, photoURL })
      if (email && username && photoURL) {
        dispatch(setUser({ email, username, photoURL }))
        local("user", JSON.stringify({ email, username, photoURL }))
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <button onClick={handleGoogleClick} type="button" className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95" >Continue with google</button>
  )
}
export default Oauth