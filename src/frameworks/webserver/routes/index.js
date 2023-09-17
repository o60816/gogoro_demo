import userRouter from './user.js';

export default function routes(app, express) {
  app.use('/api/v1/users', userRouter(express));
}
