import { isCif, isNif } from "./../src/modules/validator";
import { describe, it, expect } from "vitest";

const validNif = "04849618E";
const invalidNif = "04849618Y";
const validCif = "U99700254";
const emptyString = "";
const invalidCif_01 = "U04971441";
describe("Validator", () => {
  it("should be valid NIF", () => {
    expect(isNif(validNif)).toBeTruthy();
  });
  it("should be invalid NIF", () => {
    expect(isNif(invalidNif)).toBeFalsy();
  });
  it("should be valid CIF", () => {
    expect(isCif(validCif)).toBeTruthy();
  });
  it("should be valid CIF", () => {
    expect(isCif(validCif)).toBeTruthy();
  });
  it("should be invalid CIF 01", () => {
    expect(isCif(emptyString)).toBeFalsy();
  });
  it("should be invalid CIF 02", () => {
    expect(isCif(invalidCif_01)).toBeFalsy();
  });
});
