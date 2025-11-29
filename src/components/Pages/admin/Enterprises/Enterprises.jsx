import NavBarAdmin from "../../../Elements/NavBarAdmin/NavBarAdmin";
import SideBarAdmin from "../../../Elements/SideBarAdmin/SideBarAdmin";
import style from './Enterprises.module.css'
/*
Eliminar Depois
*/
 
import { MdClose, MdDelete, MdEdit, MdPreview } from "react-icons/md";
import { useState } from "react";
import { FaPlus, FaUsers } from 'react-icons/fa6'
import { HiOutlineMail } from "react-icons/hi";
import { MdPhone } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { BsTelephone, BsTelephoneFill } from "react-icons/bs";

/*Fim da eliminacao */
export default function Enterprises(params) {
    // hooks

    const [showView, setShowView] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [showAdd, setShowAdd] = useState(false)
    const toggleView = () => {
        setShowView((prev) => prev = !prev)
        console.log(showView);

    }
    const toggleEdit = () => {
        setShowEdit((prev) => prev = !prev)
        console.log(showEdit);

    }
    const toggleAdd = () => {
        setShowAdd((prev) => prev = !prev)
        console.log(showAdd);

    }

    const usuario = [1, 2, 3, 4, 5, 6, 7, 8, 9]


    return (
        <>
            <NavBarAdmin></NavBarAdmin>
            <SideBarAdmin></SideBarAdmin>
            <main className={style.containerEnterprise}>
                <div className={style.containerController}>
                    <button onClick={toggleAdd}><FaPlus />Adicionar</button>
                </div>
                <div className={style.listEnterprise}>
                    {usuario.length !== 0 ? usuario.map((user) => (
                        <div key={user} className={style.enterprise}>
                            <div>
                                <div className={style.info}>
                                    <div className={style.img}>
                                        <img src="" alt="" width={50} />
                                    </div>
                                    <div className={style.datas}>
                                        <span>Nome da Empresa</span>
                                        <span>Email da empresa</span>
                                    </div>
                                </div>

                                <div className={style.option}>
                                    <button onClick={toggleView}>Ver Mais</button>
                                    <button onClick={toggleEdit}>Editar</button>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <div>Sem Dados</div>
                    )}
                </div>

            </main>


            <div className={style.containerEdit + `  ${showEdit ? style.ShowContainerEdit : ""}`}>
                <div className={style.cardClose}>
                    <MdClose onClick={toggleEdit} />
                </div>
                <div className={style.cardform}>
                    <form action="" method="post">
                        <div className={style.card_enterprise}>
                            <div className={style.img}>
                                <img src={null} alt=""/>
                                <input type="file" name="" id="" className={style.uploadbtnimg}/>
                            </div>
                            <div className={style.info}>
                                <h3>Empresa</h3>
                                <strong><HiOutlineMail/>emaildaempresas@gmail.com</strong>
                                <span><FaUsers/>243 Usuários</span>
                            </div>
                        </div>
                        <div className={style.cardinput}>
                                <label htmlFor="nome_instituicao">Nome da Instituição</label>
                                <input type="text" name="nome_instituicao" id="nome_instituicao" />
                        </div>
                    
                         <div className={style.cardinput}>
                                <label htmlFor="email_instituicao">E-mail da Instituição</label>
                                <input type="text" name="email_instituicao" id="email_instituicao" />
                        </div>
                         <div className={style.cardinput}>
                                <label htmlFor="telefone_instituicao">Telefone da Instituição</label>
                                <input type="text" name="telefone_instituicao" id="telefone_instituicao" />
                        </div>
                         <div className={style.cardinput}>
                                <label htmlFor="provincia_regidencia">Provincia Loaclização</label>
                                <input type="text" name="provincia_regidencia" id="provincia_regidencia" />
                        </div>
                          <div className={style.cardinput}>
                                <label htmlFor="municipio_regidencia">Municipio Localização</label>
                                <input type="text" name="municipio_regidencia" id="municipio_regidencia" />
                        </div>
                          <div className={style.cardinput}>
                                <label htmlFor="bairro_regidencia">Localização da Instituição</label>
                                <input type="text" name="bairro_regidencia" id="bairro_regidencia" />
                        </div>
                            <div className={style.cardinput}>
                            <button type="submit">Actualizar</button>
                        </div>

                    </form>
                </div>
            </div>






            <div className={style.containerView + `  ${showView ? style.ShowContainerView : ""}`}>
                <div className={style.cardClose}>
                    <MdClose onClick={toggleView} />
                </div>
                <div className={style.card_descriacao}>
                    <h2>Ver mais Detalhes</h2>
                    <div className={style.img}>
                        <img src={null} alt="" />
                    </div>
                    <div className={style.info_empresa}>
                        <strong>Empresa </strong>
                        <span>254 usuarios</span>

                    </div>
                    <div className={style.info_address}>
                        <span> <HiOutlineMail /> emaildaempresas@gmail.com</span>
                        <span><BsTelephone /> 999 000 999</span>

                    </div>
                    <div className={style.cardActions}>
                        <span className={style.status}>Activo</span>
                        <button>Desativar</button>

                    </div>
                    <div className={style.description_enterprise}>
                        <h2>Objectivos da Associação</h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, rerum sapiente. Eum, aut nisi autem voluptate ex beatae eligendi fugiat hic voluptates! Laudantium quo quod nostrum temporibus recusandae quasi veritatis.
                    </div>
                </div>




            </div>








            <div className={style.containerAdd + `  ${showAdd ? style.ShowContainerAdd : ""}`}>

                <div className={style.cardForm}>
                    <div className={style.cardClose}>
                        <MdClose onClick={toggleAdd} />
                    </div>
                    <form method="post" encType="multipart/form-data">
                        <div className={style.inputController}>
                            <label htmlFor="nome_instituicao">Nome da Instituição</label>
                            <input type="text" name="nome_instituicao" id="nome_instituicao" />
                        </div>
                        <div className={style.inputController}>
                            <label htmlFor="email_instituicao">E-mail Instituição</label>
                            <input type="email" name="email_instituicao" id="email_instituicao" />
                        </div>
                      
 
                        <div className={style.inputController}>
                            <input type="submit" value="Salvar Empresa" />
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}