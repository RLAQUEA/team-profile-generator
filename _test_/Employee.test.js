const Employee = require("../lib/Employee");
test("Will create new Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});
test("Will set name using constructor argument", () => {
  const name = "Mark";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});
test("Will set id using constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Mark", testValue);
  expect(e.id).toBe(testValue);
});
test("Will set email using constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("Mark", 1, testValue);
  expect(e.email).toBe(testValue);
});
test("Will get name using getName()", () => {
  const testValue = "Mark";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});
test("Will get id using getId()", () => {
  const testValue = 100;
  const e = new Employee("Mark", testValue);
  expect(e.getId()).toBe(testValue);
});
test("Will get email using getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Mark", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});
test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Mark", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});