import { failureResult } from '..';

describe('failureResult', () => {
  const result = failureResult({
    type: 'SomeFailure',
    message: 'Something failed'
  });

  it('.success should be false', () => {
    expect(result.success).toBe(false);
  });

  it('has error object', () => {
    expect(result.error).toEqual({
      type: 'SomeFailure',
      message: 'Something failed'
    });
  });
});
