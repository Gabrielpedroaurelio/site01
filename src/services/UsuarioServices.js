import { GetRequest, PostRequest, DeleteRequest, PuteRequest } from './resquests'
const url = ""
async function CadastrarUsuario(event) {
    event.preventDefault()
    const userObject = new FormData(event.target)
    const response = await PostRequest(url, userObject)
    console.log(response);
    return response
}
async function ListarUsuario() {

    const response = await GetRequest(url)
    console.log(response);
    return response

}
async function EditarUsuario(event) {
    event.preventDefault()
    const userObject = new FormData(event.target)
    const response = await PuteRequest(url, userObject)
    console.log(response);
    return response

}
async function DeleteUsuario() {

    const response = await DeleteRequest(url)
    console.log(response);
    return response

}