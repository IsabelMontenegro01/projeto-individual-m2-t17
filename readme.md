# Gerenciador de Tarefas

Este é um sistema de Gerenciador de Tarefas desenvolvido como parte do projeto individual da disciplina de Computação do Inteli. O objetivo do sistema é facilitar a organização e produtividade, permitindo a criação, edição e exclusão de tarefas, além de gerenciamento de usuários.

## 📁 Estrutura de Pastas e Arquivos

```
projeto-individual-m2-t17/
├── assets/
├── config/
│   └── database.js
├── controllers/
│   └── HomeController.js
├── documents/
│   └── assets/
│   └── wad.md
├── models/
│   └── User.js
├── node_modules/
├── routes/
│   └── index.js
├── scripts/
│   └── init.sql
│   └── runSQLScript.js
├── services/
│   └── userService.js
├── styles/
├── tests/
│   └── exemple.test.js
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

6. O servidor estará disponível em: `http://localhost:8080`

## 🛠️ Tecnologias Utilizadas

* Node.js
* Express.js
* MySQL
* Nodemon
