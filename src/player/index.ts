import { MIDIFile } from '../core/midi'
import { load } from './loadFile'
import { log } from './logger'
import * as Tone from 'tone'

// create channels and connect them to the main output (your speakers)
const synth = new Tone.PolySynth().toDestination()

log('Initializing...')

async function main(){
  // Load file
  const reader = await load('../../test/Determination.mid')

  // Read file
  const midi = MIDIFile.read(reader)

  // handle tracks
  log('Handling track...')

  const timeMap = midi.generateTimeMap(1)
  for (const event of timeMap) {
    if (event.event == undefined) continue
    if (event.startTime === event.endTime) continue
    synth.triggerAttackRelease(
      event.event.note + event.event.octave,
      event.endTime - event.startTime,
      event.startTime
    )
  }
}

document.querySelector('button#play')?.addEventListener('click', async () => {
  await Tone.start()
  log('audio is ready')
})
document.querySelector('button#stop')?.addEventListener('click', async () => {
  synth.releaseAll()
  synth.disconnect()
  log('audio is stopping')
})

main().catch((err)=>{
  log(err)
  console.error(err) // TEMP
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