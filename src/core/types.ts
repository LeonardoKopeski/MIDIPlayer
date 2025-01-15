import type { MIDITrackEvent } from './events/event'

export type Hex = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F'
export type HexByte = `${Hex}${Hex}`

export type NoteName = 'C' | 'C#' | 'D' | 'D#' | 'E' | 'F' | 'F#' | 'G' | 'G#' | 'A' | 'A#' | 'B'
export interface Note{
  note: NoteName
  octave: number
}

export type SysExEvents = (
  'SEQUENCE_EXCLUSIVE' |
  'MIDI_TIME_CODE_QUARTER_FRAME' |
  'SONG_POSITION_POINTER' |
  'SONG_SELECT' |
  'UNDEFINED' |
  'TUNE_REQUEST' |
  'END_OF_SYSEX' |
  'TIMING_CLOCK' |
  'START' |
  'CONTINUE' |
  'STOP' |
  'ACTIVE_SENSING'
)

export type MidiEvents = (
  'INVALID' |
  'NOTE_OFF' |
  'NOTE_ON' |
  'POLY_PRESSURE' |
  'CONTROL_CHANGE' |
  'PROGRAM_CHANGE' |
  'CHANNEL_PRESSURE' |
  'PITCH_BEND'
)

export type MIDIFormat = (
  'SINGLE_TRACK' |
  'MULTI_TRACK' |
  'MULTI_SONG'
)

export interface MIDIHeader{
  format: MIDIFormat
  trackCount: number
  division: number
}

export type MIDI = {
  header: MIDIHeader
  tracks: MIDITrackEvent[][]
}