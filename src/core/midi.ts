import type { FileReader } from '../utils/filereader'
import { NoteOffMidiEvent, NoteOnMidiEvent, type MIDITrackEvent } from './events/event'
import { readMidiFile } from './readers/readMidi'
import type { MIDIFormat, Note } from './types'

export class MIDIFile{
  constructor(
    public readonly format: MIDIFormat,
    public readonly trackCount: number,
    public readonly division: number,
    public readonly tracks: MIDITrackEvent[][]
  ){}

  static read(reader: FileReader): MIDIFile{
    const readerOutput = readMidiFile(reader)
    return new MIDIFile(
      readerOutput.header.format,
      readerOutput.header.trackCount,
      readerOutput.header.division,
      readerOutput.tracks
    )
  }

  generateTimeMap(track: number): Array<{
    startTime: number
    endTime: number
    event: Note
  }> {
    const out: Array<{
      startTime: number
      endTime: number
      event: Note
    }> = []

    const playingNotes: Array<{
      note: Note
      noteId: number
      channel: number
      startTime: number
    }> = []

    let currentTime = 0
    for (const event of this.tracks[track]) {
      currentTime += event.deltatime

      if (event instanceof NoteOnMidiEvent) {
        playingNotes.push({
          note: event.note,
          noteId: event.noteid,
          channel: event.channel,
          startTime: currentTime
        })
      } else if (event instanceof NoteOffMidiEvent) {
        const noteIndex = playingNotes.findIndex((note) => note.noteId === event.noteid && note.channel === event.channel)
        if (noteIndex === -1) throw new Error('Note off event without note on event previously')
        
        const note = playingNotes[noteIndex]
        playingNotes.splice(noteIndex, 1)

        out.push({
          startTime: note.startTime,
          endTime: currentTime,
          event: note.note
        })
      }
    }

    return out
  }
}