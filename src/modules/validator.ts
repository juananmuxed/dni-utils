import { RegularExp } from "../utils/regularExpressions";
import { Constants } from "../utils/strings";
import provinces from "./../config/provinces";
import societyTypes from "./../config/societyTypes";

/**
 * @param {string} string String to sanitize
 * @returns {string} Sanitized String Uppercase
 **/
const sanitize = (string: string): string => {
  return string.toString().toUpperCase();
};

/**
 * @param {string} string String to convert
 * @return {string} NIE converted to NIF to check
 **/
const nieToNif = (string: string) => {
  return string
    .replace(/^[X]/, "0")
    .replace(/^[Y]/, "1")
    .replace(/^[Z]/, "2");
};

/**
 * @param {string} code Code to calculate
 * @return {number} Number calculated
 **/
const calculateCifDigit = (code: string): number => {
  const calculation = code
    .substring(1, 8)
    .split("")
    .reduce((acc, cur, i) => {
      return i % 2 === 0
        ? (acc +=
            parseInt(cur) * 2 < 10
              ? parseInt(cur) * 2
              : parseInt(cur) * 2 - 9)
        : (acc += parseInt(cur));
    }, 0);
  return 10 - Number(calculation.toString().slice(-1));
};

/**
 * @param {string} code Code to test
 * @return {boolean} Return true if is NIE
 **/
export const isNie = (code: string): boolean => {
  return RegularExp.NIE.test(sanitize(code));
};

/**
 * @param {string} code Code to test
 * @return {boolean} Return true if is NIF
 **/
export const isNif = (code: string): boolean => {
  return (
    RegularExp.NIF.test(sanitize(code)) &&
    Constants.VALID_CHARS.charAt(
      parseInt(nieToNif(sanitize(code)).substring(0, 8)) % 23
    ) === sanitize(code).slice(-1)
  );
};

/**
 * @param {string} code Code to test
 * @return {boolean} Return true if is CIF
 **/
export const isCif = (code: string): boolean => {
  if (!RegularExp.CIF.test(sanitize(code))) return false;

  const calculationDigit = calculateCifDigit(code);

  const calculationLetter = Constants.CIF_LETTERS.substring(
    calculationDigit,
    calculationDigit + 1
  );

  if (
    code.substring(0, 1).match(RegularExp.CIF_EXTRA_01) ||
    code.substring(1, 3) === Constants.NO_RESIDENT
  )
    return Number(code.substring(8, 9)) === calculationDigit;
  if (code.substring(0, 1).match(RegularExp.CIF_EXTRA_02))
    return code.slice(-1) === calculationLetter;
  return (
    Number(code.slice(-1)) === calculationDigit ||
    code.slice(-1) === calculationLetter
  );
};

/**
 * @param {string} code Code to test
 * @return {boolean} Valid code (NIF, NIE or CIF)
 */
export const isValid = (code: string): boolean => {
  return isNie(code) || isNif(code) || isCif(code);
};

/**
 * @param {string} code Code to test
 * @return {string} Return 'NIF', 'NIE', 'CIF' or 'INVALID'
 **/
export const typeDNI = (code: string): string => {
  if (isCif(code)) return Constants.CIF;
  if (isNie(code)) return Constants.NIE;
  if (isNif(code)) return Constants.NIF;
  return Constants.INVALID;
};

/**
 * @param {string|number} code Code to test
 * @return {boolean} Return true if is valid Support Number for NIEs
 **/
export const validSupportNumber = (
  code: string | number
): boolean => {
  return RegularExp.SUPPORT.test(
    sanitizeSupportNumber(code.toString())
  );
};

/**
 * @param {string|number} code Code to test
 * @return {string} Return Support Number uppercase and filled with 0s
 **/
export const sanitizeSupportNumber = (
  code: string | number
): string => {
  return (
    code.toString().substr(0, 1) +
    (
      Constants.PAD +
      parseInt(code.toString().substr(1, code.toString().length - 1))
    ).slice(-8)
  );
};
