import getUsersWithDetailByUseCase from "../../application/in/getUsersWithDetailByUseCase.js";
import getUsersWithDetailByService from "../../application/getUsersWithDetailByService.js";
import logger from '../../../utils/logger.js';
export default function userController(
    userPort,
    userAdapter
) {
    const dbRepository = userPort(userAdapter());
    const getUsersBy = async (req, res, next) => {
        try {
            const query = req.query;
            const result = await getUsersWithDetailByUseCase(getUsersWithDetailByService(dbRepository)).getUsersWithDetailBy(query);
            res.json(result);
        }catch(err) {
            logger.error(err.message);
            const error = new Error('Something went wrong');
            error.statusCode = 500;
            next(error);
        }
    }
    return {
        getUsersBy
    }
}