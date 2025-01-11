export function logInHex(arr: RelativeIndexable<number>) {
  const hex: string[] = []
  let i = 0
  while (true) {
    const elm = arr.at(i++)
    if (elm === undefined) break
    hex.push(elm.toString(16).toUpperCase().padStart(2, '0'))
  }
  console.log(hex.map(elm=>`\x1b[34m0x${elm}\x1b[m`).join(' '))
}