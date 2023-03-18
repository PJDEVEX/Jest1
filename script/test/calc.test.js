
/**

Adds two numbers and returns the result.
@param num1 The first number to be added.
@param num2 The second number to be added.
@returns The sum of num1 and num2.
*/
const addition = require("../calc");
/**

Tests the addition function to ensure it returns the expected result.
*/
describe("Calculator", () => {
    describe("Addition function", () => {
        // test for addtion of 22 + 20 = 42
        test("should return 42 for 20 + 20", () => {
            expect(addition(20, 22)).toBe(42);
        })
        // test for addtion of 42 + 31 = 73
        test("should return 73 for 42 + 31", () => {
            expect(addition(42, 31)).toBe(73);
        })
        // Test with positive decimal numbers
        test("should return 7.5 for 3.5 + 4", () => {
            expect(addition(3.5, 4)).toBe(7.5);
        })
        // Test with negative numbers
        test("should return -10 for -5 + (-5)", () => {
            expect(addition(-5, -5)).toBe(-10);
        })
        // Test with one positive and one negative number
        test("should return -3 for 2 + (-5)", () => {
            expect(addition(2, -5)).toBe(-3);
        })
        // Test with large numbers:
        test("should return 100000 for 50000 + 50000", () => {
            expect(addition(50000, 50000)).toBe(100000);
        })
        // Test with zero
        test("should return 5 for 5 + 0", () => {
            expect(addition(5, 0)).toBe(5);
        })
        
        
        
        

    });

    /**

    Tests the substraction function to ensure it returns the expected result.
    */
    describe("Substraction function", () => {});

    /**

    Tests the multiplication function to ensure it returns the expected result.
    */
    describe("Multiplication function", () => {});

    /**

    Tests the division function to ensure it returns the expected result.
    */
    describe("Division function", () => {});
});