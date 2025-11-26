import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginAdmin from './components/Pages/admin/LoginAdmin/LoginAdmin'
import Users from './components/Pages/admin/Users/Users'
import Dashboards from './components/Pages/admin/Dashboards/Dashboards'
import Enterprises from './components/Pages/admin/Enterprises/Enterprises'
import Histories from './components/Pages/admin/Histories/Histories'
import Signals from './components/Pages/admin/Signals/Signals'
import Teste from './components/tests/Teste'
import Account from './components/Pages/admin/Account/Account'
import UserPermissions from './components/Pages/admin/UserPermissions/UserPermissions'
export default function Routers(){
  return(
    <BrowserRouter> 
    <Routes>
        <Route path='/' index exact element={<Teste/>}/>
        <Route path='/admin'  exact element={<LoginAdmin/>}/>
        <Route path='/admin/dashboards' exact element={<Dashboards></Dashboards>}/>
        <Route path='/admin/users' exact element={<Users></Users>}/>
        <Route path='/admin/enterprise' exact element={<Enterprises></Enterprises>}/>
        <Route path='/admin/signals' exact element={<Signals></Signals>}/>
        <Route path='/admin/history' exact element={<Histories></Histories>}/>
        <Route path='/admin/account' exact element={<Account/>}/>
        <Route path='/admin/permissao' exact element={<UserPermissions/>}/>
       {/* <Route path='/clients' exact element={<LoginAdmin></LoginAdmin>}/>
        <Route path='/clients/login' exact element={<LoginAdmin></LoginAdmin>}/>
        <Route path='/clients/dictionary' exact element={<LoginAdmin></LoginAdmin>}/>
        <Route path='/clients/register' exact element={<LoginAdmin></LoginAdmin>}/>
       */}
    </Routes>
    </BrowserRouter>
  )

}