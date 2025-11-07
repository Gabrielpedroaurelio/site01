import {MdHome, MdHistory, MdStorage,MdSignLanguage, MdLogout} from 'react-icons/md'
import {FaUsers, FaMagnifyingGlass,FaStore} from 'react-icons/fa6'
import style from './NavBarAdmin.module.css'
import favicon from '../../../assets/_images/favicon.png'
import { Link } from 'react-router-dom'
import {useState} from "react"
export default function NavBarAdmin(){
   const [MenuExpandir,setMenuExpandir]=useState(false)
   let Observador=MenuExpandir
   const Mudar=()=>{
    if (Observador) {
        
        setMenuExpandir(false)
    } else {
        
        setMenuExpandir(true)
    }
   }
    return(
        <>
        <div className={style.containerNavBarAdmin +` ${MenuExpandir? style.MenuLong:style.MenuShort}`}>
            <div className={style.logo}>
                <img src={favicon} alt=""  width="50" onClick={Mudar}/>
                <button className={style.btnExpandir} onClick={Mudar}> <FaMagnifyingGlass/> </button>

               
            </div>
            <div className={style.navBarAdmin}>
                <nav className={style.navbar}>
                    <Link to="/admin/dashboards">    
                        <span className="icon"><MdHome/></span>
                        <span className={style.txt}>Dashborad</span>
                    </Link>
                
                    <Link to="/admin/users" >
                        <span className="icon"><FaUsers/></span>
                        <span className={style.txt}>Usuários</span>
                    </Link>
                    <Link to="/admin/enterprises" >
                        <span className="icon"><MdStorage/></span>
                        <span className={style.txt}>Empresas</span>
                    </Link>
                    <Link to="/admin/signals">
                    <span className="icon"><MdSignLanguage/></span>
                        <span className={style.txt}>Sinais</span>
                    </Link>
                 
                    <Link to="/admin/history">
                        <span className="icon"><MdHistory/></span>
                        <span className={style.txt}>Historico</span>
                    </Link>
                    <Link to="/admin" onClick={()=>{
                        history.replaceState("/admin")
                    }}>
                    <span className='icon'>
                        <MdLogout/>
                    </span>
                    <span className={style.txt}>Sair</span>
                    </Link>
                </nav>
            </div>
            
        </div>
        </>
    )
}
