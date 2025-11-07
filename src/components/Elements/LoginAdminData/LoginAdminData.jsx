import logotipo from '../../../assets/_images/favicon.png'
const LoginAdminData=({style})=>{
  function Login(e){
    e.preventDefault();
    // preparar Dados Pra Envio no backend
    const datas=new FormData(e.target)
    const request_response=true
 
  

  }
return(
    <>
  <form action="" onSubmit={Login}>
    <div className={style.cardImg}>
        <img src={logotipo} alt="" width="50" />
    </div>
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
    </>
)
}
export default LoginAdminData;