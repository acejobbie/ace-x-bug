//base by 🏴‍☠️⃝🅐ϲԑ 𝚔𝖎𝐫қ𖤍🔥
//re-upload? recode? copy code? give credit ya :)
//YouTube: @acejobbie98
//Instagram: Ace_kirk98
//Telegram: t.me/kirkthemaverick
//GitHub: @acejobbie
//WhatsApp: +254726856795
//want more free bot scripts? 
//subscribe to my youtube channel: https://youtube.com/@acejobbie98

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: acejobbie98" //ur yt chanel name
global.socialm = "GitHub: acejobbie" //ur github or insta name
global.location = "Kenya, Nakuru, Naks" //ur location

//new
global.botname = '𒋨🏴‍☠️⃝𝘼𝘾𝙀☠️𝘽𝙊𝙏⃝𒋨🉑' //ur bot name
global.ownernumber = ['254726856795'] //ur owner number, dont add more than one
global.ownername = '🏴‍☠️⃝🅐ϲԑ 𝚔𝖎𝐫қ𖤍🔥' //ur owner name
global.websitex = "https://youtu.be/tLq8_qOOGFI"
global.wagc = "https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20"
global.themeemoji = '🉑'
global.wm = "Ace Bot Inc."
global.botscript = 'https://github.com/acejobbie/ace-x-bug' //script link
global.packname = "ɪ αɱ 𝙰ϲе™⟬𝟭⟭"
global.author = "🏴‍☠️⃝🅐ϲԑ 𝚔𝖎𝐫қ𖤍🔥\n\n+254726856795"
global.creator = "254726856795@s.whatsapp.net"
global.xprefix = '#'
global.premium = ["254726856795"] // Premium User

//channel id
global.xchannel = {
	jid: '120363222395675670@newsletter'
	}

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
