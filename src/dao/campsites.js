const { getData } = require("../db");
const reservationsDao = require("../dao/reservations");

const findAll = () => {
  const reservations = reservationsDao.findAll();
  // In a production setting, this would probably be some sort of join query
  return getData("campsites").map((site) => {
    return {
      ...site,
      reservations: reservations.filter(
        (reservation) => reservation.campsiteId === site.id
      ),
    };
  });
};

module.exports = { findAll };
