import * as yup from "yup";
import {
  IndividualAddress1Validator,
  INVALID_PHONE_NUMBER,
  INVALID_SSN_ERROR,
  individualAddress2Validator,
  NAME_LENGTH_ERROR,
  NAME_MESSAGE,
  noWhitespaceRegex,
  PRINTABLE_ASCII_MESSAGE,
  testFirstLastName,
  testName,
  testPhoneNumber,
  testPrintableAsciiCharacters,
  testSsn,
  whiteSpaceError,
} from "./utils/fieldValidators";

export type Key =
  | "firstName"
  | "lastName"
  | "email"
  | "dob"
  | "ssn"
  | "address1"
  | "address2"
  | "city"
  | "state"
  | "postalCode"
  | "phoneNumber"
  | "location"
  | "department";

// Native-Date stand-ins for the moment() calls in the original schema.
function isValidDob(value: string | undefined): value is string {
  if (!value) return false;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const d = new Date(`${value}T00:00:00`);
  return !isNaN(d.getTime());
}
function ageInYears(dob: string): number {
  const d = new Date(`${dob}T00:00:00`);
  const now = new Date();
  let age = now.getFullYear() - d.getFullYear();
  const m = now.getMonth() - d.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < d.getDate())) age--;
  return age;
}

export const schema = yup.object({
  firstName: yup
    .string()
    .label("First")
    .matches(noWhitespaceRegex, whiteSpaceError)
    .required()
    .test("is-valid-name", NAME_MESSAGE, testName)
    .min(1, "Must be at least one character.")
    .max(20)
    .test("first-last-name-length", NAME_LENGTH_ERROR, testFirstLastName),
  lastName: yup
    .string()
    .label("Last")
    .matches(noWhitespaceRegex, whiteSpaceError)
    .required()
    .test("is-valid-name", NAME_MESSAGE, testName)
    .min(1, "Must be at least one character.")
    .max(20, "Must be less than 20 characters.")
    .test("first-last-name-length", NAME_LENGTH_ERROR, testFirstLastName),
  email: yup.string().email().required(),
  dob: yup
    .string()
    .label("Date Of Birth")
    .required()
    .test("dob", "dob must be a valid date string YYYY-MM-DD.", (value) => isValidDob(value))
    .test(
      "dob",
      "Employee must be at least 18 to create an account.",
      (value) => isValidDob(value) && ageInYears(value) >= 18,
    )
    .test(
      "dob",
      "Employee must be under 100 years old to create an account.",
      (value) => isValidDob(value) && ageInYears(value) < 100,
    ),
  ssn: yup
    .string()
    .trim()
    .required()
    .label("Social Security Number")
    .test("ssn", INVALID_SSN_ERROR, (value) => testSsn(value, true)),
  address1: IndividualAddress1Validator,
  address2: individualAddress2Validator,
  city: yup
    .string()
    .trim()
    .label("City")
    .required()
    .test("city", PRINTABLE_ASCII_MESSAGE, testPrintableAsciiCharacters)
    .max(50),
  state: yup
    .string()
    .label("State")
    .required()
    .test("state", PRINTABLE_ASCII_MESSAGE, testPrintableAsciiCharacters)
    .max(14),
  postalCode: yup
    .string()
    .trim()
    .label("Zip")
    .required()
    .test("postalCode", PRINTABLE_ASCII_MESSAGE, testPrintableAsciiCharacters)
    .test("postalCode", "Postal Code must be five digits", (val) => (val?.length ?? 0) === 5),
  phoneNumber: yup
    .string()
    .trim()
    .label("Phone")
    .required()
    .test("phone", PRINTABLE_ASCII_MESSAGE, testPrintableAsciiCharacters)
    .test("us-phone", INVALID_PHONE_NUMBER, testPhoneNumber)
    .max(15),
  location: yup.string().optional(),
  department: yup.string().optional(),
}) as unknown as yup.ObjectSchema<Partial<Record<Key, string>>>;
