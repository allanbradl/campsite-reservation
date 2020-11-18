const { getData } = require("../db");

const findAll = () => {
  return getData("reservations");
};

module.exports = { findAll };
