const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');
const frontRoutes = require('./routes/frontRoutes');

const app = express();
const port = 8080;

// Configurar EJS como view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Servir arquivos estáticos
app.use('/styles', express.static(path.join(__dirname, 'views/styles')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Rotas da API
app.use('/api', routes);

// Rotas do frontend
app.use('/', frontRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
  console.log(`Dashboard: http://localhost:${port}/`);
  console.log(`Gerenciar: http://localhost:${port}/manage`);
});