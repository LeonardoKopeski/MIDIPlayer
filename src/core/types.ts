export type Hex = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F'
export type Events = (
  'INVALID' |
  'NOTE_OFF' |
  'NOTE_ON' |
  'POLY_PRESSURE' |
  'CONTROL_CHANGE' |
  'PROGRAM_CHANGE' |
  'CHANNEL_PRESSURE' |
  'PITCH_BEND' |
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
  'ACTIVE_SENSING' |
  'META'
)

export interface MidiHeader{
  format: 'SINGLE_TRACK' | 'MULTI_TRACK' | 'MULTI_SONG'
  trackCount: number
  division: number
}

export type MidiTrackEvent = {
  deltatime: number
  event: Events
  data: Uint8Array
} & ({
  eventType: 'META'
  metaType: number
} | {
  eventType: 'SYSEX'
} | {
  eventType: 'MIDI'
  channel: number
})