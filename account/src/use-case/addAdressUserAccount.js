import { accountUser } from "./createUserAccount.js";

export function addAdressOfUsers(email, logradouro, numero, complemento = '',
 bairro, cep, cidade, uf){

    const getUserByIndice = accountUser.findIndex(index => index.email == email);

    const adress = {
        logradouro: logradouro,
        numero: numero,
        complemento : complemento,
        bairro: bairro,
        cep: cep,
        cidade: cidade,
        uf: uf
    }

    if (getUserByIndice !== -1){
        accountUser[getUserByIndice].endereco = adress;
        console.log(true);
        return accountUser[getUserByIndice] ;
    }

    return false;
}


