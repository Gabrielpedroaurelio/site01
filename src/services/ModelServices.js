import { GetRequest, PostRequest, PuteRequest, DeleteRequest } from './resquests';

/**
 * Função genérica para criar um registro
 */
export async function createRecord(url, data) {
 
  const response = await PostRequest(url, data);
  console.log(response);
  return response;
}

// FUNCAO GENERICA PARA UPLOAD DE ARQUIVOS
// Função para enviar arquivo para o backend
export async function uploadFileFrontend(url, file) {
    const formData = new FormData();
    formData.append("file", file); // 'file' deve ser igual ao nome do campo no backend

    const res = await fetch(url, {
        method: "POST",
        body: formData
    });

    if (!res.ok) throw new Error(`Falha no upload: ${res.statusText}`);
    return await res.json(); // {sucesso, filename, path}
}

/**
 * Função genérica para listar registros
 */
export async function listRecords(url) {
  const response = await GetRequest(url);
 console.log(response);
  return response;
}

/**
 * Função genérica para atualizar registro
 */
export async function updateRecord(url, data) {
  const body = data instanceof FormData ? Object.fromEntries(data) : data;
  const response = await PuteRequest(url, body);
  console.log(response);
  return response;
}

/**
 * Função genérica para deletar registro
 */
export async function deleteRecord(url) {
  const response = await DeleteRequest(url);
  console.log(response);
  return response;
}






export function GetURL(){
  return "http://127.7.6.4:3400/"
}