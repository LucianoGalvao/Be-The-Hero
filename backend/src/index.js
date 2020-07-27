const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
 * Rota / Recurso
*/

/*
    * Métodos HTTP:

    * GET: Buscar/listar informação no back-end
    * POST: Criar informação no back-end
    * PUT: Alterar informação no back-end
    * DELETE: Deletar informação no back-end
*/

/*
    * Tipo de parâmetros:

    * Query Parsms: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
    * Route Params: Parâmetros utilizados para identificar recursos
    * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc...
*/

/*
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
*/


app.listen(3333);