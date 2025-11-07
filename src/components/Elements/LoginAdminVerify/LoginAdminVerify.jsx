const LoginAdminVerify=({style})=>{
 
    
    
    return(
        <>
       <div className={style.container_verify}>
       <h2>Verificação por E-mail</h2>
       <p>
        Acabamos de enviamos um codigo para seu e-mail
        <br />
      <small>
      <strong>
        O codigo irá expirar em 10 minutos
       </strong>
      </small>
       </p>
   
   
       <form action="">
        <div className={style.container_verify_inputs}>
   
            <input type="text" className={style.code_verify}/>
            <input type="text" className={style.code_verify}/>
            <input type="text" className={style.code_verify}/>
            <input type="text" className={style.code_verify}/>
            <input type="text" className={style.code_verify}/>
            <input type="text" className={style.code_verify}/>
     

        </div>
     <div className={style.card_input_sumit}>
     <input type="submit" value="Enviar Codigo" />
     </div>
       </form>
       </div>

        </>
    )
    }
    export default LoginAdminVerify;