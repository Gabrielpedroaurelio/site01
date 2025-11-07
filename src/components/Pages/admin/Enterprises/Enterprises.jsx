import NavBarAdmin from "../../../Elements/NavBarAdmin/NavBarAdmin";
import SideBarAdmin from "../../../Elements/SideBarAdmin/SideBarAdmin";
import style from './Enterprises.module.css'
/*
Eliminar Depois
*/
import meta from '../../../../assets/_images/company/meta.png'
import shopify from '../../../../assets/_images/company/shopify.png'
import starbucks from '../../../../assets/_images/company/starbucks.png'
import tesla from '../../../../assets/_images/company/tesla.png'
import airbnb from '../../../../assets/_images/company/airbnb.png'
import binance from '../../../../assets/_images/company/binance.png'
import coinbase from '../../../../assets/_images/company/coinbase.png'
import dropbox from '../../../../assets/_images/company/dropbox.png'
import { MdDelete, MdEdit, MdPreview } from "react-icons/md";
/*Fim da eliminacao */
export default function Enterprises(params) {
    const lista = []
    const companys = [meta, shopify, starbucks, tesla, airbnb, binance, coinbase, dropbox]
    let i = 0
    for (let index = 0; index < 4 ** 4; index++) {

        lista.push({
            id: index,
            img: companys[i],
            title: "Empresa " + index,

        })
        i++
        if (i == 7) {
            i = 0

        }

    }

    return (
        <>
            <NavBarAdmin></NavBarAdmin>
            <SideBarAdmin></SideBarAdmin>
            <main className={style.containerEnterprise}>
                <div>
                    <div className={style.controller}>
                        <button>Adicionar</button>
                    </div>
                    <div className={style.listEnterprise}>
                        {
                            lista.map((item) => (

                                <div className={style.enterprise} key={item.id}>
                                    <div className={style.contents}>
                                        <div className={style.img}>
                                            <img src={item.img} alt="" width={50} />
                                        </div>
                                        <div className={style.datas}>
                                            <h4>{item.title}</h4>
                                        </div>
                                    </div>
                                    <div className={style.actions}>
                                        <button className={style.bgEdit}><MdEdit /></button>
                                        <button className={style.bgDelete}><MdDelete /></button>
                                        <button className={style.bgView}><MdPreview /></button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

            </main>
            <div className={style.containerEdit}>
                <div className={style.cardFormEdit}>
                    Editar
                </div>
            </div>
            <div className={style.containerPreview}>
                <div className={style.cardPreview}>

                </div>
            </div>

            <div className={style.containerAdd}>
                <div className={style.cardFormAdd}>
                    <form>
                        <div className={style.title}>
                            <h3>Nova Empresa</h3>
                        </div>
                        <div className={style.controllerInput}>
                            <label htmlFor="enterprise_name">Empresa</label>
                            <input type="text" name="enterprise_name" id="enterprise_name" placeholder="Nome da Empresa" />
                        </div>
                        <div className={style.controllerInput}>
                            <label htmlFor="enterprise_email">E-mail</label>
                            <input type="email" name="enterprise_email" id="enterprise_email" placeholder="E-mail da Empresa" />
                        </div>
                        <div className={style.controllerInput}>
                            <label htmlFor="enterprise_nif">NIF</label>
                            <input type="text" name="enterprise_nif" id="enterprise_nif" placeholder="NIF da Empresa" />
                        </div>
                        <div className={style.controllerInput}>
                            <label htmlFor="enterprise_phone">Telefone</label>
                            <input type="tel" name="enterprise_phone" id="enterprise_phone" placeholder="Telefone da Empresa" />
                        </div>
                        <div className={style.controllerInput}>
                            <button type="submit">Adicionar Empresa</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}