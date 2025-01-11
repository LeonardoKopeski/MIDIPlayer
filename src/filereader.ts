import type { BunFile } from 'bun'

export class FileReader{
  readonly file: BunFile
  bytes: Uint8Array = new Uint8Array()
  cursor: number = 0
  
  constructor(filepath: string) {
    this.file = Bun.file(filepath)
  }

  async loadFile() {
    this.bytes = await this.file.bytes()
  }

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
}