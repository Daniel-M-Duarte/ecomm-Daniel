import { accountUser } from "./createUserAccount.js";

export function searchUserAccountByEmailUseCase(email) {

  const findUserByEmail = accountUser.find((client) => client.email == email);
  
  return (findUserByEmail) ? findUserByEmail : "Error! User not found!";
}
