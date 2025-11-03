/* Task 1: Compile Participant Details with Shorthand Property Names */
const name = "Robert";
const age = 34;
const studyField = "Quantum Biology";

// ✅ Using shorthand property names
const participant = { name, age, studyField };

console.log("Participant:", participant);


/* Task 2: Implement a Shorthand Function for Participant Info */
// ✅ Copy the participant object and add a shorthand method
const participantWithMethod = {
  ...participant,
  displayInfo() {
    console.log(`Participant: ${this.name}, Age: ${this.age}, Field: ${this.studyField}`);
  }
};

// Example usage:
participantWithMethod.displayInfo();


/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// ✅ Using an arrow function version
const participantWithArrow = {
  ...participant,
  displayInfo: () => {
    console.log(`Participant: ${this.name}, Age: ${this.age}, Field: ${this.studyField}`);
  }
};

participantWithArrow.displayInfo();

/* Observations:
 * Arrow functions do NOT have their own `this` binding.
 * In this case, `this` refers to the outer (global or undefined) context, not the object itself.
 * Therefore, `this.name`, `this.age`, and `this.studyField` are undefined when using an arrow function.*/


/* Task 4: Using Computed Property Names */
// ✅ Function to dynamically update an object's property
function updateParticipantInfo(obj, propertyName, value) {
  return {...obj, [propertyName]: value,};
}

const updatedParticipant = updateParticipantInfo(participant, "age", 35);
console.log("Updated Participant:", updatedParticipant);
