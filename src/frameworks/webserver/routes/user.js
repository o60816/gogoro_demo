import userController from '../../../user/adapter/in/userController.js';
import userPort from '../../../user/application/out/userPort.js';
import userAdapter from '../../../user/adapter/out/mariadb/userAdapter.js';
import getUsersByMiddleware from '../middlewares/getUsersByMiddleware.js';

export default function userRouter(express) {
    const router = express.Router();
    router.get('/', getUsersByMiddleware, userController(userPort, userAdapter).getUsersBy);
    router.get('/:id', getUsersByMiddleware, userController(userPort, userAdapter).getUsersBy);
    return router;
}