import { signInWithGooglePopup } from "../../core/datasource/remoteDataSource/firebase"
import { sendRequest } from "../../core/helpers/request"

const Oauth = () => {
  const handleGoogleClick = async () => {
    try {
      const response = await signInWithGooglePopup()
      const { email, displayName, photoURL } = response.user
      console.log(email, displayName, photoURL)
    } catch (error) {
      console.log("Could not signin with google")
    }
  }
  return (
    <button onClick={handleGoogleClick} type="button" className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95" >Continue with google</button>
  )
}
export default Oauth