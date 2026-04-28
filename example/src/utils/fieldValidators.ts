// Mirror of the host app's src/utils/fieldValidators.js, scoped to the symbols
// the importer schema actually uses. `isProduction` is stubbed to `false` so
// placeholder SSNs (111-11-1111, 222-22-2222) in the sample CSV pass validation.

import { every, size } from "lodash";
import { PhoneNumberUtil } from "google-libphonenumber";
import * as yup from "yup";

const isProduction = () => false;

// --- Messages -----------------------------------------------------------------

export const PRINTABLE_ASCII_MESSAGE =
  "${path} can only contain letters, numbers, special characters, or spaces.";
export const NAME_MESSAGE =
  "${path} may only contain letters, apostrophes, hyphens, slashes, or spaces.";
export const NAME_LENGTH_ERROR = "Combined first and last name must be less than 30 characters.";
export const ALPHANUMERIC_SPACES_MESSAGE = "${path} can only contain letters, numbers, spaces, #, and /.";
export const INVALID_SSN_ERROR = "${path} is invalid.";
export const INVALID_PHONE_NUMBER = "Please enter a valid phone number";
export const PO_BOX_ERROR =
  "${path} cannot be a P.O. Box, please use a residential or business address.";
export const whiteSpaceError = "value contains trailing or leading whitespace";

// --- Regexes ------------------------------------------------------------------

export const noWhitespaceRegex = /^$|^[^\s]+(\s+[^\s]+)*$/;
const poBoxRegex = /^(((p[\s.]?[o\s][.]?)\s?)|(post\s?office\s?))((box|bin|b\.?)?\s?(num|number|#)?\s?\d+)/gim;

// --- Test functions -----------------------------------------------------------

export function isPoBox(address: string | undefined | null): boolean {
  if (!address) return false;
  const uspsValidPoBoxRegex = /po\sbox|p.o.\sbox/i;
  return uspsValidPoBoxRegex.test(address);
}

export function testPoBoxAddress(address: string | undefined | null): boolean {
  if (!address) return true;
  return !poBoxRegex.test(address);
}

export function testPrintableAsciiCharacters(value: string | undefined | null): boolean {
  if (value == null) return true;
  const addressCharRegex = /^([ -~]*)$/;
  return addressCharRegex.test(value);
}

export function testAlphanumericSpaces(value: string | undefined | null): boolean {
  if (value == null) return true;
  const alphanumericSpacesRegex = /^[a-zA-Z0-9 #/]*$/;
  return alphanumericSpacesRegex.test(value);
}

export function testName(name: string | undefined | null): boolean {
  if (name == null) return true;
  const nameRegex = /^([a-zA-Z'\-/\s]*)$/;
  return nameRegex.test(name);
}

export function testFirstLastName(this: yup.TestContext): boolean {
  const parent = this.parent as { firstName?: string; lastName?: string };
  const firstName = parent.firstName;
  const lastName = parent.lastName;
  return size(firstName) + size(lastName) < 30;
}

export function validateUsersAddress(
  userAddress: Record<string, string>,
  validatedAddress: Record<string, string>,
): boolean {
  const propertiesToCheck = ["address1", "address2", "city", "state", "postalCode"];
  if (isPoBox(validatedAddress.address1) || isPoBox(validatedAddress.address2)) return false;
  return every(propertiesToCheck, (property) => userAddress[property] == validatedAddress[property]);
}

export function testPhoneNumber(value: string | undefined | null): boolean {
  if (!value) return false;
  try {
    const cleanedInput = value.replace(/[^\d+]/g, "");
    const phoneUtil = PhoneNumberUtil.getInstance();
    const phoneNumber = cleanedInput.startsWith("+")
      ? phoneUtil.parse(cleanedInput)
      : phoneUtil.parse(cleanedInput, "US");
    return phoneUtil.isValidNumber(phoneNumber);
  } catch {
    return false;
  }
}

export function testSsn(value: string | undefined | null, allowNoDash?: boolean): boolean {
  const isInProduction = isProduction();

  if (!isInProduction) {
    if (!value) return false;
    const matchesWithDashes = /^\d{3}-\d{2}-\d{4}$/.test(value);
    if (matchesWithDashes) return true;
    if (allowNoDash) {
      return /\d{9}/.test(value);
    }
    return false;
  } else {
    if (!value) return false;

    const cleanedValue = value.replace(/-/g, "");

    const withDashesFormat = /^\d{3}-\d{2}-\d{4}$/.test(value);
    const withoutDashesFormat = !!allowNoDash && /^\d{9}$/.test(cleanedValue);

    if (!withDashesFormat && !withoutDashesFormat) {
      return false;
    }

    const parts = cleanedValue.match(/^(\d{3})(\d{2})(\d{4})$/);
    if (!parts) return false;

    const [, area, group, serial] = parts as unknown as [string, string, string, string];

    if (area === "000" || group === "00" || serial === "0000") return false;
    if (area === "666" || parseInt(area, 10) >= 900) return false;

    const blacklist = [
      "078051120", "219099999", "123456789",
      "111111111", "222222222", "333333333", "444444444",
      "555555555", "666666666", "777777777", "888888888", "999999999",
      "987654320", "987654321", "987654322", "987654323", "987654324",
      "987654325", "987654326", "987654327", "987654328", "987654329",
    ];

    if (blacklist.includes(cleanedValue)) return false;
    return true;
  }
}

// --- Re-usable validator chains ----------------------------------------------

export const postalCodeValidator = yup
  .string()
  .trim()
  .label("Zip")
  .required()
  .test("postal-code", PRINTABLE_ASCII_MESSAGE, testPrintableAsciiCharacters)
  .max(5)
  .min(5)
  .matches(noWhitespaceRegex, whiteSpaceError);

export const IndividualAddress1Validator = yup
  .string()
  .label("Address 1")
  .required()
  .matches(noWhitespaceRegex, whiteSpaceError)
  .min(3, "Must be at least three characters.")
  .max(40)
  .test("po-box-address", PO_BOX_ERROR, testPoBoxAddress)
  .test("address1", ALPHANUMERIC_SPACES_MESSAGE, testAlphanumericSpaces)
  .test(
    "address1",
    "${path} can only contain letters, numbers, spaces, and #.",
    testPrintableAsciiCharacters,
  );

export const individualAddress2Validator = yup
  .string()
  .label("Address 2")
  .test("address2", PRINTABLE_ASCII_MESSAGE, testPrintableAsciiCharacters)
  .test(
    "address2",
    "${path} can only contain letters, numbers, spaces, and #.",
    testAlphanumericSpaces,
  )
  .test("po-box-address", PO_BOX_ERROR, testPoBoxAddress)
  .trim()
  .matches(noWhitespaceRegex, whiteSpaceError)
  .max(30)
  .min(3, "Must be at least three characters.")
  .transform((value) => (value ? value : null))
  .nullable();
