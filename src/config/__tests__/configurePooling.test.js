import Pooling from '../configurePooling';

describe('CONFIGURE POOLING', () => {
  test('should test the polling correctly', () => {
    const result = Pooling();
    expect(typeof result).toBe('number');
    expect(result).toBe(10000);
  });

  test('should test the polling with param correctly', () => {
    const result = Pooling(50);
    expect(typeof result).toBe('number');
    expect(result).toBe(50);
  });
});
