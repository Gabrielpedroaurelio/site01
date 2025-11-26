import NavBarAdmin from '../../../Elements/NavBarAdmin/NavBarAdmin'

// Ícones
import { FiMail, FiPhone, FiMapPin, FiUser } from "react-icons/fi";

import style from './Account.module.css';

export default function Account() {

    // Exemplo de dados (normalmente virá do backend)
    const user = {
        nome: "Administrador Geral",
        email: "admin@empresa.com",
        telefone: "+244 900 000 000",
        cargo: "Super Administrador",
        localizacao: {
            provincia: "Luanda",
            municipio: "Talatona",
            bairro: "Benfica"
        },
        foto: null
    };

    return (
        <>
            <NavBarAdmin />

            <div className={style.container}>
                <div className={style.profileCard}>

                    {/* Cabeçalho */}
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

                    {/* Informações do usuário */}
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
                                {user.localizacao.provincia}, {user.localizacao.municipio}, {user.localizacao.bairro}
                            </span>
                        </div>
                    </div>
                    <div className={style.controller_session}>
                        <a href="">Terminar Sessão</a>
                    </div>

                </div>
            </div>
        </>
    );
}
