import { getQueryParams } from './addQueryParams';

describe('shared/url/addQueryParams', () => {
  test('test with one parameter', () => {
    const params = getQueryParams({
      test: '123',
    });

    expect(params).toBe('?test=123');
  });

  test('test with multiple parameters', () => {
    const params = getQueryParams({
      value: 'test1',
      value2: 'test2',
    });

    expect(params).toBe('?value=test1&value2=test2');
  });

  test('test with undefined parameter', () => {
    const params = getQueryParams({});

    expect(params).toBe('?');
  });
});
