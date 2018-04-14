// import * as search from './search'
import * as pkg from './pkg'
import * as playlist from './playlist'
import * as add from './add'
import * as remove from './remove'
// import * as login from './login'
import * as logout from './logout'
import * as create from './create'

// Specs

export interface CommandOptions {
  [key: string]: any
}

export interface Flags {
  [flag: string]: boolean
}

export type Command = (input: string[], flags: Flags) => Promise<void>

export interface CommandInfo {
  options: CommandOptions
  run: Command
}

export interface Commands {
  [command: string]: CommandInfo
}

// Commands

export const commands: Commands = {
  // search,
  pkg,
  playlist,
  add,
  remove,
  // login,
  logout,
  create,
}