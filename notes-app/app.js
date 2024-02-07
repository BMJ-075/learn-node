const validator = require("validator");

console.log("validatorr: ", validator.isEmail("test@gmail.com"));

const getNotes = require("./notes");

console.log("app.js", getNotes());
