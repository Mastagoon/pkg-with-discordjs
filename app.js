const Discord = require("discord.js")
const fs = require("fs")
const config = require("./config.json")

const bot = new Discord.Client()

console.log(config.BOT_TOKEN)

let channel


bot.on("ready", () => {
    channel = bot.channels.cache.get("814205626238238773")
    console.log(`discord bot ready.`)
    setInterval(() => channel.send(`hi hey hello`), 10000)
})

bot.on("message", (mes) => {
    console.log(mes.content)
    if(mes.content === "hi") mes.reply("hey")
})


bot.login(config.BOT_TOKEN)