import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import mariadbConnection from './src/user/adapter/out/mariadb/connection.js';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

async function start() {
    const configPrefix = path.resolve(__dirname, `./gogoro_demo_ci/config/`);
    const config = yaml.load(fs.readFileSync(`${configPrefix}/config.yaml`), 'utf8');
    await mariadbConnection(config);
}

start();