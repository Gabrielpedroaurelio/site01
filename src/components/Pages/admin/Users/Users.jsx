import NavBarAdmin from "../../../Elements/NavBarAdmin/NavBarAdmin";
import pessoa from '../../../../assets/_images/people01.png'
import SideBarAdmin from "../../../Elements/SideBarAdmin/SideBarAdmin";
import style from './Users.module.css'
import { FaClosedCaptioning, FaMagnifyingGlass, FaMessage, FaPersonCircleXmark, FaStreetView, FaWalkieTalkie } from 'react-icons/fa6'
import { MdAdd, MdClose, MdDelete, MdEdit, MdPreview, MdViewAgenda } from 'react-icons/md'
import { TbRulerMeasure } from "react-icons/tb";
import { useState } from "react";


export default function Users(params) {
    const usuarios = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    const [showDisplayView, setShowDisplay] = useState(false);
    const [showDisplayAdd, setShowDisplayAdd] = useState(false);
    const [showDisplayEdit, setShowDisplayEdit] = useState(false);
    const observerView = showDisplayView
    const observerAdd = showDisplayAdd
    const observerEdit = showDisplayEdit
    function ShowDispalyFunctionEdit() {
        if (observerEdit) {
            setShowDisplayEdit(false)
        } else {

            setShowDisplayEdit(true)
        }

    }
    function ShowDispalyFunctionAdd() {
        if (observerAdd) {
            setShowDisplayAdd(false)
        } else {

            setShowDisplayAdd(true)
        }

    }
    function ShowDispalyFunction(userSelected = false) {
        if (observerView) {
            setShowDisplay(false)
        } else {

            setShowDisplay(true)
        }

    }
    return(
        <>
            <NavBarAdmin></NavBarAdmin>
            <SideBarAdmin></SideBarAdmin>
            <main className={style.containerMainUser}>
                <div className={style.containerControles}>
                    <button onClick={() => {
                        ShowDispalyFunctionAdd()
                    }} ><MdAdd />Add Usuario</button>
                </div>
                <div className={style.containerContent}>
                    {usuarios.map((usuario) => (
                        <div key={usuario} className={style.user}>
                            <div className={style.info}>
                                <div className={style.img}>
                                    <img src={pessoa} alt="" />
                                </div>
                                <div className={style.datas}>
                                    <strong className={style.name_user}>Nome do Usuario</strong>
                                    <strong className={style.email_user}>emaildousuario@gmail.com</strong>
                                    <strong className={style.lastlogin_user}>19-09-2024 20:23:34</strong>
                                </div>
                            </div>
                            <div className={style.controllers}>
                                <button className={style.bgEditUser}
                                onClick={()=>{
                                    ShowDispalyFunctionEdit()
                                }}
                                ><MdEdit /></button>
                                <button className={style.bgDeleteUser}><MdDelete /></button>
                                <button className={style.bgViewUser} onClick={() => {
                                    /**
                                     * Colocar o objecto usuario aqui compelto
                                     */
                                    ShowDispalyFunction()
                                }}><MdPreview /></button>

                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <div className={style.containerEditar + ` ${showDisplayEdit ? style.showDisplayTrueEdit : style.showDisplayFalseEdit}`}>
                <div className={style.cardFormEditar}>

                    <h1>Editar</h1>

                    <div className={style.cardClose}>
                        <MdClose onClick={() => {
                            ShowDispalyFunctionEdit()
                        }} />

                    </div>
                </div>
            </div>
            <div className={style.containerAdd}>
                <div className={style.cardFormAdd + ` ${showDisplayAdd ? style.showDisplayTrueAdd : style.showDisplayFalseAdd}`}>
                    <div className={style.cardAddUser}>
                        <div className={style.cardClose}>
                            <MdClose onClick={() => {
                                ShowDispalyFunctionAdd()
                            }} />

                        </div>
                        <form >
                            <div className={style.controllerInput}>
                                <label htmlFor="name_user">Nome do Usuario</label>
                                <input type="text" name="name_user" id="name_user" placeholder="Nome"/>
                            </div>
                            <div className={style.controllerInput}>
                                <label htmlFor="email_user">E-mail</label>
                                <input type="email" name="email_user" id="email_user" placeholder="E-mail"/>
                            </div>
                            <div className={style.controllerInput}>
                                <label htmlFor="password_user">Palavra-Passe</label>
                                <input type="password" name="password_user" id="password_user" placeholder="Palavra Passe"/>
                            </div>
                            <div className={style.controllerInput}>
                                <label htmlFor="phone_user">Telefone</label>
                                <input type="tel" name="phone_user" id="phone_user" placeholder="Telefone"/>
                            </div>
                            <div className={style.controllerInput}>
                                <input type="submit" value="Adicionar" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/*
    
    */}
            <div className={style.containerVisualizar + ` ${showDisplayView ? style.showDisplayTrueVisualizar : style.showDisplayFalseVisualizar}`}>
                <div className={style.cardUser}>
                    <div className={style.cardClose}>
                        <MdClose onClick={() => {
                            ShowDispalyFunction()
                        }} />
                        <h1>LIstar</h1>
                    </div>

                </div>

            </div>


        </>
    )
}