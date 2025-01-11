import type { FileReader } from '../utils/filereader'
import { convertUIntToInt } from '../utils/uintToInt'

export function readMidiHeader(reader: FileReader) {
  // Discard chunk length, as it is always 6
  reader.readNextDWord()

  const formatBytes = reader.readNextWord()
  const trackCount = reader.readNextWord()
  const divisionBytes = reader.readNextWord()

  let format
  if (formatBytes === 0) {
    format = 'SINGLE_TRACK' as const
  } else if (formatBytes === 1) {
    format = 'MULTI_TRACK' as const
  } else if (formatBytes === 2) {
    format = 'MULTI_SONG' as const
  } else {
    console.error('Invalid Format')
    process.exit(1)
  }

  const division = convertUIntToInt(divisionBytes)

  return {
    format,
    trackCount,
    division
  }
}