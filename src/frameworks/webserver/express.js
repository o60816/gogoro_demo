import morgan from 'morgan';
import bodyParser from 'body-parser';

export default function expressConfig(app) {
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(
    bodyParser.urlencoded({
      limit: '50mb',
      extended: true,
      parameterLimit: 50000
    })
  );

  app.use(morgan('combined'));
}
