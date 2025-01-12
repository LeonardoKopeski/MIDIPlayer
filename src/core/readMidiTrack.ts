import type { FileReader } from '../utils/filereader'
import { type TrackEvent } from './events/event'
import { readMidiTrackEvent } from './events/readMidiTrackEvent'

export function readMidiTrack(reader: FileReader) {
  const length = reader.readNextDWord()
  const finalcursor = reader.cursor + length

  const trackEvents: TrackEvent[] = []

  while (reader.cursor < finalcursor) {
    trackEvents.push(readMidiTrackEvent(reader))
  }

  return trackEvents
}