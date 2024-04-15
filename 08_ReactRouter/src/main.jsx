import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider ,createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import User from './components/User/User.jsx'
import Auth from './components/Auth/Auth.jsx'
import Login from './components/Login/Login.jsx'
import UserSignup from './components/UserSignup/UserSignup.jsx'
import CompanySignup from './components/CompanySignup/CompanySignup.jsx'
import Applications from './components/Applications/Applications.jsx'
import Applicants from './components/Applicants/Applicants.jsx'
import CompanyReview from './components/CompanyReview/CompanyReview.jsx'
import SalaryGuide from './components/SalaryGuide/SalaryGuide.jsx'



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='companyreview' element={<CompanyReview/>}></Route>
      <Route path='salaryGuide' element={<SalaryGuide/>}></Route>
      <Route path='user/:userid' element={<User/>}></Route>
      <Route path='user/signup' element={<UserSignup/>}></Route>
      <Route path='company/signup' element={<CompanySignup/>}></Route>
      <Route path='user/applications' element={<Applications/>}></Route>
      <Route path='company/applicants' element={<Applicants/>}></Route>

      

      {/* <Route path='github' element={<Github/>}></Route> */}S
      <Route path='auth' element={<Auth/>}></Route>
      <Route path='login' element={<Login/>}></Route>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
