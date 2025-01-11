import { MThd, MTrk } from './tags'
import type { FileReader } from '../utils/filereader'

function getTag(reader: FileReader) {
  const tagBytes = reader.readNextDWord()
  let tag: 'MThd' | 'MTrk'
  if (tagBytes === MThd) {
    tag = 'MThd'
  } else if (tagBytes === MTrk) {
    tag = 'MTrk'
  } else {
    console.error('Invalid Tag')
    process.exit(1)
  }
  return tag
}

function getChunkLength(reader: FileReader) {
  return reader.readNextDWord()
}

export function readChunk(reader: FileReader) {
  const tag = getTag(reader)
  const length = getChunkLength(reader)
  console.log(tag, length)

  const data = new Uint8Array(length)
  for (let i = 0; i < length; i++) {
    data[i] = reader.readNextByte()
  }

  return {
    tag, 
    length,
    data
  }
}