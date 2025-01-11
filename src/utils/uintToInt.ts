// Convert unsigned word integer to signed word integer
export function convertUIntToInt(input: number) {
  if (input > 0x7FFF) {
    return input - 0x10000
  } else {
    return input
  }
}