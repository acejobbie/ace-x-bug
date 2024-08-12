//base by 🏴‍☠️⃝🅐ϲԑ 𝚔𝖎𝐫қ𖤍🔥
//re-upload? recode? copy code? give credit ya :)
//YouTube: @acejobbie98
//Instagram: Ace_kirk98
//Telegram: t.me/kirkthemaverick
//GitHub: @acejobbie
//WhatsApp: +254726856795
//want more free bot scripts? 
//subscribe to my youtube channel: https://youtube.com/@acejobbie98

const { join } = require('path');
const gtts = require('node-gtts');
const { readFileSync, unlinkSync } = require('fs');

function tts(text, lang = 'id') {
  return new Promise((resolve, reject) => {
    try {
      let tts = gtts(lang)
      let filePath = join(__dirname, '..XeonMedia/trash', (1 * new Date) + '.wav')
      tts.save(filePath, text, () => {
        resolve(readFileSync(filePath))
        unlinkSync(filePath)
      })
    } catch (e) { reject(e) }
  })
}

module.exports = { tts }