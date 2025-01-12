import type { statusMap } from './mappings/statusMap'

export interface MidiHeader{
  format: 'SINGLE_TRACK' | 'MULTI_TRACK' | 'MULTI_SONG'
  trackCount: number
  division: number
}

export type MidiTrackEvent = {
  deltatime: number
  event: typeof statusMap[keyof typeof statusMap]['event']
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