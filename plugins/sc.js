let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*SC Ini Menggunakan Termux*
*  https://youtube.com/channel/UCsE1czi_67EOOFjoqGmQ8Gw*
_Password Ada Di Video_
_Jika Tidak Menemukannya Bisa Chat_
_wa.me/6285713259205_
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '🔥 *FREE SC* 🔥', 'status@broadcast')
}
handler.help = ['sc']
handler.tags = ['tutor']
handler.command = /^(sc)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = 20

module.exports = handler
 