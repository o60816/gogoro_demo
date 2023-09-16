import userController from '../../../user/adapter/in/userController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

export default function userRouter(express) {
    const router = express.Router();
    router.get('/', authMiddleware, userController.getUsers);
    return router;
}