import { describe, expect, it } from "vitest";
import {
  canonicalPhone,
  isAppLoginTrigger,
  isPendingOtpFollowup,
  phoneAliases,
} from "./app-otp.js";

describe("canonicalPhone", () => {
  it("adds 254 to local Kenyan mobiles", () => {
    expect(canonicalPhone("712345678")).toBe("254712345678");
    expect(canonicalPhone("0712345678")).toBe("254712345678");
    expect(canonicalPhone("+254 712 345 678")).toBe("254712345678");
    expect(canonicalPhone("254712345678")).toBe("254712345678");
    expect(canonicalPhone("0112345678")).toBe("254112345678");
  });
});

describe("phoneAliases", () => {
  it("includes local and international forms so WhatsApp and the app match", () => {
    const aliases = phoneAliases("0712345678");
    expect(aliases).toContain("254712345678");
    expect(aliases).toContain("712345678");
    expect(aliases).toContain("0712345678");
  });

  it("matches a WhatsApp Business wa_id to the app-entered 07 number", () => {
    const fromApp = phoneAliases("0712345678");
    const fromWhatsApp = phoneAliases("254712345678");
    expect(fromApp.some((p) => fromWhatsApp.includes(p))).toBe(true);
  });
});

describe("isAppLoginTrigger", () => {
  it("matches the app prefill", () => {
    expect(isAppLoginTrigger("CASA-APP-LOGIN\nSend this message to get your Casa login code.")).toBe(
      true
    );
  });

  it("ignores normal chat", () => {
    expect(isAppLoginTrigger("hi")).toBe(false);
    expect(isAppLoginTrigger("I need a 2 bedroom in Westlands")).toBe(false);
  });
});

describe("isPendingOtpFollowup", () => {
  it("matches the current store-app WhatsApp link", () => {
    expect(isPendingOtpFollowup("Hi Casa! I want to sign up.")).toBe(true);
    expect(isPendingOtpFollowup("hi")).toBe(true);
    expect(isPendingOtpFollowup("Hi Casa! I want to sign up.")).toBe(true);
  });

  it("ignores listing search", () => {
    expect(isPendingOtpFollowup("I need a 2 bedroom in Westlands")).toBe(false);
  });
});
