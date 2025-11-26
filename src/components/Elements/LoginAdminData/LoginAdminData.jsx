import { useState } from 'react';
import logotipo from '../../../assets/_images/favicon.png'
const LoginAdminData = ({ style }) => {
  const [showTitle, setShowTitle] = useState(false);
 
  const obseverTitle = showTitle
 
  function ShowTitle(params) {
    if (obseverTitle) {
      setShowTitle(false)
    } else {

      setShowTitle(true)
    }

  }

  // Codigo para o login
  function Login(e) {
    e.preventDefault();
    // preparar Dados Pra Envio no backend
    const datas = new FormData(e.target)
    const request_response = true



  }
  return (
    <>
      <div className={style.form} onLoad={() => {
      
         
          ShowTitle()
      }}>
        <div className={style.cardImg}>
          <img src={logotipo} alt="" width="50" />
          <span className={`${showTitle ? style.titleLogo : ""}`}>Projecto<span>  ___  </span>LIGA</span>
        </div>
        <form action="" onSubmit={Login}>

          <div className={style.controlerInput}>
            <input type="email" name="email" id="email" />
            <label htmlFor="email">E-mail:</label>
          </div>
          <div className={style.controlerInput}>
            <input type="password" name="password" id="password" />
            <label htmlFor="password">Senha:</label>
          </div>
          <div className={style.controlerInput}>
            <input type="submit" value="Entrar" />
          </div>
        </form>
      </div>
      <div className={style.info}>
        <div>
          <h1>Projecto Liga</h1>
          <p>
            Painel Administrativo
          </p>
        </div>
      </div>
    </>
  )
}
export default LoginAdminData;