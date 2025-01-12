import type { FileReader } from '../utils/filereader'
import { readMidiHeader } from './readMidiHeader'
import { readMidiTag } from './readMidiTag'
import { readMidiTrack } from './readMidiTrack'
import type { MidiHeader } from './types'

export function readMidiFile(reader: FileReader) {
  let header: MidiHeader | null = null
  const tracks = []

  while (!reader.reachedEnd){
    const tag = readMidiTag(reader)

    // If header, read header
    if (tag === 'MThd') {
      header = readMidiHeader(reader)
      continue
    }
    
    // If track, and there is no header, then the file is invalid
    if (header === null) {
      throw new Error('Invalid MIDI file: Tracks before header')
    }

    tracks.push(readMidiTrack(reader))
  }

  if (header === null) {
    throw new Error('Invalid MIDI file: No header at all')
  } 

  if (header.division < 0) {
    throw new Error('SMPTE time division is not supported')
  }

  console.log(tracks) // TEMP
}