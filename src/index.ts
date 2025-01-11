import { FileReader } from './utils/filereader'
import { MThd } from './tags'

const reader = new FileReader('./test/Determination.mid')
await reader.loadFile()

// Read the MIDI signature
if (reader.readNextDWord() !== MThd) {
  console.error('Invalid MIDI file')
  process.exit(1)
}