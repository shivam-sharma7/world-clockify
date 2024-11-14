import { describe, it, expect } from 'vitest';
import { sum, subtract, multiplication, divide } from '../src/maths/basic.js';

describe('Math module helper', () => {
  it('should pass sum', () => {
    let a = 10;
    let b = 20;
    let c = 30;
    expect(sum(a, b, c));
  });
  it('should pass substract', () => {
    let a = 10;
    let b = 20;
    let c = 30;
    expect(subtract(a, b, c));
  });
  it('should pass multiplication', () => {
    let a = 10;
    let b = 20;
    let c = 30;
    expect(multiplication(a, b, c));
  });
  it('should pass divison', () => {
    let a = 10;
    let b = 20;
    expect(divide(a, b));
  });
});
