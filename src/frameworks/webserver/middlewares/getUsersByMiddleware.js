import Joi from 'joi';
import logger from '../../../utils/logger.js';

export default async function getUsersByMiddleware(req, res, next) {
  try {
    const schema = Joi.object({
      _page: Joi.number().integer().min(1),
      _limit: Joi.number().integer().min(1),
      _createdFrom: Joi.number().integer().min(1),
      _createdTo:  Joi.number().integer().min(1),
      _jobType: Joi.string()
    });
    await schema.validateAsync(req.query);
    next();
  }catch(err) {
    logger.error(err.message);
    let error = new Error('Malformed query parameters');
    error.statusCode = 400;
    next(error);
  }
}
