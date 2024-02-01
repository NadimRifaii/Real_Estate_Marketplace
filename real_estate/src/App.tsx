import { Routes, Route } from 'react-router-dom'
import Home from './pages/home-page'
import SignIn from './pages/signin-page'
import SignUp from './pages/signup-page'
import About from './pages/about-page'
import Profile from './pages/profile-page'
import Header from './components/header/header.component'

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<SignIn />} path='/sign-in' />
        <Route element={<SignUp />} path='/sign-up' />
        <Route element={<About />} path='/about' />
        <Route element={<Profile />} path='/profile' />
      </Routes>
    </div>
  )
}

export default App
