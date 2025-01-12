import type { Hex } from '../types'

export function decToHex(number: number) {
  return number.toString(16).toUpperCase().split('') as Hex[]
}