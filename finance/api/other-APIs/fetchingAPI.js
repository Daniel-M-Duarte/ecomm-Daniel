/* eslint-disable linebreak-style */

async function searchingAPI(id) {
  const searchAccount = await fetch(`http://localhost:3002/api/accounts/${id}`);
  const accountFound = await searchAccount.json();
  return accountFound;
}

module.exports = searchingAPI;
