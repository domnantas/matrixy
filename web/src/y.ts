import * as Y from 'yjs'
import { WebrtcProvider } from 'y-webrtc'

export const doc = new Y.Doc()

export const provider = new WebrtcProvider('matrixy-0', doc)

// Get a shared array of our line maps
export const yItems: Y.Array<string> = doc.getArray('items-0')
