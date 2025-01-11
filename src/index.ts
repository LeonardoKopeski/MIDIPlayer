import { FileReader } from './filereader'

// MIDI Audio files must have a signature (tag) MThd (hex: 4D 54 68 64) at
// the beginning of the audiofile.

// MIDI files are organized into data chunks. Each chunk is prefixed with an 8 byte header: 4 byte signature (MThd or MTrk) used to identify the type of chunk followed by a 4 byte size which defines the chunk's length as number of bytes following this header.

const reader = new FileReader('./test/Determination.mid')
await reader.loadFile()

// Read the MIDI signature
if (
  reader.readNextByte() !== 0x4D ||
  reader.readNextByte() !== 0x54 ||
  reader.readNextByte() !== 0x68 ||
  reader.readNextByte() !== 0x64
) {
  console.error('Invalid MIDI file')
}