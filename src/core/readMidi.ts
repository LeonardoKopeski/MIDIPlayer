import type { FileReader } from '../utils/filereader'
import { readMidiHeader } from './readMidiHeader'
import { readMidiTag } from './readMidiTag'
import type { MidiHeader } from './types'

export function readMidiFile(reader: FileReader) {
  //const chunks = []
  let header: MidiHeader | null = null

  while (!reader.reachedEnd){
    const tag = readMidiTag(reader)

    // If header, read header
    if (tag === 'MThd') {
      header = readMidiHeader(reader)
      continue
    }
    
    // If track, and there is no header, then the file is invalid
    if (header === null) {
      console.error('Invalid MIDI file')
      process.exit(1)
    }
    
    break
  }

  if (header === null) {
    console.error('Invalid MIDI file')
    process.exit(1)
  } 

  if (header.division < 0) {
    throw new Error('SMPTE time division is not supported')
  }

  
  
  console.log(header) // TEMP
}