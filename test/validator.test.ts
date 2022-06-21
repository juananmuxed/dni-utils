import {
  isCif,
  isNie,
  isNif,
  isValid,
  typeDNI,
  dataNif,
  calculateCifDigit,
  Society,
} from "./../src/modules/validator";
import { describe, it, expect } from "vitest";
import { Constants } from "../src/utils/strings";

const emptyString = "";
const validNif = "04849618E";
const invalidNif = "04849618Y";
const validCif_01 = "U99700254";
const validCif_02 = "A00620237";
const validCif_03 = "P7689350B";
const validCifNoDigit = "U9970025";
const validCifDigit = "4";
const invalidCif_01 = "U04971441";
const validNie = "X5415954Y";
const invalidNie = "75465954Y";
describe("Validator", () => {
  it("should be valid NIF", () => {
    expect(isNif(validNif)).toBeTruthy();
  });
  it("should be invalid NIF", () => {
    expect(isNif(invalidNif)).toBeFalsy();
  });
  it("should be valid CIF", () => {
    expect(isCif(validCif_01)).toBeTruthy();
  });
  it("should be valid CIF type number", () => {
    expect(isCif(validCif_02)).toBeTruthy();
  });
  it("should be valid CIF type letter", () => {
    expect(isCif(validCif_03)).toBeTruthy();
  });
  it("should be invalid CIF 01 empty", () => {
    expect(isCif(emptyString)).toBeFalsy();
  });
  it("should be invalid CIF 02", () => {
    expect(isCif(invalidCif_01)).toBeFalsy();
  });
  it("should be valid NIE", () => {
    expect(isNie(validNie)).toBeTruthy();
  });
  it("should be invalid NIE", () => {
    expect(isNie(invalidNie)).toBeFalsy();
  });
  it("should be invalid NIE empty", () => {
    expect(isNie(emptyString)).toBeFalsy();
  });
  it("should be valid DNI (any)", () => {
    expect(isValid(validNif)).toBeTruthy();
    expect(isValid(validCif_01)).toBeTruthy();
    expect(isValid(validNie)).toBeTruthy();
  });
  it("should be invalid DNI (any)", () => {
    expect(isValid(invalidNif)).toBeFalsy();
    expect(isValid(invalidCif_01)).toBeFalsy();
    expect(isValid(invalidNie)).toBeFalsy();
  });
  it("should be correct type", () => {
    expect(typeDNI(validNif)).toBe(Constants.NIF);
    expect(typeDNI(validNif)).not.toBe(Constants.CIF);
    expect(typeDNI(validCif_01)).toBe(Constants.CIF);
    expect(typeDNI(validCif_01)).not.toBe(Constants.NIE);
    expect(typeDNI(validNie)).toBe(Constants.NIE);
    expect(typeDNI(validNie)).not.toBe(Constants.NIF);
    expect(typeDNI(invalidNif)).toBe(Constants.INVALID);
  });
  it("should be calculate cif", () => {
    expect(calculateCifDigit(validCifNoDigit)).toBe(validCifDigit);
  });
  it("should be invalid CIF in dataNif", () => {
    expect(dataNif(invalidCif_01)).toBe(Constants.INVALID);
  });
  it("should be valid CIF in dataNif", () => {
    expect((dataNif(validCif_01) as Society).province).toBe(
      "Barcelona"
    );
    expect((dataNif(validCif_01) as Society).type).toBe(
      "Unión Temporal de Empresas"
    );
  });
});
