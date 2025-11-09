import { GetRequest, PostRequest, DeleteRequest, PuteRequest } from "./resquests";
const url = ""
async function RegistarHistorico(event) {
    event.preventDefaul
    const historyObject = new FormData(event.target)
    const response = await PostRequest(url, historyObject);
    console.log(response);
    return response


}
async function ListarHistorico() {
    const response = await GetRequest(url);
    console.log(response);
    return response
    
}