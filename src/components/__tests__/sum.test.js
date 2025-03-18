import { sum } from "../sum";

test("sum function should calculate the sum of two positive numbers", () => {
    const result = sum(3, 4);
    expect(result).toBe(7);
});

test("sum function should calculate the sum of a positive and a negative number", () => {
    const result = sum(5, -2);
    expect(result).toBe(3);
});

test("sum function should calculate the sum of two negative numbers", () => {
    const result = sum(-3, -7);
    expect(result).toBe(-10);
});

test("sum function should return 0 when both numbers are 0", () => {
    const result = sum(0, 0);
    expect(result).toBe(0);
});

test("sum function should handle large numbers correctly", () => {
    const result = sum(1000000, 2000000);
    expect(result).toBe(3000000);
});

test("sum function should handle floating point numbers correctly", () => {
    const result = sum(3, 2.5);
    expect(result).toBe(5.5);
});

test("sum function should return the same number if one of the arguments is 0", () => {
    expect(sum(7, 0)).toBe(7);
    expect(sum(0, 9)).toBe(9);
});

test("sum function should return negative vaL", () => {
    expect(sum(7, -8)).toBe(-1);
    expect(sum(-5, -4)).toBe(-9);
});