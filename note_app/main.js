const exportedVariables = require("./functions.js");
const readline = require("readline-sync");
let choice = -1;
do {
  console.log("\n1. Add Note");
  console.log("2. Update Note");
  console.log("3. Delete Note");
  console.log("4. Display Note");
  console.log("0. Exit");
  choice = parseInt(readline.question("Enter Choice : "));
  console.log("\n");
  switch (choice) {
    case 1:
      let message = readline.question("Enter Your Message : ");
      exportedVariables.addNote(message);
      break;
    case 2:
      let noteData1 = exportedVariables.displayNote();
      let selectLine1 = parseInt(readline.question("Enter Line No : "));
      let newMessage = readline.question("Enter Message : ");
      exportedVariables.updateNote(selectLine1, noteData1,newMessage);
      break;
    case 3:
      let noteData = exportedVariables.displayNote();
      let selectLine = parseInt(readline.question("Enter Line No : "));
      exportedVariables.deleteNote(selectLine, noteData);
      break;
    case 4:
      exportedVariables.displayNote();
      break;
    default:
        console.log("Invalide Choice..!");
  }
} while (choice != 0);
