const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/codeIDE');
// Vedio start 2 : 32 : 55
const projectSchema = new mongoose.Schema({
  title: String,
  createdBy: String,
  date: {
    type: Date,
    default: Date.now,
  },

  htmlCode: {
    type: String,
    default: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1> Hello World </h1>
</body>
</html>`,
  },
  cssCode: {
    type: String,
    default: `
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }`,
  },
  jsCode: {
    type: String,
    default: "console.log('Hello world')",
  },
});

module.exports = mongoose.model('project', projectSchema);