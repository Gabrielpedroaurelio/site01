import NavBarAdmin from "../../../Elements/NavBarAdmin/NavBarAdmin";
import SideBarAdmin from "../../../Elements/SideBarAdmin/SideBarAdmin";
import style from './Histories.module.css'
import { useEffect, useState } from "react";
import { listRecords } from "../../../../services/ModelServices";

export default function Histories() {
  const [tab, setTab] = useState("logins");
  const [acoes, setAcoes] = useState([]);
  const [logins, setLogins] = useState([]);
  const baseURL = "http://127.7.6.4:3000/";

  useEffect(() => {
    (async () => {
      const resAcoes = await listRecords(baseURL + "history/actions");
      if (resAcoes && resAcoes.sucesso) setAcoes(resAcoes.historico || []);

      const resLogins = await listRecords(baseURL + "history/logins");
      if (resLogins && resLogins.sucesso) setLogins(resLogins.historico || []);
    })();
  }, []);

  const lista = tab === "logins" ? logins : acoes;

  return (
    <>
      <NavBarAdmin />
      <SideBarAdmin />
      <main className={style.containerHistory}>
        <div className={style.tabs}>
          <button
            className={tab === "logins" ? style.active : ""}
            onClick={() => setTab("logins")}
          >
            Histórico de Logins
          </button>
          <button
            className={tab === "acoes" ? style.active : ""}
            onClick={() => setTab("acoes")}
          >
            Histórico de Ações
          </button>
        </div>

        <div className={style.list}>
          {lista.length === 0 && <p>Sem registros.</p>}
          {lista.map((item) => (
            <div key={item.id_historico || item.id_historico_login} className={style.item}>
              <strong>{item.acao || "Login"}</strong>
              <span>{item.detalhes}</span>
              <small>{item.data_accao || item.data_hora_entrada}</small>
            </div>
          ))}
        </div>
      </main>
    </>
  );
} 