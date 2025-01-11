import { FileReader } from './filereader'
import { MThd } from './tags'

// MIDI files are organized into data chunks. Each chunk is prefixed with an 8 byte header: 4 byte signature (MThd or MTrk) used to identify the type of chunk followed by a 4 byte size which defines the chunk's length as number of bytes following this header.

const reader = new FileReader('./test/Determination.mid')
await reader.loadFile()

// Read the MIDI signature
if (reader.readNextDWord() !== MThd) {
  console.error('Invalid MIDI file')
  process.exit(1)
}