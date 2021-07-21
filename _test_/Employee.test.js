const Employee = require("../lib/Employee");
test("Will instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});
test("Will set name via constructor arguments", () => {
  const name = "Mark";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});
test("Will set id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});
test("Will set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});
test("Will get name via getName()", () => {
  const testValue = "Mark";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});
test("Will get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});
test("Will get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});
test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Mark", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});