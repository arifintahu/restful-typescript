import { expect } from 'chai';
import { user } from '../../src/services';

describe('User service', () => {
  it('checking userFind', async () => {
    const result = await user.userFind();
    expect(result).to.be.an('array');
  });
});
