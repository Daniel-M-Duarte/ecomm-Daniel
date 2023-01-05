import { accountUser } from "../src/use-case/createUserAccount.js";
import { createNewUserWithAdressAndState } from "../src/use-case/createUserAccount.js";
import { searchUserAccountByState } from "../src/use-case/getUsersFromState.js";

createNewUserWithAdressAndState('Marcia', 'marcia@email.com', 999595, 'Rua Macedonia', 45,
 'ap-301', 'Rubem Berta', '915556', 'Sao Paulo', 'SP'); 

 createNewUserWithAdressAndState('Joao', 'joao@email.com', 955195, 'Rua Barao 12', 54, 
'', 'Sao Luiz', '55555', 'Salvador', 'BA');

createNewUserWithAdressAndState('Bruna', 'brubs@email.com', 5955195, 'Rua Bolivar', 101, 
'', 'Azenha', '565555', 'Campinas', 'SP');

createNewUserWithAdressAndState('Leonardo', 'leozin@email.com', 555545, 'Rua Babilonia', 635, 
'', 'Niteroi', '44455', 'Belo Horizonte', 'MG');

createNewUserWithAdressAndState('Camila', 'camy@email.com', 789965, 'Rua Flores', 300, 
'', 'Hipica', '4665555', 'Florianopolis', 'SC');

createNewUserWithAdressAndState('Claudio', 'caudio@email.com', 77454, 'Avenida Sertorio', 4400, 
'bloco H', 'Vila Nova', '56655556', 'Sao Bernardo do Campo', 'SP');

createNewUserWithAdressAndState('Rafael', 'rafa@email.com', 98556, 'Rua Boba', 404, 
'ap 10021', 'Ipanema', '565555', 'Rio de Janeiro', 'RJ');

createNewUserWithAdressAndState('Pedro', 'pedroca@email.com', 456565, 'Rua Adelino Ferreira', 862, 
'', 'Leopoldina', '565555', 'Porto Alegre', 'RS');

createNewUserWithAdressAndState('Estevam', 'estevam@email.com', 1010212, 'Rua Bogota', 1701, 
'', 'Vila Formosa', '12332144', 'Goiania', 'GO');

createNewUserWithAdressAndState('Gustavo', 'gugu@email.com', 452357, 'Rua Barcelona', 333, 
'', 'Teresopolis', '545155', 'Sao Paulo', 'SP');




console.log(searchUserAccountByState(accountUser));






