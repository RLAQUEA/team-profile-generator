const Manager = require("../lib/Manager");
test("Will set office number using constructor", () => {
  const testValue = "officeNumber";
  const e = new Manager("Frank", 1, "test@test.com", testValue);
  expect(e.getofficeNumber()).toBe(testValue);
});
test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Frank", 1, "test@test.com", "Manager");
  expect(e.getRole()).toBe(testValue);
});


