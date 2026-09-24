import { describe, expect, it } from "vitest";
import {
  KENYA_COUNTIES,
  COMMERCIAL_SUBTYPES,
  RESIDENTIAL_SUBTYPES,
  categoryLabel,
  electricityMeterLabel,
  formatElectricityMeterMenu,
  formatSubtypeMenu,
  legacyTypeFromSubtype,
  parseCategoryChoice,
  parseElectricityMeterChoice,
  parseRegionChoice,
  parseSubtypeChoice,
  subtypeLabel,
} from "../constants/property-taxonomy.js";

describe("property taxonomy", () => {
  it("lists all 47 Kenyan counties", () => {
    expect(KENYA_COUNTIES).toHaveLength(47);
    expect(KENYA_COUNTIES.map((s) => s.id)).toContain("nairobi");
    expect(KENYA_COUNTIES.map((s) => s.id)).toContain("mombasa");
    expect(KENYA_COUNTIES.map((s) => s.id)).toContain("kisumu");
    expect(KENYA_COUNTIES.map((s) => s.id)).toContain("west_pokot");
  });

  it("parses region by number and name", () => {
    expect(parseRegionChoice("1")).toBe(KENYA_COUNTIES[0].id);
    expect(parseRegionChoice("47")).toBe(KENYA_COUNTIES[46].id);
    expect(parseRegionChoice("Nairobi")).toBe("nairobi");
    expect(parseRegionChoice("Mombasa")).toBe("mombasa");
    expect(parseRegionChoice("homa bay")).toBe("homa_bay");
    expect(parseRegionChoice("eldoret")).toBe("uasin_gishu");
    expect(parseRegionChoice("invalid")).toBeNull();
  });

  it("parses residential and commercial categories", () => {
    expect(parseCategoryChoice("1")).toBe("residential");
    expect(parseCategoryChoice("2")).toBe("commercial");
    expect(parseCategoryChoice("I need commercial space")).toBe("commercial");
    expect(parseCategoryChoice("residentiel")).toBe("residential");
    expect(parseCategoryChoice("hotel")).toBeNull();
  });

  it("parses residential subtypes by menu index", () => {
    expect(parseSubtypeChoice("1", "residential")).toBe("single_room");
    expect(parseSubtypeChoice("2", "residential")).toBe("double_room");
    expect(parseSubtypeChoice("3", "residential")).toBe("bedsitter");
    expect(parseSubtypeChoice("4", "residential")).toBe("studio");
    expect(parseSubtypeChoice("9", "residential")).toBe("bungalow");
    expect(parseSubtypeChoice("10", "residential")).toBe("servant_quarter");
    expect(parseSubtypeChoice("99", "residential")).toBeNull();
  });

  it("parses commercial subtypes including office and shop", () => {
    expect(parseSubtypeChoice("1", "commercial")).toBe("shop");
    expect(parseSubtypeChoice("2", "commercial")).toBe("office");
    expect(parseSubtypeChoice("4", "commercial")).toBe("restaurant");
    expect(parseSubtypeChoice("8", "commercial")).toBe("commercial_space");
    expect(COMMERCIAL_SUBTYPES).toHaveLength(8);
    expect(RESIDENTIAL_SUBTYPES).toHaveLength(10);
  });

  it("maps subtypes to legacy house type column", () => {
    expect(legacyTypeFromSubtype("single_room")).toBe("room");
    expect(legacyTypeFromSubtype("double_room")).toBe("room");
    expect(legacyTypeFromSubtype("bedsitter")).toBe("room");
    expect(legacyTypeFromSubtype("servant_quarter")).toBe("room");
    expect(legacyTypeFromSubtype("two_bedroom")).toBe("apartment");
    expect(legacyTypeFromSubtype("studio")).toBe("apartment");
    expect(legacyTypeFromSubtype("office")).toBe("apartment");
    expect(legacyTypeFromSubtype("shop")).toBe("apartment");
  });

  it("labels subtypes and categories in English", () => {
    expect(subtypeLabel("office", "en")).toContain("Office");
    expect(subtypeLabel("shop", "en")).toContain("Shop");
    expect(categoryLabel("residential", "en")).toBe("Residential");
    expect(categoryLabel("commercial", "en")).toBe("Commercial");
  });

  it("formats commercial subtype menu with all options", () => {
    const menu = formatSubtypeMenu("commercial", "en");
    expect(menu).toContain("Commercial property type");
    expect(menu).toContain("Shop / retail space");
    expect(menu).toContain("Office space");
  });

  it("formats and parses electricity meter options", () => {
    expect(formatElectricityMeterMenu("en")).toContain("Token meter");
    expect(parseElectricityMeterChoice("2")).toBe("prepaid");
    expect(electricityMeterLabel("postpaid", "en")).toContain("Postpaid");
    expect(subtypeLabel("bedsitter", "en")).toContain("Bedsitter");
    expect(subtypeLabel("maisonette", "en")).toContain("Maisonette");
    expect(subtypeLabel("servant_quarter", "en")).toContain("Servant quarter");
    expect(subtypeLabel("double_room", "en")).toContain("Double room");
  });
});
