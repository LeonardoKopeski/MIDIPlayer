import type { FileReader } from '../utils/filereader'
import { type TrackEvent } from './events/event'
import { readMidiTrackEvent } from './events/readMidiTrackEvent'

export function readMidiTrack(reader: FileReader) {
  const length = reader.readNextDWord()
  const finalcursor = reader.cursor + length

  const trackEvents: TrackEvent[] = []

  let lastEventCode: number = -1
  while (reader.cursor < finalcursor) {
    const { event, eventCode } = readMidiTrackEvent(
      reader,
      lastEventCode
    )

    lastEventCode = eventCode
    trackEvents.push(event)
  }

  return trackEvents
}