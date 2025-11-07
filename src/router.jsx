import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginAdmin from './components/Pages/admin/LoginAdmin/LoginAdmin'
import Users from './components/Pages/admin/Users/Users'
import Dashboards from './components/Pages/admin/Dashboards/Dashboards'
import Enterprises from './components/Pages/admin/Enterprises/Enterprises'
import Histories from './components/Pages/admin/Histories/Histories'
import Signals from './components/Pages/admin/Signals/Signals'

export default function Routers(){
  return(
    <BrowserRouter>
    <Routes>
        <Route path='/admin' index exact element={<LoginAdmin/>}/>
        <Route path='/admin/dashboards' exact element={<Dashboards></Dashboards>}/>
        <Route path='/admin/users' exact element={<Users></Users>}/>
        <Route path='/admin/enterprises' exact element={<Enterprises></Enterprises>}/>
        <Route path='/admin/signals' exact element={<Signals></Signals>}/>
        <Route path='/admin/history' exact element={<Histories></Histories>}/>
       {/* <Route path='/clients' exact element={<LoginAdmin></LoginAdmin>}/>
        <Route path='/clients/login' exact element={<LoginAdmin></LoginAdmin>}/>
        <Route path='/clients/dictionary' exact element={<LoginAdmin></LoginAdmin>}/>
        <Route path='/clients/register' exact element={<LoginAdmin></LoginAdmin>}/>
       */}
    </Routes>
    </BrowserRouter>
  )

}