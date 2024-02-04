import { useRef } from "react"
import useLogic from "./logic.hook"
const Profile = () => {
  const { user } = useLogic()
  const fileRef = useRef<HTMLInputElement | null>(null);
  return (
    <div className="profile p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4" >
        {/* <input hidden accept="image/*,application/pdf,text/plain" ref={fileRef} type="file" name="" id="" /> */}
        <input hidden accept="image/*,application/pdf,text/plain" ref={fileRef} type="file" name="" id="" />
        <img onClick={() => {
          fileRef?.current?.click()
        }} src={`${user.photoURL}`} className=" self-center mt-2 rounded-full h-24 w-24 object-cover cursor-pointer" alt="profile image" />
        <input type="text" placeholder="username" id="username" className="border p-3 rounded-lg" />
        <input type="text" placeholder="email" id="email" className="border p-3 rounded-lg" />
        <input type="text" placeholder="password" id="password" className="border p-3 rounded-lg" />
        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity95 disabled:opacity-80" >update</button>
      </form>
      <div className="flex justify-between mt-5" >
        <span className="text-red-700 cursor-pointer" >Delete account</span>
        <span className="text-red-700 cursor-pointer" >Sign out</span>
      </div>
    </div>
  )
}
export default Profile 