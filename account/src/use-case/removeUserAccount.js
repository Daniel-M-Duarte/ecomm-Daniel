import { accountUser } from "./createUserAccount.js";
import { searchUserAccountByEmailUseCase } from "./searchUserAccountByEmail.js"

export function removeUserUseCase(email){

    const removeUser = accountUser.findIndex(user => user.email === email);    

    if(removeUser !== -1){
        accountUser.splice(removeUser, 1); 
        console.log(true);
        return searchUserAccountByEmailUseCase(email);
    }

    return false;
}

