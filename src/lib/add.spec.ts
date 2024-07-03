import { describe, expect, it } from "vitest";
import { add } from "./add";

describe("add", () => {
  it("should add two positive numbers correctly", () => {
    expect(add(2, 3)).toEqual(5);
  });

  it("should add a positive and a negative number correctly", () => {
    expect(add(5, -3)).toEqual(2);
  });

  it("should add two negative numbers correctly", () => {
    expect(add(-8, -2)).toEqual(-10);
  });
});
