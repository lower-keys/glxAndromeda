let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
let moment = require('moment-timezone')
let time = moment.tz('Asia/Jakarta').format("HH:mm:ss")
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")

conn.sendButtonDoc(m.chat, 'Hi My Name Is Andromeda\nLets Enjoy With ME:)', data.namabot, 'ʟɪꜱᴛᴍᴇɴᴜ', '.m', fake, { contextInfo: {
externalAdReply :{
    showAdAttribution: true,
    mediaUrl: data.sc,
    mediaType: 2,
    sourceUrl: data.sc,
    title: 'Andromeda Bot By : Dim',
    body: wm,
    thumbnail: await(await fetch(img)).buffer(),
}}})
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i

module.exports = handler


