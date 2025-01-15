import type { Hex } from '../types'

export function decByteToHex(number: number) {
  return number.toString(16).toUpperCase().padStart(2, '0').split('') as Hex[]
}