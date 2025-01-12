import { readMidiFile } from './core/readMidi'
import { FileReader } from './utils/filereader'

const reader = new FileReader('./test/test2.mid')
await reader.loadFile()

// Read the MIDI signature
readMidiFile(reader)