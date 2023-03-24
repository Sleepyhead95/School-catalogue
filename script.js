// Create parent class named School.
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  // Add setter to ensure the value passed for 'numberOfStudents' is a number.
  set numberOfStudents(studentNumber) {
    if (typeof studentNumber === 'number') {
      this._numberOfStudents = studentNumber;
    }
    else {console.log('Invalid input: numberOfStudents must be set to a Number.')
    }
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} at the ${this._level} school level.`)
  }
  // A static function that will not be inherited by child classes. It picks a substitute teacher based on an array passed in the argument.
  static pickSubstituteTeacher(substituteTeachers) {
    const randomTeacher = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randomTeacher];
  }
}

// Create child class named PrimarySchool.
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    // Has an additional, unique property called pickupPolicy
    this._pickupPolicy = pickupPolicy;
  }
  get pickup() {
    return this._pickupPolicy;
  }
}

// Create child class named HighSchool.
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    // Has an additional, unique property called sportsTeams
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    console.log(this._sportsTeams);
  }
}

// Create child class named MiddleSchool
class MiddleSchool extends School {
  constructor(name, numberOfStudents) {
    super(name);
  }
}

// Creating a new instance for the PrimarySchool class
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

// Calling this function will print a quick facts statement about the school.
lorraineHansbury.quickFacts();

// Calling this static function will pick a random teacher from the array of teachers passed as an argument
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

// Creating a new instance for the HighSchool class
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

// Printing the array of all sports teams available at the particular High School
console.log(alSmith.sportsTeams);

