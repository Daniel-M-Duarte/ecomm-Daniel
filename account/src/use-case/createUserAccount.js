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