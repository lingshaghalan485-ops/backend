// modules
// common js modules
// uses common modules.exports and requires
// example
// destructing
// import {mul} from "./mul.js";

// let object1 = {
//     name:"lingsha",
//     age:13,
// };
// const { name, age} = object1;
// console.log(name, age);
// const { add } = require("./sum");
// console.log(add(1,2));
// console.log(mul(1,2))
// ES modules
// used exports and import
// supports defaults and named exports

// restructuring module
// built in modules
// fs
import fs from "fs";//inbuilt modules
import os from "os";
import path from"path";
// fs.writeFileSync("same.txt","hello this is sample text");


// const data = fs.readFileSync("same.txt","utf-8");
// console.log(data)

console.log(os.platform());
console.log(os.arch());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.uptime());

const filepath = "ram/docs/letter.txt";
console.log("base Name",path.basename(filepath));
console.log("Directory Name",path.dirname(filepath));
console.log("File extension",path.extname(filepath));
// fs.appendFile("same.txt","my name");
// const data = fs.appendFile("same.txt","utf-8");

// console.log(data)


fs.appendFile("same.txt", "appende using appendfile\n", "utf-8", (err) => {
  
  console.log("err");
});
// delete file unlink le
fs.unlink('same.txt',(err) => {
  console.log(err);
});

// 
// fs.mkdir("myfolder",(err) =>{
//   console.log(err)
// });
// fs.mkdir("myfolder",()=>{

// });

// rest, spread
