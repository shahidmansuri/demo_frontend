import { HttpError } from './http-error.interceptor';

describe('HttpError', () => {
  it('should create an instance', () => {
    expect(new HttpError()).toBeTruthy();
  });
});
