import logger from '../../utils/logger.js';

export default function serverConfig(app, config) {
  function startServer() {
    app.listen(config.Http.Port, function () {
        logger.info(`Server is running on http://${config.Http.Host}:${config.Http.Port}`);
    });
  }

  return {
    startServer
  };
}
