import { Add, Substract, Multiplication } from '../Math'

test('Return sum of two arguments', () => {
  // Arrange
  const a = 2;
  const b = 3;
  const expected = 5;

  // Act
  const actual = Add(a, b);

  // Assert
  expect(actual).toBe(expected)
})

test('Return substraction of a - b', () => {
  // Arrange
  const a = 3;
  const b = 2;
  const expected = 1;

  // Act
  const result = Substract(a, b)

  // Assert
  expect(result).toBe(expected)

})

test('Return multiplication of two arguments', () => {
  // Arrange
  const a = 3;
  const b = 2;
  const expected = 6;

  // Act
  const result = Multiplication(a, b)

  // Assert
  expect(result).toBe(expected)

})