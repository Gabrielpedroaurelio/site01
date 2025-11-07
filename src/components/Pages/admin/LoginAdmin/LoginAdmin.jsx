import LoginAdminData from '../../../Elements/LoginAdminData/LoginAdminData'
import LoginAdminVerify from '../../../Elements/LoginAdminVerify/LoginAdminVerify'
import style from './LoginAdmin.module.css'
const LoginAdmin=()=>{
    const pages_anable=[
        <LoginAdminData style={style}></LoginAdminData>,
        <LoginAdminVerify style={style}></LoginAdminVerify>
    ]
    return(
        <div className={style.bodyLogin}>
        <div className={style.containerLogin}>
       
        {pages_anable[1]}
    
        </div>
        </div >
    )
}
export default LoginAdmin;