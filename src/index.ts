import { readChunk } from './core/midiChuckExtractor'
import { FileReader } from './utils/filereader'

const reader = new FileReader('./test/Determination.mid')
await reader.loadFile()

// Read the MIDI signature
while (!reader.reachedEnd){
  const chunk = readChunk(reader)
  console.log(chunk.tag, chunk.length) // TEMP
}