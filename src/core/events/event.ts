import type { SysExEvents } from '../types'

export abstract class TrackEvent{
  constructor(readonly deltatime: number){} 
}

export class MetaEvent extends TrackEvent{
  constructor(
    deltatime: number,
    readonly type: number,
    readonly data: Uint8Array
  ) {
    super(deltatime)
  }
}

export class SysExEvent extends TrackEvent {
  constructor(
    deltatime: number,
    readonly event: SysExEvents,
    readonly data: Uint8Array
  ) {
    super(deltatime)
  }
}

// '8': {
//     event: 'NOTE_OFF',
//     size: 2
//   },
//   '9': {
//     event: 'NOTE_ON',
//     size: 2
//   },
//   'A': {
//     event: 'POLY_PRESSURE',
//     size: 2
//   },
//   'B': {
//     event: 'CONTROL_CHANGE',
//     size: 2
//   },
//   'C': {
//     event: 'PROGRAM_CHANGE',
//     size: 1
//   },
//   'D': {
//     event: 'CHANNEL_PRESSURE',
//     size: 1
//   },
//   'E': {
//     event: 'PITCH_BEND',
//     size: 2
//   },

export abstract class MidiEvent extends TrackEvent{
  constructor(
    deltatime: number,
    readonly channel: number
  ) {
    super(deltatime)
  }
}

export class NoteOffMidiEvent extends MidiEvent{
  constructor(
    deltatime: number,
    channel: number,
    readonly note: number,
    readonly velocity: number
  ) {
    super(deltatime, channel)
  }
}

export class NoteOnMidiEvent extends MidiEvent{
  constructor(
    deltatime: number,
    channel: number,
    readonly note: number,
    readonly velocity: number
  ) {
    super(deltatime, channel)
  }
}

export class PolyphonicAftertouchMidiEvent extends MidiEvent{
  constructor(
    deltatime: number,
    channel: number,
    readonly note: number,
    readonly pressure: number
  ) {
    super(deltatime, channel)
  }
}

export class ControlChangeMidiEvent extends MidiEvent{
  constructor(
    deltatime: number,
    channel: number,
    readonly control: number,
    readonly value: number
  ) {
    super(deltatime, channel)
  }
}

export class ProgramChangeMidiEvent extends MidiEvent{
  constructor(
    deltatime: number,
    channel: number,
    readonly program: number
  ) {
    super(deltatime, channel)
  }
}

export class ChannelAftertouchMidiEvent extends MidiEvent{
  constructor(
    deltatime: number,
    channel: number,
    readonly pressure: number
  ) {
    super(deltatime, channel)
  }
}

export class PitchBendChangeMidiEvent extends MidiEvent{
  constructor(
    deltatime: number,
    channel: number,
    readonly pitchBender: number
  ) {
    super(deltatime, channel)
  }
}

export class InvalidMidiEvent extends MidiEvent{
  constructor(
    deltatime: number,
    channel: number,
    readonly data: Uint8Array
  ) {
    super(deltatime, channel)
  }
}