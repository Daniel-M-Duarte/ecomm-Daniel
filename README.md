# Ecommerce
___ 

Projeto de Ecommerce criando durante o programa LevelUp da Alura  

# The Twelve-Factor APP 

## A aplicação Ecommerce desenvolvida no programa LevelUp segue algumas das recomendações do 'The Twelve-Factor APP'  

_**I. Base de Código**_ :white_check_mark:
#### Uma base de código rastreada no controle de revisão, muitas implantações
A aplicação utiliza versionamento de código rastreado pelo Git, possui uma cópia da base de dados do rastreamento de revisões.
___
_**II. Dependências**_ :white_check_mark:
####  Declare e isole explicitamente as dependências
As dependências são gerenciadas através do _NPM_ que utiliza uma ferramenta de isolamento entre elas, além disso o arquivo "package-lock.json" armazena as versões das bibliotecas que foram utilizadas no projeto.
___
_**III.  Configurações**_ :white_check_mark:
 ### Armazene as configurações no ambiente
A fim de não comprometer nenhuma credencial o projeto armazena as variaveis de ambiente na biblioteca .env a qual não é compartilhada no Git.
___

_**IV.  Serviços de apoio**_ :white_check_mark:
 ###   Trate serviços de apoio como recursos anexados
As conexões com os serviços de apoio (banco de dados) são realizadas com variaveis de ambiente, que são tratados como recursos anexados através de bibliotecas específicas como o Mongoose ou ORM Sequelize.
___
_**V.  Build, release, run**_ :white_check_mark:
 ### Separe estritamente os estágios de construção e execução
O projeto foi separado em containers orquestrados pelo Docker, ele é quem garante as etapas de build, release e run.
___
_**VI. Processos**_ :white_check_mark:
 ###  Execute a aplicação como um ou mais processos que não armazenam estado
O projeto não armazena estado, uma vez que os processos são independentes e os dados são armazenados em serviços de apoios separados.
___
_**VII. Vínculo de Portas**_ :white_check_mark:
 ###  Exporte serviços via vínculo de portas
A própria aplicação é quem se encarrega de expor as portas HTTP utilizadas, deixando-a autocontida sem a necessidade de um servidor web.
___
_**VIII. Concorrência**_ :white_check_mark:
 ###  Escale através do processo modelo
A aplicação foi projetada de forma que possa ser escalável
___
_**IX. Descartabilidade**_ :white_check_mark:
###  Maximize robustez com inicialização rápida e desligamento gracioso
A aplicação possui uma inicialização rápida e pode ter seus serviços parados a qualquer momento graças ao uso de containers.
___
_**X. Paridade entre desenvolvimento e produção**_ :white_check_mark:
###  Mantenha o desenvolvimento, homologação e produção o mais similares possível
A aplicação possui mesmos ambientes de produção e desenvolvimento.
___
_**XI. Logs**_ :white_check_mark:
###  Trate logs como fluxos de eventos
A aplicação possui logs rodando que indicam o status da conexão do bancos.
___
_**XII. Processos administrativos**_ :x:
### Rode tarefas de administração/gestão em processos pontuais.
Não foi aplicado.
___

# Microservices Patterns

## A aplicação Ecommerce segue alguns padrões de microserviços como: 

_**Serviços de domínio**_ 

Todos os serviços foram desenvolvidos seguindo o modelo API RESTfull, além disso os serviços de Products, Accounts and Finance possuem persistência de dados.
___
_**Serviços de negócio**_ 

Existem interações entre serviços a fim de que ela habilite algumas mudanças de estado.
___
_**Single database vs Bancos diferentes**_ 

Cada serviço possui seu próprio banco de dados, facilitando assim a escalabilidade da aplicação.
___
