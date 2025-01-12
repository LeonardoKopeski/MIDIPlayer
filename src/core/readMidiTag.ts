import { MThd, MTrk } from './mappings/tags'
import type { FileReader } from '../utils/filereader'

export function readMidiTag(reader: FileReader) {
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