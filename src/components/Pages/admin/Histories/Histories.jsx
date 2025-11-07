import NavBarAdmin from "../../../Elements/NavBarAdmin/NavBarAdmin";
import SideBarAdmin from "../../../Elements/SideBarAdmin/SideBarAdmin";
import style from './Histories.module.css'
import AbaHistoryAction from "../AbaHistoryLogin copy/AbaHistoryAction";
import AbaHistoryLogin from "../AbaHistoryLogin/AbaHistoryLogin";
import { useEffect, useState } from "react";
const historyArray=[
    <AbaHistoryAction/>,
    <AbaHistoryLogin/>
]
export default function Histories(params) {
 
return(
    <>
    <NavBarAdmin></NavBarAdmin>
    <SideBarAdmin></SideBarAdmin>
    <main className={style.containerHistory}>
     <div>
       
        <div className="containerAbaHistory">
          {historyArray[1]}
        </div>
     </div>
    </main>
 
  
        </>
)
} 