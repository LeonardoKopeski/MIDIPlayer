export interface MidiHeader{
  format: 'SINGLE_TRACK' | 'MULTI_TRACK' | 'MULTI_SONG'
  trackCount: number
  division: number
}