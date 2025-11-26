import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logotipo from '../../../assets/_images/favicon.png';
import { loginRequest } from '../../../services/auth';

const LoginAdminData = ({ style }) => {
  const [showTitle, setShowTitle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");
  const navigate = useNavigate();
 
  const obseverTitle = showTitle
 
  function ShowTitle(params) {
    if (obseverTitle) {
      setShowTitle(false)
    } else {

      setShowTitle(true)
    }

  }

  // Codigo para o login
  async function Login(e) {
    e.preventDefault();
    setErro("");
    setLoading(true);

    try {
      // preparar Dados Pra Envio no backend
      const datas = new FormData(e.target);
      const email = datas.get("email");
      const senha = datas.get("password");

      const result = await loginRequest(
        "http://127.7.6.4:3000/auth/login",
        {
          email,
          senha_hash: senha,
        }
      );

      if (!result.sucesso) {
        setErro(result.mensagem || "Falha ao autenticar");
        return;
      }

      navigate("/admin/dashboards");
    } catch (error) {
      console.error(error);
      setErro("Erro inesperado ao autenticar");
    } finally {
      setLoading(false);
    }



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

          {erro && (
            <p className={style.errorMessage}>
              {erro}
            </p>
          )}

          <div className={style.controlerInput}>
            <input type="email" name="email" id="email" />
            <label htmlFor="email">E-mail:</label>
          </div>
          <div className={style.controlerInput}>
            <input type="password" name="password" id="password" />
            <label htmlFor="password">Senha:</label>
          </div>
          <div className={style.controlerInput}>
            <input type="submit" value={loading ? "Entrando..." : "Entrar"} disabled={loading} />
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