import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/home-page'
import SignIn from './pages/signin/signin-page'
import SignUp from './pages/signup/signup-page'
import About from './pages/about/about-page'
import Profile from './pages/profile/profile-page'
import Header from './components/header/header.component'
import useLogic from './logic.hook'
import { useEffect } from 'react'
import PrivateRoute from './components/privateRoute/private-route.component'

function App() {
  const { user } = useLogic()
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<SignIn />} path='/sign-in' />
        <Route element={<SignUp />} path='/sign-up' />
        <Route element={<About />} path='/about' />
        <Route element={<PrivateRoute />} >
          <Route element={<Profile />} path='/profile' />
        </Route>
      </Routes>
    </div>
  )
}

export default App
