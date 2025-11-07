import { FaFileExcel, FaFilePdf, FaMagnifyingGlass, FaPlus } from "react-icons/fa6";
import NavBarAdmin from "../../../Elements/NavBarAdmin/NavBarAdmin";
import SideBarAdmin from "../../../Elements/SideBarAdmin/SideBarAdmin";
import style from './Signals.module.css'
import video from '../../../../assets/video/video.mp4'
import { MdDelete, MdEdit, MdPreview } from "react-icons/md";

export default function Signals(params) {
    const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 15, 16, 17, 18, 10, 19]
    return (
        <>
            <NavBarAdmin></NavBarAdmin>
            <main className={style.containerSignals}>
                <div className={style.barsearch}>
                    <FaMagnifyingGlass /> <input type="text" placeholder="Pesquisar" />
                </div>
                <div className={style.controllers}>
                    <button className={style.btnFaFileExcel}><FaFileExcel /><span>Excel</span></button>
                    <button className={style.btnFaFilePdf}><FaFilePdf /><span>PDF</span></button>
                    <button className={style.btnFaPlus}><FaPlus /><span>Adicionar</span></button>
                </div>
                <div className={style.listSignals}>
                    {
                        lista.map((item) => (
                            <div className={style.Signal} key={item}>
                                <div className={style.infoSignal}>
                                    <div className={style.video}>
                                        <video src={video}></video>
                                    </div>
                                    <div className={style.content}>
                                        <span>Olá</span>
                           
                                    </div>
                                </div>
                                <div className={style.controllersSignal}>
                                    <MdEdit />
                                    <MdDelete />
                                    <MdPreview />
                                </div>
                            </div>

                        ))
                    }

                </div>
            </main>


        </>
    )
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