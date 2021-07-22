const Intern = require("../lib/Intern");
test("should set school using constructor", () => {
  const testValue = "school";
  const e = new Intern("Bob", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});
test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Bob", 1, "test@test.com", "Intern");
  expect(e.getRole()).toBe(testValue);
});
test("should get school using getSchool()", () => {
  const testValue = "School";
  const e = new Intern("Bob", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});

