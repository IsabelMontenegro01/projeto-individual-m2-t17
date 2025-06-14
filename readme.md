# Gerenciador de Tarefas

Este é um sistema de Gerenciador de Tarefas desenvolvido como parte do projeto individual da disciplina de Computação do Inteli. O sistema tem como objetivo permitir que usuários gerenciem tarefas de forma organizada, vinculando cada atividade a uma categoria específica. Ele oferece funcionalidades de criação, edição e exclusão de tarefas por meio de uma interface web interativa.

## 📁 Estrutura de Pastas e Arquivos

```
projeto-individual-m2-t17/
├── assets/
├── config/
│   └── database.js
├── controllers/
│   └── CategoryController.js
│   └── TaskController.js
│   └── UserController.js
├── documents/
│   └── assets/
│   └── wad.md
├── models/
│   └── Category.js
│   └── Task.js
│   └── User.js
├── node_modules/
├── routes/
│   └── frontRoutes.js
│   └── index.js
├── scripts/
│   └── init.sql
│   └── runSQLScript.js
├── services/
│   └── userService.js
├── styles/
├── tests/
│   └── exemple.test.js
├── views/
│   └── pages/
│   └── page1.ejs
│   └── page2.ejs
│   └── styles/
│   └── page1Style.css/
│   └── page2Style.css/
├── .env
├── .gitattributes
├── jest.config.js
├── package-lock.json
├── package.json
├── README.md
├── rest.http
└── server.js
```

### 📂 Detalhes dos Diretórios

* **node\_modules/**: Dependências do projeto instaladas pelo npm.
* **scripts/**: Scripts auxiliares para inicialização do banco de dados.
* **routes/**: Definição das rotas da aplicação.
* **server.js**: Arquivo principal que inicia o servidor.
* **init.sql**: Script de inicialização do banco de dados.
* **package.json**: Configuração do projeto e scripts npm.
* **README.md**: Documentação do projeto.
* **.gitignore**: Lista de arquivos e pastas a serem ignorados pelo Git.

## 🚀 Como Executar o Projeto Localmente

1. Clone o repositório:

```bash
git clone https://github.com/IsabelMontenegro01/projeto-individual-m2-t17.git
```

2. Navegue até a pasta do projeto:

```bash
cd projeto-individual-m2-t17
```

3. Instale as dependências:

```bash
npm install
```

4. Crie o banco de dados usando o script `init.sql`:

```bash
npm run init-db
```

5. Inicie o servidor:

```bash
npm run dev
```

6. O servidor estará disponível em: `http://localhost:8080/`

## 🛠️ Tecnologias Utilizadas

* Node.js
* Express.js
* MySQL
* Nodemon
