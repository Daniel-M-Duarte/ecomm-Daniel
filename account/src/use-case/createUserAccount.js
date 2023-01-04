const arrayOfUsers = [];

export function createUserUseCase(nome, email, senha){
    arrayOfUsers.push (
        {
        UserId: arrayOfUsers.length +1,   
        name: nome,
        email: email,
        senha: senha,
        createData: new Date().toLocaleDateString('pt-BR')
        }
    );
    return arrayOfUsers[arrayOfUsers.length -1];
}

const accountUser = [
    {
        name: "Josue",
        email: "josuelima@email.com",
        telefone: 5555655
    },
    {
        name: "Daniel",
        email: "danielmac@email.com",
        telefone: 12345678
    }
];

export { accountUser }      

