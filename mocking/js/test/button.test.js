/**
 * @jest-environment jsdom
 */

/**

Set up Jest to run in the jsdom environment, which simulates a browser-like environment for testing DOM manipulation.
*/

/**

Import the buttonClick function from the "../button" file.
*/
const buttonClick = require("../button");

/**

Set up the test environment by resetting the HTML body before each test.
*/
// beforeEach(() => {
    // below is just to check one element
    //  document.body.innerHTML = "<p id='par'></p>";

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("mocking/index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

/**

Group related tests together in a test suite called "DOM tests".
*/
describe("DOM tests", () => {

    /**

    Test that the buttonClick function changes the content of a paragraph element with id="par".
    */
    test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked")
    });
    test("h1 should to exsists", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});