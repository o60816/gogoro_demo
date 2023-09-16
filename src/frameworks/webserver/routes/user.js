import userController from '../../../user/adapter/in/userController.js';
import userPort from '../../../user/application/out/userPort.js';
import userAdapter from '../../../user/adapter/out/mariadb/userAdapter.js';
import authMiddleware from '../middlewares/authMiddleware.js';

export default function userRouter(express) {
    const router = express.Router();
    router.get('/', authMiddleware, userController(userPort, userAdapter).getUsersBy);
    return router;
}