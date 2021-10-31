const Aoijs = require("aoi.js");

const bot = new Aoijs.Bot({
token: process.env.token,
prefix: ["$getServerVar[prefix;$guildID]", ".!"]
});



bot.onMessage();

//Variableler


bot.variables({
  prefix: "s!",
  
  language: "No",
  sunucu_karaliste: "no",
  kullanıcı_kanaliste: "no",
  sunucu_premium: "no",
  kullanıcı_premium: "no",
})





bot.loadCommands(`./komutlar/`);