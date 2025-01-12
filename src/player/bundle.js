// src/core/events/event.ts
class TrackEvent {
  deltatime;
  constructor(deltatime) {
    this.deltatime = deltatime;
  }
}

class MetaEvent extends TrackEvent {
  type;
  data;
  constructor(deltatime, type, data) {
    super(deltatime);
    this.type = type;
    this.data = data;
  }
}

class SysExEvent extends TrackEvent {
  event;
  data;
  constructor(deltatime, event, data) {
    super(deltatime);
    this.event = event;
    this.data = data;
  }
}

class MidiEvent extends TrackEvent {
  channel;
  constructor(deltatime, channel) {
    super(deltatime);
    this.channel = channel;
  }
}

class NoteOffMidiEvent extends MidiEvent {
  note;
  velocity;
  constructor(deltatime, channel, note, velocity) {
    super(deltatime, channel);
    this.note = note;
    this.velocity = velocity;
  }
}

class NoteOnMidiEvent extends MidiEvent {
  note;
  velocity;
  constructor(deltatime, channel, note, velocity) {
    super(deltatime, channel);
    this.note = note;
    this.velocity = velocity;
  }
}

class PolyphonicAftertouchMidiEvent extends MidiEvent {
  note;
  pressure;
  constructor(deltatime, channel, note, pressure) {
    super(deltatime, channel);
    this.note = note;
    this.pressure = pressure;
  }
}

class ControlChangeMidiEvent extends MidiEvent {
  control;
  value;
  constructor(deltatime, channel, control, value) {
    super(deltatime, channel);
    this.control = control;
    this.value = value;
  }
}

class ProgramChangeMidiEvent extends MidiEvent {
  program;
  constructor(deltatime, channel, program) {
    super(deltatime, channel);
    this.program = program;
  }
}

class ChannelAftertouchMidiEvent extends MidiEvent {
  pressure;
  constructor(deltatime, channel, pressure) {
    super(deltatime, channel);
    this.pressure = pressure;
  }
}

class PitchBendChangeMidiEvent extends MidiEvent {
  pitchBender;
  constructor(deltatime, channel, pitchBender) {
    super(deltatime, channel);
    this.pitchBender = pitchBender;
  }
}

class InvalidMidiEvent extends MidiEvent {
  data;
  constructor(deltatime, channel, data) {
    super(deltatime, channel);
    this.data = data;
  }
}

// src/utils/uintToInt.ts
function convertUIntToInt(input) {
  if (input > 32767) {
    return input - 65536;
  } else {
    return input;
  }
}

// src/core/readMidiHeader.ts
function readMidiHeader(reader) {
  reader.readNextDWord();
  const formatBytes = reader.readNextWord();
  const trackCount = reader.readNextWord();
  const divisionBytes = reader.readNextWord();
  let format;
  if (formatBytes === 0) {
    format = "SINGLE_TRACK";
  } else if (formatBytes === 1) {
    format = "MULTI_TRACK";
  } else if (formatBytes === 2) {
    format = "MULTI_SONG";
  } else {
    console.error("Invalid Format");
    process.exit(1);
  }
  const division = convertUIntToInt(divisionBytes);
  return {
    format,
    trackCount,
    division
  };
}

// src/core/mappings/tags.ts
var MThd = 1297377380;
var MTrk = 1297379947;

// src/core/readMidiTag.ts
function readMidiTag(reader) {
  const tagBytes = reader.readNextDWord();
  let tag;
  if (tagBytes === MThd) {
    tag = "MThd";
  } else if (tagBytes === MTrk) {
    tag = "MTrk";
  } else {
    throw new Error("Invalid MIDI tag: " + tagBytes.toString(16));
  }
  return tag;
}

// src/core/mappings/eventMap.ts
var invalidEventFamily = {
  event: "INVALID",
  size: 2
};
var eventFamilies = {
  "0": invalidEventFamily,
  "1": invalidEventFamily,
  "2": invalidEventFamily,
  "3": invalidEventFamily,
  "4": invalidEventFamily,
  "5": invalidEventFamily,
  "6": invalidEventFamily,
  "7": invalidEventFamily,
  "8": {
    event: "NOTE_OFF",
    size: 2
  },
  "9": {
    event: "NOTE_ON",
    size: 2
  },
  A: {
    event: "POLY_PRESSURE",
    size: 2
  },
  B: {
    event: "CONTROL_CHANGE",
    size: 2
  },
  C: {
    event: "PROGRAM_CHANGE",
    size: 1
  },
  D: {
    event: "CHANNEL_PRESSURE",
    size: 1
  },
  E: {
    event: "PITCH_BEND",
    size: 2
  },
  F: {
    event: "SYSTEM",
    size: "DEFINED_BY_NEXT_BYTE"
  }
};
var systemEvents = {
  "0": {
    meta: false,
    event: "SEQUENCE_EXCLUSIVE"
  },
  "1": {
    meta: false,
    event: "MIDI_TIME_CODE_QUARTER_FRAME"
  },
  "2": {
    meta: false,
    event: "SONG_POSITION_POINTER"
  },
  "3": {
    meta: false,
    event: "SONG_SELECT"
  },
  "4": {
    meta: false,
    event: "UNDEFINED"
  },
  "5": {
    meta: false,
    event: "UNDEFINED"
  },
  "6": {
    meta: false,
    event: "TUNE_REQUEST"
  },
  "7": {
    meta: false,
    event: "END_OF_SYSEX"
  },
  "8": {
    meta: false,
    event: "TIMING_CLOCK"
  },
  "9": {
    meta: false,
    event: "UNDEFINED"
  },
  A: {
    meta: false,
    event: "START"
  },
  B: {
    meta: false,
    event: "CONTINUE"
  },
  C: {
    meta: false,
    event: "STOP"
  },
  D: {
    meta: false,
    event: "UNDEFINED"
  },
  E: {
    meta: false,
    event: "ACTIVE_SENSING"
  },
  F: {
    meta: true,
    event: "META"
  }
};

// src/core/utils/bases.ts
function decToHex(number) {
  return number.toString(16).toUpperCase().split("");
}

// src/core/events/readMidiTrackEvent.ts
function intepretEventCodeByte(byte) {
  const [highHalfHex, lowHalfHex] = decToHex(byte);
  const { event, size } = eventFamilies[highHalfHex];
  if (event === "SYSTEM") {
    const { meta, event: event2 } = systemEvents[lowHalfHex];
    if (meta) {
      return {
        event: event2,
        size,
        eventType: "META"
      };
    } else {
      return {
        event: event2,
        size,
        eventType: "SYSEX"
      };
    }
  } else {
    return {
      event,
      size,
      eventType: "MIDI",
      channel: parseInt(lowHalfHex, 16)
    };
  }
}
function createMidiEvent(deltatime, midiEvent, channel, data) {
  switch (midiEvent) {
    case "NOTE_OFF":
      return new NoteOffMidiEvent(deltatime, channel, data[0], data[1]);
    case "NOTE_ON":
      return new NoteOnMidiEvent(deltatime, channel, data[0], data[1]);
    case "POLY_PRESSURE":
      return new PolyphonicAftertouchMidiEvent(deltatime, channel, data[0], data[1]);
    case "CONTROL_CHANGE":
      return new ControlChangeMidiEvent(deltatime, channel, data[0], data[1]);
    case "PROGRAM_CHANGE":
      return new ProgramChangeMidiEvent(deltatime, channel, data[0]);
    case "CHANNEL_PRESSURE":
      return new ChannelAftertouchMidiEvent(deltatime, channel, data[0]);
    case "PITCH_BEND":
      return new PitchBendChangeMidiEvent(deltatime, channel, data[1] << 4 | data[0]);
    case "INVALID":
      return new InvalidMidiEvent(deltatime, channel, data);
  }
}
function readMidiTrackEvent(reader) {
  const deltatime = reader.readNextVarLen();
  const statusByte = reader.readNextByte();
  const eventCode = intepretEventCodeByte(statusByte);
  switch (eventCode.eventType) {
    case "MIDI": {
      const data = reader.readBytes(eventCode.size);
      return createMidiEvent(deltatime, eventCode.event, eventCode.channel, data);
    }
    case "META": {
      const metaType = reader.readNextByte();
      const length = reader.readNextVarLen();
      const data = reader.readBytes(length);
      return new MetaEvent(deltatime, metaType, data);
    }
    case "SYSEX": {
      const length = reader.readNextVarLen();
      const data = reader.readBytes(length);
      return new SysExEvent(deltatime, eventCode.event, data);
    }
  }
}

// src/core/readMidiTrack.ts
function readMidiTrack(reader) {
  const length = reader.readNextDWord();
  const finalcursor = reader.cursor + length;
  const trackEvents = [];
  while (reader.cursor < finalcursor) {
    trackEvents.push(readMidiTrackEvent(reader));
  }
  return trackEvents;
}

// src/core/readMidi.ts
function readMidiFile(reader) {
  let header = null;
  const tracks = [];
  while (!reader.reachedEnd) {
    const tag = readMidiTag(reader);
    if (tag === "MThd") {
      header = readMidiHeader(reader);
      continue;
    }
    if (header === null) {
      throw new Error("Invalid MIDI file: Tracks before header");
    }
    tracks.push(readMidiTrack(reader));
  }
  if (header === null) {
    throw new Error("Invalid MIDI file: No header at all");
  }
  if (header.division < 0) {
    throw new Error("SMPTE time division is not supported");
  }
  return {
    header,
    tracks
  };
}

// src/utils/filereader.ts
class FileReader {
  bytes;
  cursor = 0;
  get reachedEnd() {
    return this.cursor >= this.bytes.length;
  }
  constructor(bytes) {
    this.bytes = bytes;
  }
  readBytes(length) {
    const bytes = this.bytes.slice(this.cursor, this.cursor + length);
    this.cursor += length;
    return bytes;
  }
  readNextByte() {
    return this.bytes[this.cursor++];
  }
  readNextWord() {
    return this.readNextByte() << 8 | this.readNextByte();
  }
  readNextDWord() {
    return this.readNextWord() << 16 | this.readNextWord();
  }
  readNextVarLen() {
    let value = 0;
    let byte = this.readNextByte();
    while (byte & 128) {
      value = value << 7 | byte & 127;
      byte = this.readNextByte();
    }
    return value << 7 | byte;
  }
}

// src/player/loadFile.ts
async function load(path) {
  const req = await fetch(path);
  const buffer = await req.arrayBuffer();
  return new FileReader(new Uint8Array(buffer));
}

// src/player/logger.ts
function log(input) {
  const li = document.createElement("li");
  const now = new Date;
  li.textContent = `[${now.toLocaleTimeString()}] ${input}`;
  document.getElementById("log")?.appendChild(li);
}

// src/player/index.ts
log("Initializing...");
async function main() {
  const reader = await load("../../test/test2.mid");
  const { tracks } = readMidiFile(reader);
  const toPlay = [];
  for (const track of tracks) {
    log("Playing track...");
    let time = 0;
    for (const event of track) {
      time += event.deltatime;
      if (event instanceof NoteOnMidiEvent) {
        toPlay.push({
          mode: "ON",
          note: event.note,
          velocity: event.velocity,
          time
        });
      } else if (event instanceof NoteOffMidiEvent) {
        toPlay.push({
          mode: "OFF",
          note: event.note,
          time
        });
      }
    }
  }
  for (const item of toPlay) {
    log(`Playing ${item.mode} ${item.note} at ${item.time}`);
  }
}
main().catch((err) => {
  log(err);
}).then(() => {
  log("Done!");
});
