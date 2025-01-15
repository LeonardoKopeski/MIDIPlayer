import { NoteOffMidiEvent, NoteOnMidiEvent } from '../core/events/event'
import { readMidiFile } from '../core/readMidi'
import { load } from './loadFile'
import { log } from './logger'
import * as Tone from 'tone'

// create channels and connect them to the main output (your speakers)
const synth = new Tone.PolySynth().toDestination()

log('Initializing...')

async function main(){
  // Load file
  const reader = await load('../../test/test2.mid')

  // Read file
  const { tracks } = readMidiFile(reader)

  const toPlay = []

  // handle tracks
  for (const track of tracks) {
    log('Handling track...')
    let time = 0
    for (const event of track) {
      time += event.deltatime
      if (event instanceof NoteOnMidiEvent) {
        toPlay.push({
          mode: 'ON',
          channel: event.channel,
          note: event.note,
          velocity: event.velocity,
          time
        })
      } else if (event instanceof NoteOffMidiEvent) {
        toPlay.push({
          mode: 'OFF',
          channel: event.channel,
          note: event.note,
          time
        })
      }
    }
  }

  // Play
  const now = synth.now()
  for (const item of toPlay) {
    const note = item.note.note+item.note.octave
    if (item.mode === 'ON') {
      synth.triggerAttack(note, now + (item.time / 1000))
    } else {
      synth.triggerRelease(now + (item.time / 1000))
    }
    
  }
}

document.querySelector('button')?.addEventListener('click', async () => {
  await Tone.start()
  log('audio is ready')
})

main().catch((err)=>{
  log(err)
}).then(() => {
  log('Done!')
})

// import * as Tone from 'tone'

// //create a synth and connect it to the main output (your speakers)
// const synth = new Tone.Synth().toDestination()

// //play a middle 'C' for the duration of an 8th note
// const now = Tone.now()
// // trigger the attack immediately
// synth.triggerAttack('C4', now)
// // wait one second before triggering the release
// synth.triggerRelease(now + 1)

// synth.triggerAttack('D4', now+3)
// // wait one second before triggering the release
// synth.triggerRelease(now + 4)