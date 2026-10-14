import { describe, expect, it } from "vitest";
import { buildLoginOtpEmail, isValidEmail, normalizeEmail } from "./email-otp.js";

describe("normalizeEmail", () => {
  it("trims and lowercases", () => {
    expect(normalizeEmail("  Ada@Casa.ke ")).toBe("ada@casa.ke");
  });
});

describe("isValidEmail", () => {
  it("accepts normal addresses", () => {
    expect(isValidEmail("ada@casa.ke")).toBe(true);
    expect(isValidEmail("  A.B+x@gmail.com ")).toBe(true);
  });

  it("rejects junk", () => {
    expect(isValidEmail("")).toBe(false);
    expect(isValidEmail("no-at-sign")).toBe(false);
    expect(isValidEmail("a@b")).toBe(false);
  });
});

describe("buildLoginOtpEmail", () => {
  it("uses a formal English subject without putting the code in the title", () => {
    const mail = buildLoginOtpEmail("847291", "Wanjiku Otieno");
    expect(mail.subject).toBe("Your Casa Kenya login code");
    expect(mail.subject).not.toContain("847291");
    expect(mail.html).toContain("Hello Wanjiku Otieno,");
    expect(mail.html).toContain("847291");
    expect(mail.html).toContain("casahomeskenya.com");
    expect(mail.html).toContain("support@casahomeskenya.com");
    expect(mail.text).toContain("Do not share this code");
  });
});
