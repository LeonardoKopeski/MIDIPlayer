import type { FileReader } from '../utils/filereader'
import { statusMap } from './mappings/statusMap'
import type { MidiTrackEvent } from './types'

function intepretstatusByte(byte: number) {
  // WTF Typescript, why do I need to do this?
  let event = statusMap[byte as keyof typeof statusMap]

  if (event === undefined) {
    // console.error('Unsupported event type')
    // process.exit(1)
    event = statusMap[0]
  }

  return event
}

function readMidiTrackEvent(reader: FileReader) {
  const deltatime = reader.readNextVarLen()
  const statusByte = reader.readNextByte()

  const status = intepretstatusByte(statusByte)

  const obj: Partial<MidiTrackEvent> = {
    deltatime,
    event: status.event,
    eventType: status.eventType
  }

  switch (obj.eventType) {
    case 'MIDI':
      obj.data = reader.readBytes((status as { args: number }).args)
      break
    case 'META': {
      obj.metaType = reader.readNextByte()
      
      const length = reader.readNextVarLen()
      obj.data = reader.readBytes(length)
      break
    }
    case 'SYSEX': {
      const length = reader.readNextVarLen()
      obj.data = reader.readBytes(length)
      break
    }
  }

  return obj as MidiTrackEvent
}

export function readMidiTrack(reader: FileReader) {
  const length = reader.readNextDWord()
  const finalcursor = reader.cursor + length

  const trackEvents: MidiTrackEvent[] = []

  while (reader.cursor < finalcursor) {
    trackEvents.push(readMidiTrackEvent(reader))
  }
  
  console.log(trackEvents.filter(elm => elm.eventType !== 'META' || elm.event === 'Invalid')) // TEMP

  return trackEvents
}