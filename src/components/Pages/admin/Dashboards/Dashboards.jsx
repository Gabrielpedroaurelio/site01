import ChartCategory from "../../../Elements/Charts/ChartCategory";
import NavBarAdmin from "../../../Elements/NavBarAdmin/NavBarAdmin";
import SideBarAdmin from "../../../Elements/SideBarAdmin/SideBarAdmin";
import style from './Dashboards.module.css'
export default function Dashboards(params) { 
return(
    <>
    <NavBarAdmin></NavBarAdmin>
    <SideBarAdmin></SideBarAdmin>
    <main className={style.containerMainDashboards}>
        <div className={style.cards_resumes}>
            <div className={style.card}>
                <h3>Usuarios</h3>
                <strong className={style.content_green}>Ativas: 4543</strong>
                <strong className={style.content_red}>Inativas:43</strong>
            </div>
            <div className={style.card}>
                <h3>Organizações</h3>
                <strong className={style.content_green}>Ativas:434</strong>
                <strong className={style.content_red}>Inativas:0</strong>
            </div>
            <div className={style.card}>
                <h3>Sinais</h3>
                <strong className={style.content_green}>Total : 53203</strong>
            </div>
            <div className={style.card}>
                <h3>Usuarios </h3>
                <strong className={style.content_green}>Online: 4353 </strong>
                <strong className={style.content_red}>Offline : {4543-4353}</strong>
            </div>
        </div>
        <div className={style.cards_charts}>
            <div className={style.card_chart}>
                {/*<h4>Gráfico de Palavras por Categoria</h4> */}
                <ChartCategory/>
            </div>
            <div className={style.card_chart}>
                <h4>Gráfico de Comparação entre Usuario e Empresas</h4>
            </div>
        </div>
        <div className={style.cards_resumes_charts}>
            <div className={style.cards}>
                <div className={style.card}>
                    [Espaço Reservado]
                </div>
                <div className={style.card}>
                    [Espaço Reservado]
                </div>
            </div>
            <div className={style.chart}>
                [Grafico Geral]
            </div>
            <div className={style.cards}>
                <div className={style.card}>
                    [Espaço Reservado]
                </div>
                <div className={style.card}>
                    [Espaço Reservado]
                </div>
                
            </div>
        </div>
    </main>
  
        </>
)
}