import { describe, expect, it } from "vitest";
import { heritageSites } from "@/lib/heritage";
import { validateStay } from "@/lib/booking";
describe("Tokyo heritage coverage", () => {
  it("includes at least ten heritage sites", () => {
    expect(heritageSites.length).toBeGreaterThanOrEqual(10);
  });
  it("provides at least fifteen distinct pages", () => {
    const pages = new Set([
      "/",
      "/heritage",
      "/hotel-booking",
      "/gallery",
      ...heritageSites.map((s) => `/heritage/${s.slug}`),
    ]);
    expect(pages.size).toBeGreaterThanOrEqual(15);
  });
  it("gives every heritage site a description and history", () => {
    for (const site of heritageSites) {
      expect(site.description.length).toBeGreaterThan(0);
      expect(site.history.length).toBeGreaterThan(0);
    }
  });
});
describe("Stay planning dates", () => {
  it("rejects departures on or before arrival", () => {
    expect(validateStay("2026-11-20", "2026-11-20")).not.toBeNull();
    expect(validateStay("2026-11-20", "2026-11-19")).not.toBeNull();
  });
  it("accepts a departure after arrival", () => {
    expect(validateStay("2026-11-20", "2026-11-21")).toBeNull();
  });
});
