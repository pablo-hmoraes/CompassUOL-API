# RESTful API Node.js

API que segue a arquitetura REST para gerenciar cliente e cidades. 

A API possui os seguintes endpoints:

- **Clientes:**
    - Cadastrar o cliente
    - Consultar o cliente pelo ID
    - Consultar o cliente pelo nome
    - Alterar o nome do cliente
    - Remover o cliente
- **Cidades:**
    - Cadastrar a cidade
    - Consultar a cidade pelo nome
    - Consultar a cidade pelo estado

A API foi criado usando Node.js com o framework express e MongoDB com o framework mongoose.

### Pré-requistos
---
Faça o download dos seguintes programas:
- [Node.js](https://nodejs.org/en/download/package-manager)
- [MongoDB](https://www.mongodb.com/try/download/compass)
- [Postman](https://www.postman.com/downloads/)

### Configurando a aplicação
---
Após obter os arquivos, abra algum terminal na pasta da aplicação e execute o comando 

``npm install``

para instalar as dependências. 

Com as dependências instaladas, é preciso configurar as variáveis de ambiente. Basta copiar o conteúdo do arquivo `.env.example`, colá-lo num novo arquivo chamado `config.env` e preencher com as variáveis do seu banco de dados. 

É necessário que você tenha uma instância do Atlas para conectar com a API.


### Executando a aplicação
---
Com as dependências e variáveis ajeitadas, basta utilizar o comando 

``npm start``

no terminal que a aplicação irá conectar com o banco de dados e iniciar.

Para facilitar o uso, execute, em outro terminal, o programa 

``
node preencheBD.js
``

### Utilização da aplicação
---

#### Postman
Para testar as funcionalidades da API/fazer requisições utilize o Postman. Foi disponibilizado o arquivo `reqs.postman_collection`, que é uma _collection_ do Postman para facilitar o manuseio. 

Para importar a collection: 
1. abra o Postman
2. clique na opção **import**
3. selecione o arquivo `reqs.postman_collection`

#### Requisições
Aqui estão especificadas as rotas e métodos HTTP para realizar as requisições na API

- **Clientes:**
    - Cadastrar o cliente: `POST - /api/clientes/`
    - Consultar o cliente pelo ID: `GET - /api/clientes/<ID>`
    - Consultar o cliente pelo nome `GET - /api/clientes/nome/<nome>`
    - Alterar o nome do cliente: `PATCH - /api/clientes/<ID>`
    - Remover o cliente: `DELETE - /api/clientes/<ID>`
- **Cidades:**
    - Cadastrar a cidade: `POST - /api/cidades/`
    - Consultar a cidade pelo nome `GET - /api/cidades/<nome>`
    - Consultar a cidade pelo estado `GET - /api/cidades/<estado>`

Os campos dos clientes são:

- nome (**obrigatório**)
- sexo (**obrigatório**)
- data de nascimento (**obrigatório**) 
- idade 
- cidade (**obrigatório**)  

Os campos da cidade são:
- nome **(obrigatório)**
- estado **(obrigatório)**










