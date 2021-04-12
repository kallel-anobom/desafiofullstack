# Desafio para a vaga de Desenvolvimento Fullstack

## Desafio 1 - API Graphql
A API funciona fazendo request para [API do StackOverflow](https://api.stackexchange.com/docs/questions) e retornando dados para cliente de acordo com queries como requisições e responde com os campos desejados. Foram bibliotecas utilizadas para o desenvolvimento da API:

* apollo-server - utilizada para fazer requisições à API do StackOverflow;
* KOA - utilizada para roteamento;
* apollo-server-koa - utilizada para compatibilidade de requisições GraphQL num servidor HTTP;
* graphql - utilizada para habilitar a criação de schemas, resolvers e interpretar as queries GraphQL.

Os valores padrão para os demais parâmetros são:
* limit: 10, trazendo no máximo 10 resultados por padrão;
* score: -1, trazendo perguntas com nota 0 ou mais;
* sort: activity, trazendo as perguntas com atividade mais recente primeiro.

## Desafio 2 - Front-end
O front-end envia requisições à API implementada no back-end conforme os campos preenchidos pelo interface. Foi seguido esse layout para realizar as buscas [nesta interface](https://drive.google.com/file/d/1TeyJx9meFHKFH33VeqzfNeXcA0V_gsIu/view).
* ReactJs e dependências - utilizadas para criar interfaces de usuário dinâmicas;
* Axios - utilizada para fazer requisições à API;
* Redux-Toolkit e dependências - utilizadas para gerenciar um estado global da aplicação.
* Data-Fns - Para tratar as datas em formatos nacional

### Execução
Após o clone do projeto, execute o seguinte comando:

### `yarn install `

Este comando instalará todas as dependências necessárias, tanto para o back-end quanto para o front-end.

Para inicializar a aplicação, execute:

Obs: Tem que executar o yarn em cada projeto individualmente
### `yarn start`

Se o navegador não for iniciado automaticamente, a aplicação pode ser encontrada no endereço [http://localhost:3000](http://localhost:3000).
Caso quera acessar o playground do graphql no backend, após rodar o yarn star tem que acessar o endereço [http://localhost:4000/graphql](http://localhost:4000/graphql).

Obs: Tem que executar o yarn em cada projeto individualmente
