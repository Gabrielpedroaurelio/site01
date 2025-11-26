import { FaMagnifyingGlass } from "react-icons/fa6"
import style from './AbaHistoryLogin.module.css'
import pessoa from '../../../../assets/_images/people03.png'
export default function AbaHistoryLogin() {
    const lista = []
    for (let index = 0; index < 100; index++) {
        lista.push(index)

    }
    return (

        <>
            <div className={style.TableHistoryLogin}>
                <h3>Historico De Logins</h3>

                <div className={style.TableBodyLogin}>
                    {
                        lista.map((item) => (

                            <div key={item}>
                                <div className={style.img}>
                                    <img src={pessoa} alt="" />
                                </div>
                                <div className={style.userinfo}>
                                    <span>
                                        Gabriel Pedro Aureli
                                    </span>
                                    <span>
                                        gabrielpedroaurelio@gmail.com

                                    </span>
                                    <span>
                                        123.65.11.12
                                    </span>
                                </div>
                                <div className={style.hostinfo}>
                                    <strong>Desktop</strong>
                                    <strong>Google Chrome</strong>

                               
                                </div>
                                <div className={style.sessioninfo}>
                                    <span className={style.in}>
                                        Entrou:19-09-2025 22:00:02
                                    </span>
                                    <span className={style.out}>
                                        Saíu :19-09-2025 22:00:02
                                    </span>
                                </div>
                               
                            </div>
                        ))}
                </div>

            </div>
        </>
    )

}