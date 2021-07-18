const intern = require('../assets/index');

describe('intern', () => {
    describe('Initialization', () => {
        it ('should create a profile for the intern that has the values of employee, school, getSchool(), getRole()-- overridden to return intern', ()=> {
            const text = 'Employee name';
            
            const output = new intern(text);
    
            expect(output.text).toEqual(text); 
        });
        it("should throw an error if not provided a 'text' value", () => {
            const cb = () => new intern();
            const err = new Error(
              "Expected parameter 'text' to be a non empty string"
            );
            expect(cb).toThrowError(err);
          });
        });
      });
  

