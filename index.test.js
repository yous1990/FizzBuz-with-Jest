import { main } from './index';

test('Evaluate fizzbuzz for 3', () => {
    expect(main(3)).toBe('Fizz');
});

test('Evaluate fizzbuzz for 5', () => {
    expect(main(5)).toBe('Buzz');
});

test('Evaluate fizzbuzz for 15', () => {
    expect(main(15)).toBe('FizzBuzz');
});
