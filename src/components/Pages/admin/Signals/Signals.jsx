import { FaFileExcel, FaFilePdf, FaMagnifyingGlass, FaPlus, FaEye } from "react-icons/fa6";
import NavBarAdmin from "../../../Elements/NavBarAdmin/NavBarAdmin";
import style from './Signals.module.css';
import { MdDelete, MdEdit, MdPreview } from "react-icons/md";
import { useEffect, useState } from "react";
import { createRecord, listRecords } from "../../../../services/ModelServices";
import { useForm } from 'react-hook-form'
export default function Signals() {
  const [sinais, setSinais] = useState([]);
  const [search, setSearch] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm()
  const baseURL = "http://127.7.6.4:3000/";

  useEffect(() => {
    (async () => {
      const res = await listRecords(baseURL + "signals");
      if (res && res.sucesso) {
        setSinais(res.sinais || []);
      }
    })();
  }, []);

  const filtered = sinais.filter((s) =>
    s.palavra_portugues.toLowerCase().includes(search.toLowerCase())
  );
  async function SubmitSignal(data) {
    console.log(data);

  }

  return (
    <>
      <NavBarAdmin />
      <main className={style.containerSignals}>
        <div className={style.barsearch}>
          <FaMagnifyingGlass />
          <input
            type="text"
            placeholder="Pesquisar palavra"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className={style.controllers}>
          <button className={style.btnFaFileExcel}>
            <FaFileExcel />
            <span>Excel</span>
          </button>
          <button className={style.btnFaFilePdf}>
            <FaFilePdf />
            <span>PDF</span>
          </button>
          <button
            className={style.btnFaPlus}
            onClick={() => setShowAdd(true)}
          >
            <FaPlus />
            <span>Adicionar</span>
          </button>
        </div>
        <div className={style.listSignals}>
          {filtered.map((item) => (
            <div className={style.Signal} key={item.id_sinal}>
              <div className={style.infoSignal}>
                <div className={style.video}>
                  {item.video_url ? (
                    <video src={item.video_url} controls />
                  ) : (
                    <span>Sem vídeo</span>
                  )}
                </div>
                <div className={style.content}>
                  <span>{item.palavra_portugues}</span>
                  <small className={style.category}>{item.categoria_nome}</small>
                </div>
              </div>
              <div className={style.controllersSignal}>
                <MdEdit />
                <MdDelete />
                <MdPreview />
              </div>
            </div>
          ))}
          <div className={style.Signal}>
            <div className={style.infoSignal}>
              <div className={style.video}>

              </div>
              <div className={style.content}>
                <span>{"item.palavra_portugues"}</span>
                <small className={style.category}>{"item.categoria_nome"}</small>
              </div>
            </div>
            <div className={style.controllersSignal}>
              <MdEdit size={30} />
              <MdDelete size={30} />
              <FaEye size={30} />
            </div>
          </div>
        </div>
      </main>

      {showAdd && (
        <div className={style.modalAdd}>
          <div className={style.cardAdd}>
            <h3>Novo Sinal</h3>
            <form onSubmit={handleSubmit(SubmitSignal)}>
              <label>
                Palavra em Português
                <input type="text" {...register("palavra_portugues", {
                  required: "Este campo é obrigatorio"
                })} />
              </label>
              <label>
                Descrição do gesto
                <textarea name="" id="" {...register("descricao_gesto", {
                  required: "Este campo é Obrigatorio"
                })}></textarea>
              </label>
              <label>
                Categoria do Sinal
                <select name="id_categoria" id="id_categoria" {...register("id_categoria", {
                  required: "Este campo é Obrigatorio"
                })}>

                </select>
              </label>
              <label>
                Video Sinal
                <input type="text" {...register("video_url", {
                  required: "Este campo é Obrigatorio"
                })} />
              </label>
              <label>
                Imagem de Apresentação
                <input
                  type="text"
                  {...register("thumb_url ", {
                    required: "Este campo é Obrigatorio"
                  })}
                />
              </label>
              
              <div className={style.actions}>
                <button type="button" onClick={() => setShowAdd(false)}>
                  Cancelar
                </button>
                <button type="submit">Salvar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}


/**
 * 
 * 
 * <div className={style.video}>
                                    <video src={video} controls ></video>
                                </div>
                                <div className={style.info}>
                                    <strong>Palavra</strong>
                                    <span>Categoria</span>
                                    <button>Ver Gesto</button>
                                </div>
                                <div className={style.actions}>
                                <button className={style.bgEdit}>  </button>
                                        <button className={style.bgDelete}>  </button>
                                        <button className={style.bgView}>  </button>
                                </div>
 */