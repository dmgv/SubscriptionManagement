// Importando o módulo path do Node.js, que fornece utilitários para trabalhar com caminhos de arquivo e diretório.
const path = require('path');

// Importando o framework Express, que é usado para criar aplicativos web em Node.js.
const express = require('express');

// Importando o módulo bodyParser, que é um middleware para fazer parsing do corpo das requisições HTTP.
const bodyParser = require('body-parser');

// Inicializando o aplicativo Express.
const app = express();

// Configurando o mecanismo de visualização para o EJS (Embedded JavaScript templating).
app.set('view engine', 'ejs');

// Configurando o diretório onde os arquivos de visualização (views) estão localizados.
app.set('views', 'views');

// Usando o middleware bodyParser para fazer parsing de corpos de requisição urlencoded (dados de formulário HTML).
app.use(bodyParser.urlencoded({ extended: false }));

// Servindo arquivos estáticos (como CSS, imagens, etc.) do diretório 'public' usando o middleware express.static.
app.use(express.static(path.join(__dirname, 'public')));

// const livereload = require("livereload");
// const connectLiveReload = require("connect-livereload");

// const liveReloadServer = livereload.createServer();
// liveReloadServer.server.once("connection", () => {
//   setTimeout(() => {
//     liveReloadServer.refresh("/");
//   }, 100);
// });


// Importando o controlador para erros 404.
const errorController = require('./controllers/error');

const appRoutes = require('./routes/app-router');
const siteRoutes = require('./routes/site-router');

// Importando as rotas de settings
const settingsRoutes = require('./routes/settings');

// app.use(connectLiveReload());

// Definindo as rotas para o caminho raiz '/' usando as rotas definidas no shopRoutes.
// app.use(settingsRoutes);
app.use(siteRoutes);

app.use('/app', appRoutes)

// Definindo um middleware para lidar com requisições não encontradas (erro 404).
app.use(errorController.get404);

// Iniciando o servidor Express para ouvir na porta 3000.
app.listen(3000);
