import { expect } from 'chai';
import { user } from '../../src/services';

describe('Service useer', () => {
  describe('Function userCreate', () => {
    it('Test creating user', async () => {
      expect(true).to.be.true;
    });
  });
  describe('Function userFindAll', () => {
    it('Test finding all user', async () => {
      const result = await user.userFindAll();
      expect(result).to.be.an('array');
    });
  });
  describe('Function userFindOne', () => {
    it('Test finding one user', async () => {
      const result = await user.userFindOne(20);
      console.log(result);
      expect(result).to.not.be.null;
    });
  });
  describe('Function userUpdate', () => {
    it('Test updating user', async () => {
      expect(true).to.be.true;
    });
  });
  describe('Function userDelete', () => {
    it('Test removing user', async () => {
      expect(true).to.be.true;
    });
  });
});
