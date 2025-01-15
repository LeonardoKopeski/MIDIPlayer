import { readMidiFile } from './core/readMidi'
import { FileReader } from './utils/filereader'

// Get file path
const path = process.argv[2]

// Load file
const bytes = await Bun.file(path).bytes()

// Start reader
const reader = new FileReader(bytes)

// Read file
readMidiFile(reader)