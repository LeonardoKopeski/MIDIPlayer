import type { FileReader } from '../../utils/filereader'
import { type MIDITrackEvent } from '../events/event'
import { readMidiTrackEvent } from '../events/readMidiTrackEvent'

export function readMidiTrack(reader: FileReader) {
  const length = reader.readNextDWord()
  const finalcursor = reader.cursor + length

  const trackEvents: MIDITrackEvent[] = []

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