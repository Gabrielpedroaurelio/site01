import { FaMagnifyingGlass } from "react-icons/fa6"
import style from './AbaHistoryLogin.module.css'
export default function AbaHistoryLogin() {
    const lista = []
    for (let index = 0; index < 100; index++) {
        lista.push(index)
        
    }
    return (

        <>
            <div className={style.TableHistoryLogin}>
                <h3>Historico De Logins</h3>
                <div className={style.TableHeaderLogin}>
                    <div>
                        <span>Código</span>
                        <span>Usuario</span>
                        <span>IP</span>
                        <span>Entrada</span>
                        <span>Saída</span>
                    </div>
                </div>
                <div className={style.TableBodyLogin}>
                    {
                        lista.map((item) => (

                            <div key={item}>
                                <span>{item}</span>
                                <span>Gabriel</span>
                                <span>127.0.0.{item}</span>
                                <span>19-09-2025 21:22:32</span>
                                <span>19-09-2025 21:22:32</span>

                            </div>
                        ))}
                </div>

            </div>
        </>
    )

}