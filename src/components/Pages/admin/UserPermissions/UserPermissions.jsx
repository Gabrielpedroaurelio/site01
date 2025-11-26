import { FiUser, FiShield } from "react-icons/fi";
import style from "./UserPermissions.module.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function UserPermissions() {

    // Permissões do sistema (pode vir da API)
    const permissions = {
        "Gerenciamento de Usuários": [
            { key: "create_user", label: "Criar usuários" },
            { key: "edit_user", label: "Editar usuários" },
            { key: "delete_user", label: "Excluir usuários" },
            { key: "view_user", label: "Visualizar usuários" },
        ],

        "Gestão de Conteúdo": [
            { key: "create_content", label: "Criar conteúdo" },
            { key: "edit_content", label: "Editar conteúdo" },
            { key: "delete_content", label: "Excluir conteúdo" },
        ],

        "Configurações do Sistema": [
            { key: "manage_roles", label: "Gerenciar cargos e perfis" },
            { key: "system_config", label: "Configurar sistema" },
        ],
    };

    // Exemplo de usuário
    const user = {
        nome: "Administrador Geral",
        cargo: "Super Admin",
        foto: null,
        permissoesAtivas: ["create_user", "edit_user", "view_user"]
    };

    const isActive = (perm) => user.permissoesAtivas.includes(perm);

    return (
        <div className={style.container}>
      
            {/* Cabeçalho do usuário */}
            <div className={style.userHeader}>
                <div className={style.avatar}>
                    <FiUser size={35} />
                </div>

                <div>
                    <h2>{user.nome}</h2>
                    <p>{user.cargo}</p>
                </div>
            </div>

            {/* Título */}
            <div className={style.pageTitle}>
                <FiShield /> Gestão de Permissões
            </div>

            {/* Listagem das permissões */}
            <div className={style.permissionsPanel}>

                {Object.keys(permissions).map((category) => (
                    <div key={category} className={style.permissionSection}>

                        <h3>{category}</h3>

                        {permissions[category].map((perm) => (
                            <div key={perm.key} className={style.permissionRow}>
                                <span>{perm.label}</span>

                                <label className={style.switch}>
                                    <input
                                        type="checkbox"
                                        defaultChecked={isActive(perm.key)}
                                    />
                                    <span className={style.slider}></span>
                                </label>
                            </div>
                        ))}
                    </div>
                ))}

            </div>

            <button className={style.saveBtn}>Salvar Permissões</button>
        </div>
    );
}
