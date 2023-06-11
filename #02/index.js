const { Client, GatewayIntentBits:GI } = require("discord.js")
const client = new Client({ intents: [
  GI.Guilds,
  GI.GuildMembers,
  GI.GuildModeration,
  GI.GuildBans,
  GI.GuildEmojisAndStickers,
  GI.GuildIntegrations,
  GI.GuildWebhooks,
  GI.GuildInvites,
  GI.GuildVoiceStates,
  GI.GuildPresences,
  GI.GuildMessages,
  GI.GuildMessageReactions,
  GI.GuildMessageTyping,
  GI.MessageContent,
  GI.GuildScheduledEvents,
  GI.AutoModerationConfiguration,
  GI.AutoModerationExecution
] })
const prefix = "b."

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", async msg => {
  if(msg.author.bot) return
  if(msg.content === `<@${client.user.id}>`) return msg.reply(`Halo ${msg.author.username}!`)

  let args = msg.content.slice(prefix.length).trim().split(" ")
  let cmd = args.shift().toLowerCase()
  if(!msg.content.startsWith(prefix)) return

  if(cmd === "ping") {
    msg.reply("Pong!")
  }
})

client.login()
