export function isEmail(value) {
  return value.includes("@");
}
export function hasMinLength(value, minLength) {
  return value.length >= minLength;
}

// export function isNotEmpty(value) {
//   return value.trim() !== "";
// }

// export function isEqualsToOtherValue(value, otherValue) {
//   return value === otherValue;
// }
