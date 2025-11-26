import { FaFileExcel, FaFilePdf, FaMagnifyingGlass, FaPlus } from "react-icons/fa6";
import NavBarAdmin from "../../../Elements/NavBarAdmin/NavBarAdmin";
import SideBarAdmin from "../../../Elements/SideBarAdmin/SideBarAdmin";
import style from './Signals.module.css';
import { MdDelete, MdEdit, MdPreview } from "react-icons/md";
import { useEffect, useState } from "react";
import { createRecord, listRecords } from "../../../../services/ModelServices";

export default function Signals() {
  const [sinais, setSinais] = useState([]);
  const [search, setSearch] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [formData, setFormData] = useState({
    palavra_portugues: "",
    descricao_gesto: "",
    id_categoria: "",
    video_url: "",
    thumb_url: "",
    fonte: "",
  });

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

  async function handleSubmit(e) {
    e.preventDefault();
    const resultado = await createRecord(baseURL + "signals", formData);
    if (resultado && resultado.sucesso) {
      setSinais((prev) => [...prev, resultado.sinal]);
      setShowAdd(false);
      setFormData({
        palavra_portugues: "",
        descricao_gesto: "",
        id_categoria: "",
        video_url: "",
        thumb_url: "",
        fonte: "",
      });
    }
  }

    return (
        <>
      <NavBarAdmin />
      <SideBarAdmin />
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
                </div>
            </main>

      {showAdd && (
        <div className={style.modalAdd}>
          <div className={style.cardAdd}>
            <h3>Novo Sinal</h3>
            <form onSubmit={handleSubmit}>
              <label>
                Palavra em Português
                <input
                  type="text"
                  value={formData.palavra_portugues}
                  onChange={(e) =>
                    setFormData({ ...formData, palavra_portugues: e.target.value })
                  }
                  required
                />
              </label>
              <label>
                Descrição do gesto
                <textarea
                  value={formData.descricao_gesto}
                  onChange={(e) =>
                    setFormData({ ...formData, descricao_gesto: e.target.value })
                  }
                />
              </label>
              <label>
                ID Categoria
                <input
                  type="number"
                  value={formData.id_categoria}
                  onChange={(e) =>
                    setFormData({ ...formData, id_categoria: e.target.value })
                  }
                />
              </label>
              <label>
                URL do Vídeo
                <input
                  type="text"
                  value={formData.video_url}
                  onChange={(e) =>
                    setFormData({ ...formData, video_url: e.target.value })
                  }
                  required
                />
              </label>
              <label>
                URL da Thumbnail
                <input
                  type="text"
                  value={formData.thumb_url}
                  onChange={(e) =>
                    setFormData({ ...formData, thumb_url: e.target.value })
                  }
                />
              </label>
              <label>
                Fonte
                <input
                  type="text"
                  value={formData.fonte}
                  onChange={(e) =>
                    setFormData({ ...formData, fonte: e.target.value })
                  }
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