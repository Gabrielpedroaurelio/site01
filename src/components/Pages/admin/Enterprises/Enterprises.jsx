import NavBarAdmin from "../../../Elements/NavBarAdmin/NavBarAdmin";
import SideBarAdmin from "../../../Elements/SideBarAdmin/SideBarAdmin";
import style from './Enterprises.module.css'
import { useForm } from 'react-hook-form'
import { MdClose, MdDelete, MdEdit, MdPreview } from "react-icons/md";
import { useState } from "react";
import { FaPlus, FaUsers } from 'react-icons/fa6'
import { HiOutlineMail } from "react-icons/hi";
import { MdPhone } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { BsTelephone, BsTelephoneFill } from "react-icons/bs";
import ParagrafoErro from '../../../Elements/ParagrafoErro/ParagrafoErro'
import {createRecord, updateRecord, uploadFileFrontend,deleteRecord
    ,listRecords,
    GetURL
} from '../../../../services/ModelServices'
export default function Enterprises(params) {
    const URL=GetURL()
    // hooks
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [showView, setShowView] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [showAdd, setShowAdd] = useState(false)
    const [file, setFile] = useState(null);
    const [empresas, setEmpresas]=useState([])
    const [uploadStatus,setUploadStatus]=useState("")
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
    async function CadastrarInstituicao(data) {
        console.log(data);
        let payload = { ...data };

        // Se houver arquivo selecionado, faz upload antes
        if (file) {
            try {
                setUploadStatus("Enviando imagem...");
                const uploadResponse = await uploadFileFrontend(URL + "upload", file);
                if (uploadResponse && uploadResponse.sucesso) {
                    payload = {
                        ...payload,
                        path_logo: uploadResponse.path
                    };
                    setUploadStatus("Imagem enviada com sucesso!");
                } else {
                    setUploadStatus("Falha ao enviar imagem.");
                }
            } catch (error) {
                console.error(error);
                setUploadStatus("Erro no upload da imagem.");
            }
        }

        const response = await createRecord(URL + "enterprise", payload);
        console.log("Resposta do servidor:", response);
    }


    return (
        <>
            <NavBarAdmin></NavBarAdmin>
            <SideBarAdmin></SideBarAdmin>
            <main className={style.containerEnterprise}>
                <div className={style.containerController}>
                    <button onClick={toggleAdd}><FaPlus />Adicionar</button>
                </div>
                <div className={style.listEnterprise}>
                    {empresas.length !== 0 ? empresas.map((user) => (
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
                        <div>Não há Empresas Cadastradas</div>
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
                                <img src={null} alt="" />
                                <input type="file" name="" id="" className={style.uploadbtnimg} />
                            </div>
                            <div className={style.info}>
                                <h3>Empresa</h3>
                                <strong><HiOutlineMail />emaildaempresas@gmail.com</strong>
                                <span><FaUsers />243 Usuários</span>
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
                    <form method="post" encType="multipart/form-data" onSubmit={handleSubmit(CadastrarInstituicao)}>
                        <div className={style.inputController}>
                            <label htmlFor="nome_instituicao">Nome da Instituição</label>
                            <input type="text" name="nome_instituicao" id="nome_instituicao" {...register('nome_instituicao', {
                                required: "Este campo é obrigatorios"
                            })} />
                            {

                                errors ? (
                                    <ParagrafoErro error={errors.nome_instituicao?.message} />
                                ) : (
                                    <></>
                                )
                            }
                        </div>
                        <div className={style.inputController}>
                            <label htmlFor="email_instituicao">E-mail Instituição</label>
                            <input type="text" name="email_instituicao" id="email_instituicao" {...register('email_instituicao', {
                                required: "Este campo é obrigatorios"
                            })} />
                            {

                                errors ? (
                                    <ParagrafoErro error={errors.email_instituicao?.message} />
                                ) : (
                                    <></>
                                )
                            }
                        </div>
                        <div className={style.inputController}>
                            <label htmlFor="telefone">Telefone Instituição</label>
                            <input type="tel" name="telefone " id="telefone" {...register('telefone', {
                                required: "Este campo é obrigatorios"
                            })} />
                            {

                                errors ? (
                                    <ParagrafoErro error={errors.telefone?.message} />
                                ) : (
                                    <></>
                                )
                            }
                        </div>
                        <div className={style.inputController}>
                            <label htmlFor="provincia_instituicao">Província Instituição</label>
                            <input type="text" name="provincia_instituicao" id="provincia_instituicao" {...register('provincia_instituicao', {
                                required: "Este campo é obrigatorios"
                            })} />
                            {

                                errors ? (
                                    <ParagrafoErro error={errors.provincia_instituicao?.message} />
                                ) : (
                                    <></>
                                )
                            }
                        </div>

                        <div className={style.inputController}>
                            <label htmlFor="municipio_instituicao">Município Instituição</label>
                            <input type="text" name="municipio_instituicao" id="municipio_instituicao" {...register('municipio_instituicao', {
                                required: "Este campo é obrigatorios"
                            })} />
                            {

                                errors ? (
                                    <ParagrafoErro error={errors.municipio_instituicao?.message} />
                                ) : (
                                    <></>
                                )
                            }
                        </div>
                        <div className={style.inputController}>
                            <label htmlFor="bairro_instituicao">Bairro Instituição</label>
                            <input type="text" name="bairro_instituicao " id="bairro_instituicao" {...register('bairro_instituicao', {
                                required: "Este campo é obrigatorios"
                            })} />
                            {

                                errors ? (
                                    <ParagrafoErro error={errors.bairro_instituicao?.message} />
                                ) : (
                                    <></>
                                )
                            }
                        </div>
                        <div className={style.inputController}>
                            <label htmlFor="file">Logo Da Instituição</label>
                            <input type="file" name="file" id="file" {...register('file', {
                                required: "Este campo é obrigatorios"
                            })}
                                onChange={(e) => {
                                    const selected = e.target.files && e.target.files[0];
                                    setFile(selected || null);
                                    setUploadStatus("");
                                }}
                            />
                            {

                                errors ? (
                                    <ParagrafoErro error={errors.path_logo?.message} />
                                ) : (
                                    <></>
                                )
                            }
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