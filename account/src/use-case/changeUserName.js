import { accountUser } from "./createUserAccount.js";

export function changeUserNameUseCase(email, newName){

  const findUserByEmail = accountUser.find(client => client.email === email);
 
  return findUserByEmail.name !== newName? true: false;       
}


