import { FileReader } from '../utils/filereader'

export async function load(path: string) {
  const req = await fetch(path)
  const buffer = await req.arrayBuffer()
  return new FileReader(new Uint8Array(buffer))
} 