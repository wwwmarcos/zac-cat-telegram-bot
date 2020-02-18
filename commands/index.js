const miau = require('./miau')

const commands = [
  miau
]

const configure = bot => {
  for (const { use } of commands) {
    use(bot)
  }
}

module.exports = {
  configure
}
