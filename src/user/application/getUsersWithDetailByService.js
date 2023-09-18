import User from '../domain/user.js';
import Details from '../domain/details.js';
import Page from '../domain/page.js';

export default function getUsersByService(repository) {
    const getUsersWithDetailBy = async (queries) => {
        try {
            const page = parseInt(queries._page) || 1;
            const limit = parseInt(queries._limit) || 10;
            const createdFrom = parseInt(queries._createdFrom) || 1;
            const createdTo = parseInt(queries._createdTo) || Math.floor(Date.now()/1000);
            const jobType = queries._jobType;
            const {count, rows} = await repository.getUsersWithDetailBy({page, limit, createdFrom, createdTo, jobType});
            const userInfos = rows.map((user)=>{
                const details = user.Details;
                return {
                    ...User(user.id, user.name, user.jobType).toJson(),
                    Details: Details(details.createdAt, details.city, details.zipCode, details.address, details.gender).toJson()
                } 
            });
            
            const totalPage = Math.ceil(count/limit);
            const pageInfo = Page(page, totalPage, limit, page-1 <= totalPage && 1 !== page, page <= totalPage && totalPage !== page).toJson();
            return {
                pageInfo,
                userInfos
            };
        }catch(err) {
            throw err;
        }
    }
    return {
        getUsersWithDetailBy
    }
}