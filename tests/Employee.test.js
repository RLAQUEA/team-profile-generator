const employee = require('../assets/index');

describe('employee', () => {
    describe('Initialization', () => {
        it ('should create a profile for the employee that has the values of name, id, email, getName(), getId(), getEmail(), getRole()-returns employee', ()=> {
            const text = 'Employee name';
            
            const output = new employee(text);
    
            expect(output.text).toEqual(text); 
        });
        it("should throw an error if not provided a 'text' value", () => {
            const cb = () => new employee();
            const err = new Error(
              "Expected parameter 'text' to be a non empty string"
            );
            expect(cb).toThrowError(err);
          });
        });
      });
  

