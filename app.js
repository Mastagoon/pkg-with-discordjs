const Discord = require("discord.js")
const fs = require("fs")
const config = require("./config.json")

const bot = new Discord.Client()

console.log(config.BOT_TOKEN)

bot.on("ready", () => {
    console.log(`discord bot ready.`)
})

bot.on("message", (mes) => {
    console.log(mes)
    if(mes.content === "hi") mes.reply("hey")
})

bot.login(config.BOT_TOKEN)