const express = require('express');
const app = express();
const PORT = 8080;

// Middleware para processar JSON
app.use(express.json());

// Rotas
const routes = require('./routes/index');
app.use('/', routes);

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});