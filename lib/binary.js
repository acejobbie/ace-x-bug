//base by 🏴‍☠️⃝🅐ϲԑ 𝚔𝖎𝐫қ𖤍🔥
//re-upload? recode? copy code? give credit ya :)
//YouTube: @acejobbie98
//Instagram: Ace_kirk98
//Telegram: t.me/kirkthemaverick
//GitHub: @acejobbie
//WhatsApp: +254726856795
//want more free bot scripts? 
//subscribe to my youtube channel: https://youtube.com/@acejobbie98

async function dBinary(str) {
var newBin = str.split(" ")
var binCode = []
for (i = 0; i < newBin.length; i++) {
    binCode.push(String.fromCharCode(parseInt(newBin[i], 2)))
  }
return binCode.join("")
}

async function eBinary(str = ''){    
let res = ''
res = str.split('').map(char => {       
return char.charCodeAt(0).toString(2);  
 }).join(' ')
return res
}

module.exports = { dBinary, eBinary }