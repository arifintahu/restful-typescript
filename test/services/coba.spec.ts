import { expect } from 'chai';

describe('Test group', () => {
  before(() => {
    console.log('This part executes once before all tests');
  });

  after(() => {
    console.log('This part executes once after all tests');
  });

  describe('Test case', () => {
    beforeEach(() => {
      console.log('Executes before every test');
    });

    it('checking test', () => {
      expect(30).to.equal(30);
    });
  });
});
