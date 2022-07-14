// functions of noteApp
const fs = require("fs");

module.exports = {
  addNote: function (message) {
    const data = fs.readFileSync("note.txt", { encoding: "utf8", flag: "r" });
    if(data.length!=0){
        fs.appendFileSync("note.txt", "\n"+message, "utf8");
    }else{
        fs.appendFileSync("note.txt",message, "utf8");
    }
  },
  updateNote: function (lineNo,data,newMes) {
    let newData = "";
    if (lineNo > 0 && lineNo <= data.length) {
        data[lineNo-1] = newMes;
      for (let i = 0; i < data.length; i++) {
        if (data[i] != undefined) {
          if (i == data.length - 1) {
            newData += data[i];
          } else {
            newData += data[i] + "\n";
          }
        }
      }
      fs.writeFileSync("note.txt", newData, "utf8");
    } else {
      console.log("Invalid line no..!");
    }
  },
  deleteNote: function (lineNo, data) {
    let newData = "";
    if (lineNo > 0 && lineNo <= data.length) {
      delete data[lineNo - 1];
      for (let i = 0; i < data.length; i++) {
        if (data[i] != undefined) {
          if (i == data.length - 1) {
            newData += data[i];
          } else {
            newData += data[i] + "\n";
          }
        }
      }
      if (lineNo==data.length){
        newData = newData.substring(0,newData.length-1);
      }
        fs.writeFileSync("note.txt", newData, "utf8");
    } else {
      console.log("Invalid line no..!");
    }
  },
  displayNote: function () {
    const data = fs.readFileSync("note.txt", { encoding: "utf8", flag: "r" });
    let dataArray = data.split("\n");
    for (let i = 0; i < dataArray.length; i++) {
      console.log(i + 1, "-", dataArray[i]);
    }
    return dataArray;
  },
};
