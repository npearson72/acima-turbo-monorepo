import { successResult } from '..';

describe('successResult', () => {
  const result = successResult({ example: 'data' });

  it('.success should be true', () => {
    expect(result.success).toBe(true);
  });

  it('has data object', () => {
    expect(result.example).toEqual('data');
  });
});
