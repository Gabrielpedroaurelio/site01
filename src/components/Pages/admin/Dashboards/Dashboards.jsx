import { useMemo } from "react";
import NavBarAdmin from "../../../Elements/NavBarAdmin/NavBarAdmin";
import SideBarAdmin from "../../../Elements/SideBarAdmin/SideBarAdmin";
import style from './Dashboards.module.css';
import { MdStorage, MdSignLanguage } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa6';
import LineChart from "../../../Elements/Charts/LineChart";
import BarChart from "../../../Elements/Charts/BarChart";

export default function Dashboards() {
  // Valores mockados por enquanto. Depois podemos ligar em /user, /enterprise, /signals
  const stats = useMemo(() => ({
    totalUsuarios: 1200,
    usuariosAtivos: 980,
    totalEmpresas: 32,
    empresasAtivas: 28,
    totalSinais: 5340,
    sinaisNovosMes: 320,
  }), []);

  const usuariosInativos = stats.totalUsuarios - stats.usuariosAtivos;
  const empresasInativas = stats.totalEmpresas - stats.empresasAtivas;

  const lineLabels = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"];
  const lineData = [120, 180, 260, 300, 420, 520]; // sinais cadastrados

  const barLabels = ["Usuários", "Empresas"];
  const barData = [stats.totalUsuarios, stats.totalEmpresas];

  return (
    <>
      <NavBarAdmin />
      <SideBarAdmin />
      <main className={style.containerMainDashboards}>
        <section className={style.header}>
          <div>
            <h1>Painel de Controlo</h1>
            <p>Resumo geral da plataforma LIGA.</p>
          </div>
        </section>

        <section className={style.cards_resumes}>
          <div className={style.card}>
            <div className={style.cardIcon}>
              <FaUsers />
            </div>
            <div className={style.cardContent}>
              <span>Usuários</span>
              <strong>{stats.totalUsuarios}</strong>
              <div className={style.badges}>
                <span className={style.content_green}>Ativos: {stats.usuariosAtivos}</span>
                <span className={style.content_red}>Inativos: {usuariosInativos}</span>
              </div>
            </div>
          </div>

          <div className={style.card}>
            <div className={style.cardIcon}>
              <MdStorage />
            </div>
            <div className={style.cardContent}>
              <span>Instituições</span>
              <strong>{stats.totalEmpresas}</strong>
              <div className={style.badges}>
                <span className={style.content_green}>Ativas: {stats.empresasAtivas}</span>
                <span className={style.content_red}>Inativas: {empresasInativas}</span>
              </div>
            </div>
          </div>

          <div className={style.card}>
            <div className={style.cardIcon}>
              <MdSignLanguage />
            </div>
            <div className={style.cardContent}>
              <span>Sinais</span>
              <strong>{stats.totalSinais}</strong>
              <div className={style.badges}>
                <span className={style.content_green}>+{stats.sinaisNovosMes} este mês</span>
              </div>
            </div>
          </div>
        </section>

        <section className={style.cards_resumes_charts}>
          <div className={style.cardChart}>
            <h3>Evolução de sinais cadastrados</h3>
            {/*<LineChart
              props_data={lineData}
              props_label="Sinais por mês"
              props_labels={lineLabels}
            />*/}
          </div>
        </section>

        <section className={style.cards_charts}>
          <div className={style.card_chart}>
            <h3>Comparação geral</h3>
            {/*<BarChart
              label_pr="Usuários x Instituições"
              labels_pr={barLabels}
              data_pr={barData}
            />*/}
          </div>
        </section>
      </main>
    </>
  );
}
