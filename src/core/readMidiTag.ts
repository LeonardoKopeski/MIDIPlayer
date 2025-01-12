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
    throw new Error('Invalid MIDI tag: ' + tagBytes.toString(16))
  }
  return tag
}