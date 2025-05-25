# Web Application Document - Projeto Individual - Módulo 2 - Inteli

## Taskly

#### Isabel Montenegro

## Sumário

1. [Introdução](#c1)  
<br>

2. [Visão Geral da Aplicação Web](#c2)  

<details>
  <summary>Subtópicos</summary>

  - [2.1. Personas](#c2.1)
  - [2.2. User Stories](#c2.2)

</details>
<br>

3. [Projeto Técnico da Aplicação Web](#c3)  

<details>
  <summary>Subtópicos</summary>

- [3.1. Modelagem do banco de dados](#c3.1)
  - [3.1.1. BD e Models](#c3.1.1)
- [3.2. Arquitetura](#c3.2)
- [3.3. Wireframes](#c3.3)
- [3.4. Guia de estilos](#c3.4)
- [3.5. Protótipo de alta fidelidade](#c3.5)
- [3.6. Wireframes](#c3.6)
- [3.7. Interface e Navegação](#c3.7)

<br>

4. [Desenvolvimento da Aplicação Web](#c4)  

<details>
  <summary>Subtópicos</summary>

- [4.1. Demonstração do Sistema Web](#c4.1)
- [4.2. Conclusões e Trabalhos Futuros](#c4.2)
  
<br>

5. [Referências](#c5)  


## <a name="c1"></a>1. Introdução 

O **Taskly** é um sistema desenvolvido para auxiliar na organização pessoal e profissional, permitindo que os usuários criem, editem, excluam e acompanhem tarefas com diferentes níveis de prioridade. O sistema é projetado para ser leve, intuitivo e expansível, com foco na produtividade e organização eficiente. Ele oferece funcionalidades básicas como cadastro de usuários, gerenciamento de tarefas, controle de status e prioridades. Futuras melhorias podem incluir notificações e integração com outras ferramentas de produtividade.

---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas 

*Posicione aqui sua(s) Persona(s) em forma de texto markdown com imagens, ou como imagem de template preenchido. Atualize esta seção ao longo do módulo se necessário.*

### 2.2. User Stories 

*Posicione aqui a lista de User Stories levantadas para o projeto. Siga o template de User Stories e utilize a referência USXX para numeração (US01, US02, US03, ...). Indique todas as User Stories mapeadas, mesmo aquelas que não forem implementadas ao longo do projeto. Não se esqueça de explicar o INVEST de 1 User Storie prioritária.*

---

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados  

O banco de dados foi projetado para armazenar as informações de **usuários**, **tarefas** e **categorias**, com relacionamentos bem definidos para garantir a integridade dos dados. O modelo inclui três tabelas principais:

* **Users**: Armazena informações dos usuários, como nome, email e senha.
* **Tasks**: Registra as tarefas criadas, com detalhes como título, descrição e data de entrega.
* **Categories**: Define as categorias que podem ser associadas às tarefas, facilitando a organização.

O modelo relacional é ilustrado no diagrama abaixo:

<div align="center">
<sub>Figura 01 - Modelo físico</sub>
<img src="./assets/modelo-banco.png" width="100%">
<sup>Fonte: Material produzido pelos autores (2025)</sup>
</div>
<br>

Além do diagrama, o modelo físico do banco de dados é definido no arquivo `init.sql`, que contém as instruções para criação e estruturação das tabelas:

CREATE TABLE Categories (
id INT AUTO\_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
description TEXT,
created\_at TIMESTAMP DEFAULT CURRENT\_TIMESTAMP
);

```sql
-- Cria o banco de dados, se não existir
CREATE DATABASE IF NOT EXISTS gerenciador_tarefas;

-- Usa o banco de dados criado
USE gerenciador_tarefas;

-- Cria a tabela de usuários
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Cria a tabela de tarefas
CREATE TABLE Tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    category_id INT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status ENUM('pendente', 'concluída', 'em progresso') DEFAULT 'pendente',
    due_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (category_id) REFERENCES Categories(id)
);
```



### 3.1.1 BD e Models (Semana 5)
*Descreva aqui os Models implementados no sistema web*

### 3.2. Arquitetura (Semana 5)

*Posicione aqui o diagrama de arquitetura da sua solução de aplicação web. Atualize sempre que necessário.*

**Instruções para criação do diagrama de arquitetura**  
- **Model**: A camada que lida com a lógica de negócios e interage com o banco de dados.
- **View**: A camada responsável pela interface de usuário.
- **Controller**: A camada que recebe as requisições, processa as ações e atualiza o modelo e a visualização.
  
*Adicione as setas e explicações sobre como os dados fluem entre o Model, Controller e View.*

### 3.3. Wireframes (Semana 03 - opcional)

*Posicione aqui as imagens do wireframe construído para sua solução e, opcionalmente, o link para acesso (mantenha o link sempre público para visualização).*

### 3.4. Guia de estilos (Semana 05 - opcional)

*Descreva aqui orientações gerais para o leitor sobre como utilizar os componentes do guia de estilos de sua solução.*


### 3.5. Protótipo de alta fidelidade (Semana 05 - opcional)

*Posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização).*

### 3.6. WebAPI e endpoints (Semana 05)

 

### 3.7 Interface e Navegação (Semana 07)

*Descreva e ilustre aqui o desenvolvimento do frontend do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

*VIDEO: Insira o link do vídeo demonstrativo nesta seção*
*Descreva e ilustre aqui o desenvolvimento do sistema web completo, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

*Indique pontos fortes e pontos a melhorar de maneira geral.*
*Relacione também quaisquer outras ideias que você tenha para melhorias futuras.*



## <a name="c5"></a>5. Referências

_Incluir as principais referências de seu projeto, para que o leitor possa consultar caso ele se interessar em aprofundar._<br>

---
---