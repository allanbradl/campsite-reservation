const fs = require("fs");

let data = null;

const init = (filename) => {
  if (!data) {
    data = JSON.parse(fs.readFileSync(filename).toString());
  }
};

const getData = (key) => {
  if (!data) {
    throw new Error("Data hasn't been initialized");
  }
  return data[key];
};

module.exports = { init, getData };
