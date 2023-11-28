const { readFile, writeFile } = require("fs");

console.log("reading the data");
readFile("data1.js", "utf-8", (err, data1) => {
  if (err) console.log(err);
  console.log(data1);
  readFile("data2.js", "utf-8", (err, data2) => {
    if (err) console.log(err);
    console.log(data2);
    writeFile("dataasync.txt",`${data1} ${data2}`,{flag:'a'} ,(err) => {
      if (err) console.log(err);
    });
  });
});

console.log("reading the data from data1.js and data2.js");
console.log("end");
