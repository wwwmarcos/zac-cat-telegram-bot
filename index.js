const { config } = require('./config')
const commands = require('./commands')
const express = require('express')
const Telegraf = require('telegraf')

const app = express()

const bot = new Telegraf(config.botToken, {
  telegram: {
    webhookReply: false
  }
})

commands.configure(bot)
app.use(bot.webhookCallback('/callback'))

app.get('/', async (_req, res) => {
  const url = `${config.currentHost}/callback`
  await bot.telegram.setWebhook(url)
  res.send(`listening on ${config.currentHost}`)
})

if (config.isDevelopment) {
  console.log('listening local')
  bot.launch()
}

app.listen(config.appPort, () => {
  console.log(`listening on ${config.appPort}`)
})
