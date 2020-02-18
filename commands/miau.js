const words = [
  'psps',
  'gatinh',
  'gato',
  'gate',
  'gatu',
  'gata'
]

const responses = [
  'miau',
  'miau miau',
  'miauu',
  '* ignorando *',
  'meow meow'
]

const getResponse = responses =>
  responses[Math.floor(Math.random() * responses.length)]

const buildTriggers = words => words.map(
  word => new RegExp(word, 'i')
)

const use = bot => {
  const triggers = buildTriggers(words)

  bot.hears(triggers, ctx => {
    const response = getResponse(responses)
    ctx.reply(response)
  })
}

module.exports = {
  use
}
