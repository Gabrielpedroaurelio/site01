import LoginAdminData from '../../../Elements/LoginAdminData/LoginAdminData'
 
import style from './LoginAdmin.module.css'
const LoginAdmin=()=>{
    const pages_anable=[
        <LoginAdminData style={style}></LoginAdminData>,
       
    ]
    return(
        <div className={style.bodyLogin}>
        <div className={style.containerLogin}>
       
        {pages_anable[0]}
    
        </div>
        </div >
    )
}
export default LoginAdmin;