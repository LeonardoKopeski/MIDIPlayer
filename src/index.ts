import { readMidiFile } from './core/readMidi'
import { FileReader } from './utils/filereader'

// Load file
const bytes = await Bun.file('./test/test.mid').bytes()

// Start reader
const reader = new FileReader(bytes)

// Read file
readMidiFile(reader)