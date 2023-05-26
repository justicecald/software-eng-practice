const Person = require('./person');

// Your code here
class Teacher extends Person {
  constructor(firstName, lastName, subject, years) {
    super(firstName, lastName),
    this.subject = subject,
    this.yearsOfExperience = years
  };

  static combinedYearsOfExperience(teachers) {
    let sum = teachers.reduce((years, teacher) => {
      return years += teacher.yearsOfExperience;
    }, 0);

    return sum;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}