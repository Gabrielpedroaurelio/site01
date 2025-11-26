import NavBarAdmin from "../../../Elements/NavBarAdmin/NavBarAdmin";
import SideBarAdmin from "../../../Elements/SideBarAdmin/SideBarAdmin";
import style from './Dashboards.module.css'
import {MdHome, MdHistory, MdStorage,MdSignLanguage, MdLogout, MdSettings} from 'react-icons/md'
import {FaUsers, FaMagnifyingGlass,FaStore} from 'react-icons/fa6'
import LineChart from "../../../Elements/Charts/LineChart";
import BarChart from "../../../Elements/Charts/BarChart";
export default function Dashboards(params) { 
return(
    <>
    <NavBarAdmin></NavBarAdmin>
    <SideBarAdmin></SideBarAdmin>
    <main className={style.containerMainDashboards}>
        <div className={style.cards_resumes}>
            <div className={style.card}>
                <h3> <FaUsers/> Usuarios</h3>
                <strong className={style.content_green}>Ativas: 4543</strong>
                <strong className={style.content_red}>Inativas:43</strong>
            </div>
            <div className={style.card}>
                <h3> <MdStorage/> Organizações</h3>
                <strong className={style.content_green}>Ativas:434</strong>
                <strong className={style.content_red}>Inativas:0</strong>
            </div>
            <div className={style.card}>
                <h3><MdSignLanguage/>Sinais</h3>
                <strong className={style.content_green}>Total : 53203</strong>
            </div>
            <div className={style.card}>
                <h3>Usuarios </h3>
                <strong className={style.content_green}>Online: 4353 </strong>
                <strong className={style.content_red}>Offline : {4543-4353}</strong>
            </div>
        </div>
           <div className={style.cards_resumes_charts}>
            <div className="cardChart">
                
                           {/*<h4>Gráfico de Palavras por Categoria</h4> */}
                <LineChart props_data={[34,54,65,45,43]} props_label="Grafico d barras" props_labels={["p1",'p2','p3','p4','p5']}/>
            </div>
        </div>
        <div className={style.cards_charts}>
            <div className={style.card_chart}>
            
            </div>
            <div className={style.card_chart}>
                <h4>Gráfico de Comparação entre Usuario e Empresas</h4>
 
            </div>
        </div>
     
    </main>
  
        </>
)
}