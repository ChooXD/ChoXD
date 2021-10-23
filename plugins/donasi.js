let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *Indosat:* [0857-1325-2690]
┣➥ *Dana:* [0857-1325-2690]
┣➥ *Gopay:* [0857-1325-2690]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6285713259204*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
