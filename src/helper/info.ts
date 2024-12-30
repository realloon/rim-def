interface InfoOptions {
  state: 'Success'
  message: string
}

export default function info({ state, message }: InfoOptions) {
  console.info('\x1b[32m%s\x1b[0m', state, '\x1b[0m%s\x1b[0m', message)
}
