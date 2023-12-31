import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import mariadbConnection from './src/frameworks/database/mariadb/connection.js';
import express from 'express';
import routes from './src/frameworks/webserver/routes/index.js';
import expressConfig from './src/frameworks/webserver/express.js';
import serverConfig from './src/frameworks/webserver/server.js';
import errorHandlingMiddleware from './src/frameworks/webserver/middlewares/errorHandlingMiddleware.js';
import swaggerUi from 'swagger-ui-express';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

async function start() {
    const configPrefix = path.resolve(__dirname, `./gogoro_demo_ci/config/`);
    const config = yaml.load(fs.readFileSync(`${configPrefix}/config.yaml`), 'utf8');
    const swaggerDocument = yaml.load(fs.readFileSync('./swagger.yaml', 'utf8'));
    const app = express();
    // DB configuration and connection create
    await mariadbConnection(config);

    // express.js configuration
    expressConfig(app);

    // Initilized routers
    routes(app, express);

    // Server configuration and start
    serverConfig(app, config).startServer();

    // error handling middleware
    app.use(errorHandlingMiddleware);

    // Swagger API document
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

start();