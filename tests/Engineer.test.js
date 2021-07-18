const engineer = require('../assets/index');

describe('engineer', () => {
    describe('Initialization', () => {
        it ('should create a profile for the engineer that has the values of employee, GitHub username, getGithub(), getRole()—overridden to return engineer', () => {
            
            const text = 'Engineer name';
            
            const output = new engineer(text);
    
            expect(output.text).toEqual(text); 
        });
        it("should throw an error if not provided a 'text' value", () => {
            const cb = () => new engineer();
            const err = new Error(
              "Expected parameter 'text' to be a non empty string"
            );
            expect(cb).toThrowError(err);
          });
        });
      });
  

