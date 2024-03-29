import { FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom"
import useLogic from "./logic.hook"
import { useEffect } from "react"
const Header = () => {
  const { user } = useLogic()
  return (
    <div className="header bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3" >
        <Link to="/" >
          <h1 className="font-bold text-small sm:text-xl flex flex-wrap ">
            <span className="text-slate-500" >Nadim</span>
            <span className="text-slate-700" >Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center " >
          <input type="text" placeholder="Search..." className="bg-transparent focus:outline-none w-24 sm:w-64" />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4 items-center" >
          <Link to={'/'} >
            <li className="hidden sm:inline text-slate-700 hover:underline" >Home</li>
          </Link>
          {
            !user.email ? <>
              <Link to='/about'>
                <li className="hidden sm:inline text-slate-700 hover:underline" >About</li>
              </Link>
              <Link to='/sign-in'>
                <li className="hidden sm:inline text-slate-700 hover:underline" >Sign in</li>
              </Link>
            </> :
              <Link to={'/profile'} >
                <img className="rounded-full h-7 w-7 object-cover" src={`${import.meta.env.VITE_BASE_URL + '/images/' + user.email + '-' + user.photoURL}`} alt="" />
              </Link>
          }

        </ul>
      </div>
    </div>
  )
}
export default Header