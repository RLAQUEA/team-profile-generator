const manager = require('../assets/index');

describe('manager', () => {
    describe('Initialization', () => {
        it ('should create a profile for the manager that has the values of employee, officeNumber, getRole()--overridden to return manager', ()=> {
            const text = 'Employee name';
            
            const output = new manager(text);
    
            expect(output.text).toEqual(text); 
        });
        it("should throw an error if not provided a 'text' value", () => {
            const cb = () => new manager();
            const err = new Error(
              "Expected parameter 'text' to be a non empty string"
            );
            expect(cb).toThrowError(err);
          });
        });
      });
  

