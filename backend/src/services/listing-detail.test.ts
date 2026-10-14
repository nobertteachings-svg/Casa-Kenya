import { describe, expect, it } from "vitest";
import { houseToListingDetail } from "./listing-detail.js";
import { makeHouse } from "../test/fixtures.js";

describe("listing detail", () => {
  it("includes bedroom and toilet counts on detail payload", () => {
    const house = makeHouse({
      property_subtype: "two_bedroom",
      bedroom_count: 2,
      toilet_count: 1,
      photos: [],
      videos: [],
      status: "inactive",
    });

    const detail = houseToListingDetail(house, { lang: "en" });
    expect(detail).not.toBeNull();
    expect(detail!.bedroomCount).toBe(2);
    expect(detail!.toiletCount).toBe(1);
    expect(detail!.propertySubtype).toBe("two_bedroom");
    expect(detail!.amenities.electricityMeter).toBe("prepaid");
    expect(detail!.type).toContain("2 beds");
  });
});
