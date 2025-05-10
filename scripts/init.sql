-- Cria o tipo ENUM para status das tarefas
CREATE TYPE task_status AS ENUM ('pendente', 'concluída', 'em progresso');

-- Criação da tabela Users
CREATE TABLE Users (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criação da tabela Categories
CREATE TABLE Categories (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criação da tabela Tasks
CREATE TABLE Tasks (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id INT NOT NULL REFERENCES Users(id),
    category_id INT REFERENCES Categories(id),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status task_status DEFAULT 'pendente',
    due_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
