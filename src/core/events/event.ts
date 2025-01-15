import { noteMap } from '../mappings/notes'
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

export abstract class MidiEvent extends TrackEvent{
  constructor(
    deltatime: number,
    readonly channel: number
  ) {
    super(deltatime)
  }
}

export class NoteOffMidiEvent extends MidiEvent{
  get note() {
    return noteMap[this.noteid as keyof typeof noteMap]
  }

  constructor(
    deltatime: number,
    channel: number,
    readonly noteid: number,
    readonly velocity: number
  ) {
    super(deltatime, channel)
  }
}

export class NoteOnMidiEvent extends MidiEvent{
  get note() {
    return noteMap[this.noteid as keyof typeof noteMap]
  }

  constructor(
    deltatime: number,
    channel: number,
    readonly noteid: number,
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