import type { FileReader } from '../utils/filereader'
import { eventFamilies, systemEvents } from './mappings/eventMap'
import type { MidiTrackEvent } from './types'
import { decToHex } from './utils/bases'

function intepretEventCodeByte(byte: number) {
  const [highHalfHex, lowHalfHex] = decToHex(byte)
  const { event, size } = eventFamilies[highHalfHex]
  
  if (event === 'SYSTEM') {
    const { meta, event } = systemEvents[lowHalfHex]
    if (meta) {
      return {
        event,
        size,
        eventType: 'META' as const
      }
    } else {
      return {
        event,
        size,
        eventType: 'SYSEX' as const
      }
    }
  } else {
    return {
      event,
      size,
      eventType: 'MIDI' as const,
      channel: parseInt(lowHalfHex, 16)
    }
  }
}

function readMidiTrackEvent(reader: FileReader) {
  const deltatime = reader.readNextVarLen()
  const statusByte = reader.readNextByte()

  const eventCode = intepretEventCodeByte(statusByte)

  switch (eventCode.eventType) {
    case 'MIDI':
      return {
        deltatime,
        event: eventCode.event,
        eventType: eventCode.eventType,
        channel: eventCode.channel,
        data: reader.readBytes(eventCode.size)
      }
    case 'META': {
      const metaType = reader.readNextByte()
      const length = reader.readNextVarLen()
      const data = reader.readBytes(length)

      return {
        deltatime,
        event: eventCode.event,
        eventType: eventCode.eventType,
        metaType: metaType,
        data
      }
    }
    case 'SYSEX': {
      const length = reader.readNextVarLen()
      const data = reader.readBytes(length)
      return {
        deltatime,
        event: eventCode.event,
        eventType: eventCode.eventType,
        data
      }
    }
  }
}

export function readMidiTrack(reader: FileReader) {
  const length = reader.readNextDWord()
  const finalcursor = reader.cursor + length

  const trackEvents: MidiTrackEvent[] = []

  while (reader.cursor < finalcursor) {
    trackEvents.push(readMidiTrackEvent(reader))
  }

  return trackEvents
}