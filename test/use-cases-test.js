import chai from 'chai';
import sinon from 'sinon';
import { faker } from '@faker-js/faker';
import getUsersWithDetailByUseCase from '../src/user/application/in/getUsersWithDetailByUseCase.js';
import getUsersWithDetailByService from '../src/user/application/getUsersWithDetailByService.js';
import userPort from '../src/user/application/out/userPort.js';
import Page from '../src/user/domain/page.js';
const { expect } = chai;

function generateUsers(amount) {
  const userInfos = []
  for(let i=0;i<amount;++i) {
    userInfos.push(
      {
        id: faker.string.uuid(),
        name: faker.internet.userName(),
        jobType: faker.string.sample(),
        Details: {
          createdAt: faker.date.past(),
          city: faker.string.sample(),
          zipCode: faker.string.uuid(),
          address: faker.string.sample(),
          gender: faker.string.sample()
        }
      }
    );
  }
  return userInfos;
}

let userRepository = null;
let pageInfo = null;
let queryParamsGen = null;
describe('Use cases', () => {
  describe('Fetch user with different combinations of query params', () => {
    beforeEach(() => {
      userRepository = userPort();
      pageInfo = Page(
        1, 
        5, 
        10, 
        false, 
        true
      ).toJson();
      queryParamsGen = {
        id: undefined,
        page: 1,
        limit: 10,
        createdFrom: 1,
        createdTo: Math.floor(Date.now()/1000),
        jobType: undefined 
      }
    });
    it('Without query params', async () => {
      const userInfos = generateUsers(10);
      // Empty query params
      const queryParams = {}
      const count = 50;

      const stubGetUsersWithDetailBy = sinon
        .stub(userRepository, 'getUsersWithDetailBy')
        .returns({count, rows: userInfos});
      const fetchedData = await getUsersWithDetailByUseCase(getUsersWithDetailByService(userRepository)).getUsersWithDetailBy(queryParams);
        expect(stubGetUsersWithDetailBy.calledOnce).to.be.true;
      sinon.assert.calledWith(stubGetUsersWithDetailBy, queryParamsGen);
      expect(fetchedData).to.eql({
        pageInfo,
        userInfos
      });
    });

    it('With query param page', async () => {
      const userInfos = generateUsers(20);
      // Empty query params
      const queryParams = {
        _page: 5
      }
      // Generate by service
      queryParamsGen.page = 5;
      const count = 50;
      const stubGetUsersWithDetailBy = sinon
        .stub(userRepository, 'getUsersWithDetailBy')
        .returns({count, rows: userInfos});
      const fetchedData = await getUsersWithDetailByUseCase(getUsersWithDetailByService(userRepository)).getUsersWithDetailBy(queryParams);
        expect(stubGetUsersWithDetailBy.calledOnce).to.be.true;
      sinon.assert.calledWith(stubGetUsersWithDetailBy, queryParamsGen);
      
      // PageInfo shoule be
      pageInfo.curPage = 5;
      pageInfo.hasPrevPage = true;
      pageInfo.hasNextPage = false;
      expect(fetchedData).to.eql({
        pageInfo,
        userInfos
      });
    });

    it('With query param limit', async () => {
      const userInfos = generateUsers(20);
      // Empty query params
      const queryParams = {
        _limit: 20
      }
      // Generate by service
      queryParamsGen.limit = 20;
      const count = 50;
      const stubGetUsersWithDetailBy = sinon
        .stub(userRepository, 'getUsersWithDetailBy')
        .returns({count, rows: userInfos});
      const fetchedData = await getUsersWithDetailByUseCase(getUsersWithDetailByService(userRepository)).getUsersWithDetailBy(queryParams);
        expect(stubGetUsersWithDetailBy.calledOnce).to.be.true;
      sinon.assert.calledWith(stubGetUsersWithDetailBy, queryParamsGen);

      // PageInfo shoule be
      pageInfo.limit = 20;
      pageInfo.totalPage = 3;
      expect(fetchedData).to.eql({
        pageInfo,
        userInfos
      });
    });

    it('With query param createdFrom', async () => {
      const userInfos = generateUsers(20);
      // Empty query params
      const queryParams = {
        _createdFrom: 9999
      }
      // Generate by service
      queryParamsGen.createdFrom = 9999;
      const count = 50;
      const stubGetUsersWithDetailBy = sinon
        .stub(userRepository, 'getUsersWithDetailBy')
        .returns({count, rows: userInfos});
      const fetchedData = await getUsersWithDetailByUseCase(getUsersWithDetailByService(userRepository)).getUsersWithDetailBy(queryParams);
        expect(stubGetUsersWithDetailBy.calledOnce).to.be.true;
      sinon.assert.calledWith(stubGetUsersWithDetailBy, queryParamsGen);
      expect(fetchedData).to.eql({
        pageInfo,
        userInfos
      });
    });

    it('With query param createdTo', async () => {
      const userInfos = generateUsers(20);
      // Empty query params
      const queryParams = {
        _createdTo: 9999
      }
      // Generate by service
      queryParamsGen.createdTo = 9999;
      const count = 50;
      const pageInfo = Page(
        1, 
        5, 
        10, 
        false, 
        true
      ).toJson();

      const stubGetUsersWithDetailBy = sinon
        .stub(userRepository, 'getUsersWithDetailBy')
        .returns({count, rows: userInfos});
      const fetchedData = await getUsersWithDetailByUseCase(getUsersWithDetailByService(userRepository)).getUsersWithDetailBy(queryParams);
        expect(stubGetUsersWithDetailBy.calledOnce).to.be.true;
      sinon.assert.calledWith(stubGetUsersWithDetailBy, queryParamsGen);
      expect(fetchedData).to.eql({
        pageInfo,
        userInfos
      });
    });

    it('With query param jobType', async () => {
      const userInfos = generateUsers(20);
      // Empty query params
      const queryParams = {
        _jobType: 'Engineer'
      }
      // Generate by service
      queryParamsGen.jobType = 'Engineer';
      const count = 50;
      const stubGetUsersWithDetailBy = sinon
        .stub(userRepository, 'getUsersWithDetailBy')
        .returns({count, rows: userInfos});
      const fetchedData = await getUsersWithDetailByUseCase(getUsersWithDetailByService(userRepository)).getUsersWithDetailBy(queryParams);
        expect(stubGetUsersWithDetailBy.calledOnce).to.be.true;
      sinon.assert.calledWith(stubGetUsersWithDetailBy, queryParamsGen);
      expect(fetchedData).to.eql({
        pageInfo,
        userInfos
      });
    });

    it('Test page exceeds the totol page, both hasPrevPage and hasNextPage shoule be false', async () => {
      const userInfos = generateUsers(20);
      // Empty query params
      const queryParams = {
        _page: 10
      }
      // Generate by service
      queryParamsGen.page = 10;
      const count = 50;
      const stubGetUsersWithDetailBy = sinon
        .stub(userRepository, 'getUsersWithDetailBy')
        .returns({count, rows: userInfos});
      const fetchedData = await getUsersWithDetailByUseCase(getUsersWithDetailByService(userRepository)).getUsersWithDetailBy(queryParams);
        expect(stubGetUsersWithDetailBy.calledOnce).to.be.true;
      sinon.assert.calledWith(stubGetUsersWithDetailBy, queryParamsGen);

      // PageInfo shoule be
      pageInfo.curPage = 10;
      pageInfo.hasPrevPage = false;
      pageInfo.hasNextPage = false;
      expect(fetchedData).to.eql({
        pageInfo,
        userInfos
      });
    });
  });
});