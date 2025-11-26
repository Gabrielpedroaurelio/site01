import { useForm } from 'react-hook-form'
import { useEffect, useState } from "react";
import { MdAdd, MdClose, MdDelete, MdEdit, MdPreview } from 'react-icons/md';
import NavBarAdmin from "../../../Elements/NavBarAdmin/NavBarAdmin";
import SideBarAdmin from "../../../Elements/SideBarAdmin/SideBarAdmin";
import pessoa from '../../../../assets/_images/people01.png';
import style from './Users.module.css';
import { createRecord, listRecords } from '../../../../services/ModelServices';
import { FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FiShield, FiShieldOff } from "react-icons/fi";
import ParagrafoErro from '../../../Elements/ParagrafoErro/ParagrafoErro';


export default function Users() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [usuarios, setUsuarios] = useState([]);
  const [perfis, setPerfis] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showView, setShowView] = useState(false);
  const [usuarioSelecionado, setUsuarioSelecionado] = useState(null);
  const URLs = 'http://127.7.6.4:3000/';

  // Carregar usuários
  useEffect(() => {
    (async () => {
      console.log("Carregando usuários...");
      const res = await listRecords(URLs + "user");
      if (res.user.sucesso) {
        console.log(res.user.usuario.msm);

        setUsuarios([...res.user.usuario]);
        //console.log("Usuários carregados:", res.dados);
      } else {
        // console.error("Erro ao buscar usuários:", res.erro);
      }
    })();
  }, []);
  // Carregar Perfi
  useEffect(() => {
    (async () => {
      console.log("Carregando perfis...");
      const res = await listRecords(URLs + "perfil");
      setPerfis([...res.datas.perfis])
      console.log(res);

    })();
  }, []);

  const toggleAdd = () => setShowAdd(prev => !prev);
  const toggleEdit = () => setShowEdit(prev => !prev);
  const toggleView = (usuario = null) => {
    setUsuarioSelecionado(usuario);
    setShowView(prev => !prev);
  };
  {/**
  Funcao para manipular os formulario de Cadastramentso de usuarios
  
  */}

  async function CadastrarUsuario(data) {
    console.log(data);
    
    const response = await createRecord(URLs + "user", data);
    console.log("Resposta do servidor:", response);
  }

  {
    /**
     * Fim da Funcao para manipular os formulario de cadastramento se usuario
     */
  }
  return (
    <>
      <NavBarAdmin />
      <SideBarAdmin />
      <main className={style.containerMainUser}>
        <div className={style.containerControles}>
          <button onClick={toggleAdd}><MdAdd /> Adicionar Usuário</button>
        </div>

        <div className={style.containerContent}>

          {usuarios.length <= 0 ? (
            <p>Nenhum usuário cadastrado.</p>
          ) : (
            usuarios.map((usuario) => (
              <div key={usuario.id_usuario} className={style.user}>
                <div className={style.info}>
                  <div>
                    <div className={style.img}>
                      <img src={pessoa} alt="" width={50} />
                    </div>
                    <div className={style.datas}>
                      <span className={style.nome_user}>
                        {usuario.nome_completo}
                      </span>
                      <span className={style.email_user}>
                        {usuario.email}
                      </span>
                      <button> <Link to="/admin/permissao"><FiShield /> Ver Permissões</Link> </button>
                    </div>
                  </div>
                </div>
                <div className={style.controller}>
                  <strong>{usuario.status_usuario}</strong>
                  <button onClick={toggleEdit}><MdEdit /></button>
                  <button onClick={toggleView}><FaEye /></button>

 
                </div>
              </div>
            ))
          )}
        </div>
      </main>


      {/* Modal Adicionar */}
      <div className={`${style.containerAdd} ${showAdd ? style.showDisplayTrueAdd : style.showDisplayFalseAdd}`}>
        <div className={style.cardFormAdd}>
          <div className={style.cardClose}>
            <MdClose onClick={toggleAdd} />
          </div>
          <form method="post" onSubmit={handleSubmit(CadastrarUsuario)}>
            <div>
              <h2>
                Cadastrar Usuario
              </h2>
            </div>
            <div className={style.controllerInput}>
              <label htmlFor="nome_completo">Nome</label>
              <input type="text" name="nome_completo" {...register("nome_completo", {
                required: "Este campo é obrigatorio"
              })} />
              {

                errors && (
                <ParagrafoErro error={errors.email?.message}/>
                )
              }
            </div>
            <div className={style.controllerInput}>
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" {...register("email", {
                required: "Este campo é obrigatorio"
              })} />
            </div>
            <div className={style.controllerInput}>
              <label htmlFor="perfil">Tipo de Usuario</label>
              <select name="" id="" {...register("id_perfil",{
                required:"Este campo é obrigatorio"
              })}>
                {
                  perfis.map((perfil) => (
                      <option value={perfil.id_perfil}>{perfil
                      .nome}</option>
                  ))

                }
              </select>
            </div>
            <div className={style.controllerInput}>
              <label htmlFor="senha_hash">Senha</label>
              <input type="password" name="senha_hash" {...register("senha_hash", {
                required: "Este campo é obrigatorio"
              })} />
            </div>
            <div className={style.controllerInput}>
              <label htmlFor="telefone">Telefone</label>
              <input type="tel" name="telefone" {...register("telefone", {
                required: "Este campo é obrigatorio"
              })} />
            </div>
            <div className={style.controllerInput}>
              <input type="submit" value="Adicionar" />
            </div>
          </form>
        </div>
      </div>

      {/* Modal Visualizar */}
      <div className={`${style.containerVisualizar} ${showView ? style.showDisplayTrueVisualizar : style.showDisplayFalseVisualizar}`}>
        <div className={style.cardUser}>
          <div className={style.cardClose}>
            <MdClose onClick={toggleView} />
          </div>
          {usuarioSelecionado && (
            <>
              <h1>{usuarioSelecionado.nome_completo}</h1>
              <p>{usuarioSelecionado.email}</p>
              <p>{usuarioSelecionado.telefone}</p>
            </>
          )}
        </div>
      </div>

      {/* Modal Editar */}
      <div className={`${style.containerEditar} ${showEdit ? style.showDisplayTrueEdit : style.showDisplayFalseEdit}`}>
        <div className={style.cardFormEditar}>
          <h1>Editar</h1>
          <div className={style.cardClose}>
            <MdClose onClick={toggleEdit} />
          </div>
        </div>
      </div>
    </>
  );
}
