export class FileReader{
  
  cursor: number = 0
  
  get reachedEnd() {
    return this.cursor >= this.bytes.length
  }
  
  constructor(readonly bytes: Uint8Array) {}

  readBytes(length: number) {
    const bytes = this.bytes.slice(this.cursor, this.cursor + length)
    this.cursor += length
    return bytes
  }

  readNextByte() {
    return this.bytes[this.cursor++]
  }
  
  readNextWord() {
    return this.readNextByte() << 8 | this.readNextByte()
  }

  readNextDWord() {
    return this.readNextWord() << 16 | this.readNextWord()
  }

  readNextVarLen() {
    let value = 0
    let byte = this.readNextByte()
    while (byte & 0x80) {
      value = (value << 7) | (byte & 0x7F)
      byte = this.readNextByte()
    }
    return (value << 7) | byte
  }
}