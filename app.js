const Discord = require("discord.js")
const fs = require("fs")
require("dotenv").config()

const bot = new Discord.Client()

bot.on("ready", () => {
    console.log(`discord bot ready.`)
})

bot.on("message", (mes) => {
    console.log(mes)
    if(mes.content === "hi") mes.reply("hey")
})

bot.login(process.env.BOT_TOKEN)