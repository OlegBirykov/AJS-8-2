import ErrorRepository from '../ErrorRepository';

const err = new ErrorRepository();

test.each([
  [0, 'Fatal error'],
  [1, 'No connect'],
  [2, 'Argument not found'],
  [3, 'Not enough memory'],
])(
  'Должен выводиться текст при известном коде ошибки', (code, text) => {
    expect(err.translate(code)).toBe(text);
  },
);

test('Должен выводиться текст при неизвестном коде ошибки', () => {
  expect(err.translate(-1)).toBe('Unknown error');
});
