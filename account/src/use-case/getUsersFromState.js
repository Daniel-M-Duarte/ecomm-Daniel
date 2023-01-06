import { accountUser } from "./createUserAccount.js";

export function searchUserAccountByState(accountUser){  
    const usersFromState = accountUser.filter(user => user.estado == 'SP');
    return usersFromState.length < 1? 'No users found!' : usersFromState;

}