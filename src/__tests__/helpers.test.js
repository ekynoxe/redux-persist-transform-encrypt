import { makeEncryptor, handleError } from '../helpers';

describe('makeEncryptor', () => {
  it('should ensure the incoming state is a string', () => {
    const encryptor = makeEncryptor(state =>
      state
        .split('')
        .reverse()
        .join('')
    );
    const key = '123';
    const state = {
      a: 1
    };
    expect(typeof encryptor(state, key)).toBe('string');
  });
});

describe('errorHandler', () => {
  it('should handle an error given a function error handler', () => {
    const errorHandler = jest.fn();
    handleError(errorHandler, 'error message');
    expect(errorHandler).toHaveBeenCalledWith(
      'error message'
    );
  });

  it('should not throw if a non function handler is given', () => {
    const errorHandler = 'not a function';
    expect(() => { handleError(errorHandler, 'error message'); }).not.toThrow();
  });
});
