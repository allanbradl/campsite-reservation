const { getData, init } = require("../db");
const campsitesDao = require("../dao/campsites");

const UNALLOWED_GAP_SIZE = 1;

const getGapSize = (startDate, endDate) => {
  let start = startDate;
  let end = endDate;
  if (end.getTime() > start.getTime()) {
    start = endDate;
    end = startDate;
  }

  const differenceInTime = start.getTime() - end.getTime();

  return differenceInTime / (1000 * 3600 * 24) - 1; // If days are 2 days apart, there is a 1 day gap
};

const isSearchBookable = (startDate, endDate, reservation) => {
  const reservationStart = new Date(reservation.startDate);
  const reservationEnd = new Date(reservation.endDate);
  const startOfBookingGap = getGapSize(startDate, reservationEnd);
  const endOfBookingGap = getGapSize(reservationStart, endDate);
  if (
    startOfBookingGap === UNALLOWED_GAP_SIZE ||
    endOfBookingGap === UNALLOWED_GAP_SIZE
  ) {
    return false;
  }
  return true;
};

const getBookableCampsights = (filename) => {
  init(filename);
  const search = getData("search"); // Decided not to put this in a DAO because in a service this would be a query param
  const campsites = campsitesDao.findAll();

  const bookableCampsights = campsites.filter((site) => {
    const startDate = new Date(search.startDate);
    const endDate = new Date(search.endDate);
    let bookable = true;
    site.reservations.forEach((reservation) => {
      if (!isSearchBookable(startDate, endDate, reservation)) {
        bookable = false;
      }
    });
    return bookable;
  });

  return bookableCampsights.map((campsite) => campsite.name);
};

module.exports = { getBookableCampsights, getGapSize, isSearchBookable };
