import NavBarAdmin from '../../../Elements/NavBarAdmin/NavBarAdmin';
import { useNavigate } from 'react-router-dom';
// Ícones
import { FiMail, FiPhone, FiMapPin, FiUser } from "react-icons/fi";

import style from './Account.module.css';
import { getUsuarioLogado, logoutRequest } from '../../../services/auth';

export default function Account() {
  const navigate = useNavigate();
  const usuario = getUsuarioLogado();

  const user = {
    nome: usuario?.nome_completo || "Administrador",
    email: usuario?.email || "sem-email",
    telefone: "+244 900 000 000",
    cargo: "Administrador",
    localizacao: {
      provincia: "Luanda",
      municipio: "Talatona",
      bairro: "Benfica",
    },
    foto: null,
  };

  function handleLogout() {
    logoutRequest();
    navigate("/admin");
  }

  return (
    <>
      <NavBarAdmin />

      <div className={style.container}>
        <div className={style.profileCard}>
          <div className={style.header}>
            <div className={style.avatar}>
              {user.foto ? (
                <img src={user.foto} alt="Foto do usuário" />
              ) : (
                <FiUser size={40} className={style.avatarIcon} />
              )}
            </div>

            <div className={style.headerInfo}>
              <h2>{user.nome}</h2>
              <p>{user.cargo}</p>
            </div>
          </div>

          <div className={style.divider}></div>

          <div className={style.section}>
            <h3>Informações Pessoais</h3>

            <div className={style.infoLine}>
              <FiMail />
              <span>{user.email}</span>
            </div>

            <div className={style.infoLine}>
              <FiPhone />
              <span>{user.telefone}</span>
            </div>

            <div className={style.infoLine}>
              <FiMapPin />
              <span>
                {user.localizacao.provincia}, {user.localizacao.municipio},{" "}
                {user.localizacao.bairro}
              </span>
            </div>
          </div>
          <div className={style.controller_session}>
            <button type="button" onClick={handleLogout}>
              Terminar Sessão
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
