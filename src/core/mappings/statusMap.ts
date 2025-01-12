export const statusMap = {
  0: {
    eventType: 'META',
    event: 'Invalid'
  },
  128: { //80
    eventType: 'MIDI',
    event: 'Chan 1 Note off',
    args: 2
  },
  129: { //81
    eventType: 'MIDI',
    event: 'Chan 2 Note off',
    args: 2
  },
  130: { //82
    eventType: 'MIDI',
    event: 'Chan 3 Note off',
    args: 2
  },
  131: { //83
    eventType: 'MIDI',
    event: 'Chan 4 Note off',
    args: 2
  },
  132: { //84
    eventType: 'MIDI',
    event: 'Chan 5 Note off',
    args: 2
  },
  133: { //85
    eventType: 'MIDI',
    event: 'Chan 6 Note off',
    args: 2
  },
  134: { //86
    eventType: 'MIDI',
    event: 'Chan 7 Note off',
    args: 2
  },
  135: { //87
    eventType: 'MIDI',
    event: 'Chan 8 Note off',
    args: 2
  },
  136: { //88
    eventType: 'MIDI',
    event: 'Chan 9 Note off',
    args: 2
  },
  137: { //89
    eventType: 'MIDI',
    event: 'Chan 10 Note off',
    args: 2
  },
  138: { //8A
    eventType: 'MIDI',
    event: 'Chan 11 Note off',
    args: 2
  },
  139: { //8B
    eventType: 'MIDI',
    event: 'Chan 12 Note off',
    args: 2
  },
  140: { //8C
    eventType: 'MIDI',
    event: 'Chan 13 Note off',
    args: 2
  },
  141: { //8D
    eventType: 'MIDI',
    event: 'Chan 14 Note off',
    args: 2
  },
  142: { //8E
    eventType: 'MIDI',
    event: 'Chan 15 Note off',
    args: 2
  },
  143: { //8F
    eventType: 'MIDI',
    event: 'Chan 16 Note off',
    args: 2
  },
  144: { //90
    eventType: 'MIDI',
    event: 'Chan 1 Note on',
    args: 2
  },
  145: { //91
    eventType: 'MIDI',
    event: 'Chan 2 Note on',
    args: 2
  },
  146: { //92
    eventType: 'MIDI',
    event: 'Chan 3 Note on',
    args: 2
  },
  147: { //93
    eventType: 'MIDI',
    event: 'Chan 4 Note on',
    args: 2
  },
  148: { //94
    eventType: 'MIDI',
    event: 'Chan 5 Note on',
    args: 2
  },
  149: { //95
    eventType: 'MIDI',
    event: 'Chan 6 Note on',
    args: 2
  },
  150: { //96
    eventType: 'MIDI',
    event: 'Chan 7 Note on',
    args: 2
  },
  151: { //97
    eventType: 'MIDI',
    event: 'Chan 8 Note on',
    args: 2
  },
  152: { //98
    eventType: 'MIDI',
    event: 'Chan 9 Note on',
    args: 2
  },
  153: { //99
    eventType: 'MIDI',
    event: 'Chan 10 Note on',
    args: 2
  },
  154: { //9A
    eventType: 'MIDI',
    event: 'Chan 11 Note on',
    args: 2
  },
  155: { //9B
    eventType: 'MIDI',
    event: 'Chan 12 Note on',
    args: 2
  },
  156: { //9C
    eventType: 'MIDI',
    event: 'Chan 13 Note on',
    args: 2
  },
  157: { //9D
    eventType: 'MIDI',
    event: 'Chan 14 Note on',
    args: 2
  },
  158: { //9E
    eventType: 'MIDI',
    event: 'Chan 15 Note on',
    args: 2
  },
  159: { //9F
    eventType: 'MIDI',
    event: 'Chan 16 Note on',
    args: 2
  },
  160: { //A0
    eventType: 'MIDI',
    event: 'Chan 1 Polyphonic Aftertouch',
    args: 2
  },
  161: { //A1
    eventType: 'MIDI',
    event: 'Chan 2 Polyphonic Aftertouch',
    args: 2
  },
  162: { //A2
    eventType: 'MIDI',
    event: 'Chan 3 Polyphonic Aftertouch',
    args: 2
  },
  163: { //A3
    eventType: 'MIDI',
    event: 'Chan 4 Polyphonic Aftertouch',
    args: 2
  },
  164: { //A4
    eventType: 'MIDI',
    event: 'Chan 5 Polyphonic Aftertouch',
    args: 2
  },
  165: { //A5
    eventType: 'MIDI',
    event: 'Chan 6 Polyphonic Aftertouch',
    args: 2
  },
  166: { //A6
    eventType: 'MIDI',
    event: 'Chan 7 Polyphonic Aftertouch',
    args: 2
  },
  167: { //A7
    eventType: 'MIDI',
    event: 'Chan 8 Polyphonic Aftertouch',
    args: 2
  },
  168: { //A8
    eventType: 'MIDI',
    event: 'Chan 9 Polyphonic Aftertouch',
    args: 2
  },
  169: { //A9
    eventType: 'MIDI',
    event: 'Chan 10 Polyphonic Aftertouch',
    args: 2
  },
  170: { //AA
    eventType: 'MIDI',
    event: 'Chan 11 Polyphonic Aftertouch',
    args: 2
  },
  171: { //AB
    eventType: 'MIDI',
    event: 'Chan 12 Polyphonic Aftertouch',
    args: 2
  },
  172: { //AC
    eventType: 'MIDI',
    event: 'Chan 13 Polyphonic Aftertouch',
    args: 2
  },
  173: { //AD
    eventType: 'MIDI',
    event: 'Chan 14 Polyphonic Aftertouch',
    args: 2
  },
  174: { //AE
    eventType: 'MIDI',
    event: 'Chan 15 Polyphonic Aftertouch',
    args: 2
  },
  175: { //AF
    eventType: 'MIDI',
    event: 'Chan 16 Polyphonic Aftertouch',
    args: 2
  },
  176: { //B0
    eventType: 'MIDI',
    event: 'Chan 1 Control/Mode',
    args: 2
  },
  177: { //B1
    eventType: 'MIDI',
    event: 'Chan 2 Control/Mode',
    args: 2
  },
  178: { //B2
    eventType: 'MIDI',
    event: 'Chan 3 Control/Mode',
    args: 2
  },
  179: { //B3
    eventType: 'MIDI',
    event: 'Chan 4 Control/Mode',
    args: 2
  },
  180: { //B4
    eventType: 'MIDI',
    event: 'Chan 5 Control/Mode',
    args: 2
  },
  181: { //B5
    eventType: 'MIDI',
    event: 'Chan 6 Control/Mode',
    args: 2
  },
  182: { //B6
    eventType: 'MIDI',
    event: 'Chan 7 Control/Mode',
    args: 2
  },
  183: { //B7
    eventType: 'MIDI',
    event: 'Chan 8 Control/Mode',
    args: 2
  },
  184: { //B8
    eventType: 'MIDI',
    event: 'Chan 9 Control/Mode',
    args: 2
  },
  185: { //B9
    eventType: 'MIDI',
    event: 'Chan 10 Control/Mode',
    args: 2
  },
  186: { //BA
    eventType: 'MIDI',
    event: 'Chan 11 Control/Mode',
    args: 2
  },
  187: { //BB
    eventType: 'MIDI',
    event: 'Chan 12 Control/Mode',
    args: 2
  },
  188: { //BC
    eventType: 'MIDI',
    event: 'Chan 13 Control/Mode',
    args: 2
  },
  189: { //BD
    eventType: 'MIDI',
    event: 'Chan 14 Control/Mode',
    args: 2
  },
  190: { //BE
    eventType: 'MIDI',
    event: 'Chan 15 Control/Mode',
    args: 2
  },
  191: { //BF
    eventType: 'MIDI',
    event: 'Chan 16 Control/Mode',
    args: 2
  },
  192: { //C0
    eventType: 'MIDI',
    event: 'Chan 1 Program Change',
    args: 1
  },
  193: { //C1
    eventType: 'MIDI',
    event: 'Chan 2 Program Change',
    args: 1
  },
  194: { //C2
    eventType: 'MIDI',
    event: 'Chan 3 Program Change',
    args: 1
  },
  195: { //C3
    eventType: 'MIDI',
    event: 'Chan 4 Program Change',
    args: 1
  },
  196: { //C4
    eventType: 'MIDI',
    event: 'Chan 5 Program Change',
    args: 1
  },
  197: { //C5
    eventType: 'MIDI',
    event: 'Chan 6 Program Change',
    args: 1
  },
  198: { //C6
    eventType: 'MIDI',
    event: 'Chan 7 Program Change',
    args: 1
  },
  199: { //C7
    eventType: 'MIDI',
    event: 'Chan 8 Program Change',
    args: 1
  },
  200: { //C8
    eventType: 'MIDI',
    event: 'Chan 9 Program Change',
    args: 1
  },
  201: { //C9
    eventType: 'MIDI',
    event: 'Chan 10 Program Change',
    args: 1
  },
  202: { //CA
    eventType: 'MIDI',
    event: 'Chan 11 Program Change',
    args: 1
  },
  203: { //CB
    eventType: 'MIDI',
    event: 'Chan 12 Program Change',
    args: 1
  },
  204: { //CC
    eventType: 'MIDI',
    event: 'Chan 13 Program Change',
    args: 1
  },
  205: { //CD
    eventType: 'MIDI',
    event: 'Chan 14 Program Change',
    args: 1
  },
  206: { //CE
    eventType: 'MIDI',
    event: 'Chan 15 Program Change',
    args: 1
  },
  207: { //CF
    eventType: 'MIDI',
    event: 'Chan 16 Program Change',
    args: 1
  },
  208: { //D0
    eventType: 'MIDI',
    event: 'Chan 1 Channel Aftertouch',
    args: 1
  },
  209: { //D1
    eventType: 'MIDI',
    event: 'Chan 2 Channel Aftertouch',
    args: 1
  },
  210: { //D2
    eventType: 'MIDI',
    event: 'Chan 3 Channel Aftertouch',
    args: 1
  },
  211: { //D3
    eventType: 'MIDI',
    event: 'Chan 4 Channel Aftertouch',
    args: 1
  },
  212: { //D4
    eventType: 'MIDI',
    event: 'Chan 5 Channel Aftertouch',
    args: 1
  },
  213: { //D5
    eventType: 'MIDI',
    event: 'Chan 6 Channel Aftertouch',
    args: 1
  },
  214: { //D6
    eventType: 'MIDI',
    event: 'Chan 7 Channel Aftertouch',
    args: 1
  },
  215: { //D7
    eventType: 'MIDI',
    event: 'Chan 8 Channel Aftertouch',
    args: 1
  },
  216: { //D8
    eventType: 'MIDI',
    event: 'Chan 9 Channel Aftertouch',
    args: 1
  },
  217: { //D9
    eventType: 'MIDI',
    event: 'Chan 10 Channel Aftertouch',
    args: 1
  },
  218: { //DA
    eventType: 'MIDI',
    event: 'Chan 11 Channel Aftertouch',
    args: 1
  },
  219: { //DB
    eventType: 'MIDI',
    event: 'Chan 12 Channel Aftertouch',
    args: 1
  },
  220: { //DC
    eventType: 'MIDI',
    event: 'Chan 13 Channel Aftertouch',
    args: 1
  },
  221: { //DD
    eventType: 'MIDI',
    event: 'Chan 14 Channel Aftertouch',
    args: 1
  },
  222: { //DE
    eventType: 'MIDI',
    event: 'Chan 15 Channel Aftertouch',
    args: 1
  },
  223: { //DF
    eventType: 'MIDI',
    event: 'Chan 16 Channel Aftertouch',
    args: 1
  },
  224: { //E0
    eventType: 'MIDI',
    event: 'Chan 1 Pitch Bend Change',
    args: 2
  },
  225: { //E1
    eventType: 'MIDI',
    event: 'Chan 2 Pitch Bend Change',
    args: 2
  },
  226: { //E2
    eventType: 'MIDI',
    event: 'Chan 3 Pitch Bend Change',
    args: 2
  },
  227: { //E3
    eventType: 'MIDI',
    event: 'Chan 4 Pitch Bend Change',
    args: 2
  },
  228: { //E4
    eventType: 'MIDI',
    event: 'Chan 5 Pitch Bend Change',
    args: 2
  },
  229: { //E5
    eventType: 'MIDI',
    event: 'Chan 6 Pitch Bend Change',
    args: 2
  },
  230: { //E6
    eventType: 'MIDI',
    event: 'Chan 7 Pitch Bend Change',
    args: 2
  },
  231: { //E7
    eventType: 'MIDI',
    event: 'Chan 8 Pitch Bend Change',
    args: 2
  },
  232: { //E8
    eventType: 'MIDI',
    event: 'Chan 9 Pitch Bend Change',
    args: 2
  },
  233: { //E9
    eventType: 'MIDI',
    event: 'Chan 10 Pitch Bend Change',
    args: 2
  },
  234: { //EA
    eventType: 'MIDI',
    event: 'Chan 11 Pitch Bend Change',
    args: 2
  },
  235: { //EB
    eventType: 'MIDI',
    event: 'Chan 12 Pitch Bend Change',
    args: 2
  },
  236: { //EC
    eventType: 'MIDI',
    event: 'Chan 13 Pitch Bend Change',
    args: 2
  },
  237: { //ED
    eventType: 'MIDI',
    event: 'Chan 14 Pitch Bend Change',
    args: 2
  },
  238: { //EE
    eventType: 'MIDI',
    event: 'Chan 15 Pitch Bend Change',
    args: 2
  },
  239: { //EF
    eventType: 'MIDI',
    event: 'Chan 16 Pitch Bend Change',
    args: 2
  },
  240: { //F0
    eventType: 'SYSEX',
    event: 'System Exclusive'
  },
  241: { //F1
    eventType: 'SYSEX',
    event: 'MIDI Time Code Qtr. Frame'
  },
  242: { //F2
    eventType: 'SYSEX',
    event: 'Song Position Pointer'
  },
  243: { //F3
    eventType: 'SYSEX',
    event: 'Song Select (Song #)'
  },
  244: { //F4
    eventType: 'SYSEX',
    event: 'Undefined (Reserved)'
  },
  245: { //F5
    eventType: 'SYSEX',
    event: 'Undefined (Reserved)'
  },
  246: { //F6
    eventType: 'SYSEX',
    event: 'Tune request'
  },
  247: { //F7
    eventType: 'SYSEX',
    event: 'End of SysEx (EOX)'
  },
  248: { //F8
    eventType: 'SYSEX',
    event: 'Timing clock'
  },
  249: { //F9
    eventType: 'SYSEX',
    event: 'Undefined (Reserved)'
  },
  250: { //FA
    eventType: 'SYSEX',
    event: 'Start'
  },
  251: { //FB
    eventType: 'SYSEX',
    event: 'Continue'
  },
  252: { //FC
    eventType: 'SYSEX',
    event: 'Stop'
  },
  253: { //FD
    eventType: 'SYSEX',
    event: 'Undefined (Reserved)'
  },
  254: { //FE
    eventType: 'SYSEX',
    event: 'Active Sensing'
  },
  255: { //FF
    eventType: 'META',
    event: 'Meta'
  }
} as const satisfies Record<string, {
  event: string
} & ({
  eventType: 'META' | 'SYSEX'
} | {
  eventType: 'MIDI'
  args: 1 | 2
})>