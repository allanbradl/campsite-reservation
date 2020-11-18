const { getBookableCampsights } = require("./controllers/bookings");

(async () => {
  const filename = process.argv.slice(2)[0];
  getBookableCampsights(filename).forEach((campsite) => {
    console.log(`"${campsite}"`);
  });
})();
