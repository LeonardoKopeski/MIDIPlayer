import type { Hex } from '../types'

export const eventFamilies = {
  '0': {
    event: 'INVALID',
    size: 2
  },
  '1': {
    event: 'INVALID',
    size: 2
  },
  '2': {
    event: 'INVALID',
    size: 2
  },
  '3': {
    event: 'INVALID',
    size: 2
  },
  '4': {
    event: 'INVALID',
    size: 2
  },
  '5': {
    event: 'INVALID',
    size: 2
  },
  '6': {
    event: 'INVALID',
    size: 2
  },
  '7': {
    event: 'INVALID',
    size: 2
  },
  '8': {
    event: 'NOTE_OFF',
    size: 2
  },
  '9': {
    event: 'NOTE_ON',
    size: 2
  },
  'A': {
    event: 'POLY_PRESSURE',
    size: 2
  },
  'B': {
    event: 'CONTROL_CHANGE',
    size: 2
  },
  'C': {
    event: 'PROGRAM_CHANGE',
    size: 1
  },
  'D': {
    event: 'CHANNEL_PRESSURE',
    size: 1
  },
  'E': {
    event: 'PITCH_BEND',
    size: 2
  },
  'F': {
    event: 'SYSTEM',
    size: 'DEFINED_BY_NEXT_BYTE'
  }
} as const satisfies Record<Hex, {
  event: string
  size: number | 'DEFINED_BY_NEXT_BYTE'
}>

export const systemEvents = {
  '0': {
    meta: false,
    event: 'SEQUENCE_EXCLUSIVE'
  },
  '1': {
    meta: false,
    event: 'MIDI_TIME_CODE_QUARTER_FRAME'
  },
  '2': {
    meta: false,
    event: 'SONG_POSITION_POINTER'
  },
  '3': {
    meta: false,
    event: 'SONG_SELECT'
  },
  '4': {
    meta: false,
    event: 'UNDEFINED'
  },
  '5': {
    meta: false,
    event: 'UNDEFINED'
  },
  '6': {
    meta: false,
    event: 'TUNE_REQUEST'
  },
  '7': {
    meta: false,
    event: 'END_OF_SYSEX'
  },
  '8': {
    meta: false,
    event: 'TIMING_CLOCK'
  },
  '9': {
    meta: false,
    event: 'UNDEFINED'
  },
  'A': {
    meta: false,
    event: 'START'
  },
  'B': {
    meta: false,
    event: 'CONTINUE'
  },
  'C': {
    meta: false,
    event: 'STOP'
  },
  'D': {
    meta: false,
    event: 'UNDEFINED'
  },
  'E': {
    meta: false,
    event: 'ACTIVE_SENSING'
  },
  'F': {
    meta: true,
    event: 'META'
  }
} as const satisfies Record<Hex, {
  meta: boolean
  event: string
}>
