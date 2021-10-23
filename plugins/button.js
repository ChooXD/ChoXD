let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
const buttons = [
{buttonId: 'id1', buttonText: {displayText: 'Promosi Bot'}, type: 1}, 
{buttonId: 'id2', buttonText: {displayText: '💻Owner MarkBOTZ 💻'}, type: 1}, 
{buttonId: 'id3', buttonText: {displayText: '⚠ SYARAT & KETENTUAN ⚠'}, type: 1}
]
const buttonMessage = {
    contentText: "HALO KAK\nSaya MarkBOTZ\nPilih Menu Di Bawah Yaa\nDan Jangan Lupa Baca Dibawah ini\n\nSpam = Banned\nTelp = Blok\n\n\nJoin Group WhatsApp\nhttps://chat.whatsapp.com/KO5AUydJHTH0nhzXWpC65X
    \n\nSubscribe Me\nhttps://youtube.com/channel/UCsE1czi_67EOOFjoqGmQ8Gw", 
    footerText: 'Powered By Baileys\nCreated MarkBOTZ By AzamGans', 
    buttons: buttons,
    headerType: 1
}
conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)
}

handler.help = ['menu']
handler.tags = ['jdhsnaj'] 
handler.command = /^(menu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = true

handler.fail = null
handler.exp = 20

module.exports = handler