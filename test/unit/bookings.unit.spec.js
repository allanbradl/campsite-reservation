const {
  getBookableCampsights,
  getGapSize,
} = require("../../src/controllers/bookings");

describe("Bookings - Unit", () => {
  describe("getBookableCampsights", () => {
    it("should return expected campsites", () => {
      const campsites = getBookableCampsights(
        __dirname + "/../fixtures/test-case.json"
      );
      expect(campsites).toEqual([
        "Comfy Cabin",
        "Rickety Cabin",
        "Cabin in the Woods",
      ]);
    });
  });

  describe("getGapSize", () => {
    it("should return gap of one", () => {
      const gapSize = getGapSize(new Date(2020, 1, 22), new Date(2020, 1, 20));
      expect(gapSize).toBe(1);
    });

    it("should return gap of one if end greater than start", () => {
      const gapSize = getGapSize(new Date(2020, 1, 20), new Date(2020, 1, 22));
      expect(gapSize).toBe(1);
    });
  });
});
