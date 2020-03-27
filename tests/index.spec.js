import { expect } from 'chai';

describe('Sample test suite', () => {
  it('should pass since because its simulated to pass', done => {
    const returnNull = () => null;
    expect(returnNull()).to.equal(null);
    done();
  });
});
