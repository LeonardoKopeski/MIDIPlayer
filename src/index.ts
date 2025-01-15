import { MIDIFile } from './core/midi'
import { FileReader } from './utils/filereader'

// Get file path
const path = process.argv[2]

// Load file
const bytes = await Bun.file(path).bytes()

// Start reader
const reader = new FileReader(bytes)

// Read file
const midi = MIDIFile.read(reader)
console.log(midi.generateTimeMap(1))