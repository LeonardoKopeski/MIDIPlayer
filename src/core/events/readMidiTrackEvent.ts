import type { FileReader } from '../../utils/filereader'
import { eventFamilies, systemEvents } from '../mappings/eventMap'
import type { MidiEvents } from '../types'
import { decToHex } from '../utils/bases'
import { ChannelAftertouchMidiEvent, ControlChangeMidiEvent, InvalidMidiEvent, MetaEvent, NoteOffMidiEvent, NoteOnMidiEvent, PitchBendChangeMidiEvent, PolyphonicAftertouchMidiEvent, ProgramChangeMidiEvent, SysExEvent, TrackEvent } from './event'

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

function createMidiEvent(deltatime: number, midiEvent: MidiEvents, channel: number, data: Uint8Array) {
  switch (midiEvent) {
    case 'NOTE_OFF':
      return new NoteOffMidiEvent(
        deltatime,
        channel,
        data[0],
        data[1]
      )
    case 'NOTE_ON':
      return new NoteOnMidiEvent(
        deltatime,
        channel,
        data[0],
        data[1]
      )
    case 'POLY_PRESSURE':
      return new PolyphonicAftertouchMidiEvent(
        deltatime,
        channel,
        data[0],
        data[1]
      )
    case 'CONTROL_CHANGE':
      return new ControlChangeMidiEvent(
        deltatime,
        channel,
        data[0],
        data[1]
      )
    case 'PROGRAM_CHANGE':
      return new ProgramChangeMidiEvent(
        deltatime,
        channel,
        data[0]
      )
    case 'CHANNEL_PRESSURE':
      return new ChannelAftertouchMidiEvent(
        deltatime,
        channel,
        data[0]
      )
    case 'PITCH_BEND':
      return new PitchBendChangeMidiEvent(
        deltatime,
        channel,
        (data[1] << 4) | data[0]
      )
    case 'INVALID':
      return new InvalidMidiEvent(
        deltatime,
        channel,
        data
      )
  }
  // return {
  //   deltatime,
  //   event: eventCode.event,
  //   eventType: eventCode.eventType,
  //   channel: eventCode.channel,
  //   data: reader.readBytes(eventCode.size)
  // }
}

export function readMidiTrackEvent(reader: FileReader): TrackEvent {
  const deltatime = reader.readNextVarLen()
  const statusByte = reader.readNextByte()

  const eventCode = intepretEventCodeByte(statusByte)

  switch (eventCode.eventType) {
    case 'MIDI': {
      const data = reader.readBytes(eventCode.size)
      return createMidiEvent(
        deltatime,
        eventCode.event,
        eventCode.channel,
        data
      )
    }
    case 'META': {
      const metaType = reader.readNextByte()
      const length = reader.readNextVarLen()
      const data = reader.readBytes(length)

      return new MetaEvent(
        deltatime,
        metaType,
        data
      )
    }
    case 'SYSEX': {
      const length = reader.readNextVarLen()
      const data = reader.readBytes(length)
      return new SysExEvent(
        deltatime,
        eventCode.event,
        data
      )
    }
  }
}