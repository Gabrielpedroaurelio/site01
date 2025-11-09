import { GetRequest,PostRequest,PuteRequest,DeleteRequest } from "./resquests";
const url=""
async function CadastrarEmpresa(event) {
    event.preventDefault()
    const EmpresaObject=new FormData()
    const response=await PostRequest(url,EmpresaObject)
    console.log(response);
    return response
    
}

async function ActualizarEmpresa(event) {
    event.preventDefault()
    const EmpresaObject=new FormData()
    const response=await PuteRequest(url,EmpresaObject)
    console.log(response);
    return response
    
}

async function ListarEmpresas(){
    const response=await GetRequest(url)
    return response
} 
// criar as funcoes de alterar em status
