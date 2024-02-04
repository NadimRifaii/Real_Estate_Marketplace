import { Link, useNavigate } from "react-router-dom"
import useLogic from "./logic.hook"

const SignIn = () => {
  const { changeHandler, signin, error, request } = useLogic()
  const navigate = useNavigate()
  return (
    <div className="signup p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7" >Sign in</h1>
      <form className="flex flex-col gap-4" onSubmit={(e) => {
        e.preventDefault()
        signin()
      }} >
        <input onChange={changeHandler} value={request.email} type="email" placeholder="email" className="border p-3 rounded-lg" id="email" />
        <input onChange={changeHandler} value={request.password} type="password" placeholder="password" className="border p-3 rounded-lg" id="password" />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:80 ">Sign up</button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Don't Have an account?</p>
        <Link to="/sign-up" className="text-blue-700" >
          <span  className="text-blue-700" >Sign up</span>
        </Link>
      </div>
      {
        error && <p className="text-red-500 mt-5" >{error}</p>
      }
    </div>
  )
}
export default SignIn